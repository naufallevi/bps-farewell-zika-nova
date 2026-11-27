import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { ArrowDown, Sparkles } from "lucide-react";
import { PROFILES, INTERNSHIP } from "../data/config";
import { scrollToSection } from "../hooks/useLenis";
import FloatingIcons from "../components/FloatingIcons";

export default function Hero({ onStart }: { onStart: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    confetti({
      particleCount: 60,
      spread: 90,
      origin: { y: 0.3 },
      colors: ["#0B5CAB", "#F59E0B", "#22C55E"],
    });
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card, i) => {
        const depth = i === 0 ? 14 : -14;
        card.style.transform = `perspective(900px) rotateY(${x * depth}deg) rotateX(${-y * depth}deg) translateZ(0)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleStart = () => {
    window.playBGM?.();
    onStart();
    setTimeout(() => scrollToSection("countdown"), 100);
  };

  return (
    // Layout Flexbox: flex-col + justify-between agar muat pas 1 layar
    // pt-24 (96px) memberi ruang aman untuk navbar di atas tanpa merusak layout
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden px-5 pt-24 pb-8 md:pt-28"
    >
      <div className="mesh-bg" aria-hidden />
      <FloatingIcons />

      {/* KONTEN ATAS: Badge, Judul, Subjudul */}
      <div
        ref={wrapRef}
        className="relative z-10 mx-auto mt-4 flex w-full max-w-5xl flex-col items-center text-center md:mt-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm"
        >
          <Sparkles size={14} className="text-bps-orange" />
          Kenang-kenangan dari Peserta Magang BPS Kota Pekalongan
        </motion.div>

        <h1 className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          <div className="mb-2 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {"Terima Kasih,".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.7, ease: "easeOut" }}
                className="inline-block whitespace-nowrap"
              >
                {w}
              </motion.span>
            ))}
          </div>
          <div className="relative">
            <span className="bg-gradient-to-r from-bps-blue via-bps-orange to-bps-green bg-clip-text text-transparent whitespace-nowrap">
              Zika & Nova
            </span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg text-black/70 dark:text-white/70 md:mt-6"
        >
          Magang di {INTERNSHIP.place} · {INTERNSHIP.periodLabel}
        </motion.p>
      </div>

      {/* KONTEN BAWAH: Avatar & Tombol */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center mt-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          {PROFILES.map((p, i) => (
            <motion.div
              key={p.id}
              data-tilt
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.15, type: "spring", stiffness: 120 }}
              className="relative"
              style={{ willChange: "transform", transition: "transform 0.15s ease-out" }}
            >
              {/* Ukuran avatar responsif: 20 (80px) di mobile, 28 (112px) di desktop */}
              <div className={`h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br ${p.gradient} p-1 shadow-soft`}>
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-bps-navy text-2xl md:text-3xl font-display font-bold text-bps-navy dark:text-white">
                  {p.initial}
                </div>
              </div>
              <div className="mt-2 font-display text-sm md:text-base text-center">{p.name}</div>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleStart}
          className="group inline-flex items-center gap-2 rounded-full bg-bps-navy px-8 py-3.5 md:py-4 font-medium text-white shadow-soft transition dark:bg-white dark:text-bps-navy"
        >
          Mulai Perjalanan
          <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
        </motion.button>
      </div>
    </section>
  );
}
