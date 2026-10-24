// ============================================================
//  PENGATURAN WEBSITE — EDIT SEMUA DATA PENTING DI FILE INI
// ------------------------------------------------------------
//  Ini adalah satu-satunya tempat untuk mengubah identitas,
//  kontak, dan aset foto website Anda. Baca README.md untuk
//  panduan lengkap.
// ============================================================

export const site = {
  // --- Identitas / Brand ---
  // name = nama brand yang tampil di seluruh website
  // namePrefix + nameHighlight dipakai untuk logo berwarna:
  //   tampil sebagai "Mass" (putih) + "bim" (gradient)
  name: 'Massbim',
  namePrefix: 'Mass',
  nameHighlight: 'bim',
  fullName: 'Bimo Praharbiyanto',
  tagline: 'Full-Stack Web Developer',
  initial: 'M', // Huruf awal untuk logo & avatar default

  // --- Kontak ---
  email: 'andraani30@gmail.com',

  // WhatsApp:
  //   waNumber  = format untuk link wa.me (62 + nomor tanpa angka 0 di depan)
  //   display   = teks yang tampil di UI (format internasional)
  //   local     = format penulisan Indonesia
  whatsapp: {
    display: '+62 858-7219-4248',
    waNumber: '6285872194248',
    local: '085872194248',
  },

  // --- Website ---
  // Catatan: jika domain berubah, ubah juga `site` di astro.config.mjs
  domain: 'massbim.my.id',
  siteUrl: 'https://massbim.my.id',

  // --- Foto / Aset ---
  // favicon: ganti file di public/favicon.svg
  // profileImage: kosongkan '' untuk pakai huruf inisial.
  //   Untuk pakai foto asli: isi '/profile.png' lalu simpan foto di folder public/
  favicon: '/favicon.svg',
  profileImage: '',

  // --- Default SEO (dipakai kalau halaman tidak menentukan title sendiri) ---
  defaultTitle: 'Massbim — Jasa Pembuatan Website Profesional',
  defaultDescription:
    'Jasa pembuatan website profesional: Landing Page, Toko Online, Web UMKM, dan Custom Web Apps. Cepat, modern, dan terjangkau.',
};
