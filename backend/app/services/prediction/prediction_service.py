import time
from app.schemas.prediction import PredictionResult
from app.ai.preprocess.image_processor import preprocess_image
from app.ai.loaders.model_loader import ModelLoader
from app.ai.postprocess.result_formatter import format_prediction_result
from app.core.logger import log

async def run_inference(image_bytes: bytes) -> PredictionResult:
    """
    Orchestrates the AI inference pipeline: Preprocess -> Inference -> Postprocess
    """
    start_time = time.time()
    
    # 1. Preprocess
    pil_image = preprocess_image(image_bytes)
    preprocess_time = time.time() - start_time
    
    # 2. Get Model
    pipe = ModelLoader.get_pipeline()
    
    # 3. Inference
    inference_start = time.time()
    raw_output = pipe(pil_image)
    inference_time = time.time() - inference_start
    
    # 4. Postprocess
    result = format_prediction_result(raw_output)
    
    total_time = time.time() - start_time
    log.info(f"Inference complete in {total_time:.3f}s. (Preprocess: {preprocess_time:.3f}s, Inference: {inference_time:.3f}s)")
    
    if total_time > 3.0:
        log.warning(f"Inference performance warning: {total_time:.3f}s exceeded 3.0s target.")
        
    return result
