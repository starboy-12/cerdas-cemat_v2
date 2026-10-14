# Cerdas Cermat 3D

Starter project untuk aplikasi belajar berbentuk buku 3D dengan jenjang TK, SD, SMP, dan SMA. Setiap jenjang mempunyai palet warna dan suasana berbeda. Frontend dan backend dipisahkan.

## Isi proyek
- `frontend/`: React + Vite + TypeScript, UI rak buku dan prototipe buku 3D yang bisa dibalik.
- `backend/`: FastAPI + SQLite starter API, endpoint jenjang, mata pelajaran, dan contoh soal.
- `docs/`: flowchart Mermaid, backlog dengan story point, pilihan teknologi, rancangan database, dan roadmap.

> Catatan: ini adalah fondasi yang bisa dijalankan dan dikembangkan di VS Code, bukan bank soal kurikulum lengkap. Materi/soal final perlu diisi dan ditinjau guru. Target 50 soal per materi dicatat sebagai aturan produk.

## Prasyarat
- Node.js 20+ dan npm
- Python 3.11 atau 3.12
- VS Code

## 1. Jalankan backend
Buka terminal VS Code:

```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Jika perintah `py -3.12` tidak tersedia, instal Python 3.12 dari python.org, lalu buka terminal baru. Pada Windows PowerShell jika aktivasi diblokir, jalankan `Set-ExecutionPolicy -Scope Process Bypass` pada terminal tersebut, lalu aktifkan ulang.

Dokumentasi API: http://127.0.0.1:8000/docs

Backend memakai SQLite secara default agar langsung bisa dicoba tanpa memasang PostgreSQL. Untuk produksi, pindahkan ke PostgreSQL sesuai `docs/TECHNOLOGY.md`.

## 2. Jalankan frontend
Buka terminal kedua:

```powershell
cd frontend
npm install
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya http://localhost:5173.

Frontend menggunakan `/api` melalui proxy Vite ke backend `http://127.0.0.1:8000`.

## 3. Uji cepat
- Pilih buku TK, SD, SMP, atau SMA.
- Tekan tombol **Buka Buku**.
- Gunakan tombol **Halaman berikutnya/sebelumnya** atau panah keyboard untuk membalik halaman.
- Pilih jenjang dan lihat contoh mata pelajaran dari backend.
- Buka `/docs` untuk mencoba endpoint API.

## Struktur folder
```text
CerdasCermat3D/
├── frontend/
├── backend/
└── docs/
```

## Tahap pengembangan berikutnya
1. Ganti data contoh dengan daftar mata pelajaran dan materi yang telah divalidasi.
2. Buat editor admin/guru dan impor CSV/Excel.
3. Tambahkan autentikasi, peran pengguna, penyimpanan progres, dan tes.
4. Migrasi SQLite ke PostgreSQL dan siapkan deployment.
