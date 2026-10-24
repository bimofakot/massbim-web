export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'netflix-clone',
    title: 'Netflix-Style Streaming Web',
    category: 'Toko Online',
    description:
      'Platform streaming dengan UI mirip Netflix — lengkap dengan katalog film, kategori, detail page, dan trailer embed. Dibangun dengan React, menampilkan konten dinamis dengan smooth browsing experience.',
    url: 'https://netflix.massbim.my.id',
    tags: ['React', 'API Integration', 'Responsive', 'Dynamic Content'],
    gradient: 'from-red-600 to-rose-900',
    featured: true,
  },
  {
    id: 'personal-blog',
    title: 'Blog Pribadi Modern',
    category: 'Web UMKM',
    description:
      'Blog pribadi dengan desain minimalis dan modern. Fitur artikel dengan markdown, kategori, dark/light mode, dan SEO optimized. Cepat, bersih, dan nyaman dibaca.',
    url: 'https://blog.massbim.my.id',
    tags: ['Astro', 'Markdown', 'SEO', 'Dark Mode'],
    gradient: 'from-violet-600 to-indigo-900',
    featured: true,
  },
  {
    id: 'landing-page-demo',
    title: 'Landing Page SaaS',
    category: 'Landing Page',
    description:
      'Landing page untuk produk SaaS dengan animasi smooth, pricing table, dan section yang dioptimalkan untuk konversi tinggi.',
    url: '#',
    tags: ['Astro', 'Tailwind', 'Animation', 'Conversion'],
    gradient: 'from-cyan-500 to-blue-900',
  },
  {
    id: 'umkm-demo',
    title: 'Website Kuliner UMKM',
    category: 'Web UMKM',
    description:
      'Website untuk bisnis kuliner dengan menu digital, galeri foto, lokasi via Google Maps, dan tombol pemesanan WhatsApp.',
    url: '#',
    tags: ['Responsive', 'WhatsApp', 'Google Maps', 'Galeri'],
    gradient: 'from-amber-500 to-orange-900',
  },
  {
    id: 'toko-online-demo',
    title: 'Toko Online Fashion',
    category: 'Toko Online',
    description:
      'E-commerce fashion dengan katalog produk, filter kategori, keranjang belanja, dan integrasi payment gateway. Dashboard admin untuk manajemen produk dan order.',
    url: '#',
    tags: ['E-Commerce', 'Payment Gateway', 'Dashboard', 'Cart'],
    gradient: 'from-pink-500 to-fuchsia-900',
  },
  {
    id: 'booking-app-demo',
    title: 'Sistem Booking Online',
    category: 'Custom Web Apps',
    description:
      'Aplikasi booking online untuk jasa atau klinik. Fitur kalender, slot tersedia, konfirmasi otomatis, dan dashboard admin.',
    url: '#',
    tags: ['Custom App', 'Calendar', 'Auth', 'Dashboard'],
    gradient: 'from-emerald-500 to-teal-900',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Konsultasi & Analisa',
    description: 'Kita diskusi kebutuhan, target, dan budget Anda. Saya analisa dan beri rekomendasi solusi terbaik.',
    icon: 'chat',
  },
  {
    number: '02',
    title: 'Desain & Wireframe',
    description: 'Saya buat mockup desain sesuai brand Anda. Revisi sampai Anda puas sebelum lanjut ke development.',
    icon: 'pencil',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Website dibangun dengan kode clean, teknologi modern, dan optimasi performa. Progress bisa Anda pantau.',
    icon: 'code',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Website diluncurkan, saya bantu setup domain & hosting, plus training cara update konten. Garansi 30 hari.',
    icon: 'rocket',
  },
];
