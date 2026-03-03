import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.svg';

const footerLinks = [
    { name: 'Le Groupe', href: '/qui-sommes-nous' },
    { name: 'Location', href: '/location' },
    { name: 'Travaux', href: '/travaux' },
    { name: 'Contact', href: '/contact' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-primary relative border-t border-primary/5">
            <div className="px-6 md:px-20 pt-28 md:pt-36 pb-16 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section - Large CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 md:mb-28"
                    >
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-16 md:pb-20 border-b border-primary/[0.06]">
                            <div>
                                <span className="text-[11px] font-bold tracking-[0.3em] text-primary/40 uppercase block mb-6">
                                    Contactez-nous
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-primary font-display">
                                    Mener à bien <br />
                                    <span className="text-primary/20">vos projets ensemble.</span>
                                </h2>
                            </div>
                            <Link
                                to="/contact"
                                className="group flex items-center gap-5 bg-primary rounded-full pl-8 pr-2 py-2 hover:bg-primary/90 transition-all duration-500 hover:-translate-y-0.5 shrink-0"
                            >
                                <span className="text-white font-bold text-[13px] tracking-tight uppercase px-2">Envoyer un message</span>
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={16} className="text-primary" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-20">
                        {/* Brand & Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center">
                                <div className="h-20 md:h-24 w-[120px] md:w-[150px] overflow-hidden flex items-center justify-start">
                                    <img src={logo} alt="MAGENOR" className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-primary/30 shrink-0 mt-1" />
                                    <p className="text-primary/45 text-[14px] leading-relaxed font-medium">
                                        12 Bis Rue de l'Industrie,<br />
                                        91210 Draveil, Maroc
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-primary/30 shrink-0" />
                                    <a href="tel:+33189471234" className="text-primary/45 text-[14px] font-medium hover:text-primary transition-colors">+33 1 89 47 12 34</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-primary/30 shrink-0" />
                                    <a href="mailto:contact@magenor.fr" className="text-primary/45 text-[14px] font-medium hover:text-primary transition-colors">contact@magenor.fr</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Navigation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-8"
                        >
                            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary/30">Navigation</h4>
                            <ul className="space-y-4">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-[15px] font-bold text-primary/60 hover:text-primary transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary/30">Horaires</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-primary/[0.05] pb-3">
                                    <span className="text-[14px] font-bold text-primary/60">Lun – Ven</span>
                                    <span className="text-[14px] font-semibold text-primary/40">07h00 – 18h00</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-primary/[0.05] pb-3">
                                    <span className="text-[14px] font-bold text-primary/60">Samedi</span>
                                    <span className="text-[14px] font-semibold text-primary/40">08h00 – 13h00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[14px] font-bold text-primary/60">Dimanche</span>
                                    <span className="text-[14px] font-semibold text-primary/40">Fermé</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-10 border-t border-primary/[0.06]">
                        <p className="text-[11px] font-bold text-primary/20 uppercase tracking-[0.1em]">
                            © {new Date().getFullYear()} MAGENOR TP & PL. Tous droits réservés.
                        </p>
                        <p className="text-[11px] font-medium text-primary/20">
                            Entreprise de Travaux Publics — Île-de-Maroc
                        </p>
                    </div>
                </div>
            </div>

            {/* Backdrop Design Element */}
            <div className="absolute bottom-0 right-0 p-12 pointer-events-none opacity-[0.03]">
                <img src={logo} alt="" className="w-96 grayscale grayscale-0" />
            </div>
        </footer>
    );
};

export default Footer;
