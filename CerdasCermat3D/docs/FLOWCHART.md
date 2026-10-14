# Flowchart Cerdas Cermat 3D

Semua diagram menggunakan Mermaid. Buka file Markdown ini di VS Code dengan ekstensi Mermaid, atau tempel kode diagram ke https://mermaid.live.

## 1. Flowchart utama aplikasi

```mermaid
flowchart TD
    A([Mulai]) --> B[Halaman utama / rak buku 3D]
    B --> C{Pilih jenjang}
    C -->|TK| D1[Buku TK - emas pastel]
    C -->|SD| D2[Buku SD - merah bata]
    C -->|SMP| D3[Buku SMP - biru navy]
    C -->|SMA| D4[Buku SMA - hijau zamrud]
    D1 --> E[Pilih kurikulum]
    D2 --> E
    D3 --> E
    D4 --> E
    E --> F[Pilih mata pelajaran]
    F --> G[Pilih materi]
    G --> H{Paket materi tersedia?}
    H -->|Tidak| I[Tampilkan status belum tersedia]
    H -->|Ya| J[Buka buku 3D]
    J --> K[Daftar isi / navigasi halaman]
    K --> L[Baca soal dan pilih jawaban A-D]
    L --> M[Validasi jawaban oleh API]
    M --> N[Tampilkan benar/salah dan pembahasan]
    N --> O{Soal selesai?}
    O -->|Belum| P[Halaman berikutnya]
    P --> L
    O -->|Ya| Q[Rekap nilai dan materi yang perlu dilatih]
    Q --> R[Simpan progres]
    R --> S([Selesai])
```

## 2. Alur produksi konten soal

```mermaid
flowchart TD
    A[CP/KD dan dokumen kurikulum] --> B[Pemetaan jenjang, kelas, mapel, materi]
    B --> C[Guru/admin membuat draft soal]
    C --> D[Validasi format dan pilihan jawaban]
    D --> E[Verifikasi kunci dan pembahasan]
    E --> F{Lolos pemeriksaan?}
    F -->|Tidak| C
    F -->|Ya| G[Review guru]
    G --> H{Disetujui dan jumlah 50 soal?}
    H -->|Tidak| C
    H -->|Ya| I[Terbitkan paket materi]
    I --> J[Tersedia di API]
```

## 3. Arsitektur sistem

```mermaid
flowchart LR
    U[Siswa / Guru / Admin] --> FE[Frontend React + TypeScript]
    FE --> API[FastAPI REST API]
    API --> DB[(SQLite saat prototipe)]
    API -. target produksi .-> PG[(PostgreSQL)]
    API --> VAL[Validasi soal dan penilaian]
    FE --> BOOK[Mesin buku 3D CSS]
    BOOK --> UI[Halaman buku, soal, pembahasan]
```

## 4. Siklus membalik halaman

```mermaid
stateDiagram-v2
    [*] --> Siap
    Siap --> Animasi: klik / swipe / tombol
    Animasi --> SimpanPosisi: animasi selesai
    Animasi --> Siap: input baru diabaikan
    SimpanPosisi --> Siap
```
