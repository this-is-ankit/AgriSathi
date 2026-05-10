from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.core.config import settings
from app.core.logger import setup_logging, log
from app.api.router import api_router
from app.database.connection import startup_databases, shutdown_databases
from app.middleware.error_handler import add_error_handlers

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup actions
    setup_logging()
    log.info(f"Starting {settings.PROJECT_NAME} API v{settings.VERSION}")
    await startup_databases()
    yield
    # Shutdown actions
    log.info(f"Shutting down {settings.PROJECT_NAME} API")
    shutdown_databases()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Backend API for the AgriSathi mobile application.",
    lifespan=lifespan
)

# CORS configuration
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Error Handlers
add_error_handlers(app)

# Include central API router
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {"message": f"{settings.PROJECT_NAME} Backend Running"}

@app.get("/health", tags=["Health"])
async def health_check():
    return {"status": "ok", "service": "agrisathi-api"}
