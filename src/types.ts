export type LevelId = 'tk' | 'sd' | 'smp' | 'sma'

export interface Level {
  id: LevelId
  name: string
  color: string
  theme: string
  tagline: string
  icon: string
  subjects: string[]
  gradeRange: string
  description: string
}

export type AnswerKey = 'A' | 'B' | 'C' | 'D'

export interface Option {
  key: AnswerKey
  text: string
}

export interface Question {
  id: string
  level_id: LevelId
  subject: string
  topic: string
  prompt: string
  options: Option[]
  correct_answer: AnswerKey
  explanation: string
  curriculum?: string
}

export interface AnswerResponse {
  question_id: string
  is_correct: boolean
  correct_answer: AnswerKey
  explanation: string
}

export interface UserAttempt {
  selectedAnswer: AnswerKey
  isCorrect: boolean
  timestamp: number
}
