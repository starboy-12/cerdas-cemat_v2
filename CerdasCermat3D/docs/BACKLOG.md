# Backlog Cerdas Cermat 3D

**Estimasi:** story point Fibonacci (1, 2, 3, 5, 8, 13). Angka adalah perkiraan awal, bukan janji durasi. Sprint diasumsikan 2 minggu. Status awal semua **BELUM** karena belum ada bukti kode proyek ini sudah dikerjakan; ubah menjadi SELESAI setelah diverifikasi di repository.

## Prioritas
- **P0:** wajib untuk MVP.
- **P1:** peningkatan penting.
- **P2:** lanjutan setelah MVP stabil.

## Frontend backlog

| ID | Tugas | Prioritas | SP | Sprint | Status |
|---|---|---:|---:|---:|---|
| FE-01 | Setup React, Vite, TypeScript, struktur folder | P0 | 3 | 1 | SELESAI - starter |
| FE-02 | Token warna dan tema per jenjang | P0 | 3 | 1 | SELESAI - starter |
| FE-03 | Rak/kartu buku TK, SD, SMP, SMA | P0 | 5 | 1 | SELESAI - starter |
| FE-04 | Sampul, halaman, bayangan, perspektif 3D | P0 | 5 | 1 | SELESAI - prototipe |
| FE-05 | Navigasi halaman sebelumnya/berikutnya | P0 | 3 | 1 | SELESAI - prototipe |
| FE-06 | Hubungkan daftar jenjang dan mapel ke API | P0 | 3 | 1 | SELESAI - starter |
| FE-07 | Pilih kurikulum, kelas, mapel, materi | P0 | 5 | 2 | BELUM |
| FE-08 | Tampilan soal pilihan ganda dan pembahasan | P0 | 5 | 2 | BELUM |
| FE-09 | Rekap nilai dan progres | P0 | 5 | 2 | BELUM |
| FE-10 | Responsif tablet dan ponsel | P0 | 3 | 2 | BELUM |
| FE-11 | Daftar isi dan lompat halaman | P1 | 3 | 3 | BELUM |
| FE-12 | Gesture swipe dan tarik sudut halaman | P1 | 5 | 3 | BELUM |
| FE-13 | Animasi rak 3D menggunakan Three.js | P1 | 8 | 4 | BELUM |
| FE-14 | Bookmark dan lanjutkan halaman terakhir | P1 | 3 | 4 | BELUM |
| FE-15 | Aksesibilitas, keyboard, reduced motion | P1 | 5 | 4 | BELUM |
| FE-16 | Mode offline/PWA | P2 | 8 | 5 | BELUM |
| FE-17 | Tes UI dan end-to-end | P1 | 5 | 5 | BELUM |

## Backend backlog

| ID | Tugas | Prioritas | SP | Sprint | Status |
|---|---|---:|---:|---:|---|
| BE-01 | Setup FastAPI, konfigurasi, health endpoint | P0 | 3 | 1 | SELESAI - starter |
| BE-02 | Model level dan subject, endpoint baca | P0 | 5 | 1 | SELESAI - starter |
| BE-03 | Skema kurikulum, kelas, mapel, materi | P0 | 5 | 2 | BELUM |
| BE-04 | CRUD soal dan opsi jawaban | P0 | 5 | 2 | BELUM |
| BE-05 | Endpoint penilaian dan pembahasan | P0 | 5 | 2 | BELUM |
| BE-06 | Aturan publikasi: tepat 50 soal per materi | P0 | 3 | 2 | BELUM |
| BE-07 | PostgreSQL dan Alembic migration | P0 | 5 | 3 | BELUM |
| BE-08 | Login, hash password, JWT dan role | P1 | 8 | 3 | BELUM |
| BE-09 | Simpan attempt, skor, dan progres | P0 | 5 | 3 | BELUM |
| BE-10 | Panel admin/guru dan audit perubahan | P1 | 8 | 4 | BELUM |
| BE-11 | Impor/ekspor CSV atau Excel | P1 | 5 | 4 | BELUM |
| BE-12 | Review guru dan status draft/disetujui/terbit | P1 | 5 | 4 | BELUM |
| BE-13 | Tes API dan validasi kontrak | P1 | 5 | 5 | BELUM |
| BE-14 | Rate limiting, logging, backup | P1 | 5 | 5 | BELUM |
| BE-15 | Docker dan deployment HTTPS | P2 | 8 | 6 | BELUM |

## Konten kurikulum

| ID | Tugas | Prioritas | SP | Sprint | Status |
|---|---|---:|---:|---:|---|
| CT-01 | Petakan kurikulum dan capaian belajar TK | P0 | 5 | 1 | BELUM |
| CT-02 | Petakan kurikulum dan materi SD | P0 | 8 | 2 | BELUM |
| CT-03 | Petakan kurikulum dan materi SMP | P0 | 8 | 3 | BELUM |
| CT-04 | Petakan kurikulum dan materi SMA | P0 | 8 | 4 | BELUM |
| CT-05 | Buat 50 soal pilot per materi | P0 | 13 | 3-5 | BELUM |
| CT-06 | Validasi kunci dan pembahasan oleh guru | P0 | 13 | 3-6 | BELUM |
| CT-07 | Impor konten dan cek duplikasi/kelengkapan | P1 | 5 | 5 | BELUM |

## Definition of Done
Tugas dianggap selesai bila kodenya ada di repository, bisa dijalankan, ada validasi/error handling yang sesuai, UI responsif untuk tugas frontend, dan tes atau langkah uji manual didokumentasikan. Untuk soal: kunci dan pembahasan harus diperiksa; jumlah 50 dihitung per materi, jenjang, dan kurikulum yang sesuai.
