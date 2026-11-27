import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music2, Moon, Sun } from 'lucide-react';
import { scrollToSection } from '../hooks/useLenis';
import ThemeToggle from './ThemeToggle';
import MusicToggle from './MusicToggle';

const LINKS = [
  { id: 'hero', label: 'Awal' },
  { id: 'profiles', label: 'Kenalan' },
  { id: 'timeline', label: 'Perjalanan' },
  { id: 'gallery', label: 'Galeri' },
  { id: 'messages', label: 'Pesan' },
  { id: 'quiz', label: 'Kuis' },
  { id: 'letter', label: 'Surat' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    LINKS.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 md:block"
      >
        <nav className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-soft">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-bps-blue"
              aria-current={active === l.id ? 'page' : undefined}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-bps-blue/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
          <div className="ml-1 flex items-center gap-1 border-l border-black/10 pl-2 dark:border-white/10">
            <MusicToggle />
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>

      {/* Mobile bar */}
      <div className="fixed inset-x-3 top-3 z-50 flex items-center justify-between rounded-full glass px-4 py-3 md:hidden">
        <span className="font-display font-semibold">Zika & Nova ✨</span>
        <div className="flex items-center gap-1">
          <MusicToggle />
          <ThemeToggle />
          <button aria-label="Buka menu" onClick={() => setOpen(true)} className="rounded-full p-2">
            <Menu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bps-navy px-6 py-8 text-white"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl">Menu</span>
              <button aria-label="Tutup menu" onClick={() => setOpen(false)} className="rounded-full p-2">
                <X />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i }}
                  onClick={() => { setOpen(false); setTimeout(() => scrollToSection(l.id), 250); }}
                  className="rounded-2xl px-4 py-4 text-left font-display text-3xl hover:bg-white/10"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}