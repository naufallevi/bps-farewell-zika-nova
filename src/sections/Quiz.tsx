import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { QUIZ, BADGES } from '../data/config';

export default function Quiz() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const q = QUIZ[idx];

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (idx + 1 === QUIZ.length) {
        setDone(true);
        const finalScore = score + (i === q.answer ? 1 : 0);
        const badge = [...BADGES].reverse().find((b) => finalScore >= b.min);
        if (badge) confetti({ particleCount: 100, spread: 120, origin: { y: 0.5 } });
      } else {
        setIdx((n) => n + 1);
        setPicked(null);
      }
    }, 900);
  };

  const restart = () => { setIdx(0); setScore(0); setPicked(null); setDone(false); };

  const badge = [...BADGES].reverse().find((b) => score >= b.min) ?? BADGES[0];

  return (
    <section id="quiz" className="mx-auto max-w-3xl px-5 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-4xl md:text-5xl"
      >Seberapa Kenal Kamu?</motion.h2>
      <p className="mt-3 text-center text-black/60 dark:text-white/60">Kuis seru tentang Zika & Nova.</p>

      {!done ? (
        <div className="mt-10">
          <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-bps-blue to-bps-orange"
              animate={{ width: `${((idx) / QUIZ.length) * 100}%` }}
            />
          </div>
          <div className="mb-1 text-xs text-black/60 dark:text-white/60">Soal {idx + 1} / {QUIZ.length}</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="glass rounded-3xl p-6 shadow-soft"
            >
              <h3 className="font-display text-xl">{q.q}</h3>
              <div className="mt-4 grid gap-2">
                {q.options.map((opt, i) => {
                  const state =
                    picked === null ? 'idle' :
                    i === q.answer ? 'correct' :
                    i === picked ? 'wrong' : 'idle';
                  return (
                    <button key={i} onClick={() => choose(i)}
                      className={`rounded-xl border px-4 py-3 text-left transition ${
                        state === 'correct' ? 'border-bps-green bg-bps-green/20' :
                        state === 'wrong' ? 'border-red-500 bg-red-500/10' :
                        'border-black/10 bg-white/60 hover:border-bps-blue dark:border-white/10 dark:bg-white/5'
                      }`}
                    >{opt}</button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-10 text-center">
          <div className="text-6xl">{badge.emoji}</div>
          <div className="mt-4 font-display text-3xl">Skor kamu: {score} / {QUIZ.length}</div>
          <div className="mt-1 text-bps-orange">{badge.label}</div>
          <button onClick={restart} className="mt-6 rounded-full bg-bps-blue px-6 py-3 text-white">Coba lagi</button>
        </motion.div>
      )}
    </section>
  );
}