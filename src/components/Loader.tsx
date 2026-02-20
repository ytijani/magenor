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
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="relative flex flex-col items-center gap-12">
                {/* Logo Wrapper */}
                <div ref={logoRef} className="w-[300px] md:w-[400px]">
                    <img
                        src={logo}
                        alt="MAGENOR Intro"
                        className="w-full h-auto filter invert brightness-200"
                    />
                </div>

                {/* Progress Group */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-baseline gap-2">
                        <span ref={counterRef} className="text-white text-5xl md:text-7xl font-black font-display tracking-tight">00</span>
                        <span className="text-white/20 text-xl font-bold font-display">%</span>
                    </div>
                    <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                        <div
                            ref={progressRef}
                            className="absolute top-0 left-0 h-full bg-white w-0 transition-all duration-100 ease-out"
                        />
                    </div>
                </div>
            </div>

            {/* Cinematic Overlay Elements */}
            <div className="absolute top-12 left-12 flex flex-col gap-2">
                <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">System Status: Booting</span>
                <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">Asset: MAGENOR_IDENTITY_CORE</span>
            </div>

            <div className="absolute bottom-12 right-12">
                <span className="text-[10px] font-black tracking-widest text-white/10 uppercase">© 2026 MAGENOR GROUP INDUSTRIAL SYSTEMS</span>
            </div>
        </div>
    );
};

export default Loader;
