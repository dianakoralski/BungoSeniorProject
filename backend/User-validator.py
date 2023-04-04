import os
from dotenv import load_dotenv
import certifi
import pymongo

# not sure how we are handling authentication so email might not want to be here? 
# -> presuming password (at least long term, doesn't want to be here)

# photo(s) might go here, would have to be investigated
# have only the bare requirements for signups required here, 
# profile building requirements to be handled in the frontend

# don't have dbAdmin user role so can't add validator to the users db, but otherwise seems done
user_validator = {
    "$jsonSchema": {
        "bsonType": "object",
         "title": "User Object Validation",
         "required": [ "first_name", "last_name", "email", "password" ],
         "properties": {
            "first_name": {
                "bsonType": "string",
                "description": "a first name is required"
            },
            "last_name": {
                "bsonType": "string",
                "description": "a last name is required"
            },
            "email": {
                "bsonType": "string",
                "description": "an email is required"
            },
            "password": {
                "bsonType": "string",
                "description": "a password is required"
            },
            "phone": {
                "bsonType": "string",
                "description": "a phone is optional"
            },
            "city": {
                "bsonType": "string",
                "description": "a city is optional"
            },
            "state": {
                "bsonType": "string",
                "description": "a state is optional"
            },
            "country": {
                "bsonType": "string",
                "description": "a country is optional"
            },
            "bio": {
                "bsonType": "string",
                "description": "a bio is optional"
            },
            "offered_services": {
                "bsonType": "array",
                "description": "an array of the services they offer is optional"
            },
            "interests": {
                "bsonType": "array",
                "description": "an array of their interests is optional??"
            },
            "socials": {
                "bsonType": "array",
                "description": "an array of their social media accounts is optional"
            },
            "gender": {
                "bsonType": "string",
                "description": "a gender is optional"
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