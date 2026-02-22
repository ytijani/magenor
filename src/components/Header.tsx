import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        { name: 'Qui sommes-nous', href: '/qui-sommes-nous', isExternal: false },
        { name: 'Location', href: '/location', isExternal: false },
        { name: 'Travaux', href: '/travaux', isExternal: false },
        { name: 'Contact', href: '/contact', isExternal: false },
    ];

    const socialLinks = [
        { icon: <Linkedin size={14} />, href: '#', label: 'LinkedIn' },
        { icon: <Instagram size={14} />, href: '#', label: 'Instagram' },
        { icon: <Youtube size={14} />, href: '#', label: 'YouTube' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 w-full z-50 px-6 md:px-20 py-8 bg-transparent"
            >
                <div className="flex items-center justify-between max-w-[1800px] mx-auto">
                    <div className="flex items-center gap-12">
                        <Link to="/" className="flex items-center group" aria-label="MAGENOR Accueil">
                            <div className="h-8 md:h-10 w-[180px] md:w-[220px] relative overflow-hidden flex items-center justify-start">
                                <img
                                    src={logo}
                                    alt="MAGENOR"
                                    className="w-full h-full object-contain filter invert brightness-200"
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
                        {/* Contact CTA */}
                        <a href="tel:+2127892137438" className="hidden md:flex items-center gap-2 text-[13px] font-bold text-white/70 hover:text-white transition-colors duration-300">
                            <Phone size={14} />
                            <span>+212 789 213 7438</span>
                        </a>

                        {/* Social Icons */}
                        <div className="hidden md:flex items-center gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

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
                                        <div className="w-10 h-10 overflow-hidden">
                                            <img src={logo} alt="Logo" className="w-full h-full object-contain invert brightness-200" />
                                        </div>
                                        <span className="text-xl font-black text-white tracking-tight">MAGENOR</span>
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

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    {socialLinks.map((social) => (
                                        <a key={social.label} href={social.href} className="text-white/40 hover:text-white transition-colors">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                                <a href="tel:+2127892137438" className="block text-white font-bold text-xl">+212 789 213 7438</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
