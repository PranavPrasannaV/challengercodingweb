"""
Fixed-window IP rate limiter for POST /run.

In-memory and per-process on purpose: this is a solo-maintained MVP behind a
single API instance, and user_id is an unchecked client-supplied string (see
shared/models.py Run.user_id), so IP is the only identifier that isn't
trivially spoofable. If the API ever runs as more than one process, this
needs to move to a shared store (e.g. Redis) — noted here rather than built,
matching the caching-layer seam left in the migration plan.
"""
import os
import time
from collections import defaultdict

from fastapi import HTTPException, Request

RATE_LIMIT_MAX = int(os.environ.get("RUN_RATE_LIMIT_MAX", "10"))
RATE_LIMIT_WINDOW_SECONDS = int(os.environ.get("RUN_RATE_LIMIT_WINDOW_SECONDS", "60"))

# ip -> (window_start_epoch_seconds, count_in_window)
_windows: dict[str, tuple[float, int]] = defaultdict(lambda: (0.0, 0))


def _client_ip(request: Request) -> str:
    # Trust X-Forwarded-For only if a reverse proxy is expected to set it;
    # falling back to the direct peer address keeps this safe by default.
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def enforce_run_rate_limit(request: Request) -> None:
    ip = _client_ip(request)
    now = time.monotonic()
    window_start, count = _windows[ip]

    if now - window_start >= RATE_LIMIT_WINDOW_SECONDS:
        _windows[ip] = (now, 1)
        return

    if count >= RATE_LIMIT_MAX:
        retry_after = int(RATE_LIMIT_WINDOW_SECONDS - (now - window_start))
        raise HTTPException(
            status_code=429,
            detail="Too many submissions — try again shortly.",
            headers={"Retry-After": str(max(retry_after, 1))},
        )

    _windows[ip] = (window_start, count + 1)
