from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from app.core.exceptions import AppException
from app.core.logger import log

def add_error_handlers(app: FastAPI):
    @app.exception_handler(AppException)
    async def app_exception_handler(request: Request, exc: AppException):
        log.warning(f"AppException: {exc.message} - Path: {request.url.path}")
        return JSONResponse(
            status_code=exc.status_code,
            content={
                "success": False,
                "message": exc.message,
                "error_code": exc.error_code
            }
        )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError):
        log.warning(f"Validation error on {request.url.path}: {exc.errors()}")
        return JSONResponse(
            status_code=422,
            content={
                "success": False,
                "message": "Invalid request parameters",
                "error_code": "VALIDATION_ERROR",
                "details": exc.errors()
            }
        )

    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):
        log.error(f"Unhandled Exception on {request.url.path}: {str(exc)}")
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": "An unexpected error occurred",
                "error_code": "INTERNAL_ERROR"
            }
        )
