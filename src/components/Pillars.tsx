import React from 'react';
import { motion } from 'framer-motion';
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
        link: '/location'
    },
    {
        number: '02',
        title: 'ENGINS',
        subtitle: 'Engins Travaux Publics',
        description: 'Notre large gamme d\'engins destinés aux Travaux Publics réalise vos travaux de terrassement sur une base forfaitaire ou en location à la journée.',
        icon: <Tractor strokeWidth={1.5} />,
        image: pillarExcavator,
        link: '/location'
    },
    {
        number: '03',
        title: 'INFRASTRUCTURE',
        subtitle: 'Travaux & Démolition',
        description: 'Nous réalisons des démolitions et divers chantiers d\'infrastructures au forfait : fondations, gros œuvre, tranchées blindées, voiles par passe et bien plus.',
        icon: <Building2 strokeWidth={1.5} />,
        image: pillarInfrastructure,
        link: '/travaux'
    }
];

const Pillars: React.FC = () => {
    return (
        <section id="groupe" className="relative bg-white py-24 md:py-32 overflow-hidden">
            <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-24">
                    <div className="space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-primary/20" />
                            <span className="text-[11px] font-bold tracking-[0.3em] text-primary/50 uppercase">
                                Le Groupe
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-black text-primary tracking-tight leading-[1.05] font-display"
                        >
                            Trois piliers <br className="hidden md:block" />
                            <span className="text-primary/30 italic font-medium">une seule exigence.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg text-primary/60 leading-relaxed font-medium max-w-sm md:text-right"
                    >
                        De la logistique de transport à l'exécution de chantiers complexes, nous couvrons l'ensemble de la chaîne de valeur du BTP.
                    </motion.p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                            className="group flex flex-col bg-[#f8f9fa] rounded-[32px] overflow-hidden border border-black/[0.04] hover:border-black/[0.08] transition-all duration-500 hover:shadow-2xl hover:shadow-black/[0.04]"
                        >
                            {/* Image Top */}
                            <div className="relative h-64 overflow-hidden bg-white">
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />

                                {/* Badge overlay */}
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                                    <span className="text-[11px] font-black tracking-[0.2em] text-primary uppercase">
                                        {pillar.number}
                                    </span>
                                </div>
                            </div>

                            {/* Content Bottom */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 shadow-sm shrink-0 bg-primary/5 text-primary"
                                    >
                                        {pillar.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-primary font-display leading-none">
                                            {pillar.title}
                                        </h3>
                                        <span className="text-[12px] font-bold text-primary/40 uppercase tracking-wider mt-1 block">
                                            {pillar.subtitle}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-primary/60 font-medium leading-relaxed mb-8 flex-grow text-sm md:text-base">
                                    {pillar.description}
                                </p>

                                <Link
                                    to={pillar.link}
                                    className="inline-flex items-center gap-4 w-max group/btn"
                                >
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm bg-primary/5 text-primary"
                                    >
                                        <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                    <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary/80 group-hover/btn:text-primary transition-colors">
                                        Explorer
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
