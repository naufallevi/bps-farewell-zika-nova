// ============================================================
//  SEMUA KONTEN DI SINI — mudah diedit tanpa sentuh kode lain
// ============================================================

export type Profile = {
  id: "zika" | "nova";
  name: string;
  fullName: string;
  role: string;
  campus: string;
  photo: string;
  initial: string;
  gradient: string;
  funFact: string;
  impression: string;
  secretRole: string;
  quote: string;
};

export const PROFILES: Profile[] = [
  {
    id: "zika",
    name: "Zika",
    fullName: "Zahra Inka Kamilah",
    role: "Magang Statistik Sosial",
    campus: "Universitas Diponegoro · Statistika",
    photo: "/images/zika.webp",
    initial: "Z",
    gradient: "from-[#0B5CAB] to-[#22C55E]",
    funFact: "Bisa nebak angka BPS sebelum di-print, tapi masih suka salah pilih menu di kantin.",
    impression: "Orangnya kalem tapi kalau ngoding VBA Excel bisa mode silat.",
    secretRole: "Ratu Pivot Table & penyelamat deadline H-1.",
    quote: '"Data itu bukan angka, dia cerita."',
  },
  {
    id: "nova",
    name: "Nova",
    fullName: "Nova Annisa Rahma",
    role: "Magang Neraca Wilayah",
    campus: "Politeknik Statistika STIS · Komputasi Statistik",
    photo: "/images/nova.webp",
    initial: "N",
    gradient: "from-[#F59E0B] to-[#0B5CAB]",
    funFact: 'Pernah ketiduran pas rapat, bangun-bangun langsung nyebut "siap, Pak!"',
    impression: "Sumber energi pagi hari, senyumnya bisa ngisi ulang gelas kopi kami.",
    secretRole: "Direktur Humas dadakan & MC acara kantor tanpa mic.",
    quote: '"Yang penting senang, yang penting tepat waktu."',
  },
];

export const INTERNSHIP = {
  startDate: "2025-01-06",
  endDate: "2025-06-30", // ganti sesuai tanggal hari terakhir
  periodLabel: "Januari – Juni 2025",
  place: "BPS Kota Pekalongan",
};

export const STATS = [
  { label: "Gelas kopi diminum", value: 214, suffix: " gelas", emoji: "☕" },
  { label: "File Excel dibuka", value: 1024, suffix: " kali", emoji: "📊" },
  { label: 'Kali bilang "siap, Pak/Bu"', value: 348, suffix: " kali", emoji: "🙋" },
  { label: "Jam lembur bareng", value: 47, suffix: " jam", emoji: "🌙" },
  { label: "Kue kotak rapat dimakan", value: 89, suffix: " buah", emoji: "🍩" },
];

export type TimelineItem = {
  date: string;
  title: string;
  desc: string;
  image: string;
};

export const TIMELINE: TimelineItem[] = [
  {
    date: "06 Jan 2025",
    title: "Hari Pertama",
    desc: "Datang paling pagi, duduk paling pojok, senyum paling sopan. Ibu-ibu kantor langsung sayang.",
    image: "/images/timeline-1.webp",
  },
  {
    date: "20 Jan 2025",
    title: "Kenalan Tim",
    desc: "Dibawa keliling semua ruangan. Ada yang lupa nama belakang salah satu, tapi sudah saling follow IG.",
    image: "/images/timeline-2.webp",
  },
  {
    date: "14 Feb 2025",
    title: "Survei Lapangan",
    desc: "Pertama kali pegang clipboard di pasar. Pulang bawa data plus 3 jajanan khas Pekalongan.",
    image: "/images/timeline-3.webp",
  },
  {
    date: "03 Apr 2025",
    title: "Tugas Pertama",
    desc: "Rekap data 400 responden dalam semalam. Kopi habis 4 gelas, cerita ini jadi legenda.",
    image: "/images/timeline-4.webp",
  },
  {
    date: "12 Mei 2025",
    title: "Momen Lucu",
    desc: 'Ada yang nanya "ini tabelnya buat apa?" — jawabannya: "Buat dikasih ke Bu Sri". Kita semua ngakak.',
    image: "/images/timeline-5.webp",
  },
  {
    date: "30 Jun 2025",
    title: "Hari Terakhir",
    desc: 'Bawa kue, bawa tisu, bawa kata perpisahan. Yang bilang "tidak akan nangis" ternyata paling parah.',
    image: "/images/timeline-6.webp",
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  caption: string;
  category: "Zika" | "Nova" | "Bareng Tim" | "Kegiatan";
};

export const GALLERY: GalleryItem[] = [
  { id: "g1", src: "/images/gallery-1.webp", caption: "Selfie pagi sebelum data masuk", category: "Bareng Tim" },
  { id: "g2", src: "/images/gallery-2.webp", caption: "Zika mode fokus", category: "Zika" },
  { id: "g3", src: "/images/gallery-3.webp", caption: "Nova dan mic keramat rapat", category: "Nova" },
  { id: "g4", src: "/images/gallery-4.webp", caption: "Survei pasar, gerah tapi senang", category: "Kegiatan" },
  {
    id: "g5",
    src: "/images/gallery-5.webp",
    caption: "Rapat rutin yang selalu jadi ajang ngakak",
    category: "Bareng Tim",
  },
  { id: "g6", src: "/images/gallery-6.webp", caption: "Makan siang ke-213", category: "Kegiatan" },
  { id: "g7", src: "/images/gallery-7.webp", caption: "Zika dan Excel-nya yang legendaris", category: "Zika" },
  { id: "g8", src: "/images/gallery-8.webp", caption: "Nova, kue kotak, dan senyum bahagia", category: "Nova" },
];

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
};

export const QUIZ: QuizQuestion[] = [
  {
    q: "Minuman favorit Zika saat lembur?",
    options: ["Kopi hitam", "Es teh manis", "Matcha latte", "Air putih saja"],
    answer: 0,
  },
  {
    q: 'Siapa yang paling sering bilang "siap, Pak!"?',
    options: ["Zika", "Nova", "Bersama-sama", "Bu Sri"],
    answer: 1,
  },
  { q: "Aplikasi yang paling sering dibuka Nova?", options: ["TikTok", "Excel", "Notepad", "Adobe XD"], answer: 1 },
  {
    q: "Jajanan wajib saat survei pasar Pekalongan?",
    options: ["Sate kuda", "Tauto", "Wingko", "Semua benar"],
    answer: 3,
  },
  {
    q: "Kebiasaan Zika yang bikin tim gemas?",
    options: ['Menyebut data "cerita"', "Selalu bawa tumbler", "Diam-diam bikin pivot table", "Semua benar"],
    answer: 3,
  },
  {
    q: "Kalau Nova jadi BPS-1 sehari, dia bakal...?",
    options: ["Adakan senam pagi", "Bagi-bagi kue", "Bikin kopi gratis", "Semua benar"],
    answer: 3,
  },
  {
    q: "Kalimat yang paling sering diucapkan berdua?",
    options: ['"Nanti dulu ya"', '"Siap laksanakan!"', '"Kita bisa!"', '"Error lagi"'],
    answer: 2,
  },
];

export const LETTER = {
  title: "Surat untuk Zika & Nova",
  body: `Hai Zika, hai Nova...

Enam bulan bukan waktu yang lama untuk sebuah pertemuan, tapi cukup untuk bikin kami di BPS Kota Pekalongan jadi lebih ramai, lebih berwarna, dan sedikit lebih berisik di ruangan sebelah.

Terima kasih sudah jadi bagian dari tim ini. Terima kasih untuk setiap "siap, Pak/Bu" yang tulus (walau kadang sambil ngantuk), untuk setiap tabel yang rapi, untuk kopi yang bergantian beli, dan untuk tawa yang selalu kamu bawa masuk kantor tiap pagi.

Kami akan kangen suara ketikan Excel kalian, kangen pertanyaan-pertanyaan polos yang ternyata jawabannya jadi diskusi panjang, kangen juga saat kalian berdua kompak bilang "bentar lagi selesai" padahal masih ngopi di pantry.

Di luar sana banyak data yang harus diceritakan, banyak tabel yang harus dirapikan, dan banyak mimpi yang menunggu untuk dihitung. Semoga langkah kalian selalu diberkahi, semoga ilmu yang didapat di sini jadi bekal yang bermanfaat, dan semoga kalian tetap jadi orang-orang hangat seperti yang kami kenal.

Kalau kangen, pintu kantor ini selalu terbuka. Kalau lelah, ingat ada kami yang dulu pernah lembur bareng kalian. Kalau butuh referensi kerja, kami siap. Kalau butuh cerita, kami lebih siap lagi.

Selamat jalan, Zika. Selamat jalan, Nova.
Sampai jumpa di kesuksesan kalian selanjutnya.

Dengan hangat,
Tim BPS Kota Pekalongan`,
};

export const INITIAL_MESSAGES = [
  {
    id: "m1",
    name: "Bu Sri",
    to: "Keduanya",
    text: "Semoga sukses selalu ya anak-anak. Jangan lupa mampir kalau lewat!",
    color: "yellow",
    emoji: "❤️",
    reactions: { "❤️": 5, "👏": 2, "😂": 1 },
  },
  {
    id: "m2",
    name: "Pak Andi",
    to: "Zika",
    text: "Terima kasih sudah bantu urus data. Excel-mu lebih rapi dari meja saya.",
    color: "blue",
    emoji: "👏",
    reactions: { "❤️": 3, "👏": 6, "😂": 0 },
  },
  {
    id: "m3",
    name: "Bu Rina",
    to: "Nova",
    text: "Energimu bikin rapat pagi nggak ngantuk. Ditunggu cerita-cerita barunya!",
    color: "pink",
    emoji: "😂",
    reactions: { "❤️": 4, "👏": 1, "😂": 5 },
  },
  {
    id: "m4",
    name: "Tim Sosial",
    to: "Keduanya",
    text: "Dua orang yang bikin ruangan sebelah selalu penasaran kenapa kita ketawa.",
    color: "green",
    emoji: "🎉",
    reactions: { "❤️": 7, "👏": 3, "😂": 4 },
  },
] as const;

export const BADGES = [
  { min: 0, label: "Rekan Kantor Biasa", emoji: "🙂" },
  { min: 3, label: "Kenalan Baik", emoji: "😊" },
  { min: 5, label: "Sahabat Sejati", emoji: "🥰" },
  { min: 7, label: "Legenda BPS", emoji: "👑" },
];

export const COLORS = {
  yellow: "#FEF3C7",
  blue: "#DBEAFE",
  pink: "#FCE7F3",
  green: "#DCFCE7",
  purple: "#EDE9FE",
};
