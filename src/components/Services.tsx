import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shovel, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

import serviceLocation from '../assets/pillar-trucks.png';
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
    const activeIndexRef = useRef(0);
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
                        if (index !== activeIndexRef.current) {
                            activeIndexRef.current = index;
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

                    // Hide images — fully hidden to prevent ghosting
                    gsap.set(imagesRef.current[i], { autoAlpha: 0, zIndex: 0 });
                    gsap.set(imagesRef.current[i].querySelector('img'), { scale: 1.15 });
                } else {
                    // Make sure the first one's elements are visible
                    gsap.set(imagesRef.current[0], { autoAlpha: 1, zIndex: 1 });
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

                // Animate Out Previous — fully hide to prevent ghosting
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
                        zIndex: 0,
                        duration: 0.8,
                        ease: 'power2.inOut'
                    }, i - 0.5)

                // Animate In Current Sequence — bring to front
                tlRef.current!
                    .to(currentImgContainer, {
                        autoAlpha: 1,
                        zIndex: 1,
                        duration: 0.8,
                        ease: 'power2.inOut'
                    }, i - 0.4)
                    .to(currentImg, {
                        scale: 1,
                        duration: 1.5,
                        ease: 'power1.out'
                    }, i - 0.4)
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover origin-center transform-gpu"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/30" />
                    </div>
                ))}
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="relative h-[600px] lg:col-span-7 flex flex-col justify-center">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                ref={(el) => { if (el) contentWrappersRef.current[i] = el; }}
                                className="absolute left-0 w-full"
                            >
                                <div className="flex flex-col space-y-10 w-full pl-8 md:pl-12 border-l-2 border-white/10">
                                    <div className="stagger-elem flex items-center gap-4">
                                        <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
                                            {service.tag}
                                        </span>
                                        <div className="w-12 h-[1px] bg-white/15" />
                                    </div>

                                    <div className="space-y-8">
                                        <div className="stagger-elem">
                                            <div className="flex items-center gap-5 mb-3">
                                                <div className="w-14 h-14 rounded-2xl bg-white/[0.07] border border-white/[0.08] flex items-center justify-center text-white/80">
                                                    {service.icon}
                                                </div>
                                                <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-[-0.04em] font-display leading-[0.95]">
                                                    {service.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="stagger-elem text-base md:text-lg text-white/55 leading-[1.7] font-medium max-w-lg">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    <div className="stagger-elem pt-2">
                                        <Link
                                            to={i === 0 ? "/location" : i === 1 ? "/travaux" : "/travaux"}
                                            className="group inline-flex items-center gap-4 w-max"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:border-transparent">
                                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </div>
                                            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                                                Voir les détails
                                            </span>
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
