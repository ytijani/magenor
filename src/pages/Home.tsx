import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pillars from '../components/Pillars';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home: React.FC = () => {
    return (
        <div className="w-full bg-white selection:bg-primary selection:text-white">
            <Header />
            <main>
                <Hero />
                <Pillars />
                <Projects />
                <Services />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
