import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({ 
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 1.2, // Sedikit lebih cepat agar tidak terasa "berat"
      touchMultiplier: 1.5,
    });

    // KUNCI PERFORMA: Lenis jangan pakai RAF sendiri, serahkan ke GSAP
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0); // Matikan lag smoothing bawaan GSAP (bikin berat)

    (window as any).__lenis = lenis;

    return () => {
      gsap.ticker.remove(update);
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