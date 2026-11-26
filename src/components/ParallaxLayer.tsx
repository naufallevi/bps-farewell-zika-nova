import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

export default function ParallaxLayer({ children, speed = 0.3 }: { children: ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${-speed * 100}%`]);
  return (
    <motion.div ref={ref} style={{ y, willChange: 'transform' }}>{children}</motion.div>
  );
}