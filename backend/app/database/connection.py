from app.database.mongodb import db_client
from app.database.firebase import firebase_admin_client
from app.core.logger import log

async def startup_databases():
    log.info("Starting up database connections...")
    await db_client.connect()
    firebase_admin_client.initialize()

def shutdown_databases():
    log.info("Shutting down database connections...")
    db_client.close()
