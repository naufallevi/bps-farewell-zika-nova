import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { INTERNSHIP } from '../data/config';
import { daysUntil } from '../lib/utils';

function useCountdown(target: string) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = new Date(target + 'T23:59:59').getTime() - now;
  const past = diff < 0;
  const abs = Math.abs(diff);
  return {
    past,
    days: Math.floor(abs / 86_400_000),
    hours: Math.floor((abs / 3_600_000) % 24),
    minutes: Math.floor((abs / 60_000) % 60),
    seconds: Math.floor((abs / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center">
      <div className="glass relative overflow-hidden rounded-2xl px-4 py-3 md:px-6 md:py-4">
        <motion.div
          key={str}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-display text-3xl font-bold tabular-nums md:text-5xl"
        >{str}</motion.div>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest text-black/50 dark:text-white/50">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const c = useCountdown(INTERNSHIP.endDate);
  const days = daysUntil(INTERNSHIP.endDate);

  return (
    <section id="countdown" className="relative mx-auto max-w-4xl px-5 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl"
      >
        {c.past ? 'Sudah lewat... tapi kami kangen!' : 'Menuju Hari Terakhir'}
      </motion.h2>
      <p className="mt-3 text-black/60 dark:text-white/60">
        {c.past
          ? `Sudah ${days < 0 ? Math.abs(days) : 0} hari sejak mereka pergi... tapi kita masih kangen!`
          : `${INTERNSHIP.endDate} · siap-siap, ya!`}
      </p>

      <div className="mt-10 flex items-center justify-center gap-3 md:gap-6">
        <Digit value={c.days} label="hari" />
        <Digit value={c.hours} label="jam" />
        <Digit value={c.minutes} label="menit" />
        <Digit value={c.seconds} label="detik" />
      </div>
    </section>
  );
}