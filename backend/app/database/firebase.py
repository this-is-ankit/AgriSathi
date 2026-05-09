import firebase_admin
from firebase_admin import credentials, auth
from app.core.config import settings
from app.core.logger import log
import json

class FirebaseAdmin:
    _initialized = False

    @classmethod
    def initialize(cls):
        if cls._initialized:
            return

        log.info("Initializing Firebase Admin SDK")
        try:
            if settings.FIREBASE_PRIVATE_KEY and settings.FIREBASE_CLIENT_EMAIL and settings.FIREBASE_PROJECT_ID:
                cred_dict = {
                    "type": "service_account",
                    "project_id": settings.FIREBASE_PROJECT_ID,
                    "private_key": settings.FIREBASE_PRIVATE_KEY.replace("\\n", "\n"),
                    "client_email": settings.FIREBASE_CLIENT_EMAIL,
                    "token_uri": "https://oauth2.googleapis.com/token"
                }
                cred = credentials.Certificate(cred_dict)
                firebase_admin.initialize_app(cred)
                cls._initialized = True
                log.info("Firebase Admin initialized successfully from env config.")
            else:
                log.warning("Firebase credentials missing from env. Initializing default app (might fail if not in GCP/Firebase environment).")
                firebase_admin.initialize_app()
                cls._initialized = True
        except ValueError as e:
            # Usually means the app is already initialized
            log.warning(f"Firebase app already initialized: {e}")
            cls._initialized = True
        except Exception as e:
            log.error(f"Failed to initialize Firebase: {e}")

firebase_admin_client = FirebaseAdmin()
