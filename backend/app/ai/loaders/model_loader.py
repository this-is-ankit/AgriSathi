from transformers import pipeline, AutoImageProcessor
from app.core.logger import log

class ModelLoader:
    _pipeline = None

    @classmethod
    def get_pipeline(cls):
        if cls._pipeline is None:
            log.info("Loading Hugging Face model and image processor...")
            try:
                # We use a standard MobileNetV2 image processor for this model
                processor = AutoImageProcessor.from_pretrained('google/mobilenet_v2_1.0_224')
                cls._pipeline = pipeline(
                    'image-classification', 
                    model='linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification', 
                    image_processor=processor
                )
                log.info("Model loaded successfully.")
            except Exception as e:
                log.error(f"Failed to load model: {e}")
                raise RuntimeError("AI model failed to initialize") from e
        return cls._pipeline

# Initialize lazily when requested, but can be forced here
def preload_model():
    ModelLoader.get_pipeline()
