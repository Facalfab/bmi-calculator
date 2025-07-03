# BMI Calculator API

Eine einfache und nützliche API zur Berechnung des Body Mass Index (BMI) entwickelt mit [FastAPI](https://fastapi.tiangolo.com/).  

---

## Tech-Stack

- **Backend:** Python 3.11, FastAPI
- **API-Dokumentation:** Swagger UI
- **Testtools:** Postman

---

## Setup (lokal ausführen)

### 1. Repository klonen
```bash
git clone https://github.com/Facalfab/bmi-calculator.git
cd bmi-calculator
```

### 2. Virtuelle Umgebung aktivieren
```bash
python -m venv venv
source venv/bin/activate   # für Windows: venv\Scripts\activate
```

### 3. Abhängigkeiten installieren
```bash
pip install -r requirements.txt
```

### 4. Server starten
```bash
uvicorn main:app --reload
```
Swagger UI erreichbar unter:
http://127.0.0.1:8000/docs

## API-Endpunkt

### POST/bmi

Berechnet den BMI anhand von Gewicht und Körpergrösse

Beispiel-Request
```json
{
  "weight": 78.6,
  "height": 180
}
```

Beispiel-Response
```json
{
  "bmi": 24.2,
  "category": "Normalgewicht"
}
```

## Fehlerbehandlung

## ⚠️ Fehlerbehandlung

| Fehlerfall               | Statuscode | Beispiel                            |
|--------------------------|------------|-------------------------------------|
| Gewicht fehlt            | 422        | `{ "height": 180 }`                 |
| Höhe ist 0 oder negativ  | 400        | `{ "weight": 70, "height": 0 }`     |
| Ungültiger Datentyp      | 422        | `{ "weight": "abc", "height": 180 }`|

Siehe vollständige Fehlerübersicht in der [Wiki](https://github.com/Facalfab/bmi-calculator/wiki/Fehlerübersicht)

## Postman
Eine vollständige Postman-Test-Collection ist in Arbeit.
