import motor.motor_asyncio

# 1. Connection URL (Atlas Cloud)
# Note: Username '62069gaurav_db_user' aur Password 'Gaurav2245' hai.
MONGO_DETAILS = "mongodb+srv://kumarsswayam_db_user:3iHYwTTVukPcKN5B@cluster0.d6rf8cf.mongodb.net/?appName=Cluster0"

# 2. Create Async Client
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

# 3. Connect to Database
database = client.astrojaya_db

# 4. Collections (Tables)
user_collection = database.get_collection("users")