import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed right-3 top-1/2 z-40 hidden h-40 w-1 -translate-y-1/2 overflow-hidden rounded-full bg-black/10 md:block dark:bg-white/10"
    >
      <motion.div style={{ scaleY, originY: 0 }} className="h-full w-full bg-gradient-to-b from-bps-blue via-bps-orange to-bps-green" />
    </motion.div>
  );
}