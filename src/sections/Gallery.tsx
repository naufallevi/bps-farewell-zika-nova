import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../data/config';

const CATS = ['Semua', 'Zika', 'Nova', 'Bareng Tim', 'Kegiatan'] as const;

export default function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>('Semua');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === 'Semua' ? GALLERY : GALLERY.filter((g) => g.category === cat)),
    [cat]
  );

  const next = () => setOpenIdx((i) => (i === null ? null : (i + 1) % items.length));
  const prev = () => setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-4xl md:text-5xl"
      >Galeri Kenangan</motion.h2>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm transition ${cat === c ? 'bg-bps-blue text-white' : 'glass hover:bg-bps-blue/10'}`}
          >{c}</button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 md:columns-3">
        {items.map((g, i) => (
          <motion.button
            key={g.id}
            layoutId={`photo-${g.id}`}
            onClick={() => setOpenIdx(i)}
            className="relative mb-4 block w-full overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/5] w-full bg-gradient-to-br from-bps-blue/30 to-bps-orange/30">
              <div className="flex h-full items-center justify-center text-4xl font-display text-white/60">
                {g.caption[0]}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-sm text-white">
              {g.caption}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setOpenIdx(null)}
            role="dialog" aria-modal="true"
          >
            <button aria-label="Tutup" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white" onClick={() => setOpenIdx(null)}>
              <X />
            </button>
            <button aria-label="Sebelumnya" className="absolute left-4 rounded-full bg-white/10 p-3 text-white" onClick={(e) => { e.stopPropagation(); prev(); }}>
              <ChevronLeft />
            </button>
            <button aria-label="Berikutnya" className="absolute right-4 rounded-full bg-white/10 p-3 text-white" onClick={(e) => { e.stopPropagation(); next(); }}>
              <ChevronRight />
            </button>
            <motion.div layoutId={`photo-${items[openIdx].id}`} className="max-h-[80vh] max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-bps-blue to-bps-orange">
              <div className="flex aspect-[4/5] w-full items-center justify-center text-white/70" style={{ padding: '10vh 5vw' }}>
                {items[openIdx].caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}