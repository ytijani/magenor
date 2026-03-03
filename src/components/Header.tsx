import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo-white.svg';

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        {
            name: 'Qui sommes-nous', href: '/qui-sommes-nous'
        },
        { name: 'Location', href: '/location' },
        { name: 'Travaux', href: '/travaux' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-primary focus:px-6 focus:py-3 focus:rounded-full focus:font-bold focus:shadow-2xl">
                Passer au contenu
            </a>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 w-full z-50 py-4 bg-transparent"
            >
                <div className="flex items-center justify-between w-full px-[5rem] mx-auto">
                    <div className="flex items-center gap-12">
                        <Link to="/" className="flex items-center group" aria-label="MAGENOR Accueil">
                            <div className="h-14 md:h-16 w-16 md:w-20 relative overflow-hidden flex items-center justify-start">
                                <img
                                    src={logoWhite}
                                    alt="MAGENOR — Travaux Publics"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        to={link.href}
                                        className="text-[13px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden xl:flex items-center gap-4 border-r border-white/10 pr-8">
                            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                        </div>

                        {/* Contact CTA */}
                        <a href="tel:+33189471234" className="hidden md:flex items-center gap-2 text-[13px] font-bold text-white/70 hover:text-white transition-colors duration-300">
                            <Phone size={14} />
                            <span>+33 1 89 47 12 34</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
                            aria-label="Ouvrir le menu"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] lg:hidden"
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-primary/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 w-full max-w-sm h-full bg-primary border-l border-white/5 p-12 flex flex-col justify-between"
                        >
                            <div className="space-y-16">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-32 h-8 flex items-center justify-center">
                                            <img src={logoWhite} alt="MAGENOR — Travaux Publics" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                    <button onClick={() => setMobileOpen(false)} className="text-white">
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-8">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                        >
                                            <Link
                                                to={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="text-4xl font-bold text-white/50 hover:text-white transition-colors duration-300"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            <div className="space-y-4">
                                <a href="tel:+33189471234" className="block text-white font-bold text-xl">+33 1 89 47 12 34</a>
                                <a href="mailto:contact@magenor.fr" className="block text-white/50 font-medium text-sm">contact@magenor.fr</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
