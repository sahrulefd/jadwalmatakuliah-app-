# Sistem Jadwal Kuliah - React Native (Expo)

Aplikasi mobile berbasis React Native (Expo) yang menampilkan jadwal perkuliahan mahasiswa secara terstruktur. Proyek ini dibuat untuk memenuhi tugas praktikum Pemrograman Mobile (PEMOB).

## Identitas Mahasiswa
* **Nama:** Ahmad Ridho
* **NIM:** 233510100
* **Kelas:** 6A
* **Prodi:** Teknik Informatika, Universitas Islam Riau (UIR)
* **Semester:** 6 (TA. 2025/2026)

## Fitur & Implementasi Rendering List
Aplikasi ini mendemonstrasikan 3 teknik rendering data list di React Native dalam satu proyek:
1. **Halaman Ringkasan Mata Kuliah (`.map()`)**
   * Menampilkan daftar mata kuliah yang diambil semester ini menggunakan looping array statis `.map()`.
   * Menampilkan nama matkul, kode, jumlah SKS, dan nama dosen pengampu.
   * Menggunakan key unik untuk performa rendering.
2. **Halaman Daftar Pertemuan (`FlatList`)**
   * Menampilkan list pertemuan (12 sesi) menggunakan komponen bawaan `FlatList`.
   * Mengimplementasikan 4 props wajib: `keyExtractor`, `ItemSeparatorComponent`, `ListHeaderComponent`, dan `ListEmptyComponent`.
3. **Halaman Jadwal per Hari (`SectionList`)**
   * Menampilkan jadwal kuliah harian yang dikelompokkan berdasarkan hari (Senin - Jumat) menggunakan `SectionList`.
   * Header setiap hari didekorasi dengan gaya visual yang berbeda agar nama hari terlihat sangat jelas.

## Cara Menjalankan Aplikasi Secara Lokal
1. Pastikan Anda sudah menginstal Node.js dan Expo Go di HP Anda.
2. Install dependensi proyek:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan Expo:
   ```bash
   npx expo start
   ```
4. Pindai kode QR menggunakan aplikasi Expo Go (Android) atau kamera bawaan (iOS).
