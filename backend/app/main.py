from fastapi import FastAPI
from users.routes import router as user_router

app = FastAPI()

app.include_router(user_router, prefix="/users")

def main():
    pass

if __name__ == "__main__":
    main()
