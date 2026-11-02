export interface Cta {
  label: string;
  href: string;
  external: boolean;
}

export interface Service {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  audience: string;
  features: string[];
}

export interface AffordabilityPoint {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface WorkExample {
  name: string;
  status: string;
  description: string;
  href?: string;
  hrefLabel?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RentalPlan {
  name: string;
  setup: string;
  monthly: string;
}

const whatsappNumber = '6285872194248';
const whatsappMessage = 'Halo Bimo, saya ingin bertanya tentang jasa pembuatan website.';

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
export const catalogHref = 'https://massbim.my.id';

export const pageMeta = {
  title: 'Jasa — Massbim',
  description:
    'Pembuatan website sederhana untuk usaha kecil: landing page, web UMKM, dan toko online dengan pesanan lewat WhatsApp.',
};

export const hero = {
  eyebrow: 'Jasa',
  title: 'Website sederhana untuk usaha kecil.',
  description:
    'Saya membuat website sederhana untuk usaha kecil: profil usaha, halaman produk, atau toko yang pesanannya masuk lewat WhatsApp. Pekerjaan ini saya tangani sendiri, dari menyusun halaman sampai website bisa diakses.',
  primaryCta: {
    label: 'Chat lewat WhatsApp',
    href: whatsappHref,
    external: true,
  } satisfies Cta,
  secondaryCta: {
    label: 'Lihat katalog tools',
    href: catalogHref,
    external: false,
  } satisfies Cta,
};

export const servicesIntro = {
  eyebrow: 'Layanan',
  title: 'Layanan dan harga',
};

export const services: Service[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    price: 'Mulai Rp 500rb',
    audience: 'Cocok untuk satu penawaran, promo, atau produk yang perlu dijelaskan di satu halaman.',
    features: [
      'Satu halaman dengan satu tujuan yang jelas',
      'Teks dan tombol ajakan yang mudah dipahami',
      'Tampilan rapi di HP dan komputer',
      'Bantuan setup domain dan hosting di awal',
    ],
  },
  {
    id: 'web-umkm',
    name: 'Web UMKM',
    price: 'Mulai Rp 800rb',
    audience: 'Cocok untuk usaha yang butuh profil dan informasi layanan dalam satu tempat.',
    features: [
      'Profil usaha dan penjelasan layanan',
      'Halaman produk atau galeri foto',
      'Kontak langsung lewat WhatsApp',
      'Bantuan setup domain dan hosting di awal',
    ],
  },
  {
    id: 'toko-online',
    name: 'Toko Online sederhana',
    price: 'Mulai Rp 1jt',
    audience: 'Cocok untuk usaha yang ingin menampilkan produk dan menerima pesanan lewat WhatsApp.',
    features: [
      'Daftar produk dengan foto dan harga',
      'Halaman detail produk sederhana',
      'Tombol pesan yang mengarah ke WhatsApp',
      'Tanpa dashboard admin dan tanpa pembayaran otomatis',
    ],
  },
  {
    id: 'aplikasi-admin',
    name: 'Aplikasi dengan panel admin',
    price: 'Dibahas dulu',
    priceNote: 'Sesuai skala usaha dan hosting berbayar',
    audience: 'Cocok untuk usaha yang perlu mengelola data sendiri, misalnya stok, pesanan, atau jadwal.',
    features: [
      'Kebutuhan dibahas lebih dulu',
      'Panel admin untuk mengelola data',
      'Butuh hosting berbayar yang cukup',
      'Biaya menyesuaikan skala usaha',
    ],
  },
];

export const servicesNote =
  'Harga perkenalan untuk klien pertama. Harga akhir menyesuaikan jumlah halaman dan kebutuhan, dan dibahas sebelum pengerjaan.';

export const affordability = {
  eyebrow: 'Biaya',
  title: 'Kenapa harganya terjangkau',
  points: [
    {
      title: 'Tanpa dashboard admin',
      description:
        'Website dibuat sebagai halaman statis, tanpa dashboard atau panel admin. Panel admin butuh hosting berbayar yang cukup mahal, jadi tidak saya masukkan ke paket dasar.',
    },
    {
      title: 'Setup di awal saja',
      description:
        'Saya membantu menyiapkan domain dan hosting saat website pertama kali dipasang.',
    },
    {
      title: 'Perpanjangan ditanggung klien',
      description:
        'Perpanjangan domain dan hosting tahunan dibayar langsung oleh klien ke penyedia.',
    },
    {
      title: 'Perubahan konten dibantu',
      description:
        'Kalau ada teks, foto, atau harga yang perlu diubah, saya bantu. Biayanya dibahas sesuai besar pekerjaan.',
    },
  ] satisfies AffordabilityPoint[],
};

export const rental = {
  eyebrow: 'Sewa',
  title: 'Skema sewa',
  intro:
    'Selain beli, website bisa disewa: biaya awal kecil, lalu sewa per bulan. Saya yang menghosting dan merawatnya.',
  tableHead: {
    plan: 'Paket',
    setup: 'Setup',
    monthly: 'Sewa per bulan',
  },
  plans: [
    {
      name: 'Landing Page',
      setup: 'Rp 150rb',
      monthly: 'Rp 50rb/bulan',
    },
    {
      name: 'Web UMKM',
      setup: 'Rp 250rb',
      monthly: 'Rp 75rb/bulan',
    },
    {
      name: 'Toko Online sederhana',
      setup: 'Rp 350rb',
      monthly: 'Rp 100rb/bulan',
    },
  ] satisfies RentalPlan[],
  termsTitle: 'Ketentuan',
  terms: [
    'Alamat memakai subdomain Massbim, misalnya namausaha.massbim.my.id. Jika memakai domain sendiri, biayanya dibayar klien ke penyedia.',
    'Perubahan konten kecil (teks, foto, harga) termasuk, maksimal 2 kali per bulan.',
    'Minimal sewa 3 bulan, dibayar di muka per bulan.',
    'Jika sewa berhenti, website dinonaktifkan. Tidak ada pengembalian uang untuk bulan berjalan.',
    'Jika pengunjung atau ukuran website melewati batas paket hosting gratis, biaya dibahas ulang.',
  ],
  note: 'Harga perkenalan untuk klien pertama.',
};

export const process = {
  eyebrow: 'Alur kerja',
  title: 'Empat langkah',
  steps: [
    {
      title: 'Konsultasi',
      description:
        'Kita bicarakan kebutuhan, isi website, dan anggaran. Saya juga menilai apakah proyek ini cocok dikerjakan.',
    },
    {
      title: 'Desain',
      description:
        'Saya menyusun susunan halaman dan tampilannya. Anda bisa memberi masukan sebelum pengerjaan dimulai.',
    },
    {
      title: 'Pengerjaan',
      description:
        'Website saya bangun sesuai susunan yang disepakati. Batas revisi dibahas di awal supaya pekerjaan tetap jelas.',
    },
    {
      title: 'Peluncuran',
      description:
        'Setelah Anda setuju, website dipasang di domain dan hosting Anda. Saya bantu sampai bisa diakses.',
    },
  ] satisfies ProcessStep[],
};

export const examples = {
  eyebrow: 'Contoh',
  title: 'Contoh yang sudah ada',
  note: 'Keduanya contoh yang saya buat sendiri, bukan hasil pekerjaan untuk klien.',
  items: [
    {
      name: 'StreamStore',
      status: 'Demo UI',
      description:
        'Contoh tampilan toko akun langganan digital. Isinya gambaran kasar dan bukan layanan nyata.',
    },
    {
      name: 'Booking GOR',
      status: 'Dalam pengembangan',
      description: 'Contoh pemesanan lapangan badminton secara online. Masih dikembangkan.',
      href: 'https://booking.massbim.my.id',
      hrefLabel: 'Lihat versi uji coba',
    },
  ] satisfies WorkExample[],
};

export const faq = {
  eyebrow: 'FAQ',
  title: 'Pertanyaan yang sering muncul',
  items: [
    {
      question: 'Berapa lama pengerjaannya?',
      answer:
        'Perkiraan waktu dibahas setelah kebutuhan dan isi website jelas. Saya tidak menjanjikan durasi sebelum itu.',
    },
    {
      question: 'Berapa kali revisi?',
      answer: 'Jumlah dan batas revisi dibahas di awal sebelum pengerjaan.',
    },
    {
      question: 'Domain dan hosting bagaimana?',
      answer:
        'Kita bahas bersama. Saya bantu setup di awal, sedangkan perpanjangan tahunan ditanggung klien.',
    },
    {
      question: 'Apakah harga sudah termasuk domain?',
      answer:
        'Biaya domain, dan hosting bila berbayar, tidak termasuk dalam harga jasa dan dibayar langsung oleh klien ke penyedia. Saya bantu menyiapkannya di awal.',
    },
    {
      question: 'Apa bedanya beli dan sewa?',
      answer:
        'Beli: bayar sekali, website dipasang di domain dan hosting klien, perpanjangan tahunan ditanggung klien. Sewa: biaya awal kecil, lalu sewa bulanan, dan saya yang menghosting dan merawatnya.',
    },
    {
      question: 'Bagaimana cara bayarnya?',
      answer:
        'Cara dan tahapan pembayaran dibahas saat konsultasi, menyesuaikan besar pekerjaan.',
    },
  ] satisfies FaqItem[],
};

export const closing = {
  title: 'Mulai dari percakapan singkat.',
  description:
    'Ceritakan usaha dan website yang Anda butuhkan. Saya akan bantu menilai apakah bisa dikerjakan.',
  cta: {
    label: 'Chat lewat WhatsApp',
    href: whatsappHref,
    external: true,
  } satisfies Cta,
};
