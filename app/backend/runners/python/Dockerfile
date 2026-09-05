# Runs untrusted student Python. Rootfs is read-only at `docker run` time
# (see worker/docker_runner.py); /job is a read-only bind mount of the
# assembled source, /tmp is the only writable location (tmpfs).
FROM python:3.12-slim

RUN useradd --no-create-home --uid 1000 runner
USER runner

# No CMD/ENTRYPOINT: the worker passes the full command
# (`python /job/main.py`) explicitly on each `docker run`.
