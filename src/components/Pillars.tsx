import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Tractor, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import pillarTrucks from '../assets/pillar-trucks.png';
import pillarExcavator from '../assets/pillar-excavator.png';
import pillarInfrastructure from '../assets/pillar-infrastructure.png';

const pillars = [
    {
        number: '01',
        title: 'TRANSPORTS',
        subtitle: 'Camions Poids Lourds',
        description: 'Nos camions bennes poids lourds sont disponibles à la location avec chauffeurs sur une base forfaitaire ou en régie pour évacuer tous les matériaux des chantiers de travaux publics.',
        icon: <Truck strokeWidth={1.5} />,
        image: pillarTrucks,
        color: '#0ea5e9',
        link: '/location'
    },
    {
        number: '02',
        title: 'ENGINS',
        subtitle: 'Engins Travaux Publics',
        description: 'Notre large gamme d\'engins destinés aux Travaux Publics réalise vos travaux de terrassement sur une base forfaitaire ou en location à la journée.',
        icon: <Tractor strokeWidth={1.5} />,
        image: pillarExcavator,
        color: '#10b981',
        link: '/location'
    },
    {
        number: '03',
        title: 'INFRASTRUCTURE',
        subtitle: 'Travaux & Démolition',
        description: 'Nous réalisons des démolitions et divers chantiers d\'infrastructures au forfait : fondations, gros œuvre, tranchées blindées, voiles par passe et bien plus.',
        icon: <Building2 strokeWidth={1.5} />,
        image: pillarInfrastructure,
        color: '#8b5cf6',
        link: '/travaux'
    }
];

const Pillars: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="groupe" className="relative bg-white py-32 md:py-48 overflow-hidden">
            <div className="px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
                        {/* Left Side: Sticky Content */}
                        <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <div className="w-12 h-[1px] bg-black/10" />
                                <span className="text-[11px] font-bold tracking-[0.3em] text-black/40 uppercase">
                                    Le Groupe
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-7xl font-bold text-black tracking-[-0.03em] leading-[1.05] font-display"
                            >
                                Trois piliers <br />
                                <span className="text-black/15 italic">une seule exigence.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-lg md:text-xl text-black/45 leading-relaxed font-medium max-w-md"
                            >
                                De la logistique de transport à l'exécution de chantiers complexes, nous couvrons l'ensemble de la chaîne de valeur du BTP.
                            </motion.p>
                        </div>

                        {/* Right Side: Pillars Grid */}
                        <div className="lg:col-span-7 space-y-4">
                            {pillars.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="relative group cursor-pointer"
                                >
                                    <div className="relative h-[220px] md:h-[260px] overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#f5f5f5] transition-all duration-700">
                                        {/* Background Image Container */}
                                        <div className="absolute inset-0">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out scale-110 group-hover:scale-100"
                                                style={{ backgroundImage: `url(${pillar.image})` }}
                                            />
                                            {/* Overlays */}
                                            <div className="absolute inset-0 bg-white/95 group-hover:bg-black/40 transition-colors duration-700" />
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-black/60 to-transparent transition-opacity duration-700" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative h-full p-8 md:p-12 flex items-center">
                                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
                                                {/* Pillar Index & Icon */}
                                                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4 transition-all duration-700 group-hover:translate-x-4">
                                                    <span className="text-[10px] font-bold tracking-[0.2em] text-black/20 group-hover:text-white/40 font-display">
                                                        {pillar.number}
                                                    </span>
                                                    <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-white/10 flex items-center justify-center text-black/80 group-hover:text-white transition-all duration-700">
                                                        {pillar.icon}
                                                    </div>
                                                </div>

                                                {/* Text Content */}
                                                <div className="md:col-span-10 space-y-2 md:space-y-3 transition-all duration-700 group-hover:translate-x-4">
                                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black group-hover:text-white font-display">
                                                        {pillar.title}
                                                    </h3>
                                                    <p className="text-sm md:text-base text-black/40 group-hover:text-white/70 max-w-sm font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                                                        {pillar.description}
                                                    </p>
                                                    <Link to={pillar.link} className="flex items-center gap-3 pt-3 group/btn">
                                                        <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-black/25 group-hover:text-white/60 transition-colors duration-500">
                                                            En savoir plus
                                                        </span>
                                                        <div className="w-8 h-8 rounded-full border border-black/[0.06] group-hover:border-white/20 flex items-center justify-center text-black/20 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1">
                                                            <ArrowRight size={14} />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pillars;
