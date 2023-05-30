from Model import *
import pymongo
# import os to get env variables
import os
# import dotenv to hide Atlas Credentials
from dotenv import load_dotenv
import certifi

class Property(Model):
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    load_dotenv()  # take environment variables from .env.

    MONGO_USER =os.environ['MONGO_USER']
    MONGO_PWD =os.environ['MONGO_PWD']
    MONGO_CLUSTER =os.environ['MONGO_CLUSTER']
    MONGO_DB = os.environ['MONGO_DB']
    MONGO_COLLECTION = os.environ['MONGO_COLLECTION2']
    MONGODB_URI = "mongodb+srv://" + MONGO_USER + ":" + MONGO_PWD + "@" + MONGO_CLUSTER + ".kgsps9q.mongodb.net"
    
    ca=certifi.where()

    db_client = pymongo.MongoClient(MONGODB_URI, tlsCAFile=ca)
    collection = db_client[MONGO_DB][MONGO_COLLECTION]


    def find_all(self):
        properties = list(self.collection.find())
        print(f'properties:  {properties}')
        return make_id_strings(properties)

    def find_by_id(self, prop_id):
        properties = list(self.collection.find({"_id": prop_id}))
        return make_id_strings(properties)
    
    def find_by_user_id(self, user_id):
        properties = list(self.collection.find({"user_id": user_id}))
        return make_id_strings(properties)

# helper which turns the object ids into strings for readability
def make_id_strings(properties):
    for property in properties:
            property["_id"] = str(property["_id"])
    return properties