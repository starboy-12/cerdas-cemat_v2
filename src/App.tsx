import React, { useEffect, useState, useTransition } from 'react'
import { AnswerKey, AnswerResponse, Level, Question, UserAttempt } from './types'
import { LEVELS, QUESTIONS } from './data/curriculumData'
import { fetchLevels, fetchQuestions, submitAnswer as apiSubmitAnswer } from './services/api'
import { Topbar } from './components/Topbar'
import { Bookshelf } from './components/Bookshelf'
import { BookReader } from './components/BookReader'
import { ScoreRecapModal } from './components/ScoreRecapModal'

const ATTEMPTS_STORAGE_KEY = 'cerdas_cermat_attempts_v1'

export default function App() {
  const [levels, setLevels] = useState<Level[]>(LEVELS)
  const [selected, setSelected] = useState<Level>(LEVELS[1] || LEVELS[0]) // Default to SD
  const [selectedSubject, setSelectedSubject] = useState<string>(levels[1]?.subjects[0] || 'Matematika')
  const [opened, setOpened] = useState(false)
  const [page, setPage] = useState(1)
  const [apiStatus, setApiStatus] = useState('Memeriksa backend…')
  const [questions, setQuestions] = useState<Question[]>([])
  const [allQuestions] = useState<Question[]>(QUESTIONS)
  const [attempts, setAttempts] = useState<Record<string, UserAttempt>>(() => {
    try {
      const saved = localStorage.getItem(ATTEMPTS_STORAGE_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })
  const [isRecapOpen, setIsRecapOpen] = useState(false)
  const [, startTransition] = useTransition()

  // Load levels from API on mount
  useEffect(() => {
    fetchLevels()
      .then(fetched => {
        setLevels(fetched)
        setApiStatus('Mode Interaktif Aktif')
      })
      .catch(() => {
        setApiStatus('Mode Interaktif Lokal')
      })
  }, [])

  // Load questions whenever selected level or subject changes
  useEffect(() => {
    fetchQuestions(selected.id, selectedSubject)
      .then(qList => {
        setQuestions(qList)
        setPage(1)
      })
      .catch(() => {
        const local = QUESTIONS.filter(
          q => q.level_id === selected.id && q.subject.toLowerCase() === selectedSubject.toLowerCase()
        )
        setQuestions(local)
        setPage(1)
      })
  }, [selected.id, selectedSubject])

  // Keyboard navigation for page flip (ArrowLeft and ArrowRight)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!opened) return
      if (e.key === 'ArrowRight') {
        setPage(p => Math.min(Math.max(1, questions.length), p + 1))
      } else if (e.key === 'ArrowLeft') {
        setPage(p => Math.max(1, p - 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [opened, questions.length])

  function chooseLevel(level: Level) {
    setSelected(level)
    const initialSubject = level.subjects[0] || ''
    setSelectedSubject(initialSubject)
    setOpened(false)
    setPage(1)
  }

  function chooseSubject(subject: string) {
    setSelectedSubject(subject)
    setPage(1)
    if (!opened) {
      setOpened(true)
    }
  }

  async function handleSubmitAnswer(questionId: string, answer: AnswerKey): Promise<AnswerResponse> {
    const res = await apiSubmitAnswer(questionId, answer)
    startTransition(() => {
      setAttempts(prev => {
        const updated = {
          ...prev,
          [questionId]: {
            selectedAnswer: answer,
            isCorrect: res.is_correct,
            timestamp: Date.now()
          }
        }
        try {
          localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(updated))
        } catch {
          // ignore storage quota error
        }
        return updated
      })
    })
    return res
  }

  function handleResetAttempts() {
    setAttempts({})
    try {
      localStorage.removeItem(ATTEMPTS_STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  const totalAnswered = Object.keys(attempts).length
  const totalCorrect = Object.values(attempts).filter(a => a.isCorrect).length

  return (
    <main className="app-shell" style={{ '--accent': selected.color } as React.CSSProperties}>
      <Topbar
        apiStatus={apiStatus}
        totalAnswered={totalAnswered}
        totalCorrect={totalCorrect}
        onOpenRecap={() => setIsRecapOpen(true)}
      />

      <section className="intro">
        <p className="eyebrow">BELAJAR • BERLATIH • BERTUMBUH</p>
        <h2>
          Ilmu terasa dekat,<br />
          <em>halaman demi halaman.</em>
        </h2>
        <p className="intro-copy">
          Pilih jenjangmu, buka buku, dan jelajahi materi dengan pengalaman buku 3D yang hangat dan klasik berbasis Kurikulum Merdeka.
        </p>
      </section>

      <Bookshelf
        levels={levels}
        selectedLevel={selected}
        onSelectLevel={chooseLevel}
      />

      <BookReader
        level={selected}
        subjects={selected.subjects}
        selectedSubject={selectedSubject}
        onSelectSubject={chooseSubject}
        isOpen={opened}
        onToggleOpen={() => setOpened(prev => !prev)}
        page={page}
        onPageChange={setPage}
        questions={questions}
        attempts={attempts}
        onSubmitAnswer={handleSubmitAnswer}
        onOpenRecap={() => setIsRecapOpen(true)}
      />

      <footer>
        <span>✦ Cerdas Cermat 3D</span>
        <span>Belajar dengan tekun dan rasa ingin tahu · Kurikulum Merdeka</span>
      </footer>

      <ScoreRecapModal
        isOpen={isRecapOpen}
        onClose={() => setIsRecapOpen(false)}
        attempts={attempts}
        questions={allQuestions}
        onResetAttempts={handleResetAttempts}
      />
    </main>
  )
}
