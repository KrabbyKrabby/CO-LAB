from fastapi import FastAPI
from .users.user_routes import router as user_router
from .projects.project_routes import router as project_router
from .blogs.blog_routes import router as blog_router
from .communities.community_routes import router as community_router
app = FastAPI()

app.include_router(user_router, prefix="/users")
app.include_router(project_router, prefix="/projects")
app.include_router(blog_router, prefix="/blogs")
app.include_router(community_router, prefix="/communities")

def main():
    pass

if __name__ == "__main__":
    main()
