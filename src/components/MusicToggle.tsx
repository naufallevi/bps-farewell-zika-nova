import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { Music2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [on, setOn] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [import.meta.env.VITE_BGM_URL ?? '/music/bgm.mp3'],
      loop: true,
      volume: 0.35,
      html5: true,
    });
  }, []);

  const toggle = () => {
    const s = soundRef.current;
    if (!s) return;
    if (on) { s.pause(); setOn(false); }
    else { s.play(); setOn(true); }
  };

  return (
    <button
      onClick={toggle}
      aria-label={on ? 'Matikan musik latar' : 'Nyalakan musik latar'}
      aria-pressed={on}
      className="relative flex items-center gap-1 rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {on ? (
        <span className="flex h-4 items-end gap-[2px]">
          {[0,1,2].map((i) => (
            <span key={i} className="w-[3px] animate-[equalizer_0.9s_ease-in-out_infinite] rounded bg-bps-orange"
              style={{ animationDelay: `${i * 0.12}s`, height: `${6 + i * 3}px` }} />
          ))}
        </span>
      ) : (
        <VolumeX size={18} />
      )}
      <style>{`@keyframes equalizer{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1.4)}}`}</style>
    </button>
  );
}