from fastapi import FastAPI
from .users.user_routes import router as user_router
from .projects.project_routes import router as project_router

app = FastAPI()

app.include_router(user_router, prefix="/users")
app.include_router(project_router, prefix="/projects")


def main():
    pass

if __name__ == "__main__":
    main()
