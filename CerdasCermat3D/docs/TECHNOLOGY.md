# Teknologi Cerdas Cermat 3D

## Stack starter

| Lapisan | Teknologi | Fungsi | Status |
|---|---|---|---|
| Frontend | React, TypeScript, Vite | UI dan struktur aplikasi | Starter |
| Gaya visual | CSS3, CSS 3D transforms | Perspektif, sampul, kertas, bayangan | Prototipe |
| Interaksi | JavaScript/TypeScript, Pointer/Keyboard events | Navigasi dan flip halaman | Prototipe |
| Backend | Python, FastAPI, Pydantic | REST API dan validasi data | Starter |
| Database awal | SQLite | Mudah dijalankan lokal | Starter |
| Database produksi | PostgreSQL + Alembic | Data relasional dan migrasi | Rencana |
| Mesin rak 3D lanjutan | Three.js | Rak 3D yang lebih bebas dan interaktif | Opsional / tahap lanjut |
| State dan cache | TanStack Query, Zustand | Cache API dan state UI | Rencana |
| Rumus | KaTeX | Menampilkan notasi matematika | Rencana |
| Testing frontend | Vitest, Playwright | Unit dan end-to-end | Rencana |
| Testing backend | pytest, HTTPX | Tes endpoint dan aturan | Rencana |
| Deployment | Docker, GitHub Actions | Build dan rilis berulang | Rencana |
| Offline | PWA + service worker | Baca paket yang sudah diunduh | Rencana |
| Konten | CSV/Excel import, panel admin | Pengelolaan bank soal | Rencana |

## Arah desain visual per jenjang
- **TK:** emas pastel, krem, ilustrasi bentuk sederhana, elemen ramah anak.
- **SD:** merah bata, kayu hangat, alat tulis dan globe.
- **SMP:** biru navy, diagram, penggaris, elemen sains.
- **SMA:** hijau zamrud, perpustakaan klasik, aksen emas.

Gunakan satu sistem layout agar konsisten, tetapi bedakan token warna, ilustrasi, dan ornamen per jenjang. Pastikan teks soal mudah dibaca dan kontras cukup.

## Aturan produk yang perlu dijaga
- Jenjang dan kurikulum dipisahkan dengan jelas.
- Setiap materi ditargetkan memiliki 50 soal.
- Setiap soal pilihan ganda mempunyai pilihan A-D, kunci jawaban, dan pembahasan.
- Konten yang akan dipakai siswa harus melalui review guru; draft otomatis bukan sumber kebenaran final.
- Jangan simpan password dalam teks biasa; gunakan hash password jika fitur akun ditambahkan.
- Untuk data anak, minimalkan data pribadi dan tambahkan persetujuan wali sesuai kebutuhan hukum yang berlaku.

## Model data yang disarankan
`Level -> Curriculum -> Subject -> Topic -> Question -> Option`, ditambah `User`, `Attempt`, dan `Progress`. Simpan ID relasional, bukan menempelkan seluruh konten ke satu kolom JSON.

## Rekomendasi urutan
1. Selesaikan prototipe buku dan navigasi.
2. Tetapkan skema data dan API.
3. Isi satu materi per jenjang sebagai pilot.
4. Review isi dan penilaian dengan guru.
5. Bangun panel admin dan autentikasi.
6. Uji aksesibilitas, responsif, performa, lalu deploy.
