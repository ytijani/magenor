import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.svg';

const Loader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // Set initial states
        gsap.set(logoRef.current, { opacity: 0, scale: 0.8, filter: 'blur(10px)' });

        // Counter animation
        const obj = { value: 0 };
        tl.to(obj, {
            value: 100,
            duration: 2.5,
            ease: "power4.inOut",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.textContent = Math.floor(obj.value).toString().padStart(2, '0');
                }
                if (progressRef.current) {
                    progressRef.current.style.width = `${obj.value}%`;
                }
            }
        });

        // Logo reveal
        tl.to(logoRef.current, {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: "expo.out",
        }, "-=1.5");

        // Exit animation
        tl.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            delay: 0.5
        });

    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-[#F0F4F7] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Ambient Background Detail */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A4166 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative flex flex-col items-center gap-12">
                {/* Logo Wrapper */}
                <div ref={logoRef} className="w-[300px] md:w-[400px]">
                    <img
                        src={logo}
                        alt="MAGENOR Intro"
                        className="w-full h-auto"
                    />
                </div>

                {/* Progress Group */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-baseline gap-2">
                        <span ref={counterRef} className="text-[#0A4166] text-5xl md:text-7xl font-black font-display tracking-tight">00</span>
                        <span className="text-[#0A4166]/20 text-xl font-bold font-display">%</span>
                    </div>
                    <div className="w-48 h-[2px] bg-[#0A4166]/5 relative overflow-hidden rounded-full">
                        <div
                            ref={progressRef}
                            className="absolute top-0 left-0 h-full bg-[#0A4166] w-0 transition-all duration-100 ease-out"
                        />
                    </div>
                </div>
            </div>

            {/* Cinematic Overlay Elements */}
            <div className="absolute top-12 left-12 flex flex-col gap-2">
                <span className="text-[10px] font-black tracking-widest text-[#0A4166]/20 uppercase">Chargement de l'univers Magenor</span>
            </div>

            <div className="absolute bottom-12 right-12">
                <span className="text-[10px] font-black tracking-widest text-[#0A4166]/10 uppercase">© {new Date().getFullYear()} MAGENOR GROUP</span>
            </div>
        </div>
    );
};

export default Loader;
