import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { VolumeX } from "lucide-react";

declare global {
  interface Window {
    playBGM?: () => void;
    stopBGM?: () => void;
    toggleBGM?: () => void;
  }
}

export default function MusicToggle() {
  // State untuk UI (ikon)
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Inisialisasi Howler HANYA SEKALI
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: [import.meta.env.VITE_BGM_URL ?? "/music/bgm.mp3"],
        loop: true,
        volume: 0.35,
        html5: true,
      });
    }

    const sound = soundRef.current;

    // Fungsi global untuk dipanggil dari komponen lain (misal Hero)
    window.playBGM = () => {
      if (sound && !sound.playing()) {
        sound.play();
        setIsPlaying(true);
      }
    };

    window.stopBGM = () => {
      if (sound && sound.playing()) {
        sound.pause();
        setIsPlaying(false);
      }
    };

    window.toggleBGM = () => {
      if (sound) {
        if (sound.playing()) {
          sound.pause();
          setIsPlaying(false);
        } else {
          sound.play();
          setIsPlaying(true);
        }
      }
    };

    // Cleanup
    return () => {
      delete window.playBGM;
      delete window.stopBGM;
      delete window.toggleBGM;
      // Note: Jangan unload sound di sini agar tidak crash saat React strict mode re-render
      // Cukup matikan saat unmount total
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.toggleBGM?.();
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isPlaying ? "Matikan musik latar" : "Nyalakan musik latar"}
      aria-pressed={isPlaying}
      className="relative flex items-center gap-1 rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isPlaying ? (
        <span className="flex h-4 items-end gap-[2px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-[3px] animate-[equalizer_0.9s_ease-in-out_infinite] rounded bg-bps-orange"
              style={{ animationDelay: `${i * 0.12}s`, height: `${6 + i * 3}px` }}
            />
          ))}
        </span>
      ) : (
        <VolumeX size={18} />
      )}
      <style>{`@keyframes equalizer{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1.4)}}`}</style>
    </button>
  );
}
