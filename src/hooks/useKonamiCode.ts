import { useEffect } from 'react';

const SEQUENCE = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export function useKonamiCode(onUnlock: () => void) {
  useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === SEQUENCE[i]) {
        i++;
        if (i === SEQUENCE.length) { onUnlock(); i = 0; }
      } else {
        i = key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onUnlock]);
}