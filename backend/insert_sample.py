from pymongo import MongoClient
import certifi

MONGO_URI = "mongodb+srv://YashiRashiSiri:Rashni2000@cluster0.yemn5mo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create MongoClient with TLS and certificate
client = MongoClient(MONGO_URI, tls=True, tlsCAFile=certifi.where())

# Select your database and collection
db = client["land_tax_db"]
collection = db["tax_data"]

# Sample data to insert
sample_data = [
    {
        "landSize": 500,
        "landValue": 100000,
        "regionFactor": 150,
        "economicGrowth": 2.5,
        "landType": "Residential",
        "taxPaid": 2950
    },
    {
        "landSize": 1000,
        "landValue": 200000,
        "regionFactor": 160,
        "economicGrowth": 3.0,
        "landType": "Commercial",
        "taxPaid": 6500
    },
    {
        "landSize": 1500,
        "landValue": 150000,
        "regionFactor": 140,
        "economicGrowth": 2.0,
        "landType": "Agricultural",
        "taxPaid": 4000
    }
]

# Insert data into the collection
collection.insert_many(sample_data)
print("✅ Sample data inserted successfully!")
