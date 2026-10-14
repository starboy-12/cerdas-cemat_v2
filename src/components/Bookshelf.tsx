import React from 'react'
import { Level } from '../types'

interface BookshelfProps {
  levels: Level[]
  selectedLevel: Level
  onSelectLevel: (level: Level) => void
}

export const Bookshelf: React.FC<BookshelfProps> = ({
  levels,
  selectedLevel,
  onSelectLevel
}) => {
  return (
    <section className="level-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">RAK BUKU</p>
          <h2>Pilih jenjang belajar</h2>
        </div>
        <span className="small-note">04 JENJANG</span>
      </div>

      <div className="book-grid">
        {levels.map((level, i) => {
          const isSelected = selectedLevel.id === level.id
          return (
            <button
              className={`book-card ${isSelected ? 'is-selected' : ''}`}
              key={level.id}
              onClick={() => onSelectLevel(level)}
              style={{
                '--book': level.color,
                '--delay': `${i * 75}ms`
              } as React.CSSProperties}
              aria-label={`Pilih buku ${level.name} - ${level.tagline}`}
            >
              <span className="book-spine">
                <span>Cerdas Cermat</span>
                <b>{level.name}</b>
              </span>
              <span className="book-cover">
                <span className="cover-ornament">✧ ───────── ✧</span>
                <span className="cover-icon">{level.icon}</span>
                <strong>Cerdas<br />Cermat</strong>
                <span className="grade">{level.name}</span>
                <span className="cover-rule" />
                <small>Kurikulum Merdeka</small>
                <span className="cover-tagline">{level.tagline}</span>
              </span>
              <span className="book-pages" />
            </button>
          )
        })}
      </div>
    </section>
  )
}
