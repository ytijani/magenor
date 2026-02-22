import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about-industrial.png';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
            {/* Header / Back button */}
            <div className="fixed top-8 left-6 md:left-20 z-50">
                <Link
                    to="/"
                    className="group flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 text-white hover:bg-white hover:text-primary transition-all duration-500"
                >
                    <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="text-sm font-bold uppercase tracking-wider">Retour</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <img
                        src={aboutImg}
                        alt="Magenor Industrial"
                        className="w-full h-full object-cover opacity-70 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/20" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/60 mb-6 block"
                    >
                        Notre Histoire & Nos Valeurs
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display text-white"
                    >
                        Qui sommes-nous
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-5xl mx-auto px-6 md:px-20 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary">
                        Bâtir l'avenir avec <span className="text-primary/30">rigueur et passion.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6 text-lg text-primary/70 leading-relaxed font-medium">
                            <p>
                                Depuis plus de 15 ans, MAGENOR s'est imposée comme un acteur majeur du secteur des Travaux Publics. Notre entreprise familiale a su évoluer tout en conservant ses valeurs fondamentales : la qualité, la sécurité et le respect des engagements.
                            </p>
                            <p>
                                Spécialisés dans la location de matériel, le terrassement et la démolition, nous accompagnons nos clients sur des projets d'envergure, de la phase de conception à la réalisation finale.
                            </p>
                        </div>
                        <div className="space-y-6 text-lg text-primary/70 leading-relaxed font-medium">
                            <p>
                                Notre parc machine de pointe et notre expertise technique nous permettent de relever les défis les plus complexes. Nous intervenons sur toute l'Ile-de-France avec une réactivité et un professionnalisme reconnus.
                            </p>
                            <p>
                                Choisir MAGENOR, c'est opter pour un partenaire fiable capable de mobiliser les ressources nécessaires pour la réussite de vos chantiers les plus ambitieux.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-32 p-12 md:p-20 rounded-[40px] bg-primary text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Target size={200} />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6 block">Notre Vision</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Innover pour des infrastructures durables et sûre.
                        </h3>
                        <p className="text-xl text-white/50 leading-relaxed">
                            Nous croyons que chaque chantier est une opportunité de démontrer notre savoir-faire. Notre mission est de fournir des solutions techniques innovantes tout en garantissant un environnement de travail sécurisé pour nos collaborateurs et nos partenaires.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Footer space */}
            <div className="h-20" />
        </div>
    );
};

export default About;
