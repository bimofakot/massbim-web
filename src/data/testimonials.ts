export interface Testimonial {
  name: string;
  role: string;
  message: string;
  rating: number;
  initial: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rina Pratiwi',
    role: 'Pemilik Toko Fashion',
    message:
      'Hasilnya jauh di atas ekspektasi saya. Toko online-nya cepat, elegan, dan order langsung masuk minggu pertama. Komunikasi juga smooth banget!',
    rating: 5,
    initial: 'R',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Budi Santoso',
    role: 'Founder Startup Tech',
    message:
      'Landing page-nya bantu naikkan konversi signifikan. Desain modern, loading cepat, dan SEO-nya langsung terindex Google. Recommended!',
    rating: 5,
    initial: 'B',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Maya Anggraini',
    role: 'Pemilik Kuliner',
    message:
      'Website UMKM saya jadi terlihat profesional. Pelanggan jadi lebih percaya. Tombol WhatsApp-nya bikin order jadi gampang. Terima kasih mas!',
    rating: 5,
    initial: 'M',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Dimas Pratama',
    role: 'Manajer Klinik',
    message:
      'Sistem booking online-nya memudahkan pasien dan staf. Dashboard admin-nya intuitif. Investasi yang sepadan banget untuk bisnis kami.',
    rating: 5,
    initial: 'D',
    color: 'from-emerald-500 to-teal-600',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Berapa lama proses pembuatan website?',
    answer:
      'Landing page: 3-5 hari. Toko online & Web UMKM: 1-2 minggu. Custom web apps: 3-6 minggu tergantung kompleksitas. Saya selalu komunikasikan timeline di awal dan update progress secara berkala.',
  },
  {
    question: 'Apakah saya bisa request revisi desain?',
    answer:
      'Tentu. Setiap paket sudah include 3x revisi major pada tahap desain. Revisi minor selama development juga bisa. Tujuan saya adalah website yang Anda bangga pakai.',
  },
  {
    question: 'Domain dan hosting termasuk?',
    answer:
      'Saya bantu setup domain dan hosting sebagai bagian dari layanan. Biaya domain & hosting tahunan ditanggung klien (sekitar Rp 150-300rb/tahun). Saya rekomendasikan provider terbaik sesuai kebutuhan.',
  },
  {
    question: 'Apakah website bisa saya update sendiri?',
    answer:
      'Ya. Untuk website yang memerlukan update konten rutin, saya integrasikan CMS atau dashboard admin. Saya juga kasih training dan dokumentasi cara update. Tinggal ikuti panduannya.',
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer:
      'DP 50% di awal untuk mulai pengerjaan, pelunasan 50% setelah website selesai dan sebelum launch. Untuk project custom apps, pembayaran bisa di-phase mengikuti milestone.',
  },
  {
    question: 'Apakah ada garansi setelah website jadi?',
    answer:
      'Ya, ada garansi 30 hari untuk bug fix dan penyesuaian minor setelah launch. Selain itu, saya juga tersedia untuk maintenance bulanan jika Anda butuh update rutin.',
  },
];
