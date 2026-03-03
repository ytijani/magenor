import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import contactImg from '../assets/contact-hq.png';

const Contact: React.FC = () => {
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
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <img
                        src={contactImg}
                        alt="Magenor Headquarters"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-primary/20" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/60 mb-6 block"
                    >
                        Parlons de votre projet
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display text-white"
                    >
                        Contact
                    </motion.h1>
                </div>
            </section>

            {/* Contact Content */}
            <section className="max-w-7xl mx-auto px-6 md:px-20 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-display text-primary">
                                Toujours à votre <br />
                                <span className="text-primary/30">disposition.</span>
                            </h2>
                            <p className="text-lg text-primary/60 leading-relaxed font-medium">
                                Que vous soyez un client fidèle ou un futur partenaire, nos équipes sont prêtes à répondre à vos besoins techniques.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:bg-primary/80 transition-colors">
                                    <Phone size={20} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary/30">Téléphone</p>
                                    <p className="text-xl font-bold">01 45 67 89 10</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:bg-primary/80 transition-colors">
                                    <Mail size={20} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary/30">Email</p>
                                    <p className="text-xl font-bold">contact@magenor.fr</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:bg-primary/80 transition-colors">
                                    <MapPin size={20} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary/30">Siège Social</p>
                                    <p className="text-xl font-bold leading-tight">123 Rue de l'Industrie <br /> 75000 Paris, Maroc</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7 bg-primary/5 rounded-[48px] p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-4">Nom</label>
                                    <input
                                        type="text"
                                        placeholder="Votre nom"
                                        className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/20 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-4">Email</label>
                                    <input
                                        type="email"
                                        placeholder="votre@email.com"
                                        className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/20 transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-4">Sujet</label>
                                <select className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/20 transition-all font-medium appearance-none">
                                    <option>Location de matériel</option>
                                    <option>Terrassement / Travaux</option>
                                    <option>Démolition</option>
                                    <option>Autre demande</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-4">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Comment pouvons-nous vous aider ?"
                                    className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/20 transition-all font-medium resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full bg-primary text-white rounded-2xl py-5 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary/90 transition-all duration-500 group shadow-lg shadow-primary/10">
                                <span>Envoyer</span>
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder / Info */}
            <section className="px-6 md:px-20 pb-24">
                <div className="max-w-7xl mx-auto rounded-[48px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 h-[400px] relative bg-primary/5 border border-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-primary/20 font-display text-4xl font-bold opacity-30 select-none">CARTE INTERACTIVE</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
