from typing import List, Dict, Any
from app.schemas.prediction import PredictionResult
from app.ai.utils.label_mapping import clean_label

CONFIDENCE_THRESHOLD = 0.60

def format_prediction_result(hf_output: List[Dict[str, Any]]) -> PredictionResult:
    """
    Takes the raw HuggingFace output `[{'label': 'x', 'score': 0.9}, ...]` 
    and converts it to a structured PredictionResult.
    """
    if not hf_output:
        return PredictionResult(
            disease_name="Unknown",
            confidence=0.0,
            recommendations=["Unable to generate recommendations."]
        )

    # hf_output is sorted by score descending
    top_prediction = hf_output[0]
    raw_label = top_prediction['label']
    confidence = float(top_prediction['score'])

    clean_name = clean_label(raw_label)

    if confidence < CONFIDENCE_THRESHOLD:
        return PredictionResult(
            disease_name="Unclear (Low Confidence)",
            confidence=confidence,
            recommendations=["The image is unclear or confidence is too low.", "Please upload a clearer image with better lighting."]
        )

    # Basic recommendation generation logic
    is_healthy = "healthy" in clean_name.lower()
    
    if is_healthy:
        recommendations = [
            "Continue current watering schedule.",
            "Apply standard preventative fertilizer.",
            "Monitor regularly for any changes."
        ]
    else:
        recommendations = [
            "Isolate the affected area if possible.",
            f"Consult a local agricultural expert regarding {clean_name}.",
            "Ensure proper drainage and avoid overwatering."
        ]

    return PredictionResult(
        disease_name=clean_name,
        confidence=confidence,
        recommendations=recommendations
    )
