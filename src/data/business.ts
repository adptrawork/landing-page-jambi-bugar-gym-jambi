export const business = {
  name: 'Jambi Bugar Gym',
  slug: 'jambi-bugar-gym-jambi',
  category: 'Gym & Kebugaran',
  city: 'Kota Jambi',
  rating: 5.0,
  reviewCount: 150,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=Jambi%20Bugar%20Gym%20Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Jambi Bugar Gym — Daftar Member & Jadwal Kelas',
  description: 'Jambi Bugar Gym: paket harga member, jadwal senam & aerobik, daftar via WhatsApp.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Harian — Akses 1 Hari + 1 Kelas",
    "price": "Rp 35.000",
    "badge": "Fleksibel",
    "stock": "Kuota"
  },
  {
    "name": "Mingguan — 7 Hari Semua Kelas",
    "price": "Rp 120.000",
    "badge": "Populer",
    "stock": "Kuota"
  },
  {
    "name": "Bulanan — Full Akses + Program",
    "price": "Rp 300.000",
    "badge": "Hemat",
    "stock": "Kuota"
  },
  {
    "name": "Tahunan — Full + 2 Bulan Bonus",
    "price": "Rp 2.900.000",
    "badge": "Best Value",
    "stock": "Kuota"
  },
  {
    "name": "Free Trial 1x + Konsultasi",
    "price": "Rp 0",
    "badge": "Gratis",
    "stock": "Slot"
  },
  {
    "name": "Personal Trainer 4 Sesi",
    "price": "Rp 500.000",
    "badge": "Progres",
    "stock": "Slot"
  }
];
