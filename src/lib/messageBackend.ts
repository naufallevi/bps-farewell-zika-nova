// ============================================================
//  ABSTRAKSI BACKEND PESAN
//  Default: localStorage. Untuk backend bersama (Supabase),
//  isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY lalu implementasi
//  fungsi di blok `if (USE_SUPABASE)`.
// ============================================================

import { INITIAL_MESSAGES } from '../data/config';

export type Message = {
  id: string;
  name: string;
  to: 'Zika' | 'Nova' | 'Keduanya';
  text: string;
  color: 'yellow' | 'blue' | 'pink' | 'green' | 'purple';
  emoji: string;
  reactions: Record<string, number>;
};

const KEY = 'bps-farewell-messages-v1';
const USE_SUPABASE = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
);

function seed(): Message[] {
  return INITIAL_MESSAGES.map((m) => ({ ...m, reactions: { ...m.reactions } }));
}

export async function loadMessages(): Promise<Message[]> {
  if (USE_SUPABASE) {
    // Contoh:
    // const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/messages?select=*`, {
    //   headers: { apikey: import.meta.env.VITE_SUPABASE_ANON_KEY! },
    // });
    // return (await res.json()).map(fromRow);
  }
  const raw = localStorage.getItem(KEY);
  if (raw) return JSON.parse(raw) as Message[];
  const s = seed();
  localStorage.setItem(KEY, JSON.stringify(s));
  return s;
}

export async function saveMessage(m: Omit<Message, 'id' | 'reactions'>): Promise<Message> {
  const msg: Message = {
    ...m,
    id: `m_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    reactions: {},
  };
  if (USE_SUPABASE) {
    // POST ke Supabase
  }
  const list = JSON.parse(localStorage.getItem(KEY) ?? '[]') as Message[];
  const next = [msg, ...list];
  localStorage.setItem(KEY, JSON.stringify(next));
  return msg;
}

export async function reactMessage(id: string, emoji: string): Promise<void> {
  if (USE_SUPABASE) {
    // RPC increment
  }
  const list = JSON.parse(localStorage.getItem(KEY) ?? '[]') as Message[];
  const next = list.map((m) =>
    m.id === id
      ? { ...m, reactions: { ...m.reactions, [emoji]: (m.reactions[emoji] ?? 0) + 1 } }
      : m
  );
  localStorage.setItem(KEY, JSON.stringify(next));
}