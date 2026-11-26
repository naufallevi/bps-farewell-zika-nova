import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 2000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 0 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bps-navy text-white"
    >
      <div className="mb-6 font-display text-xl tracking-wide text-white/70">Menghitung data kenangan...</div>
      <div className="flex h-40 items-end gap-2" aria-hidden>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={i}
            initial={{ height: 8 }}
            animate={{ height: `${20 + i * 10 + pct * 0.3}%` }}
            transition={{ duration: 0.4 }}
            className="w-5 rounded-t-md bg-gradient-to-t from-bps-blue to-bps-orange"
          />
        ))}
      </div>
      <div className="mt-6 font-display text-5xl tabular-nums">{pct}%</div>
    </motion.div>
  );
}