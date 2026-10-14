import React from 'react'
import { Question, UserAttempt } from '../types'

interface ScoreRecapModalProps {
  isOpen: boolean
  onClose: () => void
  attempts: Record<string, UserAttempt>
  questions: Question[]
  onResetAttempts: () => void
}

export const ScoreRecapModal: React.FC<ScoreRecapModalProps> = ({
  isOpen,
  onClose,
  attempts,
  questions,
  onResetAttempts
}) => {
  if (!isOpen) return null

  const attemptedList = Object.entries(attempts).map(([qId, att]) => {
    const q = questions.find(item => item.id === qId)
    return {
      id: qId,
      prompt: q?.prompt || qId,
      subject: q?.subject || 'Materi',
      selected: att.selectedAnswer,
      isCorrect: att.isCorrect
    }
  })

  const totalAnswered = attemptedList.length
  const totalCorrect = attemptedList.filter(a => a.isCorrect).length
  const percentage = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <p className="eyebrow">REKAP PRESTASI BELAJAR</p>
          <h3>Hasil Latihan Soal</h3>
          <p className="muted">Catatan pemahamanmu dari soal yang telah dikerjakan.</p>
        </div>

        <div className="score-highlight">
          <div className="score-circle">{percentage}%</div>
          <div className="score-stats">
            <div><strong>Jawaban Benar:</strong> {totalCorrect} soal</div>
            <div><strong>Jawaban Salah:</strong> {totalAnswered - totalCorrect} soal</div>
            <div><strong>Total Dikerjakan:</strong> {totalAnswered} soal</div>
          </div>
        </div>

        {totalAnswered > 0 ? (
          <div className="rekap-list">
            {attemptedList.map((item, idx) => (
              <div key={item.id} className="rekap-item">
                <div>
                  <small style={{ color: '#887762', fontWeight: 600 }}>{item.subject} • #{idx + 1}</small>
                  <div style={{ color: '#382f23', marginTop: 2 }}>{item.prompt.length > 50 ? `${item.prompt.slice(0, 50)}…` : item.prompt}</div>
                </div>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    fontSize: 10.5,
                    fontWeight: 700,
                    background: item.isCorrect ? '#e3efd9' : '#f8e0da',
                    color: item.isCorrect ? '#2a5316' : '#8c2411'
                  }}
                >
                  {item.isCorrect ? 'Benar ✓' : `Pilih ${item.selected} ✗`}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#887762', fontSize: 13, margin: '20px 0' }}>
            Belum ada soal yang dikerjakan. Buka buku dan jawab soal latihan!
          </p>
        )}

        <div className="modal-footer">
          {totalAnswered > 0 && (
            <button
              onClick={onResetAttempts}
              style={{
                border: '1px solid #c9b99f',
                background: '#f1e6d4',
                color: '#6e5f4c',
                padding: '9px 14px',
                borderRadius: 4,
                fontSize: 12
              }}
            >
              Ulangi Latihan
            </button>
          )}
          <button
            onClick={onClose}
            className="primary-button"
            style={{ width: 'auto', padding: '9px 20px', marginTop: 0 }}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
