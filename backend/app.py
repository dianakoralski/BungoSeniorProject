import re
from flask import Flask, request, jsonify
from User import User
from Property import Property

app = Flask(__name__)

#landing page for backend testing
@app.route('/')
def hello_world():
   return 'Hello, DIANA2222ç!'

# user data manipluation for creating accounts 
# (and deleting users - to be implemented in front end)
@app.route('/users', methods=['GET', 'PUT', 'PATCH', 'DELETE'])
def get_users():
    if request.method == 'GET':
        search_email = request.args.get('email')
        if search_email:
            users = User().find_by_email(search_email)
        else:
            users = User().find_all()
        return {"realtors": users}
    elif request.method == 'PUT' or request.method == 'PATCH':
        # This is the sign up functionality, making a new user based on incoming json
        userToAdd = request.get_json()
        if not password_checker(userToAdd["password"]):
            return jsonify({"error": "Invalid Password"}), 400
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
@app.route('/login', methods=['POST'])
def authenticate_user():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        email_user = User().find_by_email(email)
        if len(email_user) == 1:
            if email_user[0]["password"] == password:
                return email_user
    return jsonify({"error": "Login failed"}), 400

# manipulate properties' data - mostly used for creating new listings and 
# fetching data from each property
@app.route('/properties', methods=['GET', 'PUT', 'PATCH', 'DELETE'])
def get_properties():
    if request.method == 'GET':
        search_id = request.args.get('_id')
        search_user_id = request.args.get('user_id')
        if search_id:
            properties = Property().find_by_id(search_id)
        elif search_user_id:
            properties = Property().find_by_user_id(search_user_id)
        else:
            properties = Property().find_all()
        return {"properties": properties}
    elif request.method == 'PUT' or request.method == 'PATCH':
        # Making a new property based on incoming json
        propertyToAdd = request.get_json()
        newProperty = Property(**propertyToAdd)
        newProperty.save()
        resp = jsonify(newProperty), 201
        return resp
    elif request.method == 'DELETE':
        search_id = request.args.get('id')
        if search_id:
            property_info = Property().find_by_id(search_id)
            property_to_delete = Property(**property_info[0])
            return property_to_delete.remove()
        return jsonify({"error": "Missing Property Id"}), 400

 #check for existing email
def check_email_exists(user_email):
    for x in User.collection.find({"email": user_email}):
        print(x.get("email"))
        if x.get("email") == user_email:
            print("email is already registered")
            return True
    print("check email is done")
    return False

def password_checker(password):
    # Check if the password has at least 8 characters
    if len(password) < 8:
        return False
    # Check if the password has at least 1 lowercase letter
    if not re.search('[a-z]', password):
        return False
    # Check if the password has at least 1 uppercase letter
    if not re.search('[A-Z]', password):
        return False
    # Check if the password has at least 1 number
    if not re.search('[0-9]', password):
        return False
    # Check if the password has at least 1 special character
    if not re.search('[^a-zA-Z0-9]', password):
        return False
    # If all the conditions are satisfied, the password is valid
    return True

if __name__ == "__main__":
    Flask.run(app)
    # app.run(host='192.168.1.118', port=5000, debug=True)