from typing import Tuple, Dict

class NotificationFormatter:
    @staticmethod
    def format_weather_alert(condition: str) -> Tuple[str, str]:
        title = "Weather Alert"
        body = f"Heads up! {condition} is expected in your area. Please check the AgriSathi app for crop advisories."
        return title, body
        
    @staticmethod
    def format_disease_alert(crop: str, disease: str) -> Tuple[str, str]:
        title = "Disease Risk Detected"
        body = f"Based on recent patterns, your {crop} may be at risk for {disease}. Tap to view preventative measures."
        return title, body
        
    @staticmethod
    def format_community_reply(author_name: str) -> Tuple[str, str]:
        title = "New Reply"
        body = f"{author_name} replied to your post in the community."
        return title, body
