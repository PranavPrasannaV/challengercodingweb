"""
Mangum shim: lets api/app/main.py's FastAPI app be invoked by API Gateway
(HTTP API) via Lambda, instead of served by uvicorn — see api/Dockerfile.lambda
and infra/terraform/api.tf. Local dev keeps using uvicorn + api/Dockerfile
unchanged; the FastAPI app itself (routes, CORS, schemas) is untouched.
"""
from mangum import Mangum

from app.main import app

handler = Mangum(app)
