from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import hashlib

from pymongo.errors import DuplicateKeyError
from ..users.user_models import UserCreate, UserLogin

uri = "mongodb+srv://lab_people:qyBY0caO14WQXKkw@co-lab.c1p80fx.mongodb.net/?retryWrites=true&w=majority&appName=CO-LAB"
client: MongoClient = MongoClient(uri, server_api=ServerApi('1'))
database = client["CO-LAB"]

def test_connection():
    try:
        client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

def initialize_database():
    try:
        db = client["co-lab"]
        users = db["users"]
        users.create_index("username", unique=True)
        users.create_index("email", unique=True)
        return True
    except Exception as e:
        print(e)
        return False

def add_user(user: UserCreate):
    try:
        
        user.password = hashlib.sha256(user.password.encode()).hexdigest()        
        db = client["co-lab"]
        users = db["users"]
        result = users.insert_one(user.model_dump())
        print(result, result.acknowledged)
        return True
    
    except DuplicateKeyError as e:
        print(e)
        return False
    
def auth_user(user: UserLogin):
    try:
        user.password = hashlib.sha256(user.password.encode()).hexdigest()
        db = client["co-lab"]
        users = db["users"]
        user = users.find_one({"username": user.username, "password": user.password})
        return user
    except Exception as e:
        print(e)
        return None