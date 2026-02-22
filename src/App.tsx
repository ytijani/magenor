import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Location = lazy(() => import('./pages/Location'));
const Travaux = lazy(() => import('./pages/Travaux'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0); // very important for scroll synchronization

    return () => {
      gsap.ticker.remove(update);
    }
  }, []);

  // Smooth site entrance
  useEffect(() => {
    if (!loading) {
      document.body.classList.add('site-entered');
    }
  }, [loading]);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <Router>
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <Suspense fallback={null}>
          <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qui-sommes-nous" element={<About />} />
              <Route path="/location" element={<Location />} />
              <Route path="/travaux" element={<Travaux />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </ReactLenis>
  );
}

export default App;
