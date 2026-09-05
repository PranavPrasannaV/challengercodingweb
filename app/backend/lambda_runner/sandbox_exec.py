"""
Executes assembled student source directly inside this Lambda invocation's own
execution environment.

No docker, no warm pool: each concurrent Lambda invocation already runs in its
own Firecracker microVM, which is the isolation boundary that
worker/pool.py's seccomp + cap-drop stack used to provide by hand for the
docker-based worker. See runners/*/Dockerfile.lambda for what's installed in
each language's image.

A Lambda execution environment can be *reused* across invocations (warm
start), so each job gets its own throwaway directory under /tmp rather than a
fixed path — a prior job's leftovers must never be visible to the next one.

Defense in depth beyond the microVM boundary: RLIMIT_CPU/RLIMIT_AS caps on the
child process, and the whole process group is killed on timeout (not just the
immediate child) so a `javac && java` chain can't leave an orphaned JVM behind
in a reused environment.
"""
import logging
import os
import resource
import shutil
import signal
import subprocess
import time
import uuid
from typing import Optional

logger = logging.getLogger("sandbox_exec")

EXEC_TIMEOUT_SEC = {
    "python": 5,
    # javac + java, plus headroom for cold-start container/JVM init:
    # observed a genuine timeout on a fresh Lambda cold start at 10s
    # (10017ms) that a warm invocation of the same code finished in ~2.9s —
    # this is wall-clock, unlike the JVM's own CPU-time rlimit below, so it's
    # exactly what eats a slow cold start.
    "java": 18,
}

_CPU_SECONDS_LIMIT = {"python": 6, "java": 20}
_MEM_BYTES_LIMIT = 512 * 1024 * 1024  # backstop for python only — see below


def _preexec(language: str):
    def _apply_limits():
        cpu = _CPU_SECONDS_LIMIT[language]
        resource.setrlimit(resource.RLIMIT_CPU, (cpu, cpu))
        # RLIMIT_AS (virtual address space) is a well-known bad match for the
        # JVM: it reserves far more virtual memory than it actually uses
        # (heap reservation, metaspace, thread stacks, JIT code cache), so
        # even a small `ulimit -v` reliably makes the JVM fail to start
        # ("Could not reserve enough space for ... object heap") long before
        # actual RSS gets anywhere near a real limit. Skip it for Java; the
        # Lambda function's own --memory-size is the real ceiling there
        # (AWS kills the whole invocation on OOM regardless).
        if language == "python":
            resource.setrlimit(resource.RLIMIT_AS, (_MEM_BYTES_LIMIT, _MEM_BYTES_LIMIT))
    return _apply_limits


def _argv(language: str, job_dir: str, filename: str, entry: Optional[str]) -> list[str]:
    if language == "python":
        return ["python3", f"{job_dir}/{filename}"]
    if language == "java":
        # A single sh -c chain (not exec) so `javac && java` runs as one
        # process group under start_new_session — killing the group on
        # timeout takes both out regardless of which one is still running.
        inner = f"javac -d {job_dir} {job_dir}/*.java && java -cp {job_dir} {entry}"
        return ["sh", "-c", inner]
    raise ValueError(f"unsupported language: {language}")


def run_job(
    language: str,
    source: str,
    filename: str,
    entry: Optional[str] = None,
    timeout_sec: Optional[int] = None,
) -> dict:
    timeout_sec = timeout_sec or EXEC_TIMEOUT_SEC[language]
    job_dir = f"/tmp/job-{uuid.uuid4().hex}"
    os.makedirs(job_dir, mode=0o700)

    try:
        with open(f"{job_dir}/{filename}", "w") as f:
            f.write(source)

        start = time.monotonic()
        proc = subprocess.Popen(
            _argv(language, job_dir, filename, entry),
            cwd=job_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            preexec_fn=_preexec(language),
            start_new_session=True,  # own process group, so timeout can kill the whole tree
        )
        try:
            stdout, stderr = proc.communicate(timeout=timeout_sec)
            runtime_ms = int((time.monotonic() - start) * 1000)
            status = "ok" if proc.returncode == 0 else "error"
            return {
                "status": status,
                "stdout": stdout,
                "stderr": stderr,
                "exit_code": proc.returncode,
                "runtime_ms": runtime_ms,
            }
        except subprocess.TimeoutExpired:
            os.killpg(os.getpgid(proc.pid), signal.SIGKILL)
            stdout, stderr = proc.communicate()  # reap the now-dead group
            runtime_ms = int((time.monotonic() - start) * 1000)
            return {
                "status": "timeout",
                "stdout": stdout,
                "stderr": stderr,
                "exit_code": None,
                "runtime_ms": runtime_ms,
            }
    finally:
        shutil.rmtree(job_dir, ignore_errors=True)
