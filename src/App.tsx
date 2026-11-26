import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import EasterEgg from './components/EasterEgg';
import Loader from './sections/Loader';
import Hero from './sections/Hero';
import Countdown from './sections/Countdown';
import Profiles from './sections/Profiles';
import Timeline from './sections/Timeline';
import Gallery from './sections/Gallery';
import Messages from './sections/Messages';
import Quiz from './sections/Quiz';
import Letter from './sections/Letter';
import Outro from './sections/Outro';

export default function App() {
  useLenis();
  const [loading, setLoading] = useState(true);
  const [isLocked, setIsLocked] = useState(true); // Kunci scroll di awal

  useEffect(() => {
    // Kunci scroll jika sedang loading ATAU sedang di-lock
    if (loading || isLocked) {
      document.body.style.overflow = 'hidden';
      if ((window as any).__lenis) (window as any).__lenis.stop();
    } else {
      document.body.style.overflow = '';
      if ((window as any).__lenis) (window as any).__lenis.start();
    }
  }, [loading, isLocked]);

  return (
    <div className="grain relative">
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <EasterEgg />
          <main>
            {/* Kirim prop onStart untuk membuka lock */}
            <Hero onStart={() => setIsLocked(false)} />
            <Countdown />
            <Profiles />
            <Timeline />
            <Gallery />
            <Messages />
            <Quiz />
            <Letter />
            <Outro />
          </main>
        </>
      )}
    </div>
  );
}