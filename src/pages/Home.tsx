import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pillars from '../components/Pillars';
// import Stats from '../components/Stats';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="w-full bg-white selection:bg-primary selection:text-white">
            <Header />
            <main id="main-content">
                <Hero />
                <Pillars />
                <Services />
                {/* <Stats /> */}
                <MapSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
