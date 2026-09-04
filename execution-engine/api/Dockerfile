# Build context is the repo root (see infra/docker-compose.yml) so this can
# COPY both the api/ app and the shared/ package it depends on.
FROM python:3.12-slim

WORKDIR /srv

COPY api/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY shared ./shared
COPY api/app ./app
COPY frontend ./frontend
COPY alembic ./alembic
COPY alembic.ini ./alembic.ini

ENV PYTHONPATH=/srv
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
