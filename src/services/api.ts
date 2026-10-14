import { AnswerKey, AnswerResponse, Level, Question } from '../types'
import { LEVELS, QUESTIONS } from '../data/curriculumData'

export async function fetchLevels(): Promise<Level[]> {
  try {
    const res = await fetch('/api/levels')
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        // Merge with our rich local metadata (tagline, icons, colors)
        return LEVELS.map(local => {
          const match = data.find((d: { id: string }) => d.id === local.id)
          return match ? { ...local, subjects: match.subjects || local.subjects } : local
        })
      }
    }
  } catch {
    // Fallback to local data
  }
  return LEVELS
}

export async function fetchQuestions(levelId?: string, subject?: string): Promise<Question[]> {
  try {
    const params = new URLSearchParams()
    if (levelId) params.append('level_id', levelId)
    if (subject) params.append('subject', subject)

    const res = await fetch(`/api/questions?${params.toString()}`)
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        // Hydrate questions with local explanations if backend hid them
        return data.map((item: Partial<Question>) => {
          const local = QUESTIONS.find(q => q.id === item.id)
          return {
            id: item.id || local?.id || 'q-default',
            level_id: (item.level_id || local?.level_id || 'sd') as Question['level_id'],
            subject: item.subject || local?.subject || '',
            topic: item.topic || local?.topic || '',
            prompt: item.prompt || local?.prompt || '',
            options: item.options || local?.options || [],
            correct_answer: (local?.correct_answer || 'A') as AnswerKey,
            explanation: local?.explanation || ''
          }
        })
      }
    }
  } catch {
    // Fallback to local data
  }

  let filtered = [...QUESTIONS]
  if (levelId) {
    filtered = filtered.filter(q => q.level_id.toLowerCase() === levelId.toLowerCase())
  }
  if (subject) {
    filtered = filtered.filter(q => q.subject.toLowerCase() === subject.toLowerCase())
  }
  return filtered
}

export async function submitAnswer(questionId: string, answer: AnswerKey): Promise<AnswerResponse> {
  try {
    const res = await fetch('/api/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question_id: questionId, answer })
    })
    if (res.ok) {
      return await res.json()
    }
  } catch {
    // Fallback to local evaluation
  }

  const question = QUESTIONS.find(q => q.id === questionId)
  if (!question) {
    throw new Error('Soal tidak ditemukan')
  }

  return {
    question_id: question.id,
    is_correct: question.correct_answer === answer,
    correct_answer: question.correct_answer,
    explanation: question.explanation
  }
}
