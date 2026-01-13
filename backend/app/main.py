from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from passlib.context import CryptContext
import ephem
import math

# Import Database and Models (jo humne pichle step me banaye the)
from .database import user_collection
from .models import UserCreate, UserLogin

# 1. App Initialization
app = FastAPI(title="AstroJaya API - Final")

# 2. CORS Configuration
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- AUTHENTICATION SETUP (MongoDB) ---

# Password Hashing Config
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

# Helper to format MongoDB user object
def user_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "full_name": user["full_name"],
        "email": user["email"],
    }

# --- KUNDLI SETUP (Ephem) ---

# Request Body Model for Kundli
class KundliRequest(BaseModel):
    date: str  # YYYY-MM-DD
    time: str  # HH:MM
    lat: float
    lon: float
    tz: float  # Timezone

# Helper Functions for Astrology
def get_zodiac_sign(longitude):
    signs = [
        "Aries", "Taurus", "Gemini", "Cancer", 
        "Leo", "Virgo", "Libra", "Scorpio", 
        "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ]
    # Normalize to 0-360
    lon = longitude % 360
    index = int(lon / 30)
    return signs[index]

def get_degree_in_sign(longitude):
    return longitude % 30

# --- ROUTES ---

@app.get("/")
def read_root():
    return {"status": "AstroJaya API Running with Auth & Kundli 🚀"}

# 1. SIGNUP ROUTE
@app.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(user: UserCreate):
    # Check if email exists
    existing_user = await user_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash Password & Save
    hashed_password = get_password_hash(user.password)
    new_user_data = {
        "full_name": user.full_name,
        "email": user.email,
        "password": hashed_password
    }
    
    result = await user_collection.insert_one(new_user_data)
    new_user = await user_collection.find_one({"_id": result.inserted_id})
    
    return user_helper(new_user)

# 2. LOGIN ROUTE
@app.post("/login")
async def login(user: UserLogin):
    # Find User
    db_user = await user_collection.find_one({"email": user.email})
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid Credentials")
    
    # Check Password
    if not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid Credentials")
    
    return {
        "message": "Login Successful",
        "user_id": str(db_user["_id"]),
        "name": db_user["full_name"]
    }

# 3. KUNDLI GENERATION ROUTE
@app.post("/api/kundli")
def generate_kundli(data: KundliRequest):
    try:
        # Observer Create (User Location)
        observer = ephem.Observer()
        observer.lat = str(data.lat)
        observer.lon = str(data.lon)
        
        # Date processing
        local_datetime = f"{data.date} {data.time}"
        observer.date = local_datetime 
        
        # Lahiri Ayanamsa (Approx)
        ayanamsa = 24.12 

        # Calculate Planets
        planets_list = [
            ("Sun", ephem.Sun(observer)),
            ("Moon", ephem.Moon(observer)),
            ("Mars", ephem.Mars(observer)),
            ("Mercury", ephem.Mercury(observer)),
            ("Jupiter", ephem.Jupiter(observer)),
            ("Venus", ephem.Venus(observer)),
            ("Saturn", ephem.Saturn(observer)),
        ]

        chart_data = []
        
        for name, planet in planets_list:
            planet.compute(observer)
            tropical_lon = math.degrees(planet.hlon)
            
            # Convert to Vedic (Sidereal)
            sidereal_lon = tropical_lon - ayanamsa
            
            sign = get_zodiac_sign(sidereal_lon)
            degree = get_degree_in_sign(sidereal_lon)
            
            chart_data.append({
                "name": name,
                "sign": sign,
                "degree": round(degree, 2),
                "house": "1" # Logic for houses can be added later
            })

        # Simple AI Teaser
        sun_sign = chart_data[0]['sign']
        moon_sign = chart_data[1]['sign']
        summary = f"With Sun in {sun_sign}, you have a strong soul. Your Moon in {moon_sign} defines your emotional nature."

        return {
            "chart": chart_data,
            "prediction": summary
        }

    except Exception as e:
        print("Error:", e)
        raise HTTPException(status_code=500, detail=str(e))