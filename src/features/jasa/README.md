# Modul Jasa

Modul ini berdiri sendiri. Semua komponen, konten, harga, dan gaya halaman jasa ada di folder ini. Modul hanya boleh mengimpor dari `src/shared`; jangan mengimpor dari `src/config`, `src/components`, `src/layouts`, atau `src/pages` milik portal.

Struktur:

```
src/features/jasa/
  JasaPage.astro        Rangkaian section halaman jasa
  content.ts            Semua teks, harga, tautan, dan data layanan
  components/           Komponen section, hanya bergantung pada src/shared
  README.md             Dokumen ini
```

Route `/jasa` di portal hanya file tipis yang memanggil `JasaPage.astro` di dalam `BaseLayout` portal.

## Memindahkan ke jasa.massbim.my.id

### 1. Siapkan proyek baru

1. Buat proyek Astro baru dengan Tailwind CSS. Gunakan Node.js 22 LTS, minimal 22.23.4, sama seperti portal.
2. Pasang dependensi yang dibutuhkan modul:
   - `astro`
   - `@astrojs/tailwind`, `tailwindcss`
   - `@fontsource-variable/dm-sans`
3. Siapkan project atau site Firebase Hosting baru untuk `jasa.massbim.my.id`, lalu hubungkan domainnya.

### 2. Salin berkas

Salin apa adanya:

- `src/features/jasa/` (seluruh folder, tanpa `node_modules`)
- `src/shared/tokens.css`
- `src/shared/base.css`
- `src/shared/utils.ts` (jika dipakai)
- `src/shared/layouts/DocumentLayout.astro`

Salin juga konfigurasi pendukung:

- `tailwind.config.mjs` (warna, font, dan radius memakai variabel token)
- `tsconfig.json` (alias `@/*` bila ingin mempertahankannya)
- entri `@fontsource-variable/dm-sans` dari `package.json`

Jangan salin `src/config`, `src/components`, `src/layouts/BaseLayout.astro`, atau halaman portal. Modul jasa tidak boleh bergantung pada berkas-berkas itu.

### 3. Buat route baru

Di proyek baru, buat `src/pages/index.astro`:

```astro
---
import DocumentLayout from '@/shared/layouts/DocumentLayout.astro';
import JasaPage from '@/features/jasa/JasaPage.astro';
import { pageMeta } from '@/features/jasa/content';
---

<DocumentLayout title={pageMeta.title} description={pageMeta.description}>
  <main class="page-container py-12">
    <JasaPage />
  </main>
</DocumentLayout>
```

Tambahkan header dan footer lokal jika diperlukan. Modul jasa sengaja tidak memuat header dan footer portal. Sertakan tautan kembali ke `https://massbim.my.id` di header atau footer subdomain.

### 4. Sesuaikan yang bergantung pada domain

- `content.ts`: `catalogHref` sudah menunjuk ke `https://massbim.my.id`. Periksa kembali bila alamat portal berubah. `whatsappHref` memakai nomor dan pesan yang sama, tidak perlu diubah kecuali nomornya berubah.
- `DocumentLayout.astro`: periksa `siteName`, judul default, favicon, dan meta AdSense. Sesuaikan bila subdomain memakai akun AdSense atau favicon sendiri.
- `astro.config.mjs`: set `site: 'https://jasa.massbim.my.id'`, lalu tambahkan sitemap jika diperlukan.
- Firebase Hosting: arahkan site baru ke domain `jasa.massbim.my.id` dan sesuaikan workflow deploy.

### 5. Redirect dari portal

Setelah subdomain berjalan, buat redirect permanen dari halaman lama di portal. Di `firebase.json` portal:

```json
{
  "hosting": {
    "redirects": [
      {
        "source": "/jasa",
        "destination": "https://jasa.massbim.my.id/",
        "type": 301
      },
      {
        "source": "/jasa/**",
        "destination": "https://jasa.massbim.my.id/",
        "type": 301
      }
    ]
  }
}
```

Redirect `/jasa/**` penting agar tautan lama yang sudah tersebar tetap sampai ke subdomain.

### 6. Bersihkan portal

1. Ganti tautan navigasi "Jasa" di `src/config/site.ts` menjadi `https://jasa.massbim.my.id/`.
2. Pastikan header dan footer menangani tautan eksternal dengan benar.
3. Hapus `src/pages/jasa.astro` dan folder `src/features/jasa/` dari repo portal setelah redirect aktif dan subdomain stabil.
4. Jalankan `npm run build` di kedua repo.

### 7. Periksa hasilnya

- Buka `https://jasa.massbim.my.id/` di lebar 360, 768, dan 1280 px. Pastikan tidak ada scroll horizontal.
- Cek tautan WhatsApp, tautan katalog, tautan StreamStore, dan tautan Booking GOR.
- Pastikan `https://massbim.my.id/jasa` mengembalikan redirect 301 ke subdomain.
- Cek canonical, sitemap, dan meta description di subdomain.

## Batasan

- Jangan mengimpor dari modul portal.
- Token desain dan layout diambil dari `src/shared`.
- Halaman `/jasa` di portal hanya file tipis yang memanggil modul ini.
- Semua teks dan harga ada di `content.ts`, bukan di komponen.
