# BMI Calculator

Ein einfacher, aber moderner **Body-Mass-Index Rechner** mit **FastAPI (Backend)** und **Next.js + Tailwind CSS (Frontend)**.

---

## Tech-Stack

- **Backend:** FastAPI
- **Frontend:** Next.js mit Tailwind CSS
- **API Testing**: Postman + Dokumentation in GitHub Wiki
- **Deployment**: lokal via Uvicorn und Next.js dev server

---

## Setup (lokal ausführen)

### Backend starten:
```bash
cd backend
uvicorn app.main:app --reload
```

### Frontend starten:
```bash
cd frontend/my-project
npm install
npm run dev
```

Frontend läuft auf http://localhost:3000, Backend auf http://localhost:8000.

# Testen mit Postman

Alle Fehlerfälle und Testfälle findest du in der API-Wiki-Seite

# Projektstruktur

bmi-calculator/
├── backend/     ← FastAPI-Projekt
├── frontend/    ← Next.js + Tailwind
└── .gitignore


# Autor
**Fabian Facal Biemmi**
