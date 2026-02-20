import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Location = lazy(() => import('./pages/Location'));
const Travaux = lazy(() => import('./pages/Travaux'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  // Smooth site entrance
  useEffect(() => {
    if (!loading) {
      document.body.classList.add('site-entered');
    }
  }, [loading]);

  return (
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
  );
}

export default App;
