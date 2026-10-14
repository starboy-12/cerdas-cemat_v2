import React from 'react'

interface TopbarProps {
  apiStatus: string
  totalAnswered: number
  totalCorrect: number
  onOpenRecap: () => void
}

export const Topbar: React.FC<TopbarProps> = ({
  apiStatus,
  totalAnswered,
  totalCorrect,
  onOpenRecap
}) => {
  return (
    <header className="topbar">
      <div className="brand-mark" aria-hidden="true">✦</div>
      <div>
        <p className="eyebrow">PERPUSTAKAAN BELAJAR DIGITAL</p>
        <h1>Cerdas <em>Cermat 3D</em></h1>
      </div>
      <div className="topbar-actions">
        {totalAnswered > 0 && (
          <button className="rekap-pill" onClick={onOpenRecap} title="Lihat Rekap Nilai">
            🏆 Skor: {totalCorrect}/{totalAnswered}
          </button>
        )}
        <div className="api-pill">
          <span />
          {apiStatus}
        </div>
      </div>
    </header>
  )
}
