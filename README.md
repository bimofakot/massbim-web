# Massbim

Portal katalog tools milik Bimo Praharbiyanto di [massbim.my.id](https://massbim.my.id). Halaman jasa dikelola sebagai modul terpisah di `/jasa`.

## Stack

- Astro 7 + TypeScript
- Tailwind CSS
- Firebase Hosting, project `massbim-web`
- GitHub Actions untuk build dan deploy
- Node.js 22 LTS, minimal 22.23.4 sesuai kebutuhan Astro 7.4.2

## Halaman

- `/` — beranda dan katalog tools
- `/tentang` — cerita singkat
- `/kontak` — WhatsApp, email, Instagram, GitHub
- `/privasi` — kebijakan privasi
- `/jasa` — layanan dan harga, dikelola sebagai modul terpisah di `src/features/jasa`

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
npm run preview  # cek hasil build
```

Workflow memakai `npm ci --legacy-peer-deps`. Perintah yang sama bisa dipakai untuk pemasangan bersih di lokal.

## Struktur

```
.github/workflows/deploy.yml      Build dan deploy Firebase Hosting
src/config/site.ts                Brand, kontak, navigasi, dan katalog tools
src/shared/                       Kode bersama portal dan modul jasa
  tokens.css                      Token warna dan font
  base.css                        Reset, tipografi, dan container
  utils.ts                        Util kecil
  layouts/DocumentLayout.astro    Kerangka HTML dan meta
src/features/jasa/                Modul jasa mandiri
  JasaPage.astro                  Isi halaman jasa
  content.ts                      Konten dan harga jasa
  components/                     Komponen halaman jasa
  README.md                       Langkah memindahkan modul ke subdomain
src/pages/                        Halaman portal
src/components/                   Header dan footer portal
src/layouts/BaseLayout.astro      Layout portal: shared layout + header + footer
```

Catatan:

- `src/features/jasa` tidak boleh mengimpor dari modul portal. Hanya boleh memakai `src/shared`.
- `/jasa` hanya file tipis yang memanggil `src/features/jasa/JasaPage.astro`.
- Konten dan harga jasa ada di `src/features/jasa/content.ts`.

## Deploy

Deploy berjalan lewat GitHub Actions:

- Push ke `main`: build, lalu deploy produksi ke Firebase Hosting (channel `live`).
- Pull request ke `main`: build, lalu deploy preview channel. Produksi tidak tersentuh.
- Push ke branch lain: tidak deploy.

Konfigurasi ada di `.github/workflows/deploy.yml`. Workflow membutuhkan secret `FIREBASE_SERVICE_ACCOUNT` untuk project Firebase `massbim-web`.

Deploy produksi hanya dari `main`. Jangan push ke `main` tanpa persetujuan.

## Aturan proyek

Aturan konten, desain, struktur, dan alur git ada di `.qoder/rules/project.md`.
