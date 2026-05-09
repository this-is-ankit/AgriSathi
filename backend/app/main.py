from fastapi import FastAPI

app = FastAPI(
    title="AgriSathi API",
    version="1.0.0",
    description="Backend API for the AgriSathi mobile application."
)

@app.get("/")
async def root():
    return {"message": "AgriSathi Backend Running"}

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "agrisathi-api"}
