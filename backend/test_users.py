import unittest
import mongomock
from User import User


class User_test_cases(unittest.TestCase):
    def setUp(self):
        self.client = mongomock.MongoClient()

        # to avoid api issues with hitting it too many times hard coding the location coordinates here for testing
        self.user1ToAdd = {"first_name" : "John", "last_name" : "Doe", "email" :"JohnDoe@email.com",
         "password" : "123", "city" : "San Luis Obispo", "state" : "California", "country" : "USA",
         "location": {
                "type": "Point",
                "coordinates": [-120.65962, 35.28275]}, "gender" : "male"}

        self.user2ToAdd = {"first_name" : "Jane", "last_name" : "Doe", "email" :"JaneDoe@email.com",
         "password" : "456", "city" : "San Luis Obispo", "state" : "California", "country" : "USA",
         "location": {
                "type": "Point",
                "coordinates": [-120.65962, 35.28275]}, "gender" : "female"}

        self.user3ToAdd = {"first_name" : "Jim", "last_name" : "Gordon", "email" :"JGord@email.com",
         "password" : "789", "city" : "Gotham", "state" : "New Jersey", "country" : "USA",
         "location": {
                "type": "Point",
                "coordinates": [-74.51437, 39.88152]}, "gender" : "male"}

        User.collection = self.client["test_user_list"]["test_users"]
        add_user(self.user1ToAdd)
        add_user(self.user2ToAdd)
        add_user(self.user3ToAdd)
        return

    # def test_create_one_user(self):
    #     '''TODO: Test for making a new user '''
    #     pass

    def test_get_all_users(self):
        ''' Test for getting all the users '''
        users = User().find_all()

        # just not considering the id for now
        for user in users:
            del user["_id"]
        
        self.assertEqual(users, [self.user1ToAdd, self.user2ToAdd, self.user3ToAdd])

    def test_get_by_email(self):
        ''' Test for getting a user by their email '''
        user = User().find_by_email("JohnDoe@email.com")[0]

        # not dealing with ids right now
        del user["_id"]
        
        self.assertEqual(user, self.user1ToAdd)

    def test_get_by_bad_email(self):
        ''' Test for getting a user by an email that doesn't exist '''
        user = User().find_by_email("notReal@email.com")

        self.assertEqual(user, [])

    def test_filtering_by_city(self):
        ''' Test for filtering users by city, state, and country'''
        users = User().filter_users(city="San Luis Obispo", state="California", country="USA")

        # just not considering the id for now
        for user in users:
            del user["_id"]
        
        self.assertEqual(users, [self.user1ToAdd, self.user2ToAdd])
    
    def test_filtering_by_gender(self):
        ''' Test for filtering users by gender'''
        users = User().filter_users(gender="male")

        # just not considering the id for now
        for user in users:
            del user["_id"]
        
        self.assertEqual(users, [self.user1ToAdd, self.user3ToAdd])
        
    def test_update_user(self):
        ''' Test for updating a user'''
        original_user = User().find_by_email("JohnDoe@email.com")[0]
        user_id = original_user["_id"]
        update = { "_id" : user_id, "last_name" : "Smith"}
        user_to_update = User(**update)
        user_to_update.save()

        users = User().find_all()

        # just not considering the id for now
        for user in users:
            del user["_id"]
        self.user1ToAdd["last_name"] = "Smith"
        
        self.assertEqual(users, [self.user1ToAdd, self.user2ToAdd, self.user3ToAdd])

    def test_delete_user(self):
        ''' Test for deleting a user'''
        user = User().find_by_email("JohnDoe@email.com")[0]
        user_to_delete = User(**user)
        user_to_delete.remove()

        users = User().find_all()

        # just not considering the id for now
        for user in users:
            del user["_id"]
        
        self.assertEqual(users, [self.user2ToAdd, self.user3ToAdd])
    
    # Unfortunately mongomock doesn't support the $near operation needed to handle the proximity filtering
    # def test_filtering_by_proximity(self):
    #     ''' Test for filtering users by proximity'''
    #     User.collection = self.client["test_user_list"]["test_users"]
    #     users = User().filter_users(coordinates=[-120.8, 35.5], radius=50000)

    #     # just not considering the id for now
    #     for user in users:
    #         del user["_id"]
        
    #     self.assertEqual(users,  [self.user1ToAdd, self.user2ToAdd])

# test helper
def add_user(userToAdd):
    newUser = User(**userToAdd)    
    newUser.save()