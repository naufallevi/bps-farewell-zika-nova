import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { STATS, PROFILES } from '../data/config';
import AnimatedNumber from '../components/AnimatedNumber';

function StatCard({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08 }}
      className="glass rounded-3xl p-5"
    >
      <div className="text-3xl">{stat.emoji}</div>
      <div className="mt-2 font-display text-2xl">
        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-sm text-black/60 dark:text-white/60">{stat.label}</div>
    </motion.div>
  );
}

function FlipCard({ profile }: { profile: (typeof PROFILES)[number] }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  };

  return (
    <div className="relative h-[420px] w-full [perspective:1400px]">
      <motion.div
        onClick={() => setFlipped((f) => !f)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
        className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]"
      >
        {/* DEPAN */}
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="absolute inset-0 overflow-hidden rounded-3xl glass shadow-soft"
          style={{ backfaceVisibility: 'hidden', transition: 'transform 0.15s ease-out' }}
        >
          <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${profile.gradient}`}>
            <span className="font-display text-6xl text-white drop-shadow">{profile.initial}</span>
          </div>
          <div className="p-6">
            <h3 className="font-display text-3xl">{profile.name}</h3>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">{profile.fullName}</p>
            <p className="mt-4 text-sm">{profile.role}</p>
            <p className="text-sm text-black/60 dark:text-white/60">{profile.campus}</p>
            <p className="mt-6 text-xs text-bps-blue">Klik untuk lihat sisi lain →</p>
          </div>
        </div>

        {/* BELAKANG */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-bps-navy to-bps-blue p-6 text-white shadow-soft"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="font-display text-xl">Fun Fact</div>
          <p className="text-sm text-white/90">{profile.funFact}</p>
          <div className="mt-4 font-display text-xl">Kesan</div>
          <p className="text-sm text-white/90">{profile.impression}</p>
          <div className="mt-4 font-display text-xl">Peran Rahasia</div>
          <p className="text-sm text-white/90">{profile.secretRole}</p>
          <p className="mt-6 italic text-white/80">{profile.quote}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Profiles() {
  return (
    <section id="profiles" className="mx-auto max-w-6xl px-5 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-4xl md:text-5xl"
      >Kenalan dulu, yuk</motion.h2>
      <p className="mt-3 text-center text-black/60 dark:text-white/60">
        Dua orang yang mengisi kantor dengan tawa, kopi, dan pivot table.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {PROFILES.map((p) => <FlipCard key={p.id} profile={p} />)}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-center font-display text-2xl">Statistik Kocak</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {STATS.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}