import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Tractor, ShieldCheck, Cog, Gauge, ArrowRight, Wrench, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import locationImg from '../assets/location-industrial.png';
import Footer from '../components/Footer';

const Location: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machineCategories = [
        {
            title: "Pelles & Mini-pelles",
            specs: ["9 – 22 Tonnes", "1.5 – 8 Tonnes", "14 – 80 Tonnes"],
            details: "Un parc varié pour tous types de terrassements, des espaces restreints aux grands chantiers.",
            icon: <Tractor className="w-6 h-6" />,
            color: "from-blue-500/20 to-blue-600/5"
        },
        {
            title: "Chargeuses & Bulldozers",
            specs: ["3K – 6K Litres", "D6 LGP / D6 K", "350 – 1000 Litres"],
            details: "Puissance et précision pour le nivellement, le chargement et le déplacement de matériaux.",
            icon: <Cog className="w-6 h-6" />,
            color: "from-emerald-500/20 to-emerald-600/5"
        },
        {
            title: "Tombereaux & Compacteurs",
            specs: ["15 – 18 m3", "Double bille / V3 / V5", "Pneus & Chenilles"],
            details: "Solutions de transport tout-terrain et compactage haute performance pour sols stables.",
            icon: <Gauge className="w-6 h-6" />,
            color: "from-purple-500/20 to-purple-600/5"
        }
    ];

    const advantages = [
        {
            icon: <Wrench size={24} />,
            title: "Maintenance Interne",
            desc: "Notre atelier intégré assure une révision complète entre chaque location."
        },
        {
            icon: <Calendar size={24} />,
            title: "Haute Disponibilité",
            desc: "Un parc de 200 machines pour répondre à vos urgences 24h/24."
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Normes CE",
            desc: "Des engins de dernière génération respectant les normes de sécurité les plus strictes."
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
                        src={locationImg}
                        alt="Magenor Fleet"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-white" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                   
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight font-display text-white mb-8"
                    >
                        LOCATION <br /> <span className="text-white/30 italic">TP & PL</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/70 text-xl md:text-2xl font-medium max-w-2xl mx-auto"
                    >
                        La puissance logistique pour vos chantiers les plus ambitieux au Maroc.
                    </motion.p>
                </div>
            </section>

            {/* Advantages Bar */}
            <section className="max-w-7xl mx-auto px-6 md:px-20 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((adv, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[40px] shadow-2xl shadow-primary/5 border border-primary/[0.03] space-y-4 group hover:bg-primary hover:text-white transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-white/10 group-hover:text-white transition-colors">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold font-display">{adv.title}</h3>
                            <p className="opacity-60 text-sm leading-relaxed">{adv.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Main Categories Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-20 py-32 space-y-24">
                <div className="space-y-6 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                        Explorez notre <br />
                        <span className="text-primary/20">parc d'exception.</span>
                    </h2>
                    <p className="text-lg text-primary/50 font-medium">
                        Nous investissons continuellement dans les meilleures technologies pour garantir la réussite de vos projets.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {machineCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`p-10 rounded-[48px] bg-gradient-to-br ${cat.color} border border-primary/[0.03] flex flex-col justify-between h-full hover:shadow-xl transition-all duration-500`}
                        >
                            <div className="space-y-8">
                                <div className="w-14 h-14 rounded-3xl bg-white flex items-center justify-center text-primary shadow-sm">
                                    {cat.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold font-display">{cat.title}</h3>
                                    <p className="text-primary/60 font-medium leading-relaxed">{cat.details}</p>
                                </div>
                            </div>
                            <div className="mt-12 pt-8 border-t border-primary/5">
                                <p className="text-[10px] font-black tracking-widest uppercase text-primary/30 mb-4">Capacités & Modèles</p>
                                <ul className="space-y-3">
                                    {cat.specs.map((spec, sI) => (
                                        <li key={sI} className="flex items-center gap-3 text-sm font-bold">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Truck Section - More Visual */}
            <section className="bg-primary py-32 rounded-[60px] mx-6 md:mx-12 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs">Poids Lourds (PL)</span>
                                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                                    Plus de 100 <br />
                                    <span className="text-white/20">camions actifs.</span>
                                </h2>
                                <p className="text-white/50 text-xl leading-relaxed">
                                    Notre service de location avec chauffeur est la solution clé en main pour l'évacuation de masse et la logistique de chantier complexe.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-6 bg-white rounded-full pl-10 pr-3 py-3 hover:scale-105 transition-transform duration-500"
                            >
                                <span className="text-primary font-black text-sm tracking-widest uppercase">Demander une cotation</span>
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Bennes", spec: "15-20T" },
                                { name: "Grues", spec: "Hydraulique" },
                                { name: "Amplirolls", spec: "Tri sélectif" },
                                { name: "Semi", spec: "28T" }
                            ].map((t, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-2">
                                    <p className="text-white font-bold text-lg">{t.name}</p>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest">{t.spec}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 text-center">
                <div className="max-w-3xl mx-auto space-y-10 px-6">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">Besoin d'un parc mobile <span className="text-primary/20">performant ?</span></h2>
                    <p className="text-xl text-primary/50 font-medium">Nos experts vous conseillent sur le choix des machines adaptées à la configuration de votre sol et à vos contraintes de délais.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
                        <Link to="/contact" className="w-full md:w-auto bg-primary text-white px-12 py-6 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-primary/80 transition-all">Nous contacter</Link>
                        <a href="tel:+212708080894" className="w-full md:w-auto border border-primary/10 px-12 py-6 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all">+212 708080894</a>
                    </div>
                </div>
            </section>

            <Footer hideCta />
        </div>
    );
};

export default Location;
