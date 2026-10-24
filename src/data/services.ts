export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  priceRange: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'landing-page',
    icon: 'rocket',
    title: 'Landing Page',
    shortDesc: 'Satu halaman yang mengonversi pengunjung jadi pelanggan.',
    description:
      'Landing page profesional dengan copywriting persuasif, loading super cepat, dan desain yang dioptimalkan untuk konversi. Cocok untuk produk launch, promo, atau kampanye pemasaran.',
    features: [
      'Desain custom & responsif',
      'Optimasi konversi (CTA strategis)',
      'SEO ready & fast loading',
      'Integrasi Google Analytics',
      'Form pendaftaran / kontak',
      'Domain & hosting bantuan setup',
    ],
    priceRange: 'Mulai Rp 500rb',
  },
  {
    id: 'toko-online',
    icon: 'cart',
    title: 'Toko Online',
    shortDesc: 'Jual produk online dengan toko profesional yang lengkap.',
    description:
      'Website toko online lengkap dengan keranjang belanja, katalog produk, pembayaran online, dan dashboard admin. Siap untuk berjualan dari hari pertama.',
    features: [
      'Katalog produk unlimited',
      'Keranjang belanja & checkout',
      'Payment gateway terintegrasi',
      'Dashboard admin lengkap',
      'Manajemen stok & order',
      'Otomatis WhatsApp order',
    ],
    priceRange: 'Mulai Rp 1.5jt',
    popular: true,
  },
  {
    id: 'web-umkm',
    icon: 'store',
    title: 'Web UMKM',
    shortDesc: 'Website bisnis untuk meningkatkan kredibilitas UMKM.',
    description:
      'Website bisnis profesional untuk UMKM yang ingin go digital. Tampilkan profil bisnis, layanan, testimoni, dan kontak dalam satu website yang elegan dan mudah dikelola.',
    features: [
      'Profil bisnis profesional',
      'Halaman layanan / produk',
      'Galeri foto bisnis',
      'Testimoni pelanggan',
      'Google Maps integrasi',
      'WhatsApp click-to-chat',
    ],
    priceRange: 'Mulai Rp 800rb',
  },
  {
    id: 'custom-apps',
    icon: 'code',
    title: 'Custom Web Apps',
    shortDesc: 'Aplikasi web custom sesuai kebutuhan unik bisnis Anda.',
    description:
      'Aplikasi web custom untuk kebutuhan bisnis yang spesifik — mulai dari dashboard manajemen, sistem booking, CRM, hingga platform SaaS. Dibangun dengan teknologi modern dan scalable.',
    features: [
      'Analisa kebutuhan mendalam',
      'Desain UI/UX custom',
      'Database & API development',
      'User authentication & roles',
      'Dashboard & reporting',
      'Maintenance & support',
    ],
    priceRange: 'Custom quote',
  },
];
