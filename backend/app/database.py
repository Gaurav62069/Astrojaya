import motor.motor_asyncio

# 1. Connection URL (Atlas Cloud)
# Note: Username '62069gaurav_db_user' aur Password 'Gaurav2245' hai.
MONGO_DETAILS = "mongodb+srv://guptasoumya2007grd_db_user:Gaurav2245@cluster0.99yhmde.mongodb.net/?appName=Cluster0"

# 2. Create Async Client
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

# 3. Connect to Database
database = client.astrojaya_db

# 4. Collections (Tables)
user_collection = database.get_collection("users")