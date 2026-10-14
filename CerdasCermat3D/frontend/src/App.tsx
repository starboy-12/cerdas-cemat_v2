import { useEffect, useState } from 'react'

type Level = { id: string; name: string; color: string; tagline: string; icon: string; subjects: string[] }

const levels: Level[] = [
  { id: 'tk', name: 'TK', color: '#bd8b31', tagline: 'Belajar sambil bermain', icon: '✿', subjects: ['Bahasa', 'Berhitung', 'Lingkungan'] },
  { id: 'sd', name: 'SD', color: '#9d422f', tagline: 'Tumbuh dan berprestasi', icon: '✦', subjects: ['Matematika', 'Bahasa Indonesia', 'IPAS'] },
  { id: 'smp', name: 'SMP', color: '#244f78', tagline: 'Berpikir dan berlatih', icon: '⌘', subjects: ['Matematika', 'IPA', 'Bahasa Inggris'] },
  { id: 'sma', name: 'SMA', color: '#24543d', tagline: 'Siap menatap masa depan', icon: '❖', subjects: ['Matematika', 'Fisika', 'Kimia', 'Biologi'] }
]

export default function App() {
  const [selected, setSelected] = useState<Level>(levels[0])
  const [opened, setOpened] = useState(false)
  const [page, setPage] = useState(1)
  const [apiStatus, setApiStatus] = useState('Memeriksa backend…')
  const [subjects, setSubjects] = useState<string[]>(levels[0].subjects)

  useEffect(() => {
    fetch('/api/levels')
      .then(r => { if (!r.ok) throw new Error('API belum aktif'); return r.json() })
      .then(data => {
        setApiStatus('Backend tersambung')
        const match = data.find((item: {id:string}) => item.id === selected.id)
        if (match?.subjects?.length) setSubjects(match.subjects)
      })
      .catch(() => setApiStatus('Mode demo — jalankan backend untuk data API'))
  }, [selected.id])

  function chooseLevel(level: Level) {
    setSelected(level)
    setSubjects(level.subjects)
    setOpened(false)
    setPage(1)
  }

  return <main className="app-shell" style={{ '--accent': selected.color } as React.CSSProperties}>
    <header className="topbar">
      <div className="brand-mark">✦</div>
      <div><p className="eyebrow">PERPUSTAKAAN BELAJAR DIGITAL</p><h1>Cerdas <em>Cermat</em></h1></div>
      <div className="api-pill"><span />{apiStatus}</div>
    </header>

    <section className="intro">
      <p className="eyebrow">BELAJAR • BERLATIH • BERTUMBUH</p>
      <h2>Ilmu terasa dekat,<br/><em>halaman demi halaman.</em></h2>
      <p className="intro-copy">Pilih jenjangmu, buka buku, dan jelajahi materi dengan pengalaman buku 3D yang hangat dan klasik.</p>
    </section>

    <section className="level-section">
      <div className="section-heading"><div><p className="eyebrow">RAK BUKU</p><h2>Pilih jenjang belajar</h2></div><span className="small-note">04 JENJANG</span></div>
      <div className="book-grid">
        {levels.map((level, i) => <button className={`book-card ${selected.id === level.id ? 'is-selected' : ''}`} key={level.id} onClick={() => chooseLevel(level)} style={{ '--book': level.color, '--delay': `${i * 80}ms` } as React.CSSProperties}>
          <span className="book-spine"><span>Cerdas Cermat</span><b>{level.name}</b></span>
          <span className="book-cover">
            <span className="cover-ornament">✧ ───────── ✧</span>
            <span className="cover-icon">{level.icon}</span>
            <strong>Cerdas<br/>Cermat</strong>
            <span className="grade">{level.name}</span>
            <span className="cover-rule" />
            <small>Kurikulum Merdeka</small>
            <span className="cover-tagline">{level.tagline}</span>
          </span>
          <span className="book-pages" />
        </button>)}
      </div>
    </section>

    <section className="reader-section">
      <div className="section-heading"><div><p className="eyebrow">RUANG BACA</p><h2>Buku {selected.name}</h2></div><span className="small-note">{String(page).padStart(2,'0')} / 50</span></div>
      <div className="reader-layout">
        <aside className="reader-sidebar">
          <p className="eyebrow">DAFTAR ISI</p>
          <h3>{selected.name} · Kurikulum Merdeka</h3>
          <p className="muted">Pilih mata pelajaran untuk memulai perjalanan belajar.</p>
          <div className="subject-list">{subjects.map((subject, i) => <button key={subject} className={i === 0 ? 'subject active' : 'subject'} onClick={() => {setPage(1); setOpened(true)}}><span>{String(i+1).padStart(2,'0')}</span>{subject}<b>↗</b></button>)}</div>
          <button className="primary-button" onClick={() => {setOpened(!opened); setPage(1)}}>{opened ? 'Tutup buku' : 'Buka buku'} <span>→</span></button>
        </aside>
        <div className={`book-stage ${opened ? 'book-open' : ''}`}>
          {!opened ? <button className="closed-book" onClick={() => setOpened(true)} style={{ '--book': selected.color } as React.CSSProperties}>
            <span className="closed-spine">Cerdas Cermat · {selected.name}</span><span className="closed-cover"><small>KURIKULUM MERDEKA</small><strong>Cerdas<br/>Cermat</strong><em>{selected.name}</em><i>✧ ───── ✧</i><span>{selected.tagline}</span></span>
          </button> : <div className="open-book">
            <div className="paper left-page"><small>DAFTAR ISI</small><h3>{subjects[0] ?? 'Materi'}</h3><p>Belajar dengan tekun dan rasa ingin tahu.</p><div className="fake-line"/><div className="fake-line short"/><div className="fake-line"/><div className="fake-line medium"/><span className="page-number">{Math.max(1,page*2-1)}</span></div>
            <div className="paper right-page"><small>{subjects[0] ?? 'MATERI'} · SOAL {page}</small><h3>{page}. Mari berlatih!</h3><p>Contoh soal pembelajaran</p><strong>{selected.id === 'tk' ? 'Ayo hitung bersama!' : selected.id === 'sd' ? '12 × 4 = …' : selected.id === 'smp' ? 'Jika 3x + 5 = 20, nilai x adalah …' : 'Jika f(x) = 2x + 3, nilai f(4) adalah …'}</strong><div className="answer-grid"><button onClick={() => alert('Jawaban tersimpan pada prototipe demo.')}>A. 12</button><button onClick={() => alert('Jawaban tersimpan pada prototipe demo.')}>B. 24</button><button onClick={() => alert('Jawaban tersimpan pada prototipe demo.')}>C. 36</button><button onClick={() => alert('Jawaban tersimpan pada prototipe demo.')}>D. 48</button></div><p className="explanation">Pilih jawaban untuk latihan. Soal di sini masih contoh prototipe.</p><span className="page-number">{page*2}</span><div className={`flip-sheet ${page % 2 ? 'flip-forward' : 'flip-back'}`} key={page}/></div>
          </div>}
          <div className="reader-controls"><button disabled={!opened || page <= 1} onClick={() => setPage(p => Math.max(1,p-1))}>← Sebelumnya</button><span>{opened ? `Halaman ${page}` : 'Sampul buku'}</span><button disabled={!opened || page >= 25} onClick={() => setPage(p => Math.min(25,p+1))}>Berikutnya →</button></div>
        </div>
      </div>
    </section>
    <footer><span>✦ Cerdas Cermat 3D</span><span>Belajar dengan rasa ingin tahu.</span></footer>
  </main>
}
