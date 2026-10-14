from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Literal

app = FastAPI(
    title="Cerdas Cermat 3D API",
    description="Starter API untuk jenjang, mata pelajaran, dan contoh soal.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

LEVELS = [
    {"id": "tk", "name": "TK", "theme": "gold", "subjects": ["Bahasa", "Berhitung", "Lingkungan"]},
    {"id": "sd", "name": "SD", "theme": "terracotta", "subjects": ["Matematika", "Bahasa Indonesia", "IPAS"]},
    {"id": "smp", "name": "SMP", "theme": "navy", "subjects": ["Matematika", "IPA", "Bahasa Inggris"]},
    {"id": "sma", "name": "SMA", "theme": "emerald", "subjects": ["Matematika", "Fisika", "Kimia", "Biologi"]},
]

class AnswerRequest(BaseModel):
    question_id: str
    answer: Literal["A", "B", "C", "D"]

class Option(BaseModel):
    key: Literal["A", "B", "C", "D"]
    text: str

class Question(BaseModel):
    id: str
    level_id: str
    subject: str
    topic: str
    prompt: str
    options: list[Option]
    correct_answer: Literal["A", "B", "C", "D"]
    explanation: str

QUESTIONS = [
    Question(
        id="sd-math-001",
        level_id="sd",
        subject="Matematika",
        topic="Perkalian",
        prompt="Hasil dari 12 × 4 adalah …",
        options=[
            Option(key="A", text="16"),
            Option(key="B", text="36"),
            Option(key="C", text="48"),
            Option(key="D", text="52"),
        ],
        correct_answer="C",
        explanation="12 × 4 berarti 12 dijumlahkan sebanyak 4 kali: 12 + 12 + 12 + 12 = 48.",
    ),
    Question(
        id="smp-math-001",
        level_id="smp",
        subject="Matematika",
        topic="Persamaan linear",
        prompt="Jika 3x + 5 = 20, nilai x adalah …",
        options=[
            Option(key="A", text="3"),
            Option(key="B", text="5"),
            Option(key="C", text="7"),
            Option(key="D", text="15"),
        ],
        correct_answer="B",
        explanation="Kurangi kedua ruas dengan 5: 3x = 15. Bagi kedua ruas dengan 3, sehingga x = 5.",
    ),
]

@app.get("/")
def root():
    return {"name": "Cerdas Cermat 3D API", "docs": "/docs", "status": "ok"}

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.get("/api/levels")
def get_levels():
    return LEVELS

@app.get("/api/levels/{level_id}")
def get_level(level_id: str):
    for level in LEVELS:
        if level["id"] == level_id.lower():
            return level
    raise HTTPException(status_code=404, detail="Jenjang tidak ditemukan")

@app.get("/api/questions")
def get_questions(level_id: str | None = None, subject: str | None = None):
    items = QUESTIONS
    if level_id:
        items = [q for q in items if q.level_id == level_id.lower()]
    if subject:
        items = [q for q in items if q.subject.lower() == subject.lower()]
    # Kunci jawaban sengaja tidak disertakan pada endpoint daftar untuk pola API yang lebih aman.
    return [
        {
            "id": q.id, "level_id": q.level_id, "subject": q.subject,
            "topic": q.topic, "prompt": q.prompt, "options": [o.model_dump() for o in q.options]
        }
        for q in items
    ]

@app.post("/api/answer")
def check_answer(payload: AnswerRequest):
    question = next((q for q in QUESTIONS if q.id == payload.question_id), None)
    if not question:
        raise HTTPException(status_code=404, detail="Soal tidak ditemukan")
    correct = payload.answer == question.correct_answer
    return {
        "question_id": question.id,
        "is_correct": correct,
        "correct_answer": question.correct_answer,
        "explanation": question.explanation,
    }
