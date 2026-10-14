import React, { useState } from 'react'
import { AnswerKey, AnswerResponse, Level, Question, UserAttempt } from '../types'

interface BookReaderProps {
  level: Level
  subjects: string[]
  selectedSubject: string
  onSelectSubject: (subject: string) => void
  isOpen: boolean
  onToggleOpen: () => void
  page: number
  onPageChange: (newPage: number) => void
  questions: Question[]
  attempts: Record<string, UserAttempt>
  onSubmitAnswer: (questionId: string, answer: AnswerKey) => Promise<AnswerResponse>
  onOpenRecap: () => void
}

export const BookReader: React.FC<BookReaderProps> = ({
  level,
  subjects,
  selectedSubject,
  onSelectSubject,
  isOpen,
  onToggleOpen,
  page,
  onPageChange,
  questions,
  attempts,
  onSubmitAnswer,
  onOpenRecap
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeExplanation, setActiveExplanation] = useState<AnswerResponse | null>(null)
  const [flipDirection, setFlipDirection] = useState<'forward' | 'back'>('forward')

  // Current question according to page (1-based index)
  const currentQuestionIndex = page - 1
  const currentQuestion: Question | undefined = questions[currentQuestionIndex]
  const totalPages = Math.max(1, questions.length)

  // Current attempt if answered before
  const currentAttempt = currentQuestion ? attempts[currentQuestion.id] : undefined

  async function handleOptionSelect(key: AnswerKey) {
    if (!currentQuestion || isSubmitting) return
    setIsSubmitting(true)
    try {
      const result = await onSubmitAnswer(currentQuestion.id, key)
      setActiveExplanation(result)
    } finally {
      setIsSubmitting(false)
    }
  }

  function handlePrevPage() {
    if (page > 1) {
      setFlipDirection('back')
      setActiveExplanation(null)
      onPageChange(page - 1)
    }
  }

  function handleNextPage() {
    if (page < totalPages) {
      setFlipDirection('forward')
      setActiveExplanation(null)
      onPageChange(page + 1)
    }
  }

  // Count answered questions for a given subject
  function getSubjectProgress(subjectName: string) {
    const subjectQuestions = questions.filter(q => q.subject.toLowerCase() === subjectName.toLowerCase())
    if (subjectQuestions.length === 0) return ''
    const answered = subjectQuestions.filter(q => attempts[q.id] !== undefined).length
    return `${answered}/${subjectQuestions.length}`
  }

  return (
    <section className="reader-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">RUANG BACA</p>
          <h2>Buku {level.name}</h2>
        </div>
        <span className="small-note">
          {isOpen
            ? `HALAMAN ${String(page).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`
            : 'SAMPUL BUKU'}
        </span>
      </div>

      <div className="reader-layout">
        {/* Sidebar */}
        <aside className="reader-sidebar">
          <p className="eyebrow">DAFTAR ISI</p>
          <h3>{level.name} · Kurikulum Merdeka</h3>
          <span className="grade-badge">{level.gradeRange}</span>
          <p className="muted">{level.description}</p>

          <div className="subject-list">
            {subjects.map((subj, idx) => {
              const isActive = subj.toLowerCase() === selectedSubject.toLowerCase()
              const progress = getSubjectProgress(subj)
              return (
                <button
                  key={subj}
                  className={`subject ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    onSelectSubject(subj)
                    setActiveExplanation(null)
                  }}
                  aria-label={`Pilih mata pelajaran ${subj}`}
                >
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  {subj}
                  {progress && <span className="subject-progress">{progress}</span>}
                  <b>↗</b>
                </button>
              )
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
            <button
              className="primary-button"
              onClick={onToggleOpen}
            >
              {isOpen ? 'Tutup buku' : 'Buka buku'}
              <span>{isOpen ? '✕' : '→'}</span>
            </button>
            <button
              onClick={onOpenRecap}
              style={{
                background: 'transparent',
                border: '1px solid #d4c5af',
                color: '#655745',
                padding: '10px 14px',
                borderRadius: 4,
                fontSize: 11.5,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              📊 Lihat Hasil & Rekap Nilai
            </button>
          </div>
        </aside>

        {/* 3D Book Stage */}
        <div className={`book-stage ${isOpen ? 'book-open' : ''}`}>
          {!isOpen ? (
            <button
              className="closed-book"
              onClick={onToggleOpen}
              style={{ '--book': level.color } as React.CSSProperties}
              title="Klik untuk membuka buku"
            >
              <span className="closed-spine">Cerdas Cermat · {level.name}</span>
              <span className="closed-cover">
                <small>KURIKULUM MERDEKA</small>
                <strong>Cerdas<br />Cermat</strong>
                <em>{level.name}</em>
                <i>✧ ───── ✧</i>
                <span>{level.tagline}</span>
                <span className="click-to-open-hint">Klik untuk Membuka Buku</span>
              </span>
            </button>
          ) : (
            <div className="open-book">
              {/* Left Page: Table of contents & subject context */}
              <div className="paper left-page">
                <small>DAFTAR ISI & MATERI</small>
                <h3>{selectedSubject || 'Materi'}</h3>
                {currentQuestion?.topic && (
                  <span className="topic-tag">Topik: {currentQuestion.topic}</span>
                )}
                <p>
                  Belajar dengan tekun, teliti, dan rasa ingin tahu. Pahami konsep dasarnya sebelum memilih jawaban terbaik.
                </p>

                <div className="curriculum-note">
                  <strong>Kurikulum Merdeka</strong>
                  <div>Panduan belajar mandiri & penguatan konsep {selectedSubject}. Halaman ini memuat panduan materi untuk soal latihan di samping.</div>
                </div>

                <div className="fake-line" />
                <div className="fake-line short" />
                <div className="fake-line medium" />

                <span className="page-number">{Math.max(1, page * 2 - 1)}</span>
              </div>

              {/* Right Page: Question & Answer interactive options */}
              <div className="paper right-page">
                <small>
                  {selectedSubject.toUpperCase()} · SOAL {page} DARI {totalPages}
                </small>

                {currentQuestion ? (
                  <>
                    <h3>{page}. Mari berlatih!</h3>
                    <p style={{ fontSize: 11, color: '#887762', marginBottom: 6 }}>
                      Topik: <em>{currentQuestion.topic}</em>
                    </p>

                    <strong>{currentQuestion.prompt}</strong>

                    <div className="answer-grid">
                      {currentQuestion.options.map(opt => {
                        const isSelected = currentAttempt?.selectedAnswer === opt.key
                        const hasAttempt = currentAttempt !== undefined
                        const isCorrectKey =
                          hasAttempt && (activeExplanation?.correct_answer === opt.key || currentQuestion.correct_answer === opt.key)
                        const isChosenIncorrect =
                          hasAttempt && isSelected && !currentAttempt.isCorrect

                        let btnClass = 'answer-btn'
                        if (isSelected) btnClass += ' selected'
                        if (hasAttempt && isCorrectKey) btnClass += ' correct'
                        else if (isChosenIncorrect) btnClass += ' incorrect'

                        return (
                          <button
                            key={opt.key}
                            className={btnClass}
                            onClick={() => handleOptionSelect(opt.key)}
                            disabled={isSubmitting}
                          >
                            <span className="answer-key-badge">{opt.key}</span>
                            <span>{opt.text}</span>
                          </button>
                        )
                      })}
                    </div>

                    {(activeExplanation || currentAttempt) && (
                      <div className="explanation">
                        <span
                          className={`explanation-badge ${
                            (activeExplanation ? activeExplanation.is_correct : currentAttempt?.isCorrect)
                              ? 'correct'
                              : 'incorrect'
                          }`}
                        >
                          {(activeExplanation ? activeExplanation.is_correct : currentAttempt?.isCorrect)
                            ? '✓ Jawaban Benar!'
                            : '✗ Belum Tepat'}
                        </span>
                        <div>
                          {activeExplanation?.explanation || currentQuestion.explanation}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                    <h3>Materi Siap Dipelajari</h3>
                    <p>Pilih mata pelajaran di sebelah kiri untuk mulai membaca latihan.</p>
                  </div>
                )}

                <span className="page-number">{page * 2}</span>

                {/* Flip sheet animation */}
                <div
                  className={`flip-sheet ${flipDirection === 'forward' ? 'flip-forward' : 'flip-back'}`}
                  key={`flip-${page}`}
                />
              </div>
            </div>
          )}

          {/* Reader Controls */}
          <div className="reader-controls">
            <button
              disabled={!isOpen || page <= 1}
              onClick={handlePrevPage}
            >
              ← Halaman Sebelumnya
            </button>
            <span className="reader-status-text">
              {isOpen ? `Halaman ${page} dari ${totalPages}` : 'Sampul Buku'}
            </span>
            <button
              disabled={!isOpen || page >= totalPages}
              onClick={handleNextPage}
            >
              Halaman Berikutnya →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
