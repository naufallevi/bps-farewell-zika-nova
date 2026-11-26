import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { VolumeX } from 'lucide-react';

declare global {
  interface Window {
    playBGM?: () => void;
  }
}

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

    // Fungsi global untuk memutar lagu dari luar komponen
    window.playBGM = () => {
      if (soundRef.current && !soundRef.current.playing()) {
        soundRef.current.play();
        setOn(true);
        // Kabari seluruh aplikasi kalau lagu sudah nyala
        window.dispatchEvent(new Event('bgm-started'));
      }
    };

    // Dengarkan kalau ada komponen lain (misal Hero) yang menyalakan lagu
    const handleBgmStarted = () => setOn(true);
    window.addEventListener('bgm-started', handleBgmStarted);

    return () => {
      soundRef.current?.unload();
      delete window.playBGM;
      window.removeEventListener('bgm-started', handleBgmStarted);
    };
  }, []);

  const toggle = () => {
    const s = soundRef.current;
    if (!s) return;
    if (on) { 
      s.pause(); 
      setOn(false); 
    } else { 
      s.play(); 
      setOn(true); 
      // Sinkronisasi kalau dinyalakan lewat tombol manual
      window.dispatchEvent(new Event('bgm-started'));
    }
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