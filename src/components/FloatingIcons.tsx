import { motion } from "framer-motion";
import { BarChart3, LineChart, MapPinned, Users, PieChart, FileSpreadsheet } from "lucide-react";

const icons = [BarChart3, LineChart, MapPinned, Users, PieChart, FileSpreadsheet];

// Posisi dikunci aman di sudut-sudut (Safe Zone), tidak ada di tengah
const positions = [
  { top: "15%", left: "5%" }, // Kiri atas
  { top: "20%", right: "8%" }, // Kanan atas
  { top: "65%", left: "8%" }, // Kiri bawah
  { top: "70%", right: "5%" }, // Kanan bawah
  { top: "40%", left: "2%" }, // Kiri tengah
  { top: "45%", right: "2%" }, // Kanan tengah
];

export default function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden md:block">
      {icons.map((Icon, i) => {
        const pos = positions[i];
        const dur = 15 + (i % 3) * 4;
        const delay = i * 0.5;
        return (
          <motion.div
            key={i}
            className="absolute text-bps-blue/10 dark:text-white/5"
            style={pos}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            {/* Ukuran lebih kecil dan presisi (antara 40px s.d 64px) */}
            <Icon size={40 + (i % 3) * 12} strokeWidth={1.2} />
          </motion.div>
        );
      })}
    </div>
  );
}
