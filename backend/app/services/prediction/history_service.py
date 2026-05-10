from datetime import datetime, timezone
from app.database.mongodb import db_client
from app.schemas.prediction import PredictionResult
from app.core.logger import log

def save_prediction_history(result: PredictionResult, user_id: str = "anonymous", image_url: str = ""):
    """
    Saves a prediction result to MongoDB under the 'detections' collection.
    If MongoDB is not connected (e.g., fallback mode), it logs a warning.
    """
    if db_client.db is None:
        log.warning("MongoDB not connected. Skipping history storage.")
        return

    try:
        detection_doc = {
            "user_id": user_id,
            "disease_name": result.disease_name,
            "confidence": result.confidence,
            "recommendations": result.recommendations,
            "image_url": image_url,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        db_client.db["detections"].insert_one(detection_doc)
        log.info(f"Saved prediction history for user {user_id}")
    except Exception as e:
        log.error(f"Failed to save prediction history: {e}")
