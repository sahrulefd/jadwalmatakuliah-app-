// ============================================================
//  DATA STATIS — SISTEM JADWAL KULIAH
//  Ahmad Ridho - 233510100 · Semester 6 TA. 2025/2026
//  Prodi Teknik Informatika, Universitas Islam Riau
// ============================================================

// ----------------------------------------------------------
// 1. DATA MATA KULIAH (digunakan di Halaman 1 — map)
// ----------------------------------------------------------
export const mataKuliah = [
  {
    id: 'MK001',
    kode: 'TIF-601',
    nama: 'Machine Learning',
    sks: 3,
    dosen: 'Alvis Labellapansa, S.T., M.Cs., M.Kom',
  },
  {
    id: 'MK002',
    kode: 'TIF-602',
    nama: 'Pemrograman Mobile',
    sks: 3,
    dosen: 'Panji Rachmat Setiawan, S.Kom., M.MSI',
  },
  {
    id: 'MK003',
    kode: 'TIF-603',
    nama: 'Big Data',
    sks: 3,
    dosen: 'Dr. Ir. Evizal, S.T., M.Eng',
  },
  {
    id: 'MK004',
    kode: 'TIF-604',
    nama: 'Routing & Switching',
    sks: 3,
    dosen: 'Yudhi Arta, S.T., M.Kom',
  },
  {
    id: 'MK005',
    kode: 'TIF-605',
    nama: 'Implementasi dan Pengujian Perangkat Lunak',
    sks: 3,
    dosen: 'Dr. Ir. Akmar Efendi, S.Kom., M.Kom',
  },
  {
    id: 'MK006',
    kode: 'TIF-606',
    nama: 'Natural Language Processing',
    sks: 3,
    dosen: 'Dr. Arbi Haza Nasution, B.IT.(Hons), M.IT',
  },
];

// ----------------------------------------------------------
// 2. DATA PERTEMUAN (digunakan di Halaman 2 — FlatList)
// ----------------------------------------------------------
export const daftarPertemuan = [
  {
    id: 'PT001',
    mataKuliah: 'Machine Learning',
    pertemuanKe: 1,
    topik: 'Pengenalan Machine Learning & Python Environment',
    tanggal: '1 Sep 2025',
  },
  {
    id: 'PT002',
    mataKuliah: 'Pemrograman Mobile',
    pertemuanKe: 1,
    topik: 'Pengenalan React Native & Setup Expo CLI',
    tanggal: '2 Sep 2025',
  },
  {
    id: 'PT003',
    mataKuliah: 'Big Data',
    pertemuanKe: 1,
    topik: 'Pengenalan Konsep Big Data & Ekosistem Hadoop',
    tanggal: '2 Sep 2025',
  },
  {
    id: 'PT004',
    mataKuliah: 'Routing & Switching',
    pertemuanKe: 1,
    topik: 'Review Arsitektur Jaringan & Basic Routing',
    tanggal: '3 Sep 2025',
  },
  {
    id: 'PT005',
    mataKuliah: 'Implementasi dan Pengujian Perangkat Lunak',
    pertemuanKe: 1,
    topik: 'Pengenalan Software Quality Assurance (SQA)',
    tanggal: '3 Sep 2025',
  },
  {
    id: 'PT006',
    mataKuliah: 'Natural Language Processing',
    pertemuanKe: 1,
    topik: 'Pengenalan NLP, Tokenisasi & Text Normalization',
    tanggal: '4 Sep 2025',
  },
  {
    id: 'PT007',
    mataKuliah: 'Machine Learning',
    pertemuanKe: 2,
    topik: 'Supervised Learning: Regresi Linear & Logistik',
    tanggal: '8 Sep 2025',
  },
  {
    id: 'PT008',
    mataKuliah: 'Pemrograman Mobile',
    pertemuanKe: 2,
    topik: 'Bekerja dengan Komponen Dasar (View, Text, Image)',
    tanggal: '9 Sep 2025',
  },
  {
    id: 'PT009',
    mataKuliah: 'Big Data',
    pertemuanKe: 2,
    topik: 'MapReduce Programming Model & HDFS',
    tanggal: '9 Sep 2025',
  },
  {
    id: 'PT010',
    mataKuliah: 'Routing & Switching',
    pertemuanKe: 2,
    topik: 'VLAN (Virtual Local Area Network) & Trunking',
    tanggal: '10 Sep 2025',
  },
  {
    id: 'PT011',
    mataKuliah: 'Implementasi dan Pengujian Perangkat Lunak',
    pertemuanKe: 2,
    topik: 'Black Box Testing vs White Box Testing',
    tanggal: '10 Sep 2025',
  },
  {
    id: 'PT012',
    mataKuliah: 'Natural Language Processing',
    pertemuanKe: 2,
    topik: 'Stemming, Lemmatization & Stopwords Removal',
    tanggal: '11 Sep 2025',
  },
];

// ----------------------------------------------------------
// 3. DATA JADWAL PER HARI (digunakan di Halaman 3 — SectionList)
// ----------------------------------------------------------
export const jadwalMingguan = [
  {
    hari: 'Senin',
    data: [
      {
        id: 'JD001',
        nama: 'Machine Learning (Praktikum)',
        ruangan: 'AI LAB - TEKNIK D',
        jamMulai: '14:45',
        jamSelesai: '16:25',
      },
    ],
  },
  {
    hari: 'Selasa',
    data: [
      {
        id: 'JD002',
        nama: 'Pemrograman Mobile (Teori)',
        ruangan: '3C.2.07 - TEKNIK C',
        jamMulai: '08:45',
        jamSelesai: '10:25',
      },
      {
        id: 'JD003',
        nama: 'Big Data (Teori)',
        ruangan: '3C.2.05 - TEKNIK C',
        jamMulai: '13:00',
        jamSelesai: '14:40',
      },
    ],
  },
  {
    hari: 'Rabu',
    data: [
      {
        id: 'JD004',
        nama: 'Routing & Switching (Teori)',
        ruangan: '3C.2.08 - TEKNIK C',
        jamMulai: '10:30',
        jamSelesai: '12:10',
      },
      {
        id: 'JD005',
        nama: 'Implementasi dan Pengujian Perangkat Lunak (Teori)',
        ruangan: '3A.1.08 - TEKNIK A',
        jamMulai: '13:00',
        jamSelesai: '15:30',
      },
    ],
  },
  {
    hari: 'Kamis',
    data: [
      {
        id: 'JD006',
        nama: 'Routing & Switching (Praktikum)',
        ruangan: 'Network Computer LAB - TEKNIK C',
        jamMulai: '07:00',
        jamSelesai: '08:40',
      },
      {
        id: 'JD007',
        nama: 'Pemrograman Mobile (Praktikum)',
        ruangan: 'Mobile Lab - TEKNIK D',
        jamMulai: '08:45',
        jamSelesai: '10:25',
      },
      {
        id: 'JD008',
        nama: 'Big Data (Praktikum)',
        ruangan: 'AI LAB - TEKNIK D',
        jamMulai: '08:45',
        jamSelesai: '10:25',
      },
      {
        id: 'JD009',
        nama: 'Natural Language Processing (Praktikum)',
        ruangan: 'Computer System LAB - TEKNIK C',
        jamMulai: '14:45',
        jamSelesai: '16:25',
      },
    ],
  },
  {
    hari: "Jum'at",
    data: [
      {
        id: 'JD010',
        nama: 'Machine Learning (Teori)',
        ruangan: '3A.1.09 - TEKNIK A',
        jamMulai: '08:45',
        jamSelesai: '10:25',
      },
      {
        id: 'JD011',
        nama: 'Natural Language Processing (Teori)',
        ruangan: '3C.1.04 - TEKNIK C',
        jamMulai: '10:30',
        jamSelesai: '12:10',
      },
    ],
  },
];
