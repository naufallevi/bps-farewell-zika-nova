import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useKonamiCode } from '../hooks/useKonamiCode';

const ICONS = ['📊', '📈', '📋', '❤️', '🎉', '✨', '🥰'];

export default function EasterEgg() {
  const [open, setOpen] = useState(false);

  const trigger = () => {
    setOpen(true);
    // hujan emoji
    confetti({
      particleCount: 80,
      spread: 160,
      origin: { y: 0.4 },
      shapes: ['circle'],
      scalar: 1.3,
      colors: ['#0B5CAB', '#F59E0B', '#22C55E', '#FDF6EC'],
    });
    setTimeout(() => setOpen(false), 5200);
  };

  useKonamiCode(trigger);

  useEffect(() => {
    let buf = '';
    const h = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-8);
      if (buf.endsWith('zika') || buf.endsWith('nova')) trigger();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-2xl bg-bps-navy px-6 py-4 text-center text-white shadow-glow"
        >
          <div className="text-2xl">🎉 Rahasia terbuka!</div>
          <p className="mt-1 text-sm text-white/80">Zika & Nova adalah legenda BPS Kota Pekalongan. Jangan bilang siapa-siapa 🤫</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}