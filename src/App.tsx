import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import Cursor from './components/Cursor';
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

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <div className="grain relative">
      <Cursor />
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <EasterEgg />
          <main>
            <Hero />
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