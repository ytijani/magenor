import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import projectDemolition1 from '../assets/project-demolition-1.png';
import projectEarthwork1 from '../assets/project-earthwork-1.png';
import projectPillarTrucks from '../assets/pillar-trucks.png';
import projectPillarExcavator from '../assets/pillar-excavator.png';

const projects = [
    {
        title: 'Déconstruction des ateliers d’Épinay-sur-Orge',
        category: 'Démolition',
        image: projectDemolition1,
    },
    {
        title: 'Réhabilitation lourde de la Poste du Louvre',
        category: 'Terrassement',
        image: projectEarthwork1,
    },
    {
        title: 'Terrassement de la Bourse de Commerce',
        category: 'Terrassement',
        image: projectPillarExcavator,
    },
    {
        title: 'Démolition d’un immeuble de 10 étages (Paris 19)',
        category: 'Démolition',
        image: projectPillarTrucks, // Using truck image as a placeholder for variety
    }
];

const Projects: React.FC = () => {
    return (
        <section id="chantiers" className="relative bg-[#f8f8f8] py-28 md:py-40">
            <div className="px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-6"
                            >
                                <div className="w-12 h-[1px] bg-black/10" />
                                <span className="text-[11px] font-bold tracking-[0.3em] text-black/40 uppercase">
                                    Réalisations
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-[-0.03em] leading-[1.05] font-display"
                            >
                                Nos chantiers de <br />
                                <span className="text-black/15">références historiques.</span>
                            </motion.h2>
                        </div>
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group flex items-center gap-3 text-black font-bold text-[13px] tracking-tight uppercase pb-1 border-b-2 border-black/5 hover:border-black transition-all duration-300"
                        >
                            Voir tous les projets
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-black">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{project.category}</span>
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                                <ArrowUpRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black font-display tracking-tight group-hover:text-black/70 transition-colors duration-300">
                                    {project.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
