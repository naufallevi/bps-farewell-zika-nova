import { useEffect } from 'react';
import Lenis from 'lenis';

/** Inisialisasi Lenis smooth scroll global. */
export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Simpan supaya bisa dipakai scrollTo dari komponen lain
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      (window as any).__lenis = undefined;
    };
  }, []);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as any).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}