from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# 1. App Initialization
app = FastAPI(
    title="AstroJaya API",
    version="1.0.0",
    description="Backend for AstroJaya - AI Astrology Platform"
)

# 2. CORS Configuration (Security Guard)
# React (Port 5173) ko allow karenge ki wo Python (Port 8000) se data le sake.
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Sab methods allow (GET, POST, PUT, DELETE)
    allow_headers=["*"],
)

# 3. Base Route (Health Check)
@app.get("/")
def read_root():
    return {
        "project": "AstroJaya",
        "status": "Server is Running 🚀",
        "message": "Om Ganeshay Namah"
    }

# Note: Hum baad mein yahan routes import karenge (Auth, Horoscope etc.)