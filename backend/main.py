from fastapi import FastAPI, HTTPException, Request
import uvicorn
import math
import time
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from automatefile import runtheapp as starttheautomate
from pyautoguifile import automate_click

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can replace "*" with specific origins
    allow_credentials=True,
    allow_methods=["*"],  # You can replace "*" with specific methods
    allow_headers=["*"],  # You can replace "*" with specific headers
)




@app.get("/make_sine_wave")
def make_sine_wave(amplitude: int = 50, frequency: float = 0.5, duration: int = 10):
    try:
        x_cord = starttheautomate()
        return {"coordinates": x_cord}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/make_button_click")
def make_sine_wave(amplitude: int = 50, frequency: float = 0.5, duration: int = 10):
    try:
        x_cord = starttheautomate()
        return {"coordinates": x_cord}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/main_run")
async def main_run(request: Request):
    try:
        data = await request.json()
        # Access the 'data' key in the received JSON payload
        allpoints = data.get('data')
        # Process the 'allpoints' data as needed
        print("Received data:", allpoints)
        time.sleep(5)
        automate_click(allpoints)

        return {"message": "Data received successfully"}
    except Exception as e:
        print("Error processing request:", e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
