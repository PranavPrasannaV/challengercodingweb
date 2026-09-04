"""
Executes a job inside a pre-warmed pool container via docker exec.

Flow per job:
  1. acquire() a container from the pool.
  2. docker cp the assembled source file into the container's /job tmpfs.
  3. docker exec with an inner `timeout` binary that enforces the wall-clock
     limit inside the container.  Exit code 124 from `timeout` → status=timeout.
  4. Cleanup: remove /job/* and /tmp/*.class as root so the next job starts clean.
  5. release() the container back to the pool (or recycle if max_uses reached).

The inner `timeout --kill-after=2s` sends SIGTERM then SIGKILL so hung
processes (infinite loops) are cleaned up inside the container before the
container is returned to the pool.  Combined with --pids-limit 64, any orphaned
processes are confined to the container's PID namespace and cannot escape.

# TODO: warm pool — seam is here; pool is already wired up in worker.py.
"""
import logging
import subprocess
import time
from pathlib import Path
from typing import Optional

from pool import ContainerPool

logger = logging.getLogger("runner")

# Wall-clock budget for the actual student code, not including the docker exec
# round-trip overhead (~20-50ms for a warm container).
EXEC_TIMEOUT_SEC = {
    "python": 5,
    "java": 10,   # javac + java
}

# Safety margin: if the outer subprocess itself hangs (very unlikely), kill it
# this many seconds after the inner timeout should have fired.
_OUTER_SAFETY_PAD = 5


def _exec_cmd(language: str, filename: str, entry: Optional[str], timeout_sec: int) -> list[str]:
    """Build the argv passed to docker exec."""
    kill_after = "2s"
    t = f"{timeout_sec}s"
    if language == "python":
        return ["timeout", f"--kill-after={kill_after}", t, "python", f"/job/{filename}"]
    if language == "java":
        # exec replaces the inner sh with javac, so timeout's signal hits the
        # compiler or JVM directly once javac is done.
        inner = f"javac -d /tmp /job/*.java && exec java -cp /tmp {entry}"
        return ["timeout", f"--kill-after={kill_after}", t, "sh", "-c", inner]
    raise ValueError(f"unsupported language: {language}")


def run_job(
    pool: ContainerPool,
    language: str,
    src_path: str,       # absolute path of the assembled source file on the worker fs
    filename: str,       # e.g. "main.py" or "Solution.java"
    entry: Optional[str] = None,
    timeout_sec: Optional[int] = None,
) -> dict:
    timeout_sec = timeout_sec or EXEC_TIMEOUT_SEC[language]
    cid, use_count = pool.acquire()

    try:
        # Inject source into the container's /job tmpfs via exec cat.
        # docker cp is blocked on --read-only containers even against a writable
        # tmpfs mount; piping through exec avoids the daemon restriction entirely.
        source = Path(src_path).read_bytes()
        # `exec cat` replaces the sh process with cat — no fork needed.
        # Plain `sh -c "cat > file"` forks a child for cat, which can exhaust
        # the container's pids-limit when combined with the exec shim overhead.
        inject = subprocess.run(
            ["docker", "exec", "-i", cid, "sh", "-c", f"exec cat > /job/{filename}"],
            input=source,
            capture_output=True,
            timeout=10,
        )
        if inject.returncode != 0:
            return {
                "status": "error",
                "stdout": "",
                "stderr": f"source inject failed: {inject.stderr.decode(errors='replace').strip()}",
                "exit_code": 1,
                "runtime_ms": 0,
            }

        start = time.monotonic()
        try:
            proc = subprocess.run(
                ["docker", "exec", cid] + _exec_cmd(language, filename, entry, timeout_sec),
                capture_output=True,
                text=True,
                timeout=timeout_sec + _OUTER_SAFETY_PAD,
            )
            runtime_ms = int((time.monotonic() - start) * 1000)

            if proc.returncode == 124:
                status = "timeout"
                exit_code = None
            elif proc.returncode == 0:
                status = "ok"
                exit_code = 0
            else:
                status = "error"
                exit_code = proc.returncode

            return {
                "status": status,
                "stdout": proc.stdout,
                "stderr": proc.stderr,
                "exit_code": exit_code,
                "runtime_ms": runtime_ms,
            }

        except subprocess.TimeoutExpired:
            # Belt-and-suspenders: the outer subprocess timed out, meaning even
            # the inner timeout binary didn't fire in time.  This shouldn't
            # happen in normal operation.
            runtime_ms = int((time.monotonic() - start) * 1000)
            logger.error("outer timeout fired for container %s — inner timeout may have failed", cid[:12])
            return {
                "status": "timeout",
                "stdout": "",
                "stderr": "",
                "exit_code": None,
                "runtime_ms": runtime_ms,
            }

    finally:
        # Clean /job and Java class files so the next job starts with a clean slate.
        # Run as root so we can remove files that were docker-cp'd in as root.
        subprocess.run(
            ["docker", "exec", "-u", "root", cid, "sh", "-c",
             "rm -rf /job/* /tmp/*.class 2>/dev/null; true"],
            capture_output=True, timeout=5,
        )
        pool.release(cid, use_count)
