import { useEffect, useRef, useState } from 'react';

/** Custom cursor bulat yang membesar saat hover elemen interaktif. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFine) return;
    setEnabled(true);
    document.body.classList.add('custom-cursor');

    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${e.clientX - 14}px, ${e.clientY - 14}px, 0)`;
      }
      const el = e.target as HTMLElement;
      setActive(!!el.closest('a, button, [data-cursor-hover]'));
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border-2 border-bps-orange mix-blend-difference transition-all duration-150"
      style={{ width: active ? 56 : 28, height: active ? 56 : 28, willChange: 'transform' }}
    />
  );
}