from Model import *
import pymongo
# import os to get env variables
import os
# import dotenv to hide Atlas Credentials
from dotenv import load_dotenv
import certifi
import re

class User(Model):
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    load_dotenv()  # take environment variables from .env.

    # Connect to database
    MONGO_USER =os.environ['MONGO_USER']
    MONGO_PWD =os.environ['MONGO_PWD']
    MONGO_CLUSTER =os.environ['MONGO_CLUSTER']
    MONGO_DB = os.environ['MONGO_DB']
    MONGO_COLLECTION = os.environ['MONGO_COLLECTION']
    MONGODB_URI = "mongodb+srv://" + MONGO_USER + ":" + MONGO_PWD + "@" + MONGO_CLUSTER + ".kgsps9q.mongodb.net"
    
    ca=certifi.where()

    db_client = pymongo.MongoClient(MONGODB_URI, tlsCAFile=ca)
    collection = db_client[MONGO_DB][MONGO_COLLECTION]


    def find_all(self):
        users = list(self.collection.find())
        print(f'users:  {users}')
        return make_id_strings(users)

    def find_by_email(self, email):
        users = list(self.collection.find({"email": re.compile(email, re.IGNORECASE)}))
        return make_id_strings(users)

# helper which turns the object ids into strings for readability
def make_id_strings(users):
    for user in users:
            user["_id"] = str(user["_id"])
    return users