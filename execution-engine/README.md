# Code Execution Engine

Backend for a notebook-style learn-to-code app. A student cell's code is
submitted to a FastAPI API, queued on SQS, picked up by a worker, run inside
an isolated Docker container per language, and graded (if the exercise has
an expected output).

The frontend is a single static HTML page served at `http://localhost:8000/cell`
with a Monaco-style cell, a live request-trace panel, and stdout/stderr output.

---

## Architecture

```
Browser (http://localhost:8000/cell)
  │  POST /run  ──→  FastAPI API  ──→  SQS (LocalStack)
  │  GET  /check/{run_id}  ←──────────────────────────────┐
  │                                                        │
  └──────────────────────────────────────────────────── Postgres
                                                           ↑
                                           Worker (SQS poller)
                                               │
                                          pool.acquire()
                                               │
                                    ┌──────────▼──────────┐
                                    │  Warm container pool │
                                    │  (per language)      │
                                    │                      │
                                    │  docker exec job     │
                                    │  capture output      │
                                    │  clean /job /tmp     │
                                    └──────────────────────┘
```

### Key design decisions

**Warm container pool** — instead of a cold `docker run` per submission (~0.5–1s
startup overhead), the worker pre-warms `POOL_SIZE` containers per language
on startup and reuses them via `docker exec`. Cold start latency is eliminated;
p95 stays inside the 2s budget at throughput. Containers are recycled after
`POOL_MAX_USES` runs.

**Template injection** — exercises store a server-side `template` with a
`{{code}}` slot. The worker injects the student's code and assembles the full
source. The template and hidden `expected_output` never leave the server (see
`GET /exercises/{id}`).

**Stdout-based grading** — a submission is a whole program; the result is its
captured stdout matched against `expected_output` via `match_mode`
(exact / trimmed / contains).

---

## Layout

```
/api               FastAPI app + schemas
/worker            SQS poller, template assembly, pool manager, Docker runner
/shared            SQLAlchemy models + DB session + SQS client (used by both)
/runners
  /python          Dockerfile for Python execution sandbox
  /java            Dockerfile for Java execution sandbox
/frontend          Dev cell UI (served at /cell by the API)
/infra
  docker-compose.yml
  seccomp-runner.json   syscall blocklist applied to every runner container
  seed.py               seeds 6 exercises into Postgres
  init_localstack.sh    creates SQS queue + DLQ
```

---

## Run it

Requires Docker + Docker Compose v2 and the host Docker socket
(`/var/run/docker.sock`).

```bash
cd execution-engine

# 1. Build the per-language sandbox images (one-time; re-run after Dockerfile changes).
make build-runners

# 2. Bring up Postgres, LocalStack (SQS), the API, and the worker.
#    Migrations run automatically (see the `migrate` service) before the API/
#    worker start; the worker pre-warms containers for each language on startup.
make up

# 3. Seed exercises (in a second terminal, or wait for the stack to be healthy).
make seed

# 4. Optional: backfill real lesson content from the frontend's static TS files
#    (run from challengercoding-next — see scripts/export-lessons.mts).
#    cd ../challengercoding-next && node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON \
#      --import ./scripts/ts-resolve.mjs scripts/export-lessons.mts /tmp/lessons-export.json
#    cd ../execution-engine && python infra/backfill_lessons.py /tmp/lessons-export.json
```

Open **http://localhost:8000/cell** — the API base auto-detects same-origin, no
configuration needed.

---

## Production deployment (Lambda + SQS + Supabase)

Local dev (above) is unchanged — this is the deployed-to-AWS path, used
instead of `worker/`'s docker-based warm pool.

```
Browser  ──HTTP──►  API Gateway (HTTP API)  ──invoke──►  Lambda (api image)
                                                          Mangum ──► FastAPI app (api/app/main.py, unchanged)
                                                                │
                                                          enqueue│
                                                                ▼
                                                     SQS (per-language queue)
                                                                │
                                                    Lambda event source mapping
                                                                │
                                                    Lambda (python or java image)
                                                    lambda_runner/handler.py
                                                                │
                                                                ▼
                                                   Supabase Postgres (via pooler)
```

**The API itself also runs on Lambda now** — API Gateway (HTTP API) is the
public entry point; it invokes a Lambda running the *same* FastAPI app from
`api/app/main.py` unmodified, via a 3-line Mangum shim
(`api/app/lambda_handler.py`) that translates between API Gateway's event
format and the ASGI interface FastAPI expects. Local dev still runs it with
uvicorn via `api/Dockerfile` — nothing about `main.py`'s routes, schemas, or
CORS handling changed for this path, only how it's invoked. See
`api/Dockerfile.lambda` and `infra/terraform/api.tf`.

**Why Lambda instead of the docker warm pool**: this app's traffic is low and
spiky (a learn-to-code site, not a always-busy service), so paying to keep a
Docker host up 24/7 just to hold a mostly-idle warm container pool doesn't
make sense. Lambda scales to zero between submissions and the free tier
(1M requests + 400,000 GB-seconds/month) likely covers this workload
entirely. The tradeoff: no more warm pool means no more amortized cold start
— each invocation is a fresh Firecracker microVM, which is slower to start
(especially the JVM for Java) but *is* the isolation boundary now, so
`worker/pool.py`'s seccomp/cap-drop stack isn't needed in this path (see
`lambda_runner/sandbox_exec.py`).

**Layout**:
- `lambda_runner/` — the SQS-triggered handler (`handler.py`) and the
  direct-subprocess sandbox executor (`sandbox_exec.py`) that replaces
  `worker/docker_runner.py` + `worker/pool.py` for this path. Reuses
  `worker/assembly.py` and `worker/grading.py` unchanged — template
  injection and stdout grading don't care whether the process ran via
  `docker exec` or directly in a Lambda container.
- `runners/{python,java}/Dockerfile.lambda` — one container image per
  language (Lambda's per-invocation isolation replaces per-language pool
  containers, so each image *is* the sandbox instead of something a worker
  execs into).
- `infra/terraform/` — SQS queues + DLQs, ECR repos, the execution Lambdas
  (`lambda.tf`) and their event source mappings, and the API Gateway +
  API Lambda (`api.tf`). `terraform.tfvars.example` has the variables to
  fill in (mainly `database_url`).

**Per-language queues, not one shared queue**: unlike the local worker (one
queue, one process that owns pools for both languages), production has
`code-run-queue-python` and `code-run-queue-java`, each wired via its own
event source mapping to the Lambda that actually has that language's
runtime installed (see `shared/aws.py`'s `RUN_QUEUE_NAMES` and
`api/app/main.py`'s `create_run`). Locally, `RUN_QUEUE_NAME_PYTHON`/
`RUN_QUEUE_NAME_JAVA` are unset and both fall back to the single
`RUN_QUEUE_NAME` the docker-compose worker already polls — this split is
invisible to local dev.

**Supabase**: point `DATABASE_URL` at Supabase's **pooler** connection
(transaction-mode PgBouncer, usually port `6543`), not the direct `:5432`
connection, with `?sslmode=require`. Each Lambda invocation opens its own
short-lived DB connection; without the pooler in front, a burst of
concurrent invocations can exhaust Postgres's `max_connections` outright
since there's no long-lived worker process holding a small connection pool
anymore. `DB_POOL_SIZE=1` is set on the Lambda functions accordingly (see
`shared/db.py`) — the pooler, not SQLAlchemy, is what absorbs concurrency.

**Deploy**:
```bash
cd infra/terraform
cp terraform.tfvars.example terraform.tfvars   # fill in database_url, allowed_origins
terraform init && terraform apply              # creates SQS/ECR/IAM/API Gateway, empty Lambdas

cd .. && cd ..   # back to execution-engine/
make push-lambda-images ECR_REGISTRY=<account>.dkr.ecr.<region>.amazonaws.com

cd infra/terraform && terraform apply          # re-apply to pick up the pushed image tags
terraform output api_url                       # the API's public URL
```

Alembic migrations aren't wired into this deploy path — run `alembic upgrade
head` (from `execution-engine/`, `DATABASE_URL` pointed at Supabase) by hand
or from CI before the first deploy and after any schema change.

**Not addressed by this path** (same seams as local — see "What's left as a
seam" below): auth, structured-value grading, JavaScript runtime. Additional
production-only seams: no dead-letter alerting (messages land in the DLQ
silently — wire a CloudWatch alarm on `ApproximateNumberOfMessagesVisible`
before relying on this for real traffic), `reserved_concurrent_executions` is
a static guess (5 for Python API/execution, 3 for Java) rather than something
tied to observed load, and migrations are manual (above).

---

## Container hardening

The section below (seccomp/cap-drop/etc.) describes the **local docker-based
worker's** sandboxing. In production, Lambda's per-invocation Firecracker
microVM is the isolation boundary instead — see "Production deployment"
above and `lambda_runner/sandbox_exec.py`.

Every pool container (and every job execution) is hardened with:

| Layer | Flag | What it stops |
|---|---|---|
| Network | `--network none` | All outbound/inbound traffic |
| Filesystem | `--read-only` | Writes to rootfs layers |
| Memory | `--memory 256m --memory-swap 256m` | Memory exhaustion |
| CPU | `--cpus 0.5` | CPU monopolisation |
| Processes | `--pids-limit 64` | Fork bombs |
| User | `USER runner` (non-root in image) | Root-level damage |
| Capabilities | `--cap-drop ALL` | All Linux capabilities stripped — no `CAP_SYS_ADMIN`, `CAP_NET_ADMIN`, `CAP_SYS_PTRACE`, etc. |
| Privilege escalation | `--security-opt no-new-privileges` | Setuid/setgid elevation |
| Syscalls | `--security-opt seccomp=seccomp-runner.json` | Namespace manipulation, ptrace, kexec, BPF, cross-process memory access (see below) |

### Seccomp profile (`infra/seccomp-runner.json`)

Default action is `ALLOW`; specific dangerous calls are blocked with `EPERM`:

- **Namespace manipulation**: `unshare`, `setns`, `mount`, `umount2`, `pivot_root` — prevents a process from creating new namespaces that could be used to escape the container.
- **`clone(CLONE_NEWUSER)`**: blocks user-namespace creation specifically (the primary container-escape primitive), while allowing `clone` with `CLONE_THREAD` etc. so Python/Java threads still work.
- **Kernel replacement**: `kexec_load`, `kexec_file_load`.
- **BPF**: `bpf` — prevents installing kernel programs that could redirect or filter syscalls.
- **Process inspection**: `ptrace`, `process_vm_readv`, `process_vm_writev`, `kcmp` — prevents one process from reading another's memory.
- **Timing/side-channel**: `perf_event_open`, `userfaultfd`.
- **Kernel keyring**: `add_key`, `request_key`, `keyctl`.
- **Kernel log/accounting**: `syslog`, `acct`.

### What is NOT hardened (known gaps)

- **Shared kernel**: containers share the host kernel. A zero-day kernel vulnerability not covered by the seccomp profile could allow an escape. gVisor (a user-space kernel) would close this gap at the cost of significant complexity and performance overhead — deferred until the threat model demands it.
- **No egress rate-limiting**: `--network none` blocks TCP/UDP entirely, but timing attacks via CPU/cache side-channels are not mitigated.

**Gate**: the seccomp + cap-drop layer must be in place before this engine
processes code from real students. `HOST_SECCOMP_PATH` being unset causes the
worker to log a warning and skip the seccomp flag — treat that warning as a
blocker in any non-local environment.

---

## API

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Liveness check |
| `GET` | `/exercises/{id}` | Exercise metadata + starter code. `expected_output` only returned when `reveal_expected=true`. `template` never returned. |
| `POST` | `/run` | `{language, code, user_id, exercise_id?}` → `{run_id}`. Inserts a `runs` row and enqueues to SQS. |
| `GET` | `/check/{run_id}` | Poll for result: status, stdout, stderr, exit_code, passed, runtime_ms. |
| `GET` | `/runs?limit=N` | Most recent N runs (summary). Used by the observability panel. |
| `GET` | `/cell` | Dev cell UI. |

---

## Data model

**`exercises`** — engine's copy of a cell definition.

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `kind` | text | `free_run` / `fill_function` / `write_class` |
| `language` | text | `python` / `java` |
| `starter_code` | text | Shown in the cell |
| `template` | text | Server-side only; contains `{{code}}` |
| `expected_output` | text\|null | null = ungraded |
| `match_mode` | text | `exact` / `trimmed` / `contains` |
| `reveal_expected` | bool | If true, send `expected_output` to browser |

**`runs`** — one row per execution, written by the worker.

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `status` | text | `pending` → `running` → `done`/`error`/`timeout` |
| `passed` | bool\|null | null for ungraded runs |
| `runtime_ms` | int | Wall-clock time of the exec step only |

---

## Exercise kinds

| Kind | Template | Student edits | Graded |
|---|---|---|---|
| `free_run` | Wraps code in a `main` entrypoint | Statements only | Usually not |
| `fill_function` | Full program with hidden driver; `{{code}}` is the function body | Function body | Yes |
| `write_class` | `{{code}}` only | Entire program including class | Yes |

Java filename/entry-class resolution for `write_class`: the worker parses
`public class <Name>` from the assembled source, validates against
`^[A-Za-z_]\w*$`, writes `<Name>.java`, and passes `<Name>` as the entry
class. For `free_run`/`fill_function`, the template fixes the class to `Main`.

---

## Reliability

- SQS visibility timeout (60s) > max execution timeout (10s Java + overhead).
- Dead-letter queue (`code-run-dlq`) after 3 failed receives.
- Processing is idempotent on `run_id` — redelivery overwrites the same row.
- Pool containers that die between jobs are detected in `release()` and respawned.

---

## Configuration (env vars)

| Variable | Default | Notes |
|---|---|---|
| `DATABASE_URL` | `postgresql+psycopg2://codeexec:codeexec@localhost/codeexec` | Point at Supabase's pooler (`:6543`, `?sslmode=require`) in production — see "Production deployment". |
| `DB_POOL_SIZE` / `DB_MAX_OVERFLOW` | `2` / `1` | SQLAlchemy pool size. Set to `1`/`0` for Lambda (already done in `infra/terraform/lambda.tf`) — the Supabase pooler absorbs concurrency, not this. |
| `AWS_ENDPOINT_URL` | *(unset = real AWS)* | Set to LocalStack URL for local dev |
| `RUN_QUEUE_NAME` | `code-run-queue` | Local dev fallback queue, used by both languages. |
| `RUN_QUEUE_NAME_PYTHON` / `RUN_QUEUE_NAME_JAVA` | *(unset = falls back to `RUN_QUEUE_NAME`)* | Production per-language queues (set by Terraform on the API's environment). |
| `POOL_SIZE` | `2` | Containers pre-warmed per language (docker worker only, not used by the Lambda path). |
| `POOL_MAX_USES` | `100` | Runs before a container is recycled (docker worker only). |
| `SECCOMP_PATH` | `/seccomp/runner.json` | Container-local path to the seccomp profile (bind-mounted from `infra/seccomp-runner.json`). Absent file → warning + no seccomp. Docker worker only — irrelevant to the Lambda path. |

---

## What's left as a seam

- **gVisor / VM-level isolation** — `# TODO: harden` in `worker/pool.py`, docker worker only. Not built: complexity/performance tradeoff not justified for the code this engine runs. The cap-drop + seccomp layer is the current gate for local dev; the Lambda path's Firecracker microVM is the equivalent boundary in production.
- **Structured-value grading** — `# TODO: structured-value checks` in `worker/grading.py`. MVP grades on stdout only. Seam: each language harness prints `__RESULT__ <canonical-json>` to compare produced values cross-language.
- **JavaScript runtime** — `IMAGES` dict in `pool.py` and `DEFAULT_TEMPLATES` in `assembly.py` are table-driven; adding JS is additive for local dev. In production it needs a third `Dockerfile.lambda` + queue + Lambda function alongside python/java.
- **Auth** — `user_id` is an unchecked string.
- **WebSocket streaming** — client polls; SSE/WS would push results incrementally.
- **Autoscaling / warm-pool sizing** — `POOL_SIZE` is a static env var for the docker worker; the Lambda path scales concurrency automatically (capped by `reserved_concurrent_executions` in `infra/terraform/lambda.tf`, itself a static guess rather than something tied to observed load).
- **DLQ alerting** — messages that exhaust `maxReceiveCount` land in the DLQ silently; no CloudWatch alarm is wired up yet.
- **Migrations aren't automated** — `alembic upgrade head` against Supabase is a manual/CI step, not part of `terraform apply`.
