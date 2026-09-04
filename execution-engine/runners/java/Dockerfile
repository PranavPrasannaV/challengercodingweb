# Runs untrusted student Java. Needs javac (compile) + java (run). Rootfs is
# read-only at `docker run` time; class files compile into /tmp (tmpfs) since
# /job is read-only.
FROM eclipse-temurin:21-jdk

RUN useradd --no-create-home runner
USER runner

# No CMD/ENTRYPOINT: the worker passes the full command
# (`sh -c "javac -d /tmp /job/*.java && java -cp /tmp {ENTRY}"`) explicitly.
