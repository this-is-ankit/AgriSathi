from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ConnectionFailure, ServerSelectionTimeoutError
from app.core.config import settings
from app.core.logger import log

class MongoDBClient:
    client: AsyncIOMotorClient | None = None
    db = None

    @classmethod
    async def connect(cls):
        try:
            log.info(f"Connecting to MongoDB at {settings.MONGODB_URL}")
            cls.client = AsyncIOMotorClient(settings.MONGODB_URL, serverSelectionTimeoutMS=2000)
            # Verify connection
            await cls.client.admin.command('ping')
            cls.db = cls.client[settings.MONGODB_DB_NAME]
            log.info("Successfully connected to MongoDB.")
        except (ConnectionFailure, ServerSelectionTimeoutError) as e:
            log.error(f"Failed to connect to MongoDB: {e}")
            # We don't raise here to allow app to start without DB (for tests or partial functionality)

    @classmethod
    def close(cls):
        if cls.client:
            log.info("Closing MongoDB connection.")
            cls.client.close()

db_client = MongoDBClient()
