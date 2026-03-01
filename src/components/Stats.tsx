import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
    label: string;
    value: number;
    suffix: string;
    prefix: string;
    decimals?: number;
}

const stats: Stat[] = [
    { label: 'Collaborateurs', value: 160, suffix: '+', prefix: '' },
    { label: 'Camions Poids Lourds', value: 100, suffix: '+', prefix: '' },
    { label: 'Engins TP', value: 200, suffix: '+', prefix: '' },
    { label: 'Chantiers réalisés', value: 500, suffix: '+', prefix: '' },
];

const useCounter = (end: number, duration: number = 2000, decimals: number = 0, shouldStart: boolean = false) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        if (!shouldStart) return;
        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            countRef.current = eased * end;
            setCount(Number((countRef.current).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [end, duration, decimals, shouldStart]);

    return count;
};

const StatItem: React.FC<{
    stat: typeof stats[0];
    index: number;
    isInView: boolean;
}> = ({ stat, index, isInView }) => {
    const count = useCounter(stat.value, 2000 + index * 300, stat.decimals || 0, isInView);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
        >
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] bg-gradient-to-r from-primary/15 to-transparent mb-8 origin-left"
            />

            <div className="mb-4">
                <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-primary font-display leading-none">
                    {stat.prefix}{count}{stat.suffix}
                </span>
            </div>

            <span className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.2em] text-primary/35">
                {stat.label}
            </span>
        </motion.div>
    );
};

const Stats: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="relative bg-white overflow-hidden" ref={ref}>
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="px-6 md:px-20 py-24 md:py-36">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                className="flex items-center gap-4 mb-6"
                            >
                                <div className="w-12 h-[1px] bg-primary/10" />
                                <span className="text-[11px] font-bold tracking-[0.3em] text-primary/40 uppercase">
                                    Nos Chiffres
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-[-0.03em] leading-[1.05] font-display"
                            >
                                Nous travaillons main <br />
                                <span className="text-primary/15">dans la main pour mener</span> <br />
                                à bien vos projets.
                            </motion.h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                        {stats.map((stat, index) => (
                            <StatItem
                                key={index}
                                stat={stat}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-primary/[0.04]" />
        </section>
    );
};

export default Stats;
