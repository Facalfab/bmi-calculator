from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI()

# ✅ CORS aktivieren
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BMIRequest(BaseModel):
    weight: float = Field(..., gt=0, description="Weight in kilograms")
    height: float = Field(..., gt=0, description="Height in centimeters")

class BMIResponse(BaseModel):
    bmi: float
    category: str

@app.post("/bmi", response_model=BMIResponse)
def calculate_bmi(data: BMIRequest):
    height_m = data.height / 100

    if height_m <= 0:
        raise HTTPException(status_code=400, detail="Height must be greater than 0.")

    bmi = data.weight / (height_m ** 2)
    bmi = round(bmi, 1)

    if bmi < 18.5:
        category = "Untergewicht"
    elif 18.5 <= bmi < 25:
        category = "Normalgewicht"
    elif 25 <= bmi < 30:
        category = "Übergewicht"
    else:
        category = "Adipositas"

    return {"bmi": bmi, "category": category}
