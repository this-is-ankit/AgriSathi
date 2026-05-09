import sys
from loguru import logger
from app.core.config import settings

def setup_logging():
    # Remove default handler
    logger.remove()

    # Add stdout handler
    logger.add(
        sys.stdout,
        format="<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
        level="DEBUG" if settings.APP_ENV == "development" else "INFO",
        colorize=True,
    )

    # Optional: Add file logging for production
    if settings.APP_ENV != "development":
        logger.add(
            "logs/agrisathi.log",
            rotation="10 MB",
            retention="7 days",
            level="INFO",
            serialize=True # JSON format for structured logging
        )

# Export logger to be used globally
log = logger
