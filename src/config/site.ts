export type ToolStatus = 'Aktif' | 'Demo UI' | 'Dalam pengembangan' | 'Segera hadir';

export interface CatalogTool {
  id: string;
  name: string;
  summary: string;
  status: ToolStatus;
  url?: string;
  urlLabel?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Jasa', href: '/jasa' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
];

export const catalog: CatalogTool[] = [
  {
    id: 'blog',
    name: 'Blog',
    summary: 'Kumpulan tulisan dan catatan pribadi.',
    status: 'Aktif',
    url: 'https://blog.massbim.my.id',
    urlLabel: 'blog.massbim.my.id',
  },
  {
    id: 'streamstore',
    name: 'StreamStore',
    summary: 'Contoh tampilan toko akun langganan digital, gambaran kasar dan bukan layanan nyata.',
    status: 'Demo UI',
  },
  {
    id: 'booking-gor',
    name: 'Booking GOR',
    summary: 'Pemesanan lapangan badminton secara online.',
    status: 'Dalam pengembangan',
    url: 'https://booking.massbim.my.id',
    urlLabel: 'Lihat versi uji coba',
  },
  {
    id: 'kasir',
    name: 'Kasir',
    summary: 'Pencatatan transaksi dan stok untuk usaha kecil.',
    status: 'Dalam pengembangan',
  },
  {
    id: 'catatan',
    name: 'Catatan',
    summary: 'Catatan tersimpan di server agar tidak hilang kalau HP rusak.',
    status: 'Segera hadir',
  },
];

export const site = {
  name: 'Massbim',
  domain: 'massbim.my.id',
  url: 'https://massbim.my.id',
  owner: 'Bimo Praharbiyanto',
  contact: {
    whatsapp: {
      display: '0858-7219-4248',
      link: 'https://wa.me/6285872194248',
      message: 'Halo Bimo, saya ingin bertanya tentang Massbim.',
    },
    email: 'andraani30@gmail.com',
    github: {
      label: 'bimofakot',
      link: 'https://github.com/bimofakot',
    },
    instagram: {
      label: '@massbibim_',
      link: 'https://instagram.com/massbibim_',
    },
  },
  nav,
  catalog,
} as const;
