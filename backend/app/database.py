import motor.motor_asyncio

# 1. Connection URL
# Agar aapka MongoDB local chal raha hai to ye URL theek hai.
# Agar Atlas (Cloud) use kar rahe ho, to wahan se mila URL yahan paste karein.
MONGO_DETAILS = "mongodb://localhost:27017"

# 2. Create Async Client
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

# 3. Connect to Database
# Database ka naam 'astrojaya_db' rakha hai. Aap ise badal bhi sakte hain.
database = client.astrojaya_db

# 4. Collections (Tables)
# Users ka data is collection me store hoga
user_collection = database.get_collection("users")

# Agar future me aur collections chahiye (jaise 'kundli_reports'), to yahan add kar sakte hain:
# kundli_collection = database.get_collection("kundlis")