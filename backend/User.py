from Model import *
import pymongo
# import os to get env variables
import os
# import dotenv to hide Atlas Credentials
from dotenv import load_dotenv
import certifi

class User(Model):
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)


    # .env file should include a statmement MONGODB_URI=mongodb+srv://<atlas-user>:<password>@cluster0.6f9re.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority
    # with <atlas-user>, <password> and <myFirstDatabase> updated accordingly
    # make sure .env is in .gitignore so that your password isn't released into the wild

    load_dotenv()  # take environment variables from .env.

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
        users = list(self.collection.find({"email": email}))
        return make_id_strings(users)

    ''' accepts all the arguments and does its checking to figure out what is being filtered for
    so just give whatever the frontend sent
    techincally 4 options:
        who == services
        location = city + state + country TODO: need to handle zip code, maybe convert zip code into city, state, country?
        mile radius  = TODO: convert radius to meters 
        gender = gender
    '''
    def filter_users(self, city=None, state=None, country=None, services=None, coordinates=None, radius=None, gender=None):
        # construct the dictionary to .find by
        criteria = {}
        if city and state and country:
            criteria["city"] = city
            criteria["state"] = state
            criteria["country"] = country
        if services:
            criteria["services"] = {"$all": services}
        if gender:
            criteria["gender"] = gender
        if coordinates and radius:
            # note that $maxDistance is in meters///
            criteria["location"] = { "$near" : { "$geometry" : { "type" : "Point", "coordinates" : coordinates}, "$minDistance" : 0, "$maxDistance" : radius}}
        print("criteria: ", criteria)

        # create index -> might need to be somewhere else 
        # self.collection.create_index([("location", pymongo.GEOSPHERE)])
        
        #perform the query 
        users = list(self.collection.find(criteria))
        return make_id_strings(users)

# add find_by_job and find_by_name_and_job for final version

    def get_username(self):
        return self["username"]

    def set_username(self, new_value):
        self["username"] = new_value

# helper which turns the object ids into strings for readability
def make_id_strings(users):
    for user in users:
            user["_id"] = str(user["_id"])
    return users