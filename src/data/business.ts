export const business = {
  name: 'Jambi Bugar Gym',
  slug: 'jambi-bugar-gym-jambi',
  category: 'Home Gym Islami',
  city: 'Kota Jambi',
  // TERVERIFIKASI dari IG @jambibugar.gym (diakses 16 Okt 2026): 848 pengikut, 226 postingan
  // Bio: "Rumah Transformasi — Nyaman | Aman | Syari", jadwal latihan terpisah Pria/Wanita
  instagram: 'https://www.instagram.com/jambibugar.gym',
  followers: '848 pengikut IG',
  // Nomor WA resmi belum ditemukan — CTA utama ke DM Instagram
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jambi+Bugar+Gym+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=Jambi%20Bugar%20Gym%20Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Kota Jambi — alamat & jam sesi konfirmasi via DM IG',
  hours: 'Sesi terpisah Pria/Wanita — jadwal via DM IG',
  title: 'Jambi Bugar Gym — Home Gym Islami Sesi Pria/Wanita',
  description:
    'Jambi Bugar Gym: home gym islami di Jambi, jadwal latihan terpisah pria/wanita. Daftar & jadwal via DM IG @jambibugar.gym.',
  canonicalPath: '/',
  ogImage: '/images/jambi-bugar-1.jpg',
};

export const ctaLink = (message: string) =>
  `https://ig.me/m/jambibugar.gym?text=${encodeURIComponent(message)}`;
export const ctaLabel = 'Tanya via DM IG';

export const programs = [
  {
    name: 'Sesi Latihan Pria',
    badge: 'Terverifikasi',
    desc: 'Jadwal latihan terpisah pria — sesuai bio IG resmi. Jam sesi cek DM/postingan.',
    img: '/images/jambi-bugar-1.jpg',
    alt: 'Area beban home gym islami Jambi Bugar Gym sesi pria',
  },
  {
    name: 'Sesi Latihan Wanita',
    badge: 'Terverifikasi',
    desc: 'Jadwal latihan terpisah wanita — nyaman, aman, syari. Jam sesi cek DM/postingan.',
    img: '/images/jambi-bugar-2.jpg',
    alt: 'Kelas kebugaran sesi wanita di Jambi Bugar Gym',
  },
  {
    name: 'Pendampingan Coach',
    badge: 'Estimasi',
    desc: 'Dibantu teknik dasar yang benar. Ketersediaan coach konfirmasi via DM IG.',
    img: '/images/jambi-bugar-3.jpg',
    alt: 'Coach mendampingi member latihan di Jambi Bugar Gym',
  },
  {
    name: 'Asesmen Awal & Target',
    badge: 'Estimasi',
    desc: 'Ukur kondisi awal sebelum program transformasi. Detail via DM IG.',
    img: '/images/jambi-bugar-4.jpg',
    alt: 'Asesmen kebugaran awal member Jambi Bugar Gym',
  },
];

export const coaches = [
  { role: 'Coach Sesi Pria', badge: 'Estimasi', desc: 'Panduan latihan sesi pria. Nama coach aktual cek IG.' },
  { role: 'Coach Sesi Wanita', badge: 'Estimasi', desc: 'Panduan latihan sesi wanita. Nama coach aktual cek IG.' },
  { role: 'Pendamping Transformasi', badge: 'Estimasi', desc: 'Pola latihan + kebiasaan. Detail program via DM IG.' },
];

export const prices = [
  { name: 'Sesi Coba / Trial', price: 'Konfirmasi IG', badge: 'Klaim — cek IG', desc: 'Tanya slot trial via DM @jambibugar.gym.' },
  { name: 'Harian — 1 Sesi', price: 'Rp 35.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via DM IG.' },
  { name: 'Mingguan', price: 'Rp 120.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via DM IG.' },
  { name: 'Bulanan — Full Sesi', price: 'Rp 300.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via DM IG.' },
  { name: 'Pendampingan 4 Sesi', price: 'Rp 500.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via DM IG.' },
  { name: 'Tahunan', price: 'Rp 2.900.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via DM IG.' },
];
