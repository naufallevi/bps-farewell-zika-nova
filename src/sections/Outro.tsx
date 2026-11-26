import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowUp, Sparkles } from 'lucide-react';
import { scrollToSection } from '../hooks/useLenis';

export default function Outro() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    const count = 60;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'absolute rounded-full bg-white';
      const size = Math.random() * 2 + 1;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.opacity = String(Math.random() * 0.7 + 0.2);
      s.style.animation = `twinkle ${3 + Math.random() * 3}s ease-in-out infinite`;
      s.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(s);
    }
    const style = document.createElement('style');
    style.textContent = `@keyframes twinkle{0%,100%{opacity:.2}50%{opacity:1}}`;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const rain = () => {
    const duration = 2500;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section id="outro" className="relative overflow-hidden bg-bps-navy py-32 text-white">
      <div ref={starsRef} className="pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm"
        >
          <Sparkles size={14} /> Selamat jalan
        </motion.div>
        <h2 className="font-display text-4xl leading-tight md:text-6xl">
          Sampai Jumpa di<br />
          <span className="bg-gradient-to-r from-bps-orange via-yellow-300 to-bps-green bg-clip-text text-transparent">
            Kesuksesan Kalian Selanjutnya ✨
          </span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button onClick={rain} className="rounded-full bg-bps-orange px-6 py-3 font-medium text-bps-navy transition hover:scale-105">
            Hujan Confetti 🎉
          </button>
          <button onClick={() => scrollToSection('hero')} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/10">
            <ArrowUp size={16} /> Kembali ke atas
          </button>
        </div>

        <footer className="mt-20 text-sm text-white/60">
          Dibuat dengan ❤️ oleh tim BPS Kota Pekalongan · {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  );
}