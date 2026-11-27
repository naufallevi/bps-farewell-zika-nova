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
    fullName: "Zika Fahrina Dinana",
    role: "Ruang PST",
    campus: "UIN K.H Abdurrahman Wahid Pekalongan · Ekonomi Syariah",
    photo: "/images/zika.webp",
    initial: "Z",
    gradient: "from-[#0B5CAB] to-[#22C55E]",
    funFact: "Jago ngeprint wkwkwk",
    impression: "Fatimah Azzahra wanna be",
    secretRole: "Multi talent tugas kantor, bisa jadi MC, bisa jadi tukang print, bisa jadi tukang ngobrol.",
    quote: '"-"',
  },
  {
    id: "nova",
    name: "Nova",
    fullName: "Nova Safitri",
    role: "Ruang Teknis",
    campus: "UIN K.H Abdurrahman Wahid Pekalongan · Ekonomi Syariah",
    photo: "/images/nova.webp",
    initial: "N",
    gradient: "from-[#F59E0B] to-[#0B5CAB]",
    funFact: 'Lucu dan tinggi"',
    impression: "Selalu ceria",
    secretRole: "Pekerja diam-diam",
    quote: '"-"',
  },
];

export const INTERNSHIP = {
  startDate: "2026-10-05",
  endDate: "2026-11-27",
  periodLabel: "Oktober – November 2026",
  place: "BPS Kota Pekalongan",
};

export const STATS = [
  { label: "ngisi tumbler", value: 214, suffix: " refill", emoji: "🫗" },
  { label: "Chrome dibuka", value: 1024, suffix: " kali", emoji: "📊" },
  { label: 'Bilang "siap, Pak/Bu"', value: 348, suffix: " kali", emoji: "🙋" },
  { label: "Membuka fasih sm", value: 47, suffix: " jam", emoji: "🌙" },
  { label: "Ketawa", value: 999, suffix: " ngakak", emoji: "🤣" },
];

export type TimelineItem = {
  date: string;
  title: string;
  desc: string;
  image: string;
};

export const TIMELINE: TimelineItem[] = [
  {
    date: "05 Okt 2026",
    title: "Hari Pertama",
    desc: "Awalnya merasa bingung karena belum ada tugas dan belum tahu harus melakukan apa.",
    image: "/images/timeline-1.webp",
  },
  {
    date: "06 Okt 2026",
    title: "Kenalan Tim",
    desc: "Ternyata bertemu dengan tim yang ramah, menyenangkan, dan penuh kejutan.",
    image: "/images/timeline-2.webp",
  },
  {
    date: "12 Okt 2026",
    title: "Tugas Pertama",
    desc: "Mendapatkan tugas pertama di FASIH, langsung merasakan pengalaman baru, belajar banyak hal, dan tentunya FASIH josjis, mantep!",
    image: "/images/timeline-3.webp",
  },
  {
    date: "Unlimited",
    title: "Momen Lucu",
    desc: "Banyak kejadian random, lucu, bahkan absurd selama magang. Mulai dari tingkah dan candaan bapak-ibu pegawai, keseruan mas-mbak magang Kemnaker, kerandoman bapak-bapak di balik layar BPS, hingga insiden terkunci di kamar mandi lantai 4 karena tidak bisa membuka pintu sendiri. 😂",
    image: "/images/timeline-4.webp",
  },
  {
    date: "27 November 2026",
    title: "Hari Terakhir",
    desc: "Rasanya sedih banget harus mengakhiri semua kebersamaan ini. Bakal kangen mas-mbak magang, candaan dan tingkah random pegawai di ruang teknis maupun PST, serta suasana kantor yang setiap harinya selalu punya cerita. Setelah ini juga bingung harus melangkah ke mana dan kapan bisa merasakan kebersamaan seperti ini lagi. Thank you very much to all of you! ❤️",
    image: "/images/timeline-5.webp",
  },
  {
    date: "Next Day",
    title: "Fokus Skripsi",
    desc: "Saatnya membuka lembaran baru, kembali fokus menyelesaikan skripsi, mengejar target yang tertunda, dan mempersiapkan langkah berikutnya. Terima kasih untuk semua kenangan selama magang.",
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
  { id: "g1", src: "/images/gallery-1.jpg", caption: "🙌", category: "Bareng Tim" },
  { id: "g2", src: "/images/gallery-2.jpg", caption: "🙌", category: "Bareng Tim" },
  { id: "g3", src: "/images/gallery-3.jpg", caption: "🙌", category: "Bareng Tim" },
  { id: "g4", src: "/images/gallery-4.jpg", caption: "🙌", category: "Bareng Tim" },
  {
    id: "g5",
    src: "/images/gallery-5.jpg",
    caption: "🙌",
    category: "Bareng Tim",
  },
  { id: "g6", src: "/images/gallery-6.jpg", caption: "🙌", category: "Bareng Tim" },
  { id: "g7", src: "/images/gallery-7.jpg", caption: "🙌", category: "Bareng Tim" },
  { id: "g8", src: "/images/gallery-8.jpg", caption: "🙌", category: "Bareng Tim" },
  { id: "g9", src: "/images/gallery-9.jpg", caption: "🙌", category: "Bareng Tim" },
];

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
};

export const QUIZ: QuizQuestion[] = [
  {
    q: "Rumah Zika?",
    options: ["Landungsari", "Medono", "Wiradesa", "Kuripan"],
    answer: 0,
  },
  {
    q: "Rumah Nova?",
    options: ["Landungsari", "Medono", "Wiradesa", "Kuripan"],
    answer: 3,
  },
  {
    q: "Kapan tanggal mereka masuk magang?",
    options: ["04", "05", "06", "07"],
    answer: 1,
  },
  {
    q: "Kapan tanggal mereka selesai magang?",
    options: ["25", "26", "27", "28"],
    answer: 2,
  },
];

export const LETTER = {
  title: "Surat untuk Zika & Nova",
  body: `Hai Zika, hai Nova...

Dua bulan bukan waktu yang lama untuk sebuah pertemuan, tapi cukup untuk bikin kami (Peserta Magang Lain) di BPS Kota Pekalongan jadi lebih ramai, lebih berwarna, dan sedikit lebih berisik di ruangan.

Terima kasih sudah jadi bagian dari tim ini. Terima kasih untuk setiap "siap, Pak/Bu" yang tulus, untuk setiap tabel yang rapi, untuk refill air yang bergantian, dan untuk tawa yang selalu kamu bawa masuk kantor tiap pagi.

Kami akan kangen suara ketikan keyboard kalian, kangen pertanyaan-pertanyaan polos yang ternyata jawabannya jadi diskusi panjang, kangen juga saat kalian berdua kompak bilang padahal masih santuy.

Di luar sana banyak data yang harus diceritakan, banyak tabel yang harus dirapikan, dan banyak mimpi yang menunggu untuk dihitung. Semoga langkah kalian selalu diberkahi, semoga ilmu yang didapat di sini jadi bekal yang bermanfaat, dan semoga kalian tetap jadi orang-orang hangat seperti yang kami kenal.

Kalau kangen, nomor hp kami ini selalu terbuka. Kalau lelah, ingat ada ibadah kepada ALlah SWT. yang bisa memberikan ketenangan. Kalau butuh referensi kerja, kami siap. Kalau butuh cerita, kami lebih siap lagi.

Selamat jalan, Zika. Selamat jalan, Nova.
Sampai jumpa di kesuksesan kalian selanjutnya.

Dengan hangat,
Peserta Magang BPS Kota Pekalongan`,
};

export const INITIAL_MESSAGES = [
  {
    id: "m1",
    name: "Cristiano Ronaldo",
    to: "Keduanya",
    text: "Sukses bukan kebetulan. Itu hasil kerja keras, dedikasi, dan semangat pantang menyerah. Keep pushing your limits!",
    color: "yellow",
    emoji: "🏆",
    reactions: { "❤️": 8, "👏": 10, "😂": 2 },
  },
  {
    id: "m2",
    name: "Taylor Swift",
    to: "Zika",
    text: "Setiap perjalanan punya cerita, dan setiap cerita punya kenangan. Jangan pernah berhenti menulis bab baru dalam hidupmu!",
    color: "blue",
    emoji: "❤️",
    reactions: { "❤️": 10, "👏": 5, "😂": 2 },
  },
  {
    id: "m3",
    name: "MrBeast",
    to: "Nova",
    text: "Kalian sudah menyelesaikan satu tantangan besar! Sekarang waktunya naik level. Siapa tahu tantangan berikutnya jauh lebih seru!",
    color: "pink",
    emoji: "🎉",
    reactions: { "❤️": 5, "👏": 8, "😂": 7 },
  },
  {
    id: "m4",
    name: "Lionel Messi",
    to: "Keduanya",
    text: "Kerja sama tim adalah kunci. Teruslah bermain dengan hati, saling mendukung, dan jangan lupa menikmati setiap prosesnya.",
    color: "green",
    emoji: "⚽",
    reactions: { "❤️": 9, "👏": 8, "😂": 1 },
  },
  {
    id: "m5",
    name: "Albert Einstein",
    to: "Zika",
    text: "Jangan takut membuat kesalahan. Yang terpenting adalah terus belajar, karena pengalaman adalah guru terbaik.",
    color: "yellow",
    emoji: "💡",
    reactions: { "❤️": 7, "👏": 9, "😂": 1 },
  },
  {
    id: "m6",
    name: "Jackie Chan",
    to: "Nova",
    text: "Tetap semangat menghadapi tantangan! Hidup memang penuh aksi, kadang jatuh, kadang tertawa, tetapi jangan pernah menyerah!",
    color: "blue",
    emoji: "😂",
    reactions: { "❤️": 6, "👏": 7, "😂": 10 },
  },
  {
    id: "m7",
    name: "Elon Musk",
    to: "Keduanya",
    text: "The future is exciting. Terus berinovasi, berani mencoba hal baru, dan jangan takut berpikir di luar kebiasaan!",
    color: "pink",
    emoji: "🚀",
    reactions: { "❤️": 5, "👏": 10, "😂": 2 },
  },
  {
    id: "m8",
    name: "Keanu Reeves",
    to: "Keduanya",
    text: "Be excellent to each other. Terima kasih sudah menjadi bagian dari perjalanan yang menyenangkan. Semoga dunia mempertemukan kita kembali.",
    color: "green",
    emoji: "❤️",
    reactions: { "❤️": 12, "👏": 6, "😂": 1 },
  },
  {
    id: "m9",
    name: "Gordon Ramsay",
    to: "Zika",
    text: "Excel-nya rapi, pekerjaannya selesai. Finally, some good work! Sekarang silakan menikmati hidup tanpa dikejar deadline!",
    color: "yellow",
    emoji: "🔥",
    reactions: { "❤️": 4, "👏": 7, "😂": 12 },
  },
  {
    id: "m10",
    name: "Satoru Gojo",
    to: "Nova",
    text: "Tenang saja, masa depan kalian sudah pasti cerah. After all, you're the strongest! Jangan lupa mampir lagi!",
    color: "blue",
    emoji: "✨",
    reactions: { "❤️": 10, "👏": 6, "😂": 9 },
  },
  {
    id: "m11",
    name: "Naruto Uzumaki",
    to: "Keduanya",
    text: "Aku tidak akan menarik kembali kata-kataku. Teruslah berjuang meraih impian kalian! Dattebayo!",
    color: "pink",
    emoji: "🍥",
    reactions: { "❤️": 8, "👏": 7, "😂": 5 },
  },
  {
    id: "m12",
    name: "Steve Jobs",
    to: "Keduanya",
    text: "Stay hungry, stay foolish. Jangan pernah berhenti belajar, berkreasi, dan melakukan sesuatu yang benar-benar kalian cintai.",
    color: "green",
    emoji: "🍎",
    reactions: { "❤️": 11, "👏": 9, "😂": 1 },
  },
] as const;

export const BADGES = [
  { min: 0, label: "Rekan Kantor Biasa", emoji: "🙂" },
  { min: 1, label: "Kenalan Baik", emoji: "😊" },
  { min: 3, label: "Sahabat Sejati", emoji: "🥰" },
  { min: 4, label: "Legenda BPS", emoji: "👑" },
];

export const COLORS = {
  yellow: "#FEF3C7",
  blue: "#DBEAFE",
  pink: "#FCE7F3",
  green: "#DCFCE7",
  purple: "#EDE9FE",
};
