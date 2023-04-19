import email
#from flask_cors import CORS
from flask import Flask
from flask import request
from flask import jsonify
import json

from turtle import update
from User import User
#import os

app = Flask(__name__)
#CORS(app)

@app.route('/')
def hello_world():
   return 'Hello, DIANA2222ç!'

@app.route('/users', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def get_users():
    if request.method == 'GET':
        search_email = request.args.get('email')
        if search_email:
            users = User().find_by_email(search_email)
        else:
            users = User().find_all()
        return {"users_list": users}
    elif request.method == 'POST' or request.method == 'PATCH':
        # This is the sign up functionality, making a new user based on incoming json
        userToAdd = request.get_json()
        # userToAdd['id'] = gen_random_id() # check for duplicate before appending.. todo
        # users['users_list'].append(userToAdd)
        # updated for db_access
        # make DB request to add user
        # test

        #TODO: Probably put all this in a function (easier for testing and reading)
        newUser = User(**userToAdd)
        newUser.save()
        resp = jsonify(newUser), 201
        return resp
    elif request.method == 'DELETE':
        search_email = request.args.get('email')
        if search_email:
            user_info = User().find_by_email(search_email)
            user_to_delete = User(**user_info[0])
            return user_to_delete.remove()

# STAND IN login functionality
# - be able to accept email and password and verify if there is a user that matches both
# for actual implementation using Cognito so wouldn't be exposing password like this (just for testing)
# @app.route('/login/<email>/<password>', methods=['GET'])
@app.route('/login', methods=['GET'])
def authenticate_user(email, password):
    if request.method == 'GET':
        email = request.args.get('email')
        password = request.args.get('password')
        email_user = User().find_by_email(email)
        if len(email_user) == 1:
            if email_user[0]["password"] == password:
                return email_user
    return []

# @app.route('/filter/<city>/<state>/<country>/<services>/<coordinates>/<radius>/<gender>', methods=['GET'])
@app.route('/filter', methods=['GET'])
def filter_providers():
    if request.method == 'GET':
        # TODO: figure out how we want to pass parameters
        city = request.args.get('city', default=None)
        state = request.args.get('state', default=None)
        country = request.args.get('country', default=None)
        services = request.args.get('services', default=None)
        coordinates = request.args.get('coordinates', default=None)
        radius = request.args.get('radius', default=None)
        gender = request.args.get('gender', default=None)
        users = User().filter_users(city, state, country, services, coordinates, radius, gender)
        return users
    return []

@app.route('/test', methods=['GET'])
def testing():
    if request.method == 'GET':
        email_user = User().filter_users("San Luis Obispo", "California", "USA", None, [-120, 36], 5000000, None)
        return email_user

# datalist = [{
#             "username" : "firstuser",
#             "email" : "user1@gmail.com",
#             "password" : "GhostHunter17",
#             "name": "tim", 
#             "address": "101 slo",
#             "Current Location" : "GPS",
#             "Phone Number" : "805-765-2212",
#             "Profile Picture" : "URL",
#             "Last Active" : "15 minutes ago"}, 
            
#             {
#             "username" : "seconduser",
#             "email" : "user2@gmail.com",
#             "password" : "Casper145!",
#             "name": "Penelope", 
#             "address": "232 slo",
#             "Current Location" : "GPS",
#             "Phone Number" : "805-123-4567",
#             "Profile Picture" : "URL",
#             "Last Active" : "2 days ago"}]

# #add intial users
# #collection.insert_many(datalist)

# def add_user(user: User):
#     collection.insert_one(vars(user))

# new_user = User(
#             "newuser",
#             "user3@gmail.com",
#             "Pass123",
#             "Credit Card",
#             "Sam", 
#             "566 slo",
#             "GPS",
#             "805-432-1000",
#             "URL",
#             "4 days ago",
#             "Welcome!"
#             )

# #add_user(new_user)

# #check for existing email
# def check_email(user_email):
#     for x in collection.find({"email": user_email}):
#         print(x.get("email"))
#         if x.get("email") == user_email:
#             print("email is already registered")
#             return
#     print("welcome!")

# check_email("user4@gmail.com")

# def update_user(user : User):
#     collection.replace_one({"username" : user.get_username()}, vars(user))  #updates values
 
# new_user.name = "Samuel"
# update_user(new_user)

# def delete_user_by_username(username):
#     collection.delete_one({"username" : username})

#delete_user_by_username("566 slo")

if __name__ == "__main__":
    #Flask.run(app)
    app.run(host='192.168.1.118', port=5000, debug=True)