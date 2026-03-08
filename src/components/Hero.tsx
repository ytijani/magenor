import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

import videoIntro from '../assets/intro.mp4';

const Hero: React.FC = () => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!overlayRef.current) return;
            const scrollY = window.scrollY;
            const opacity = Math.min(0.3 + scrollY * 0.001, 0.7);
            overlayRef.current.style.opacity = String(opacity);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const particlesRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!particlesRef.current) return;
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((p, i) => {
            gsap.to(p, {
                y: `random(-40, 40)`,
                x: `random(-20, 20)`,
                duration: `random(3, 6)`,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.5,
            });
        });
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full flex items-start justify-start pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden bg-primary text-left">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.7 }}
                >
                    <source src={videoIntro} type="video/mp4" />
                </video>
                <div ref={overlayRef} className="absolute inset-0 bg-primary/30 transition-opacity duration-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-transparent" />
            </div>

            {/* Floating Particles */}
            <div ref={particlesRef} className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white/10"
                        style={{
                            left: `${15 + i * 18}%`,
                            top: `${20 + i * 12}%`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-[5rem] mx-auto">
                {/* Logo integrated above heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white text-[clamp(2.5rem,7.5vw,6.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-6 font-display"
                >
                    Entreprise de{' '}
                    <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        Travaux Publics.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white/80 text-base md:text-lg lg:text-[20px] max-w-[620px] mb-10 font-medium leading-relaxed"
                >
                    Nos expertises au service des acteurs du bâtiment et des travaux publics.
                    Nous travaillons main dans la main pour mener à bien vos projets de location, terrassement et démolition.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 flex-wrap"
                >
                    <Link
                        to="/contact"
                        className="group flex items-center gap-5 bg-white rounded-full pl-8 pr-2 py-2 hover:bg-white/95 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:-translate-y-0.5"
                    >
                        <span className="text-primary font-bold text-[13px] tracking-tight uppercase">Demander un devis</span>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight size={16} className="text-white" />
                        </div>
                    </Link>
                    <Link
                        to="/qui-sommes-nous"
                        className="group flex items-center gap-3 rounded-full px-6 py-3 border border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10 transition-all duration-500"
                    >
                        <span className="text-white/80 font-semibold text-[13px] tracking-tight uppercase group-hover:text-white transition-colors duration-300">Découvrir le groupe</span>
                        <ArrowRight size={14} className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Info Bar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-0 z-10"
            >
                <div className="w-full container flex items-center justify-between py-6 border-t border-white/10">
                    {/* Scroll Indicator */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="w-[1.5px] h-10 bg-white/15 relative overflow-hidden rounded-full">
                            <motion.div
                                animate={{ y: [0, 40] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-full h-3 bg-white rounded-full"
                            />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Défiler pour explorer</span>
                    </div>


                </div>
            </motion.div>
        </section >
    );
};

export default Hero;
