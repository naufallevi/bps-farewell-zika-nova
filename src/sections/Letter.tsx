import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { LETTER } from '../data/config';

export default function Letter() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const idxRef = useRef(0);

  useEffect(() => {
    if (!open) return;
    idxRef.current = 0;
    setTyped('');
    const id = setInterval(() => {
      idxRef.current += 1;
      setTyped(LETTER.body.slice(0, idxRef.current));
      if (idxRef.current >= LETTER.body.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [open]);

  return (
    <section id="letter" className="mx-auto max-w-3xl px-5 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-4xl md:text-5xl"
      >Kapsul Waktu</motion.h2>
      <p className="mt-3 text-center text-black/60 dark:text-white/60">Sebuah surat kecil, dari kami semua.</p>

      <div className="mt-12 flex justify-center">
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.97 }}
          className="relative flex h-56 w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-bps-blue to-bps-navy text-white shadow-soft"
          aria-label="Buka surat"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
          <Mail size={56} />
          <div className="mt-4 font-display text-xl">{LETTER.title}</div>
          <div className="text-sm text-white/70">Klik untuk membuka</div>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-3xl bg-[#FDF6EC] p-8 text-bps-navy shadow-soft dark:bg-[#12263b] dark:text-white"
            >
              <div className="mb-4 font-display text-2xl">{LETTER.title}</div>
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{typed}<span className="animate-pulse">▍</span></pre>
              <button onClick={() => setOpen(false)} className="mt-6 rounded-full bg-bps-blue px-5 py-2 text-white">Tutup</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}