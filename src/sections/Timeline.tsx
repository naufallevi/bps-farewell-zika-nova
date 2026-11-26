import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TIMELINE } from '../data/config';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = document.querySelector<SVGPathElement>('#timeline-path');
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 1,
          },
        });
      }
      gsap.utils.toArray<HTMLElement>('.tl-item').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 60,
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={root} className="relative mx-auto max-w-4xl px-5 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-4xl md:text-5xl"
      >Perjalanan Magang</motion.h2>
      <p className="mt-3 text-center text-black/60 dark:text-white/60">Enam bulan yang penuh cerita.</p>

      <div className="relative mt-16">
        <svg className="absolute left-6 top-0 h-full w-1 md:left-1/2 md:-translate-x-1/2" viewBox="0 0 4 1000" preserveAspectRatio="none" aria-hidden>
          <path id="timeline-path" d="M2 0 L2 1000" stroke="url(#g1)" strokeWidth="3" fill="none" />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B5CAB" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
        </svg>

        <div className="space-y-12">
          {TIMELINE.map((t, i) => (
            <div key={i} className={`tl-item relative flex gap-6 md:gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2 md:pl-12 md:pr-12 md:text-right">
                <div className="glass rounded-2xl p-5 shadow-soft">
                  <div className="text-xs uppercase tracking-widest text-bps-orange">{t.date}</div>
                  <div className="mt-1 font-display text-xl">{t.title}</div>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">{t.desc}</p>
                </div>
              </div>
              <div className="relative z-10 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-bps-orange shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6" />
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}