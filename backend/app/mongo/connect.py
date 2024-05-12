from fastapi import HTTPException
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import hashlib

from ..users.user_models import UserCreate, UserLogin
from ..projects.project_models import ProjectDetails
from ..blogs.blog_models import BlogDetails
from ..communities.community_models import CommunityDetails

uri = "mongodb+srv://lab_people:qyBY0caO14WQXKkw@co-lab.c1p80fx.mongodb.net/?retryWrites=true&w=majority&appName=CO-LAB"
client: MongoClient = MongoClient(uri, server_api=ServerApi('1'), uuidRepresentation='standard')
database = client["CO-LAB"]
connection_initialized = False

def test_connection():
    try:

        verify_connection()

        client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)

def verify_connection():
    if connection_initialized == False:
        if initialize_database() is False:
            raise HTTPException(status_code=500, detail="Failed to connect to database")

def initialize_database():
    try:
        db = client["co-lab"]
        users = db["users"]
        users.create_index("username", unique=True)
        users.create_index("email", unique=True)
        return True
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return False

def add_user(user: UserCreate):
    try:
        verify_connection()
        
        user.password = hashlib.sha256(user.password.encode()).hexdigest()        
        db = client["co-lab"]
        users = db["users"]
        result = users.insert_one(user.model_dump())
        print(result, result.acknowledged)
        return True

    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return False
    
def auth_user(user: UserLogin):
    try:

        verify_connection()

        user.password = hashlib.sha256(user.password.encode()).hexdigest()
        db = client["co-lab"]
        users = db["users"]
        user = users.find_one({"username": user.username, "password": user.password})
        return user
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None

def add_project(project: ProjectDetails):
    try:

        verify_connection()

        db = client["co-lab"]
        projects = db["projects"]
        projects.insert_one(project.model_dump())
        return project.id
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
    
def get_projects():
    try:

        verify_connection()

        db = client["co-lab"]
        projects = db["projects"]
        return [ProjectDetails(**project) for project in projects.find()]
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
    
def get_project(project_id):
    try:

        verify_connection()

        db = client["co-lab"]
        projects = db["projects"]
        project = projects.find_one({"id": project_id})
        return ProjectDetails(**project)
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
    
def update_project(project_id, project_update: ProjectDetails):
    try:

        verify_connection()

        db = client["co-lab"]
        projects = db["projects"]
        result = projects.update_one({"id": project_id}, {"$set": project_update.model_dump(exclude={"id"})})
        return result.matched_count
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
            
def delete_project(project_id):
    try:
        
        verify_connection()

        db = client["co-lab"]
        projects = db["projects"]
        result = projects.delete_one({"id": project_id})
        return result.deleted_count
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
    
def add_blog(blog: BlogDetails):
    try:
        verify_connection()
        db = client["co-lab"]
        blogs = db["blogs"]
        blogs.insert_one(blog.model_dump())
        return blog.id
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None

def get_blogs():
    try:
        verify_connection()
        db = client["co-lab"]
        blogs = db["blogs"]
        return [BlogDetails(**blog) for blog in blogs.find()]
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None

def get_blog(blog_id):
    try:
        verify_connection()
        db = client["co-lab"]
        blogs = db["blogs"]
        blog = blogs.find_one({"id": blog_id})
        return BlogDetails(**blog)
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None

def update_blog(blog_id, blog_update: BlogDetails):
    try:
        verify_connection()
        db = client["co-lab"]
        blogs = db["blogs"]
        result = blogs.update_one({"id": blog_id}, {"$set": blog_update.model_dump(exclude={"id"})})
        return result.matched_count
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None

def delete_blog(blog_id):
    try:
        verify_connection()
        db = client["co-lab"]
        blogs = db["blogs"]
        result = blogs.delete_one({"id": blog_id})
        return result.deleted_count
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None

def add_community(community: CommunityDetails):
    try:

        verify_connection()

        db = client["co-lab"]
        communities = db["communities"]
        communities.insert_one(community.model_dump())
        return community.id
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None

def get_communities():
    try:

        verify_connection()

        db = client["co-lab"]
        communities = db["communities"]
        return [CommunityDetails(**community) for community in communities.find()]
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
    
def get_community(community_id):
    try:

        verify_connection()

        db = client["co-lab"]
        communities = db["communities"]
        community = communities.find_one({"id": community_id})
        return CommunityDetails(**community)
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
    
def update_community(community_id, community_update: CommunityDetails):
    try:

        verify_connection()

        db = client["co-lab"]
        communities = db["communities"]
        result = communities.update_one({"id": community_id}, {"$set": community_update.model_dump(exclude={"id"})})
        return result.matched_count
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None
    
def delete_community(community_id):
    try:

        verify_connection()

        db = client["co-lab"]
        communities = db["communities"]
        result = communities.delete_one({"id": community_id})
        return result.deleted_count
    except HTTPException:
        raise HTTPException(status_code=500, detail="Failed to connect to database")
    except Exception as e:
        print("exception:", e)
        return None