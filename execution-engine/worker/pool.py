"""
Warm container pool — pre-warmed resident containers per language that accept
jobs via docker exec rather than cold docker run.

Cold docker run costs ~0.5–1s in container startup before the first line of
student code runs. With a warm pool, the container is already running; the
worker docker-execs the job in, captures stdout/stderr, cleans up, and
returns the container to the pool. This is the single change that brings
p95 latency inside the 2s budget at real throughput.

Pool lifecycle:
  1. Worker startup → ContainerPool.start() spawns POOL_SIZE containers per language.
  2. Each job → acquire() checks out a container (blocks if all busy).
  3. Job runs via docker exec with an inner `timeout` binary for wall-clock enforcement.
  4. release() returns the container (or recycles it after MAX_USES and spawns a fresh one).
  5. Worker shutdown → ContainerPool.shutdown() kills all pooled containers.

Hardening flags are applied at pool-container start time (same flags for every
container — harden once, reuse many times). See docker_runner.py for the flag list.
"""
import logging
import os
import queue
import subprocess
import threading

logger = logging.getLogger("pool")

POOL_SIZE = int(os.environ.get("POOL_SIZE", "2"))
MAX_USES = int(os.environ.get("POOL_MAX_USES", "100"))

IMAGES = {
    "python": "code-runner-python:latest",
    "java": "code-runner-java:latest",
}

# Hardening flags applied to every pool container.
# --cap-drop ALL: drops all Linux capabilities from the container's bounding
#   set, so even if the student's code finds a setuid binary or a namespace
#   bug, it can't leverage elevated capabilities.
# --security-opt no-new-privileges: prevents any process inside the container
#   from gaining new privileges via setuid/setgid/file capabilities, even as root.
# --security-opt seccomp=<path>: custom allowlist/blocklist of syscalls;
#   blocks the namespace, ptrace, kexec, BPF, and memory-inspection calls
#   that are the common container-escape primitives.
# --network none, --read-only, --memory, --cpus, --pids-limit: unchanged from MVP.
# /tmp is a writable tmpfs (javac needs to write .class files there).
# /job is a writable tmpfs that receives student source via docker cp.
_HARDEN_FLAGS = [
    "--network", "none",
    "--memory", "256m", "--memory-swap", "256m",
    "--cpus", "0.5",
    "--pids-limit", "64",
    "--read-only",
    "--tmpfs", "/tmp:rw,size=64m",
    "--tmpfs", "/job:rw,size=16m,mode=1777",
    "--cap-drop", "ALL",
    "--security-opt", "no-new-privileges",
]

# Path to seccomp profile as seen by the Docker CLI running inside this
# container. docker run --security-opt seccomp=<path> is read by the CLI
# on the caller's side (not by dockerd), so this must be the container-local
# path of the bind-mounted file, not the host path.
# Set via SECCOMP_PATH in docker-compose; defaults to the bind-mount location.
# If unset or the file is absent, seccomp is skipped with a warning.
_SECCOMP_PATH = os.environ.get("SECCOMP_PATH", "/seccomp/runner.json")


class ContainerPool:
    def __init__(self, language: str, pool_size: int = POOL_SIZE, max_uses: int = MAX_USES):
        self.language = language
        self.pool_size = pool_size
        self.max_uses = max_uses
        self._q: queue.Queue = queue.Queue()

    def start(self) -> None:
        import os as _os
        if not _SECCOMP_PATH or not _os.path.exists(_SECCOMP_PATH):
            logger.warning(
                "seccomp profile not found at %s — running WITHOUT syscall filtering. "
                "Mount infra/seccomp-runner.json and set SECCOMP_PATH before exposing "
                "to real users.",
                _SECCOMP_PATH,
            )
        for _ in range(self.pool_size):
            cid = self._spawn()
            self._q.put((cid, 0))
        logger.info("pool[%s] ready: %d containers", self.language, self.pool_size)

    def _spawn(self) -> str:
        import os as _os
        flags = list(_HARDEN_FLAGS)
        if _SECCOMP_PATH and _os.path.exists(_SECCOMP_PATH):
            flags += ["--security-opt", f"seccomp={_SECCOMP_PATH}"]

        cmd = (
            ["docker", "run", "-d", "--label", "code-runner-pool=true"]
            + flags
            + [IMAGES[self.language], "sleep", "infinity"]
        )
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        if result.returncode != 0:
            raise RuntimeError(
                f"pool[{self.language}] docker run failed: {result.stderr.strip()}"
            )
        cid = result.stdout.strip()
        logger.info("pool[%s] spawned %s", self.language, cid[:12])
        return cid

    def _kill(self, cid: str) -> None:
        subprocess.run(["docker", "rm", "-f", cid], capture_output=True, timeout=15)
        logger.info("pool[%s] killed %s", self.language, cid[:12])

    def acquire(self, timeout: float = 30) -> tuple[str, int]:
        """Check out a (container_id, use_count) pair. Blocks until one is free."""
        try:
            return self._q.get(timeout=timeout)
        except queue.Empty:
            raise RuntimeError(
                f"pool[{self.language}] no container available after {timeout}s — "
                "consider increasing POOL_SIZE"
            )

    def release(self, cid: str, use_count: int) -> None:
        """Return a container to the pool, recycling it if it has hit max_uses."""
        use_count += 1
        if use_count >= self.max_uses:
            logger.info(
                "pool[%s] recycling %s after %d uses", self.language, cid[:12], use_count
            )
            self._kill(cid)
            self._respawn_into_pool()
            return

        # Verify the container is still alive before returning it.
        check = subprocess.run(
            ["docker", "inspect", "-f", "{{.State.Running}}", cid],
            capture_output=True, text=True, timeout=5,
        )
        if check.returncode == 0 and check.stdout.strip() == "true":
            self._q.put((cid, use_count))
        else:
            logger.warning("pool[%s] container %s died, respawning", self.language, cid[:12])
            self._kill(cid)
            self._respawn_into_pool()

    def _respawn_into_pool(self) -> None:
        try:
            new_cid = self._spawn()
            self._q.put((new_cid, 0))
        except Exception:
            logger.exception("pool[%s] failed to respawn — pool is now one container short", self.language)

    def shutdown(self) -> None:
        killed = 0
        while True:
            try:
                cid, _ = self._q.get_nowait()
                self._kill(cid)
                killed += 1
            except queue.Empty:
                break
        logger.info("pool[%s] shutdown: killed %d containers", self.language, killed)
