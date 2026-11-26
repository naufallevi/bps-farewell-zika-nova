export function clsx(...args: (string | false | null | undefined)[]) {
  return args.filter(Boolean).join(' ');
}

/** Hitung selisih hari (bisa negatif) dari sekarang ke target. */
export function daysUntil(dateStr: string) {
  const target = new Date(dateStr + 'T23:59:59').getTime();
  const now = Date.now();
  return Math.ceil((target - now) / 86_400_000);
}

export function formatID(d: Date) {
  return d.toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'medium' });
}