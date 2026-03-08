import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send, Linkedin, Instagram, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const CONTACT_HERO = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80';

const Contact: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }
        })
    };

    return (
        <div className="min-h-screen bg-[#fafafa] text-primary selection:bg-primary selection:text-white">
            {/* Header / Back button */}
            <div className="fixed top-8 left-6 md:left-12 z-50">
                <Link
                    to="/"
                    className="group flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full px-5 py-2.5 text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-sm"
                >
                    <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="text-xs font-bold uppercase tracking-wider">Retour</span>
                </Link>
            </div>

            {/* Hero Section — Abstract geometric background */}
            <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-primary">
                {/* Abstract geometric pattern */}
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={CONTACT_HERO}
                        alt="Contactez Magenor"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-8 h-px bg-green-400" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-green-400">
                            Parlons de votre projet
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[0.95]"
                    >
                        Contactez<br />
                        <span className="text-white/30">notre équipe.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-white/50 text-base md:text-lg max-w-md leading-relaxed"
                    >
                        Des experts en travaux publics à votre écoute pour transformer vos projets en réalité.
                    </motion.p>
                </div>
            </section>

            {/* Quick Contact Strip */}
            <section className="bg-white border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">
                        {[
                            { icon: <Phone size={18} />, label: 'Téléphone', value: '+212 708080894', href: 'tel:+212708080894' },
                            { icon: <Mail size={18} />, label: 'Email', value: 'magenor.maroc@gmail.com', href: 'mailto:magenor.maroc@gmail.com' },
                            { icon: <Clock size={18} />, label: 'Horaires', value: 'Lun – Ven : 8h – 18h', href: undefined },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                {item.href ? (
                                    <a href={item.href} className="flex items-center gap-4 py-6 md:py-8 md:px-8 group hover:bg-primary/[0.02] transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mb-0.5">{item.label}</p>
                                            <p className="text-sm font-semibold text-primary">{item.value}</p>
                                        </div>
                                        <ChevronRight size={14} className="ml-auto text-primary/20 group-hover:text-primary/50 transition-colors" />
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4 py-6 md:py-8 md:px-8">
                                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mb-0.5">{item.label}</p>
                                            <p className="text-sm font-semibold text-primary">{item.value}</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left: Contact Info + Address Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <motion.div custom={0} variants={fadeUp} className="space-y-5">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
                                Toujours à votre<br />
                                <span className="text-primary/25">disposition.</span>
                            </h2>
                            <p className="text-primary/50 leading-relaxed text-[15px]">
                                Que vous soyez un client fidèle ou un futur partenaire, nos équipes sont prêtes à répondre à vos besoins techniques avec professionnalisme et réactivité.
                            </p>
                        </motion.div>

                        {/* Address Card */}
                        <motion.div custom={1} variants={fadeUp} className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-11 h-11 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                                    <MapPin size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mb-1">Siège Social</p>
                                    <p className="text-[15px] font-semibold text-primary leading-snug">
                                        90 BD La Résistance HASSANIA 2<br />
                                        Bloc A 3° Etage, Mohammedia
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden h-48 bg-primary/5 border border-black/5">
                                <iframe
                                    title="Magenor Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.5!2d-7.38!3d33.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzI0LjAiTiA3wrAyMic0OC4wIlc!5e0!3m2!1sfr!2sma!4v1"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Social */}
                        <motion.div custom={2} variants={fadeUp} className="flex items-center gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/25 mr-2">Suivez-nous</span>
                            <a href="#" className="w-10 h-10 rounded-xl border border-black/5 flex items-center justify-center text-primary/30 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl border border-black/5 flex items-center justify-center text-primary/30 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Instagram size={16} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <motion.div custom={0} variants={fadeUp} className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-1">Envoyez-nous un message</h3>
                                <p className="text-sm text-primary/40">Nous vous répondrons sous 24 heures.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/35 ml-1">Nom complet</label>
                                        <input
                                            type="text"
                                            placeholder="Votre nom"
                                            className="w-full bg-[#fafafa] border border-transparent rounded-xl px-5 py-3.5 outline-none focus:border-primary/15 focus:bg-white transition-all text-sm font-medium placeholder:text-primary/25"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/35 ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="votre@email.com"
                                            className="w-full bg-[#fafafa] border border-transparent rounded-xl px-5 py-3.5 outline-none focus:border-primary/15 focus:bg-white transition-all text-sm font-medium placeholder:text-primary/25"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/35 ml-1">Téléphone</label>
                                        <input
                                            type="tel"
                                            placeholder="+212 6XX XXX XXX"
                                            className="w-full bg-[#fafafa] border border-transparent rounded-xl px-5 py-3.5 outline-none focus:border-primary/15 focus:bg-white transition-all text-sm font-medium placeholder:text-primary/25"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/35 ml-1">Sujet</label>
                                        <select className="w-full bg-[#fafafa] border border-transparent rounded-xl px-5 py-3.5 outline-none focus:border-primary/15 focus:bg-white transition-all text-sm font-medium appearance-none text-primary/70">
                                            <option>Location de matériel</option>
                                            <option>Terrassement / Travaux</option>
                                            <option>Démolition</option>
                                            <option>Demande de devis</option>
                                            <option>Autre demande</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/35 ml-1">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Décrivez votre projet ou votre besoin..."
                                        className="w-full bg-[#fafafa] border border-transparent rounded-xl px-5 py-3.5 outline-none focus:border-primary/15 focus:bg-white transition-all text-sm font-medium resize-none placeholder:text-primary/25"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formSubmitted}
                                    className={`w-full rounded-xl py-4 font-bold uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 transition-all duration-500 group ${
                                        formSubmitted
                                            ? 'bg-green-500 text-white'
                                            : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/15'
                                    }`}
                                >
                                    {formSubmitted ? (
                                        <>
                                            <CheckCircle size={16} />
                                            <span>Message envoyé !</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Envoyer le message</span>
                                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <p className="text-[11px] text-primary/25 text-center mt-5">
                                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer hideCta />
        </div>
    );
};

export default Contact;
