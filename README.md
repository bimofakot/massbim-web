# Massbim — Website Jasa Pembuatan Website

Website jasa pembuatan website profesional untuk bisnis Indonesia.
Stack: **Astro** + **Tailwind CSS** + **TypeScript**. Deploy ke **Firebase Hosting** via **GitHub Actions**.

---

## Daftar Isi

1. [Edit Data & Konten](#1-edit-data--konten)
2. [Mengganti Foto Profil](#2-mengganti-foto-profil-halaman-about)
3. [Mengganti Favicon](#3-mengganti-favicon-ikon-tab-browser)
4. [Mengubah Domain](#4-mengubah-domain-website)
5. [Menjalankan Lokal](#5-menjalankan--build-lokal)
6. [Deploy ke Firebase Hosting](#6-deploy-ke-firebase-hosting)
7. [Setup CI/CD GitHub Actions](#7-setup-cicd-github-actions)

---

## 1. Edit Data & Konten

### Identitas & Kontak (satu tempat untuk semua)

Hampir semua data penting ada di satu file:

```
src/data/site.ts
```

| Field | Nilai sekarang | Keterangan |
|---|---|---|
| `name` | `Massbim` | Nama brand di seluruh website |
| `namePrefix` | `Mass` | Bagian putih di logo |
| `nameHighlight` | `bim` | Bagian berwarna gradient di logo |
| `fullName` | `Bimo Praharbiyanto` | Nama lengkap |
| `tagline` | `Full-Stack Web Developer` | Jabatan di halaman About |
| `initial` | `M` | Huruf avatar & logo kotak |
| `email` | `andraani30@gmail.com` | Email kontak |
| `whatsapp.display` | `+62 858-7219-4248` | Tampil di UI |
| `whatsapp.waNumber` | `6285872194248` | Format link wa.me |
| `whatsapp.local` | `085872194248` | Format lokal Indonesia |
| `domain` | `massbim.my.id` | Domain website |
| `siteUrl` | `https://massbim.my.id` | URL lengkap |
| `profileImage` | `''` | Kosong = pakai huruf M |
| `defaultTitle` | `Massbim — Jasa ...` | Judul tab browser default |
| `defaultDescription` | `Jasa pembuatan ...` | Deskripsi SEO default |

> Ubah file ini → simpan → semua halaman (Header, Footer, About, Kontak, dll.) ikut berubah otomatis.

**Catatan format WhatsApp:**
Nomor `085872194248` → buang angka `0` di depan → tambah `62` → jadi `6285872194248`.

### Data Konten Lainnya

| File | Isi |
|---|---|
| `src/data/services.ts` | Daftar layanan + harga |
| `src/data/portfolio.ts` | Daftar karya/portfolio |
| `src/data/testimonials.ts` | Daftar testimoni klien |

---

## 2. Mengganti Foto Profil (Halaman About)

Sekarang About memakai huruf "M" sebagai avatar. Untuk pakai foto asli:

1. Siapkan foto kotak (1:1), format `.png` atau `.jpg`.
2. Simpan ke folder `public/`, misalnya `public/profile.png`.
3. Buka `src/data/site.ts`, ubah:
   ```ts
   profileImage: '/profile.png',
   ```
4. Simpan → foto langsung tampil.

Untuk kembali ke huruf inisial: isi `profileImage: ''`.

---

## 3. Mengganti Favicon (Ikon Tab Browser)

Timpa file `public/favicon.svg` dengan favicon kamu.

Kalau pakai format `.png` atau `.ico`, ubah juga baris ini di `src/layouts/BaseLayout.astro`:
```html
<!-- Sebelum -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- Setelah (contoh .png) -->
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

## 4. Mengubah Domain Website

Ubah di **dua tempat**:

1. `src/data/site.ts` → field `domain` dan `siteUrl`
2. `astro.config.mjs` → `site: 'https://domain-baru.com'`

---

## 5. Menjalankan & Build Lokal

```bash
# Install dependency (sekali saja)
npm install

# Mode development — live preview di http://localhost:4321
npm run dev

# Build untuk produksi → hasil di folder dist/
npm run build

# Preview hasil build sebelum deploy
npm run preview
```

> `npm run dev` adalah server yang terus berjalan. Jalankan di terminal kamu sendiri.

---

## 6. Deploy ke Firebase Hosting

### Deploy manual (sekali dari terminal)

```bash
# Pastikan sudah login Firebase
npx firebase-tools login

# Build lalu deploy
npm run build
npx firebase-tools deploy --only hosting
```

URL live akan muncul di terminal setelah deploy selesai.
Format: `https://massbim-web.web.app` atau custom domain di Firebase console.

### CI/CD otomatis (via GitHub Actions)

Setiap `push` ke branch `main` akan otomatis build + deploy ke Firebase Hosting.
Setiap Pull Request mendapat URL preview tersendiri.

Lihat konfigurasi di: `.github/workflows/deploy.yml`

---

## 7. Setup CI/CD GitHub Actions

Ini perlu dilakukan **satu kali** sebelum push pertama ke GitHub.

### Langkah 1 — Buat repository di GitHub

1. Buka [github.com/new](https://github.com/new)
2. Buat repository baru (public atau private)
3. Jangan centang "Initialize this repository with a README"

### Langkah 2 — Dapat Service Account Firebase

1. Buka [console.firebase.google.com](https://console.firebase.google.com)
2. Pilih project **massbim-web**
3. Klik ikon ⚙️ → **Project settings** → tab **Service accounts**
4. Scroll ke bawah → klik **Generate new private key**
5. Download file JSON yang muncul — **jangan di-commit ke GitHub!**

### Langkah 3 — Simpan sebagai GitHub Secret

1. Buka repository di GitHub → **Settings** → **Secrets and variables** → **Actions**
2. Klik **New repository secret**
3. Isi:
   - **Name**: `FIREBASE_SERVICE_ACCOUNT`
   - **Value**: paste isi file JSON dari langkah 2 (keseluruhan, termasuk kurung kurawal `{}`)
4. Klik **Add secret**

### Langkah 4 — Push kode ke GitHub

```bash
# Di terminal, dari folder proyek:
git init  # (kalau belum pernah)
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

Setelah push, buka tab **Actions** di GitHub — workflow akan berjalan otomatis.

### Alur CI/CD

```
Push ke main
    │
    ▼
[GitHub Actions]
    │
    ├─ npm ci          (install dependency)
    ├─ npm run build   (build Astro → dist/)
    └─ firebase deploy (upload dist/ ke Firebase Hosting)
                │
                ▼
        massbim-web.web.app  ✅  live
```

Pull Request → URL preview tersendiri (dikomentarkan otomatis ke PR).

---

## Struktur Proyek

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD otomatis
├── public/
│   └── favicon.svg          # Favicon (ganti di sini)
├── src/
│   ├── components/          # Komponen UI (Header, Footer, Hero, dll.)
│   ├── data/
│   │   ├── site.ts          # ← EDIT INI untuk data utama
│   │   ├── services.ts      # Data layanan
│   │   ├── portfolio.ts     # Data portfolio
│   │   └── testimonials.ts  # Data testimoni
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout utama (meta, SEO)
│   ├── pages/               # Halaman website
│   └── styles/
│       └── global.css       # CSS global + sistem tema
├── .firebaserc              # Project Firebase aktif
├── firebase.json            # Konfigurasi Firebase Hosting
├── astro.config.mjs         # Konfigurasi Astro
├── tailwind.config.mjs      # Konfigurasi Tailwind
└── tsconfig.json            # Konfigurasi TypeScript
```

---

## Info Tambahan

- **Firebase Project ID**: `massbim-web`
- **Firebase Console**: https://console.firebase.google.com/project/massbim-web
- **Live URL (setelah deploy)**: https://massbim-web.web.app
- **Custom Domain**: bisa diatur di Firebase Hosting → Custom domains
