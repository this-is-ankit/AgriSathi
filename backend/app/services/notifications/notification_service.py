from typing import Optional
from app.database.mongodb import db_client
from app.services.notifications.push_service import send_push_notification
from app.services.notifications.notification_formatter import NotificationFormatter
from app.core.logger import log

async def register_device_token(user_id: str, fcm_token: str, device_id: str):
    """
    Registers an FCM token for a given user and device.
    """
    if db_client.db is None:
        log.warning("Database not connected, cannot register token.")
        return False
        
    try:
        await db_client.db["user_devices"].update_one(
            {"user_id": user_id, "device_id": device_id},
            {"$set": {"fcm_token": fcm_token}},
            upsert=True
        )
        return True
    except Exception as e:
        log.error(f"Failed to register token: {e}")
        return False

async def trigger_weather_alert(user_id: str, condition: str):
    title, body = NotificationFormatter.format_weather_alert(condition)
    await _send_to_user(user_id, title, body, {"type": "weather", "condition": condition})

async def _send_to_user(user_id: str, title: str, body: str, data: Optional[dict] = None):
    if db_client.db is None:
        return
        
    # Find all devices for this user
    cursor = db_client.db["user_devices"].find({"user_id": user_id})
    async for device in cursor:
        token = device.get("fcm_token")
        if token:
            send_push_notification(token, title, body, data)
