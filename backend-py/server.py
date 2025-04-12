from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from route import router
app = FastAPI(title="Daylight API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/daylight")

@app.get("/")
def root():
    return {
        "status": "success",
        "message": "Welcome to the Daylight API"
    }
