def build_system_prompt() -> str:
    return """You are the AgriSathi Assistant, a friendly, concise, and highly knowledgeable agricultural expert helping farmers in India.
Your goal is to provide practical, accurate, and easy-to-understand advice about crop diseases, fertilizers, weather impacts, and general farming best practices.

RULES:
1. Always be concise. Farmers are busy; do not write long essays. Bullet points are preferred.
2. If you don't know the answer, politely say you don't know and recommend consulting a local agricultural extension officer.
3. Keep the tone supportive and professional.
4. Do NOT answer non-agricultural questions. If a user asks about politics, entertainment, etc., gently steer them back to farming.
5. If the user provides context (like a recent disease scan or weather alert), use it to tailor your response.
"""

from typing import Optional, Dict, Any

def format_context(context_type: Optional[str], context_data: Optional[Dict[str, Any]]) -> str:
    if not context_type or not context_data:
        return ""
        
    context_str = "\n[USER CONTEXT]\n"
    if context_type == "disease_scan":
        disease = context_data.get("disease", "Unknown")
        crop = context_data.get("crop", "Unknown")
        confidence = context_data.get("confidence", 0)
        context_str += f"The user recently scanned a {crop} crop and our AI detected '{disease}' with {confidence*100:.1f}% confidence.\n"
        
    elif context_type == "weather_alert":
        condition = context_data.get("condition", "Unknown")
        advisory = context_data.get("advisory", [])
        context_str += f"The user is currently experiencing {condition} weather. Active advisories: {', '.join(advisory)}.\n"
        
    return context_str + "[END USER CONTEXT]\n"
