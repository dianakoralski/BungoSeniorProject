import os
from dotenv import load_dotenv
import certifi
import pymongo

# not yet implemented but outlined
# have only the bare requirements for signups required here, 
# profile building requirements to be handled in the frontend

user_validator = {
    "$jsonSchema": {
        "bsonType": "object",
         "title": "User Object Validation",
         "required": [ "full_name", "email", "password", "jurisdiction", "bre_license" ],
         "properties": {
            "full_name": {
                "bsonType": "string",
                "description": "a first name is required"
            },
            "email": {
                "bsonType": "string",
                "description": "an email is required"
            },
            "password": {
                "bsonType": "string",
                "description": "a password is required"
            
            },
            "bre_licence": {
                "bsonType": "string",
                "description": "a bre license number is required"
            },
            "jurisdiction": {
                "bsonType": "string",
                "description": "a jurisdiction is required"
            },
            "phone": {
                "bsonType": "string",
                "description": "a phone is optional"
            },
            "bio": {
                "bsonType": "string",
                "description": "a bio is optional"
            },
            "socials": {
                "bsonType": "array",
                "description": "an array of their social media accounts is optional"
            },
         }
    }
}

load_dotenv()  # take environment variables from .env.
MONGO_USER =os.environ['MONGO_USER']
MONGO_PWD =os.environ['MONGO_PWD']
MONGO_CLUSTER =os.environ['MONGO_CLUSTER']
MONGO_DB = os.environ['MONGO_DB']
MONGO_COLLECTION = os.environ['MONGO_COLLECTION']
MONGODB_URI = "mongodb+srv://" + MONGO_USER + ":" + MONGO_PWD + "@" + MONGO_CLUSTER + ".kgsps9q.mongodb.net"

ca=certifi.where()

db_client = pymongo.MongoClient(MONGODB_URI, tlsCAFile=ca)
db = db_client.MONGO_DB

try:
    db.command("collMod", MONGO_COLLECTION, validator=user_validator)
    print("user validator updated")
except Exception as e:
    print(e)