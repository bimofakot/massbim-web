---
trigger: always_on
description: Aturan proyek Massbim — konten jujur, desain tenang, struktur portal + modul jasa terpisah, alur git aman.
---

# Aturan Proyek Massbim

## Konteks proyek

- Situs: massbim.my.id. Stack tetap: Astro + Tailwind CSS, hosting Firebase, CI/CD GitHub Actions.
- Pemilik: Bimo Praharbiyanto, developer junior, belum punya klien berbayar.
- Tujuan: massbim.my.id menjadi portal katalog tools. Layanan jasa pembuatan website ada di `/jasa` sebagai modul terpisah agar mudah dipindah ke subdomain nanti.
- Situs sudah dipasang di bio media sosial, jadi semua isi harus jujur dan rapi.
- Semua aturan warisan Kiro tidak berlaku. Jangan membuat atau mengikuti file `.kiro`, steering, atau specs.
- Penulisan brand: "Massbim" (kapital) di teks dan judul; "massbim" untuk domain, URL, dan kode.

## Label tingkat pekerjaan

- `[MINOR]`: gunakan model hemat credit.
- `[MAJOR]`: boleh gunakan model terkuat dan boros credit agar hasil sempurna.
- Ikuti label yang diberikan pengguna pada setiap perintah.

## Git dan deploy

- Di awal setiap tugas: jalankan git fetch dan pastikan branch lokal sinkron dengan origin sebelum mengubah apa pun. Laporkan jika berbeda.
- Branch selain `main`: boleh langsung commit DAN push. Jangan meninggalkan commit lokal yang belum di-push.
- Branch `main`: JANGAN commit atau push ke `main` tanpa konfirmasi dari pengguna terlebih dulu. Merge ke `main` dilakukan lewat PR yang disetujui.
- Sebelum push pertama di repo ini, periksa workflow: pastikan push ke branch selain `main` tidak men-deploy ke produksi. Jika ada kemungkinan deploy dari branch lain, hentikan dan tanyakan dulu.
- Pesan commit singkat dan bermakna dalam bahasa Inggris.
- Setelah aturan Git diubah, laporkan bahwa aturan sudah ditambahkan; commit dan push perubahan aturan itu hanya jika branch aktif bukan `main`, kalau branch aktif `main` tanyakan dulu.
- Pengecekan sinkron (`git fetch`) dilakukan SEKALI SAJA saat pertama kali bekerja di repo ini. JANGAN diulang di setiap tugas atau perintah. Ulangi hanya jika pengguna menyebut berganti perangkat, atau jika push ditolak karena riwayat berbeda.
- Jangan menghapus file tanpa izin. Untuk audit, laporkan temuan saja.
- Deploy produksi Firebase hanya terjadi dari push ke `main`. Pull request hanya mendapat preview channel.

## Stack

- Jangan mengganti stack, framework, atau hosting tanpa bertanya lebih dulu. Sertakan alasan, kelebihan, dan kekurangan jangka panjang.

## Aturan konten (wajib)

- Hanya tulis klaim yang benar dan bisa dibuktikan.
- Dilarang menampilkan: "20+ proyek", "100% klien puas", "+250% konversi", skor PageSpeed/Lighthouse, "24/7 support", garansi 30 hari, testimoni fiktif (Rina, Budi, Maya, Dimas), dan teknologi yang tidak dipakai (Next.js, React, Node, dan sejenisnya).
- Jangan menulis "AI", "dibuat oleh AI", atau sejenisnya di teks yang tampil di situs.
- Jangan mengarang angka, statistik, pencapaian, atau testimoni. Jika belum ada data nyata, jangan tulis.
- Tulis sebagai satu orang dengan kata "saya", bukan agensi.
- Gunakan "Tentang" dan "Info", bukan "Tentang Kami" dan "Perusahaan".
- Nada santai tetapi sopan. Kalimat pendek.

## Aturan desain (wajib)

Tujuan: rapi, modern, hangat, dan percaya diri, tetapi tidak terkesan seperti template AI.

- Dilarang: gradasi, glow, blur/glassmorphism, emoji sebagai ikon, bayangan tebal, animasi berlebihan, badge pil di hero, kartu fitur 3 kolom berikon, dan warna ungu/indigo bawaan.
- Font: satu font web modern yang di-host sendiri lewat `@fontsource` (DM Sans). Jangan memuat dari Google Fonts. Judul besar dan tegas; teks isi 16-18px dengan line-height lega; hierarki jelas.
- Warna: latar putih hangat (off-white), permukaan kartu putih, teks hampir hitam, abu hangat untuk teks sekunder, dan satu warna aksen matang (hijau pinus tua). Boleh satu warna latar tipis untuk bagian tertentu.
- Komponen: kartu dengan border 1px halus dan sudut membulat 8-12px; grid katalog 2 kolom di PC dan 1 kolom di HP; status berupa label kecil berlatar tipis (bukan pil besar); tombol dengan hover dan fokus halus (transisi 150-200 ms); header menempel di atas dengan garis bawah tipis.
- Beranda: pembuka berisi judul besar, deskripsi singkat, tombol utama "Lihat katalog", dan tombol sekunder "Jasa pembuatan website"; katalog berupa kartu; blok jasa tertata. Foto profil hanya di halaman Tentang.
- Footer terstruktur: kolom Navigasi dan Kontak, plus baris hak cipta "© 2026 Massbim". Tanpa emoji dan tanpa "Powered by".
- Jarak memakai skala 4/8/16/24/48/96 px. Lebar konten maksimum harus nyaman dibaca.
- Hanya mode terang. Mobile-first. Uji lebar 360, 768, dan 1280 px. Tidak boleh ada scroll horizontal.

## Aturan struktur (wajib)

- Konfigurasi portal (brand, kontak, katalog) ada di `src/config/site.ts`.
- Modul jasa berdiri sendiri di `src/features/jasa/` (komponen, konten, harga, gaya).
- Konten jasa dan harga ada di `src/features/jasa/content.ts`.
- `src/features/jasa` tidak boleh mengimpor dari modul portal. Hanya boleh memakai `src/shared` (token desain dan util kecil).
- Route `/jasa` hanya file tipis yang memanggil modul jasa.
