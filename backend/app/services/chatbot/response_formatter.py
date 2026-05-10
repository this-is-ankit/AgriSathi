import re
from typing import List, Tuple, Optional

def extract_suggestions(text: str) -> Tuple[str, List[str]]:
    """
    Attempts to extract suggestion chips from the LLM response if it provided any.
    If the LLM provides suggestions like 'Suggestions: [Buy fertilizer, Check weather]',
    we parse them out. Otherwise, we provide default context-aware suggestions.
    """
    suggestions = []
    
    # Simple regex to find a list of suggestions at the end of the text
    # Looking for something like "Suggestions: - Option 1 \n - Option 2"
    match = re.search(r'(?i)suggestions?:?\s*\n((?:[-*].*\n?)+)', text)
    if match:
        list_str = match.group(1)
        # Extract the items
        items = re.findall(r'[-*]\s*(.+)', list_str)
        suggestions.extend([item.strip() for item in items][:3])
        # Remove the suggestions block from the main text
        text = text[:match.start()].strip()
        
    return text, suggestions

def generate_default_suggestions(context_type: Optional[str] = None) -> List[str]:
    if context_type == "disease_scan":
        return ["How do I treat this?", "What fertilizer is safe?", "Can it spread?"]
    elif context_type == "weather_alert":
        return ["Should I irrigate today?", "Is it safe to spray pesticides?", "Crop protection tips"]
    return ["Best crops for this season?", "Fertilizer tips", "Weather forecast"]
