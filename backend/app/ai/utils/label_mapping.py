def clean_label(raw_label: str) -> str:
    """
    Cleans raw model labels into human-readable crop/disease strings.
    The specific model output is already mostly clean (e.g., 'Corn (Maize) with Common Rust'),
    but this acts as a centralized format enforcement.
    """
    label = raw_label.replace("_", " ").strip()
    # E.g. "Healthy Tomato Plant" -> "Tomato", "Healthy"
    # For now, we will return it as the 'disease_name' entirely.
    return label
