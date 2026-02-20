import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.svg';

const footerLinks = {
    navigation: [
        { name: 'Le Groupe', href: '/qui-sommes-nous', isExternal: false },
        { name: 'Location', href: '/location', isExternal: false },
        { name: 'Travaux', href: '/travaux', isExternal: false },
        { name: 'Contact', href: '/contact', isExternal: false },
    ],
    info: [
        { name: 'Nous rejoindre', href: '#' },
        { name: 'Actualités', href: '#' },
        { name: 'Historique', href: '#' },
        { name: 'La gouvernance', href: '#' },
    ],
};

const socialLinks = [
    { icon: <Linkedin size={16} />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram size={16} />, href: '#', name: 'Instagram' },
    { icon: <Youtube size={16} />, href: '#', name: 'YouTube' },
];

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-white text-black relative border-t border-black/5">
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
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-16 md:pb-20 border-b border-black/[0.06]">
                            <div>
                                <span className="text-[11px] font-bold tracking-[0.3em] text-black/25 uppercase block mb-6">
                                    Contactez-nous
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-black font-display">
                                    Mener à bien <br />
                                    <span className="text-black/20">vos projets ensemble.</span>
                                </h2>
                            </div>
                            <Link
                                to="/contact"
                                className="group flex items-center gap-5 bg-black rounded-full pl-8 pr-2 py-2 hover:bg-black/90 transition-all duration-500 hover:-translate-y-0.5 shrink-0"
                            >
                                <span className="text-white font-bold text-[13px] tracking-tight uppercase px-2">Envoyer un message</span>
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={16} className="text-black" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
                        {/* Brand & Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 lg:col-span-1"
                        >
                            <div className="flex items-center">
                                <div className="h-8 md:h-10 w-[180px] md:w-[220px] overflow-hidden flex items-center justify-start">
                                    <img src={logo} alt="MAGENOR" className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-black/30 shrink-0 mt-1" />
                                    <p className="text-black/45 text-[14px] leading-relaxed font-medium">
                                        12 Bis Rue de l'Industrie,<br />
                                        91210 Draveil, France
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-black/30 shrink-0" />
                                    <p className="text-black/45 text-[14px] font-medium">+212 789 213 7438</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-black/30 shrink-0" />
                                    <p className="text-black/45 text-[14px] font-medium">contact@magenor.com</p>
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
                            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30">Navigation</h4>
                            <ul className="space-y-4">
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-[15px] font-bold text-black/60 hover:text-black transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30">Informations</h4>
                            <ul className="space-y-4">
                                {footerLinks.info.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[15px] font-bold text-black/60 hover:text-black transition-colors duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-8"
                        >
                            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30">Newsletter</h4>
                            <div className="space-y-6">
                                <p className="text-black/45 text-[14px] leading-relaxed font-medium">
                                    Recevez nos dernières actualités et nos nouveaux arrivages machines.
                                </p>
                                <form onSubmit={handleSubscribe} className="relative group">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Votre email"
                                        className="w-full bg-black/[0.03] border border-black/[0.06] rounded-2xl px-6 py-4 text-[14px] font-medium outline-none focus:border-black/20 focus:bg-white transition-all duration-300"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-2 bottom-2 aspect-square bg-black rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
                                    >
                                        <ArrowRight size={18} />
                                    </button>
                                    {isSubscribed && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -bottom-6 left-0 text-[10px] font-bold text-emerald-600 uppercase tracking-widest"
                                        >
                                            Merci pour votre inscription !
                                        </motion.p>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-10 border-t border-black/[0.06]">
                        <p className="text-[11px] font-bold text-black/20 uppercase tracking-[0.1em]">
                            © {new Date().getFullYear()} MAGENOR TP & PL. Tous droits réservés.
                        </p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-6">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        whileHover={{ y: -2 }}
                                        href={social.href}
                                        className="w-9 h-9 rounded-full bg-black/[0.03] flex items-center justify-center text-black/30 hover:bg-black hover:text-white transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="flex items-center gap-6 text-[10px] font-bold text-black/20 uppercase tracking-widest">
                                <a href="#" className="hover:text-black transition-colors">Mentions Légales</a>
                                <a href="#" className="hover:text-black transition-colors">Politique Cookies</a>
                            </div>
                        </div>
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
