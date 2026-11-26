import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send } from 'lucide-react';
import { useMessageStore } from '../hooks/useMessageStore';
import { COLORS } from '../data/config';

const COLORS_KEYS = Object.keys(COLORS) as (keyof typeof COLORS)[];

export default function Messages() {
  const { messages, addMessage, addReaction } = useMessageStore();
  const [filter, setFilter] = useState<'Semua' | 'Zika' | 'Nova' | 'Keduanya'>('Semua');
  const [form, setForm] = useState({ name: '', to: 'Keduanya' as 'Zika' | 'Nova' | 'Keduanya', text: '', color: 'yellow' as keyof typeof COLORS, emoji: '❤️' });

  const filtered = useMemo(
    () => (filter === 'Semua' ? messages : messages.filter((m) => m.to === filter)),
    [messages, filter]
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    await addMessage(form);
    setForm({ ...form, name: '', text: '' });
    confetti({ particleCount: 70, spread: 90, origin: { y: 0.7 }, colors: ['#0B5CAB', '#F59E0B', '#22C55E'] });
  };

  return (
    <section id="messages" className="mx-auto max-w-6xl px-5 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-4xl md:text-5xl"
      >Pesan & Kesan</motion.h2>
      <p className="mt-3 text-center text-black/60 dark:text-white/60">Tinggalkan jejak hangatmu di sini.</p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {(['Semua', 'Zika', 'Nova', 'Keduanya'] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm transition ${filter === f ? 'bg-bps-blue text-white' : 'glass hover:bg-bps-blue/10'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((m, i) => (
            <motion.div
              key={m.id}
              layout
              initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: ((i % 2 === 0) ? -2 : 2) }}
              exit={{ opacity: 0, scale: 0.8 }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
              className="rounded-2xl p-5 shadow-soft"
              style={{ backgroundColor: COLORS[m.color] }}
            >
              <div className="flex items-center justify-between text-xs text-black/60">
                <span className="font-semibold">{m.name}</span>
                <span>untuk {m.to}</span>
              </div>
              <p className="mt-2 text-black/80">{m.text}</p>
              <div className="mt-3 flex items-center gap-2">
                {['❤️', '👏', '😂'].map((e) => (
                  <button key={e}
                    onClick={() => addReaction(m.id, e)}
                    className="rounded-full bg-white/60 px-2 py-1 text-xs transition hover:scale-110">
                    {e} {m.reactions[e] ?? 0}
                  </button>
                ))}
                <span className="ml-auto text-lg">{m.emoji}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form onSubmit={submit} className="mx-auto mt-12 max-w-2xl space-y-3 rounded-3xl glass p-6 shadow-soft">
        <h3 className="font-display text-xl">Tulis pesanmu</h3>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Nama kamu"
          className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none dark:border-white/10 dark:bg-white/5"
        />
        <div className="grid grid-cols-2 gap-3">
          <select value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value as any })}
            className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
            <option>Zika</option><option>Nova</option><option>Keduanya</option>
          </select>
          <select value={form.emoji} onChange={(e) => setForm({ ...form, emoji: e.target.value })}
            className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
            {['❤️','👏','😂','🎉','✨','🥰'].map((e) => <option key={e}>{e}</option>)}
          </select>
        </div>
        <textarea
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          placeholder="Tulis pesan hangatmu..."
          rows={3}
          className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none dark:border-white/10 dark:bg-white/5"
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {COLORS_KEYS.map((c) => (
              <button type="button" key={c} onClick={() => setForm({ ...form, color: c })}
                aria-label={`Warna ${c}`}
                className={`h-8 w-8 rounded-full border-2 ${form.color === c ? 'border-bps-navy' : 'border-transparent'}`}
                style={{ backgroundColor: COLORS[c] }} />
            ))}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-bps-blue px-5 py-2.5 font-medium text-white transition hover:bg-bps-navy">
            <Send size={16} /> Kirim
          </button>
        </div>
      </form>
    </section>
  );
}