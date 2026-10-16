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
  title: 'Jambi Bugar Gym — Home Gym Islami Sesi Pria & Muslimah',
  description:
    'Rumah transformasi islami di Kota Jambi: latihan kekuatan dengan sesi pria dan muslimah terpisah, didampingi coach, suasana tenang. Jadwal & pendaftaran via WhatsApp admin.',
  canonicalPath: '/',
  ogImage: '/images/jambi-bugar-1.webp',
};

export const ctaLink = (message: string) =>
  `https://ig.me/m/jambibugar.gym?text=${encodeURIComponent(message)}`;
export const ctaLabel = 'Tanya via DM IG';

/** Normalisasi nomor Indonesia (08xx) menjadi format internasional wa.me (628xx). */
export const waLink = (phone: string, message: string) =>
  `https://wa.me/${phone.replace(/\D/g, '').replace(/^0/, '62')}?text=${encodeURIComponent(message)}`;

/**
 * Profil pelatih utama — Coach Noe (Muhammad Nor).
 * Sumber kontak: publikasi Berita Jambi (2 Agu 2026 / 1 Sep 2026) untuk JBG Coach Academy.
 * Tanpa foto wajah: visual non-wajah + monogram inisial.
 */
export const coachNoe = {
  name: 'Coach Noe',
  fullName: 'Muhammad Nor',
  monogram: 'MN',
  role: 'Penggagas & pelatih berlisensi nasional',
  focus: 'Edukasi kebugaran & penyiapan SDM kebugaran Jambi',
  note: 'Menggagas JBG Coach Academy pada Agustus 2026 untuk menyiapkan pelatih kebugaran berkualitas di Jambi, dengan penekanan pada pemahaman latihan — bukan sekadar mengikuti gerakan.',
  phone: '0812-4597-0801',
  img: '/images/jambi-bugar-3.webp',
  alt: 'Kettlebell di area latihan Jambi Bugar Gym, visual non-wajah untuk profil coach',
};

/** Kontak admin untuk jadwal, pendaftaran, dan informasi tarif. */
export const adminContact = {
  name: 'Coach Iir',
  monogram: 'CI',
  role: 'Admin — jadwal, pendaftaran & informasi tarif',
  phone: '0853-7952-9017',
};

/**
 * Catatan direktori: selain Coach Noe, profil pelatih lain belum terverifikasi dari
 * sumber resmi. Tidak ada biodata/sertifikasi karangan — daftar lengkap via admin.
 */
export const coachDirectoryNote =
  'Baru Coach Noe yang terverifikasi dari sumber publik. Profil pelatih lain belum kami tampilkan karena belum ada data resmi — daftar lengkap dikonfirmasi via admin.';

export const programs = [
  {
    name: 'Sesi Latihan Pria',
    badge: 'Terverifikasi',
    desc: 'Jadwal latihan terpisah pria — sesuai bio IG resmi. Jam sesi cek DM/postingan.',
    img: '/images/jambi-bugar-1.webp',
    alt: 'Area beban home gym islami Jambi Bugar Gym sesi pria',
  },
  {
    name: 'Sesi Latihan Wanita',
    badge: 'Terverifikasi',
    desc: 'Jadwal latihan terpisah wanita — nyaman, aman, syari. Jam sesi cek DM/postingan.',
    img: '/images/jambi-bugar-2.webp',
    alt: 'Area latihan beban sesi muslimah di Jambi Bugar Gym',
  },
  {
    name: 'Pendampingan Coach',
    badge: 'Estimasi',
    desc: 'Dibantu teknik dasar yang benar. Ketersediaan coach konfirmasi via DM IG.',
    img: '/images/jambi-bugar-3.webp',
    alt: 'Kettlebell untuk sesi pendampingan coach Jambi Bugar Gym',
  },
  {
    name: 'Asesmen Awal & Target',
    badge: 'Estimasi',
    desc: 'Ukur kondisi awal sebelum program transformasi. Detail via DM IG.',
    img: '/images/jambi-bugar-4.webp',
    alt: 'Timbangan badan untuk asesmen awal member Jambi Bugar Gym',
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
