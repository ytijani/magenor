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
        subtitle: 'Spécialisé dans le domaine du terrassement depuis plusieurs années. Nos équipes expérimentées réalisent tous vos chantiers de terrassement V.R.D.',
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
    const contentWrappersRef = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!containerRef.current || prefersReducedMotion) return;

        let ctx = gsap.context(() => {
            const container = containerRef.current;
            const sections = services.length;

            tlRef.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: `+=${sections * 100}%`,
                    scrub: 1.5, // Added slight scrub smoothing specifically for this complex animation
                    pin: true,
                    pinSpacing: true,
                    onUpdate: (self) => {
                        const index = Math.min(
                            Math.floor(self.progress * sections),
                            sections - 1
                        );
                        if (index !== activeIndex) {
                            setActiveIndex(index);
                        }
                    },
                },
            });

            // Initial setup for arrays
            services.forEach((_, i) => {
                if (i !== 0) {
                    // Hide content logic
                    gsap.set(contentWrappersRef.current[i], { autoAlpha: 0, y: 60 });
                    const elements = contentWrappersRef.current[i].querySelectorAll('.stagger-elem');
                    gsap.set(elements, { autoAlpha: 0, y: 30 });

                    // Hide images logic with scale for parallax effect
                    gsap.set(imagesRef.current[i], { autoAlpha: 0 });
                    gsap.set(imagesRef.current[i].querySelector('img'), { scale: 1.2 });
                } else {
                    // Make sure the first one's elements are visible
                    const elements = contentWrappersRef.current[0].querySelectorAll('.stagger-elem');
                    gsap.set(elements, { autoAlpha: 1, y: 0 });
                    gsap.set(imagesRef.current[0].querySelector('img'), { scale: 1 });
                }
            });

            // Timeline animations
            services.forEach((_, i) => {
                if (i === 0) return;

                const currentImgContainer = imagesRef.current[i];
                const currentImg = currentImgContainer.querySelector('img');
                const previousImgContainer = imagesRef.current[i - 1];

                const currentContent = contentWrappersRef.current[i];
                const currentElements = currentContent.querySelectorAll('.stagger-elem');

                const previousContent = contentWrappersRef.current[i - 1];
                const previousElements = previousContent.querySelectorAll('.stagger-elem');

                // Animate Out Previous
                tlRef.current!
                    .to(previousElements, {
                        y: -30,
                        autoAlpha: 0,
                        duration: 0.4,
                        stagger: 0.05,
                        ease: 'power2.in'
                    }, i - 0.5)
                    .to(previousContent, {
                        autoAlpha: 0,
                        duration: 0.4
                    }, i - 0.3)
                    .to(previousImgContainer, {
                        autoAlpha: 0,
                        duration: 1,
                        ease: 'none'
                    }, i - 0.5)

                // Animate In Current Sequence
                tlRef.current!
                    .to(currentImgContainer, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: 'none'
                    }, i - 0.5)
                    .to(currentImg, {
                        scale: 1,
                        duration: 1.5,
                        ease: 'power1.out'
                    }, i - 0.5)
                    // Bring in content container
                    .to(currentContent, {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.6,
                        ease: 'power3.out'
                    }, i - 0.2)
                    // Stagger the text items inside
                    .to(currentElements, {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'back.out(1.2)'
                    }, i - 0.1);
            });
        }, containerRef);

        return () => ctx.revert();
    }, [activeIndex]);

    const scrollToSection = (index: number) => {
        if (!tlRef.current) return;

        // Calculate raw progress required to reach the start of that panel
        const totalSections = services.length;
        // Adding a slight offset (0.05) helps Ensure it lands inside the active window.
        const targetProgress = (index / totalSections) + 0.05;

        gsap.to(window, {
            scrollTo: {
                y: tlRef.current.scrollTrigger!.start + (tlRef.current.scrollTrigger!.end - tlRef.current.scrollTrigger!.start) * targetProgress,
                autoKill: false
            },
            duration: 1.5,
            ease: "power3.inOut"
        });
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen bg-primary overflow-hidden"
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
                            className="w-full h-full object-cover origin-center transform-gpu"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
                    </div>
                ))}
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Glassmorphic Text Cards */}
                    <div className="relative h-[600px] lg:col-span-7 flex flex-col justify-center">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                ref={(el) => { if (el) contentWrappersRef.current[i] = el; }}
                                className="absolute left-0 w-full"
                            >
                                <div className="bg-white/5 backdrop-blur-[32px] border border-white/10 rounded-[32px] md:rounded-[48px] p-10 md:p-16 shadow-2xl flex flex-col space-y-10 w-full transform-gpu">
                                    <div className="stagger-elem flex items-center gap-4">
                                        <div className="w-12 h-[1px] bg-white/20" />
                                        <span className="text-[11px] font-bold tracking-[0.3em] text-white/50 uppercase">
                                            {service.tag}
                                        </span>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="stagger-elem flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-[24px] bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner shadow-white/5">
                                                {service.icon}
                                            </div>
                                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter font-display leading-[1.1]">
                                                {service.title}
                                            </h2>
                                        </div>
                                        <p className="stagger-elem text-lg md:text-xl text-white/70 leading-relaxed font-medium max-w-xl text-balance">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    <div className="stagger-elem pt-4">
                                        <Link
                                            to={i === 0 ? "/location" : i === 1 ? "/travaux" : "/travaux"}
                                            className="group inline-flex items-center gap-5 bg-white rounded-full pl-8 pr-2 py-2 w-max hover:bg-white/90 transition-all duration-300 shadow-xl shadow-black/10"
                                        >
                                            <span className="text-primary font-black text-[12px] tracking-widest uppercase px-2">
                                                Voir les détails
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                                                <ArrowRight size={16} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Progress Indicators */}
                    <div className="hidden lg:flex flex-col justify-center items-end lg:col-span-4 lg:col-start-9 gap-12">
                        {services.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToSection(i)}
                                className="flex items-center justify-end gap-6 group cursor-pointer w-full text-right outline-none"
                            >
                                <span
                                    className={`text-[11px] font-black tracking-[0.3em] uppercase transition-colors duration-500 ${i === activeIndex ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                                        }`}
                                >
                                    0{i + 1}
                                </span>
                                <div className="relative w-16 h-[2px] bg-white/10 overflow-hidden rounded-full transition-all duration-300 group-hover:bg-white/20">
                                    <motion.div
                                        className="absolute inset-0 bg-white origin-left rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        initial={false}
                                        animate={{
                                            scaleX: i === activeIndex ? 1 : 0
                                        }}
                                        transition={{ duration: 0.6, ease: "circOut" }}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none">
                <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase whitespace-nowrap">DÉCOUVRIR</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto mt-4"
                />
            </div>
        </section>
    );
};

export default Services;
