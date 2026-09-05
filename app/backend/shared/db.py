import os
from contextlib import contextmanager

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# Against Supabase, point this at the pooler host/port (transaction mode,
# usually :6543) rather than the direct :5432 connection, and include
# ?sslmode=require — Supabase requires TLS. The pooler is what makes Lambda
# viable here: each concurrent invocation opens its own short-lived
# connection, and Postgres itself (not just this app) has a hard
# max_connections ceiling that a burst of Lambda invocations can blow through
# without something in front absorbing the fan-out.
DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql+psycopg2://codeexec:codeexec@localhost:5432/codeexec",
)

# Small pool by default: a Lambda execution environment processes one SQS
# batch at a time (see lambda_runner/handler.py), so it never needs more than
# a connection or two of its own — the pooler in front of Supabase, not
# SQLAlchemy's pool, is what absorbs concurrency across many warm Lambda
# environments. Bump DB_POOL_SIZE for the long-lived API/docker-worker
# processes if they ever see real concurrent load.
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_size=int(os.environ.get("DB_POOL_SIZE", "2")),
    max_overflow=int(os.environ.get("DB_MAX_OVERFLOW", "1")),
)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()


@contextmanager
def session_scope():
    session = SessionLocal()
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()
