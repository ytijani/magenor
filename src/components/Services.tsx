import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shovel, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

import serviceLocation from '../assets/service-location.png';
import serviceEarthwork from '../assets/service-earthwork.png';
import projectDemolition from '../assets/project-demolition-1.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Location',
        subtitle: 'Notre flotte se compose de plus de 200 engins TP et de 100 camions poids lourds. Nos équipes vous apportent leur expertise pour déterminer le matériel le plus adapté à vos chantiers.',
        image: serviceLocation,
        icon: <Truck strokeWidth={1.5} />,
        tag: 'Expertise 01',
    },
    {
        title: 'Terrassement',
        subtitle: 'Spécialisé dans le domaine du terrassement depuis plusieurs années. Nos équipes expérimentées réalisent tous vos chantiers de terrassement V.R.D (Voiries et Réseaux Divers).',
        image: serviceEarthwork,
        icon: <Shovel strokeWidth={1.5} />,
        tag: 'Expertise 02',
    },
    {
        title: 'Démolition',
        subtitle: 'Grâce à un examen approfondi du bâtiment, nos équipes mettent en place une méthodologie adaptée et s\'engagent à mener l\'opération dans le respect de l\'environnement.',
        image: projectDemolition,
        icon: <HardHat strokeWidth={1.5} />,
        tag: 'Expertise 03',
    },
];

const Services: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement[]>([]);
    const contentsRef = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!containerRef.current || prefersReducedMotion) return;

        let ctx = gsap.context(() => {
            const container = containerRef.current;
            const sections = services.length;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: `+=${sections * 100}%`,
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    onUpdate: (self) => {
                        const index = Math.min(
                            Math.floor(self.progress * sections),
                            sections - 1
                        );
                        setActiveIndex(index);
                    },
                },
            });

            // Initial setup for contents
            services.forEach((_, i) => {
                if (i !== 0) {
                    gsap.set(contentsRef.current[i], { opacity: 0, y: 50, visibility: 'hidden' });
                    gsap.set(imagesRef.current[i], { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1 });
                }
            });

            // Timeline animations
            services.forEach((_, i) => {
                if (i === 0) return;

                // Sync image and content reveal
                tl.to(imagesRef.current[i], {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    scale: 1,
                    duration: 1,
                    ease: 'none'
                }, i - 0.5)
                    .to(contentsRef.current[i], {
                        opacity: 1,
                        y: 0,
                        visibility: 'visible',
                        duration: 0.5,
                        ease: 'power2.out'
                    }, i - 0.3)
                    .to(contentsRef.current[i - 1], {
                        opacity: 0,
                        y: -50,
                        visibility: 'hidden',
                        duration: 0.5,
                        ease: 'power2.in'
                    }, i - 0.7);
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen bg-black overflow-hidden"
        >
            {/* Background Images Layer */}
            <div className="absolute inset-0">
                {services.map((service, i) => (
                    <div
                        key={i}
                        ref={(el) => { if (el) imagesRef.current[i] = el; }}
                        className="absolute inset-0 w-full h-full"
                        style={{ zIndex: i }}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>
                ))}
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-20 py-32 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="relative h-[500px]">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                ref={(el) => { if (el) contentsRef.current[i] = el; }}
                                className="absolute inset-0 flex flex-col justify-center space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-white/20" />
                                    <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
                                        {service.tag}
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-[-0.03em] font-display">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium max-w-xl">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <Link
                                    to={i === 0 ? "/location" : i === 1 ? "/travaux" : "/travaux"}
                                    className="group flex items-center gap-5 bg-white rounded-full pl-8 pr-2 py-2 w-max transition-all duration-300"
                                >
                                    <span className="text-black font-bold text-[13px] tracking-tight uppercase px-2">
                                        Voir les détails
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight size={16} />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Progress Indicators */}
                    <div className="hidden lg:flex flex-col justify-center items-end gap-10">
                        {services.map((_, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-8 group cursor-pointer"
                            >
                                <span
                                    className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-500 ${i === activeIndex ? 'text-white' : 'text-white/20'
                                        }`}
                                >
                                    0{i + 1}
                                </span>
                                <div className="relative w-12 h-[1px] bg-white/10 overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-white origin-left"
                                        initial={false}
                                        animate={{
                                            scaleX: i === activeIndex ? 1 : 0
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase whitespace-nowrap">DÉCOUVRIR</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto mt-4"
                />
            </div>
        </section>
    );
};

export default Services;
