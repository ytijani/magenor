import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Tractor, Hammer, ShieldCheck, Target, Recycle, Zap, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import travauxImg from '../assets/travaux-industrial.png';
import Footer from '../components/Footer';

const Travaux: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertises = [
        {
            title: "Terrassement V.R.D",
            icon: <Tractor size={28} />,
            desc: "Expertise complète en Voiries et Réseaux Divers. Nous préparons les terrains pour l'avenir.",
            points: ["Étude de sol G2", "Fouilles en masse", "Tranchées blindées"]
        },
        {
            title: "Démolition Structurelle",
            icon: <Hammer size={28} />,
            desc: "Démolition contrôlée de bâtiments industriels et urbains avec gestion stricte des nuisances.",
            points: ["Curage vert/rouge", "Démolition à la pince", "Tri à la source"]
        },
        {
            title: "Génie Civil & Fondations",
            icon: <Zap size={28} />,
            desc: "Réalisation d'ouvrages spécifiques et consolidation de sols pour infrastructures lourdes.",
            points: ["Voiles par passe", "Radier de fondation", "Blindage coulissant"]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
            {/* Nav Back */}
            <div className="fixed top-8 left-6 md:left-20 z-50">
                <Link
                    to="/"
                    className="group flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 text-white hover:bg-white hover:text-primary transition-all duration-500"
                >
                    <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="text-sm font-bold uppercase tracking-wider">RETOUR</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={travauxImg}
                        alt="Magenor Travaux"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-primary/40" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-black tracking-[0.4em] uppercase text-white/70 mb-8"
                    >
                        Ingénierie & Exécution
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight font-display text-white mb-8"
                    >
                        TRAVAUX <br /> <span className="text-white/30 italic">PUBLICS</span>
                    </motion.h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 text-lg font-bold"
                        >
                            <ShieldCheck className="text-white" />
                            <span className="text-white">Sécurité Maximale</span>
                        </motion.div>
                        <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-3 text-lg font-bold"
                        >
                            <Target className="text-white" />
                            <span className="text-white">Expertise Certifiée</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Grid */}
            <section className="max-w-7xl mx-auto px-6 md:px-20 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-10">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
                            Transformer le sol, <br />
                            <span className="text-primary/20 italic">bâtir le futur.</span>
                        </h2>
                        <p className="text-xl text-primary/50 leading-relaxed font-medium">
                            MAGENOR Travaux Publics intervient sur les projets d'infrastructure les plus complexes au Maroc, en combinant puissance mécanique et expertise humaine.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary/5">
                            <div className="space-y-2">
                                <p className="text-4xl font-black">15+</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-primary/40">Années d'Expérience</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-4xl font-black">160</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-primary/40">Collaborateurs Experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 bg-primary/5 p-12 rounded-[50px] border border-primary/[0.03]">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                                <HardHat />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight uppercase">Notre Engagement RSE</h3>
                            <p className="text-primary/60 leading-relaxed font-medium">
                                Nous appliquons une politique stricte de tri à la source et de re-valorisation des matériaux. Notre objectif est de réduire l'impact environnemental de chaque chantier via des circuits courts de recyclage.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-primary/5">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Recycle size={20} />
                                </div>
                                <span className="font-bold text-sm">Valorisation des déchets 100% traçables</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Cards */}
            <section className="bg-primary py-40 rounded-[60px] mx-6 md:mx-12 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 md:px-20 text-center mb-24">
                    <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Catalogue de services</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white">Nos Domaines d'Intervention</h2>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertises.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-12 rounded-[48px] flex flex-col justify-between h-full group hover:bg-white transition-all duration-700"
                        >
                            <div className="space-y-10">
                                <div className="w-16 h-16 rounded-[24px] bg-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {exp.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white group-hover:text-primary leading-tight tracking-tight uppercase transition-colors">{exp.title}</h3>
                                    <p className="text-white/40 group-hover:text-primary/60 font-medium transition-colors leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/5 group-hover:border-primary/5">
                                <ul className="space-y-4">
                                    {exp.points.map((p, pi) => (
                                        <li key={pi} className="flex items-center gap-3 text-[13px] font-bold text-white/60 group-hover:text-primary transition-colors">
                                            <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary/20" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Closing Process CTA */}
            <section className="max-w-7xl mx-auto px-6 md:px-20 py-40">
                <div className="bg-primary/5 rounded-[60px] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border border-primary/[0.03]">
                    <div className="max-w-xl space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Votre projet, <br /> notre <span className="text-primary/20">priorité.</span></h2>
                        <p className="text-lg text-primary/50 font-medium">De la phase d'étude à la livraison finale, nos chefs de chantier assurent un suivi rigoureux pour garantir vos délais.</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:w-auto">
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-12 py-6 rounded-3xl font-black text-sm uppercase tracking-widest text-center hover:scale-105 transition-all shadow-xl shadow-primary/10"
                        >
                            Lancer une étude
                        </Link>
                        <a
                            href="tel:+212708080894"
                            className="bg-white border border-primary/10 text-primary px-12 py-6 rounded-3xl font-black text-sm uppercase tracking-widest text-center hover:bg-primary hover:text-white transition-all"
                        >
                            +212 708080894
                        </a>
                    </div>
                </div>
            </section>

            <Footer hideCta />
        </div>
    );
};

export default Travaux;
