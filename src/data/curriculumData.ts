import { Level, Question } from '../types'

export const LEVELS: Level[] = [
  {
    id: 'tk',
    name: 'TK',
    color: '#bd8b31',
    theme: 'gold',
    tagline: 'Belajar sambil bermain',
    icon: '✿',
    gradeRange: 'PAUD / TK A & B (Usia 4–6)',
    subjects: ['Bahasa', 'Berhitung', 'Lingkungan'],
    description: 'Fondasi awal mengenal huruf, angka, bentuk alam, dan budi pekerti dengan penuh keceriaan.'
  },
  {
    id: 'sd',
    name: 'SD',
    color: '#9d422f',
    theme: 'terracotta',
    tagline: 'Tumbuh dan berprestasi',
    icon: '✦',
    gradeRange: 'Kelas 1 – 6 (Fase A, B, C)',
    subjects: ['Matematika', 'Bahasa Indonesia', 'IPAS'],
    description: 'Mengasah literasi, numerasi, dan pemahaman sains dasar melalui eksplorasi dunia sekitar.'
  },
  {
    id: 'smp',
    name: 'SMP',
    color: '#244f78',
    theme: 'navy',
    tagline: 'Berpikir dan berlatih',
    icon: '⌘',
    gradeRange: 'Kelas 7 – 9 (Fase D)',
    subjects: ['Matematika', 'IPA', 'Bahasa Inggris'],
    description: 'Melatih kemampuan berpikir analitis, pemecahan masalah sains, dan komunikasi multibahasa.'
  },
  {
    id: 'sma',
    name: 'SMA',
    color: '#24543d',
    theme: 'emerald',
    tagline: 'Siap menatap masa depan',
    icon: '❖',
    gradeRange: 'Kelas 10 – 12 (Fase E & F)',
    subjects: ['Matematika', 'Fisika', 'Kimia', 'Biologi'],
    description: 'Pendalaman konsep sains tingkat lanjut, kalkulus, dan penalaran ilmiah untuk perguruan tinggi.'
  }
]

export const QUESTIONS: Question[] = [
  // --- SD - Matematika ---
  {
    id: 'sd-math-001',
    level_id: 'sd',
    subject: 'Matematika',
    topic: 'Perkalian & Pembagian',
    prompt: 'Hasil dari 12 × 4 adalah …',
    options: [
      { key: 'A', text: '16' },
      { key: 'B', text: '36' },
      { key: 'C', text: '48' },
      { key: 'D', text: '52' }
    ],
    correct_answer: 'C',
    explanation: '12 × 4 berarti 12 dijumlahkan sebanyak 4 kali: 12 + 12 + 12 + 12 = 48.'
  },
  {
    id: 'sd-math-002',
    level_id: 'sd',
    subject: 'Matematika',
    topic: 'Pecahan Senilai',
    prompt: 'Pecahan yang senilai dengan 2/4 adalah …',
    options: [
      { key: 'A', text: '1/2' },
      { key: 'B', text: '1/3' },
      { key: 'C', text: '3/4' },
      { key: 'D', text: '2/6' }
    ],
    correct_answer: 'A',
    explanation: 'Membagi pembilang dan penyebut 2/4 dengan 2 menghasilkan 1/2. Keduanya merepresentasikan setengah bagian utuh.'
  },
  {
    id: 'sd-math-003',
    level_id: 'sd',
    subject: 'Matematika',
    topic: 'Geometri Datar',
    prompt: 'Keliling persegi dengan panjang sisi 7 cm adalah …',
    options: [
      { key: 'A', text: '14 cm' },
      { key: 'B', text: '21 cm' },
      { key: 'C', text: '28 cm' },
      { key: 'D', text: '49 cm' }
    ],
    correct_answer: 'C',
    explanation: 'Keliling persegi dihitung dengan rumus K = 4 × sisi = 4 × 7 cm = 28 cm.'
  },
  {
    id: 'sd-math-004',
    level_id: 'sd',
    subject: 'Matematika',
    topic: 'Pengukuran Satuan',
    prompt: 'Ibu membeli 2,5 kg gula pasir. Berapa gram berat gula pasir tersebut?',
    options: [
      { key: 'A', text: '250 gram' },
      { key: 'B', text: '2.500 gram' },
      { key: 'C', text: '25.000 gram' },
      { key: 'D', text: '25 gram' }
    ],
    correct_answer: 'B',
    explanation: '1 kilogram sama dengan 1.000 gram. Jadi 2,5 kg × 1.000 = 2.500 gram.'
  },

  // --- SD - Bahasa Indonesia ---
  {
    id: 'sd-ina-001',
    level_id: 'sd',
    subject: 'Bahasa Indonesia',
    topic: 'Ide Pokok Paragraf',
    prompt: 'Kalimat utama yang memuat inti permasalahan dalam sebuah paragraf disebut …',
    options: [
      { key: 'A', text: 'Gagasan pendukung' },
      { key: 'B', text: 'Ide pokok' },
      { key: 'C', text: 'Kesimpulan akhir' },
      { key: 'D', text: 'Ringkasan cerita' }
    ],
    correct_answer: 'B',
    explanation: 'Ide pokok atau gagasan utama merupakan gagasan yang mendasari pembentukan suatu paragraf.'
  },
  {
    id: 'sd-ina-002',
    level_id: 'sd',
    subject: 'Bahasa Indonesia',
    topic: 'Kosakata & Ejaan',
    prompt: 'Penulisan kata baku yang benar menurut KBBI adalah …',
    options: [
      { key: 'A', text: 'Apotek' },
      { key: 'B', text: 'Apotik' },
      { key: 'C', text: 'Apotiek' },
      { key: 'D', text: 'Apotiq' }
    ],
    correct_answer: 'A',
    explanation: 'Kata baku yang tepat sesuai Pedoman Umum Ejaan Bahasa Indonesia (PUEBI) dan KBBI adalah "apotek" (dengan huruf e).'
  },

  // --- SD - IPAS ---
  {
    id: 'sd-ipas-001',
    level_id: 'sd',
    subject: 'IPAS',
    topic: 'Fotosintesis',
    prompt: 'Tumbuhan hijau memasak makanannya sendiri melalui proses fotosintesis dengan bantuan zat hijau daun yang disebut …',
    options: [
      { key: 'A', text: 'Stomata' },
      { key: 'B', text: 'Klorofil' },
      { key: 'C', text: 'Xilem' },
      { key: 'D', text: 'Floem' }
    ],
    correct_answer: 'B',
    explanation: 'Klorofil adalah pigmen warna hijau pada daun yang menyerap energi cahaya matahari untuk fotosintesis.'
  },
  {
    id: 'sd-ipas-002',
    level_id: 'sd',
    subject: 'IPAS',
    topic: 'Ekosistem & Rantai Makanan',
    prompt: 'Dalam suatu rantai makanan di sawah: Padi → Belalang → Katak → Ular → Elang. Organisme yang bertindak sebagai produsen adalah …',
    options: [
      { key: 'A', text: 'Belalang' },
      { key: 'B', text: 'Katak' },
      { key: 'C', text: 'Padi' },
      { key: 'D', text: 'Elang' }
    ],
    correct_answer: 'C',
    explanation: 'Padi merupakan produsen karena dapat menghasilkan makanan sendiri melalui fotosintesis, sedangkan hewan lainnya adalah konsumen.'
  },

  // --- SMP - Matematika ---
  {
    id: 'smp-math-001',
    level_id: 'smp',
    subject: 'Matematika',
    topic: 'Persamaan Linear Satu Variabel',
    prompt: 'Jika 3x + 5 = 20, nilai x adalah …',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '5' },
      { key: 'C', text: '7' },
      { key: 'D', text: '15' }
    ],
    correct_answer: 'B',
    explanation: 'Kurangi kedua ruas dengan 5: 3x = 15. Bagi kedua ruas dengan 3, sehingga x = 5.'
  },
  {
    id: 'smp-math-002',
    level_id: 'smp',
    subject: 'Matematika',
    topic: 'Teorema Pythagoras',
    prompt: 'Pada segitiga siku-siku dengan panjang sisi tegak 6 cm dan 8 cm, panjang sisi miring (hipotenusa) adalah …',
    options: [
      { key: 'A', text: '9 cm' },
      { key: 'B', text: '10 cm' },
      { key: 'C', text: '12 cm' },
      { key: 'D', text: '14 cm' }
    ],
    correct_answer: 'B',
    explanation: 'c² = a² + b² = 6² + 8² = 36 + 64 = 100. Maka c = √100 = 10 cm.'
  },
  {
    id: 'smp-math-003',
    level_id: 'smp',
    subject: 'Matematika',
    topic: 'Sistem Persamaan Dua Variabel',
    prompt: 'Penyelesaian dari x + y = 10 dan x - y = 4 adalah …',
    options: [
      { key: 'A', text: 'x = 7, y = 3' },
      { key: 'B', text: 'x = 6, y = 4' },
      { key: 'C', text: 'x = 8, y = 2' },
      { key: 'D', text: 'x = 5, y = 5' }
    ],
    correct_answer: 'A',
    explanation: 'Menjumlahkan kedua persamaan: 2x = 14 => x = 7. Substitusikan x = 7: 7 + y = 10 => y = 3.'
  },

  // --- SMP - IPA ---
  {
    id: 'smp-ipa-001',
    level_id: 'smp',
    subject: 'IPA',
    topic: 'Hukum Gerak Newton',
    prompt: 'Hukum Newton I berbunyi: "Suatu benda akan tetap diam atau bergerak lurus beraturan jika resultan gaya yang bekerja sama dengan nol". Sifat ini dikenal sebagai sifat …',
    options: [
      { key: 'A', text: 'Gravitasi' },
      { key: 'B', text: 'Kelembaman (Inersia)' },
      { key: 'C', text: 'Aksi-reaksi' },
      { key: 'D', text: 'Elastisitas' }
    ],
    correct_answer: 'B',
    explanation: 'Kelembaman atau inersia adalah kecenderungan alami setiap benda untuk mempertahankan keadaan geraknya.'
  },
  {
    id: 'smp-ipa-002',
    level_id: 'smp',
    subject: 'IPA',
    topic: 'Biologi Sel',
    prompt: 'Organel sel yang berfungsi sebagai pusat pembangkit energi sel (respirasi seluler) adalah …',
    options: [
      { key: 'A', text: 'Mitokondria' },
      { key: 'B', text: 'Ribosom' },
      { key: 'C', text: 'Retikulum Endoplasma' },
      { key: 'D', text: 'Badan Golgi' }
    ],
    correct_answer: 'A',
    explanation: 'Mitokondria sering dijuluki "powerhouse of the cell" karena menghasilkan energi ATP melalui pembakaran glukosa dan oksigen.'
  },

  // --- SMP - Bahasa Inggris ---
  {
    id: 'smp-ing-001',
    level_id: 'smp',
    subject: 'Bahasa Inggris',
    topic: 'Simple Present Tense',
    prompt: 'Look at the sentence: "The earth … around the sun." What is the correct verb form?',
    options: [
      { key: 'A', text: 'revolve' },
      { key: 'B', text: 'revolves' },
      { key: 'C', text: 'is revolving' },
      { key: 'D', text: 'revolved' }
    ],
    correct_answer: 'B',
    explanation: 'For a general truth or scientific fact with a singular subject (The earth), we use the simple present verb with -s/es: revolves.'
  },

  // --- SMA - Matematika ---
  {
    id: 'sma-math-001',
    level_id: 'sma',
    subject: 'Matematika',
    topic: 'Fungsi & Nilai Fungsi',
    prompt: 'Diketahui fungsi f(x) = 2x² - 3x + 5. Nilai dari f(3) adalah …',
    options: [
      { key: 'A', text: '11' },
      { key: 'B', text: '14' },
      { key: 'C', text: '17' },
      { key: 'D', text: '20' }
    ],
    correct_answer: 'B',
    explanation: 'f(3) = 2(3)² - 3(3) + 5 = 2(9) - 9 + 5 = 18 - 9 + 5 = 14.'
  },
  {
    id: 'sma-math-002',
    level_id: 'sma',
    subject: 'Matematika',
    topic: 'Turunan Fungsi Aljabar',
    prompt: 'Turunan pertama dari f(x) = 4x³ + 5x² - 7x + 9 adalah …',
    options: [
      { key: 'A', text: '12x² + 10x - 7' },
      { key: 'B', text: '12x³ + 10x² - 7' },
      { key: 'C', text: '4x² + 5x - 7' },
      { key: 'D', text: '8x² + 10x - 7' }
    ],
    correct_answer: 'A',
    explanation: 'Gunakan aturan pangkat d/dx [axⁿ] = a·n·xⁿ⁻¹. Turunannya: 4(3)x² + 5(2)x - 7 = 12x² + 10x - 7.'
  },

  // --- SMA - Fisika ---
  {
    id: 'sma-fis-001',
    level_id: 'sma',
    subject: 'Fisika',
    topic: 'Kinematika Gerak Lurus',
    prompt: 'Sebuah mobil bergerak dari keadaan diam dengan percepatan tetap 2 m/s². Kecepatan mobil setelah 6 detik adalah …',
    options: [
      { key: 'A', text: '8 m/s' },
      { key: 'B', text: '10 m/s' },
      { key: 'C', text: '12 m/s' },
      { key: 'D', text: '18 m/s' }
    ],
    correct_answer: 'C',
    explanation: 'v_t = v_0 + a × t. Karena dari diam, v_0 = 0. Maka v_t = 0 + (2 m/s² × 6 s) = 12 m/s.'
  },

  // --- SMA - Kimia ---
  {
    id: 'sma-kim-001',
    level_id: 'sma',
    subject: 'Kimia',
    topic: 'Tabel Periodik & Ikatan Kimia',
    prompt: 'Unsur dengan nomor atom 11 (Natrium/Na) berikatan dengan unsur nomor atom 17 (Klorin/Cl). Jenis ikatan yang terbentuk adalah …',
    options: [
      { key: 'A', text: 'Ikatan kovalen polar' },
      { key: 'B', text: 'Ikatan kovalen nonpolar' },
      { key: 'C', text: 'Ikatan ionik' },
      { key: 'D', text: 'Ikatan logam' }
    ],
    correct_answer: 'C',
    explanation: 'Natrium (logam golongan IA) melepaskan 1 elektron membentuk Na⁺, dan Klorin (nonlogam golongan VIIA) menangkap 1 elektron membentuk Cl⁻. Gaya elektrostatis membentuk ikatan ionik (NaCl).'
  },

  // --- SMA - Biologi ---
  {
    id: 'sma-bio-001',
    level_id: 'sma',
    subject: 'Biologi',
    topic: 'Genetika Molekuler',
    prompt: 'Pasangan basa nitrogen yang benar pada rantai ganda DNA adalah …',
    options: [
      { key: 'A', text: 'Adenin dengan Urasil' },
      { key: 'B', text: 'Adenin dengan Timin, Guanin dengan Sitosin' },
      { key: 'C', text: 'Adenin dengan Guanin, Timin dengan Sitosin' },
      { key: 'D', text: 'Guanin dengan Urasil' }
    ],
    correct_answer: 'B',
    explanation: 'Pada DNA, Adenin (A) selalu berpasangan dengan Timin (T) lewat 2 ikatan hidrogen, dan Guanin (G) berpasangan dengan Sitosin (C) lewat 3 ikatan hidrogen.'
  },

  // --- TK - Bahasa ---
  {
    id: 'tk-bahasa-001',
    level_id: 'tk',
    subject: 'Bahasa',
    topic: 'Mengenal Huruf Vokal',
    prompt: 'Huruf pertama pada kata "A-P-E-L" adalah …',
    options: [
      { key: 'A', text: 'Huruf A' },
      { key: 'B', text: 'Huruf B' },
      { key: 'C', text: 'Huruf P' },
      { key: 'D', text: 'Huruf L' }
    ],
    correct_answer: 'A',
    explanation: 'Kata "Apel" dimulai dengan huruf vokal "A". A untuk Apel!'
  },
  {
    id: 'tk-bahasa-002',
    level_id: 'tk',
    subject: 'Bahasa',
    topic: 'Nama Hewan',
    prompt: 'Hewan yang bersuara "Kwek… kwek… kwek…" dan pandai berenang adalah …',
    options: [
      { key: 'A', text: 'Kucing' },
      { key: 'B', text: 'Bebek' },
      { key: 'C', text: 'Kambing' },
      { key: 'D', text: 'Ayam' }
    ],
    correct_answer: 'B',
    explanation: 'Bebek adalah hewan unggas berkaki dua dengan suara kwek-kwek yang suka berenang di air.'
  },

  // --- TK - Berhitung ---
  {
    id: 'tk-hitung-001',
    level_id: 'tk',
    subject: 'Berhitung',
    topic: 'Menghitung Benda',
    prompt: 'Ada 3 buah balon merah, lalu ditiup lagi 2 buah balon biru. Berapa jumlah semua balon?',
    options: [
      { key: 'A', text: '3 balon' },
      { key: 'B', text: '4 balon' },
      { key: 'C', text: '5 balon' },
      { key: 'D', text: '6 balon' }
    ],
    correct_answer: 'C',
    explanation: '3 ditambah 2 sama dengan 5. Mari kita hitung: satu, dua, tiga, empat, lima!'
  },

  // --- TK - Lingkungan ---
  {
    id: 'tk-lingkungan-001',
    level_id: 'tk',
    subject: 'Lingkungan',
    topic: 'Benda Langit',
    prompt: 'Benda langit yang terbit di pagi hari dan menghangatkan bumi adalah …',
    options: [
      { key: 'A', text: 'Bintang' },
      { key: 'B', text: 'Matahari' },
      { key: 'C', text: 'Bulan' },
      { key: 'D', text: 'Awan hitam' }
    ],
    correct_answer: 'B',
    explanation: 'Matahari terbit di sebelah timur dan memberikan cahaya terang serta kehangatan bagi tumbuhan dan manusia.'
  }
]
