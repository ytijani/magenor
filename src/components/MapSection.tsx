import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactDetails = [
    {
        icon: <MapPin size={20} />,
        label: 'Adresse',
        value: '90 BD La Résistance HASSANIA 2\nBloc A 3° Etage, Mohammedia',
    },
    {
        icon: <Phone size={20} />,
        label: 'Téléphone',
        value: '+212 708080894',
        href: 'tel:+212708080894',
    },
    {
        icon: <Mail size={20} />,
        label: 'Email',
        value: 'magenor.maroc@gmail.com',
        href: 'mailto:magenor.maroc@gmail.com',
    },
    {
        icon: <Clock size={20} />,
        label: 'Horaires',
        value: 'Lun – Ven : 07h00 – 18h00\nSamedi : 08h00 – 13h00',
    },
];

const MapSection: React.FC = () => {
    return (
        <section className="relative bg-[#f8f9fa] py-24 md:py-32 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="px-6 md:px-20 max-w-[1440px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20">
                    <div className="space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[2px] bg-primary/30" />
                            <span className="text-[11px] font-bold tracking-[0.3em] text-primary/50 uppercase">
                                Nous Trouver
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-black text-primary tracking-tight leading-[1.05] font-display"
                        >
                            Venez nous <br className="hidden md:block" />
                            <span className="text-primary/30 italic font-medium">rencontrer.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Link
                            to="/contact"
                            className="group flex items-center gap-5 bg-primary rounded-full pl-8 pr-2 py-2 hover:bg-primary/90 transition-all duration-500 hover:-translate-y-0.5 shrink-0"
                        >
                            <span className="text-white font-bold text-[13px] tracking-tight uppercase px-2">Nous contacter</span>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight size={16} className="text-primary" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Map + Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 flex flex-col gap-4"
                    >
                        {contactDetails.map((detail, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group bg-white rounded-2xl p-6 border border-black/[0.04] hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        {detail.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[11px] font-bold tracking-[0.2em] text-primary/30 uppercase block mb-1.5">
                                            {detail.label}
                                        </span>
                                        {detail.href ? (
                                            <a
                                                href={detail.href}
                                                className="text-[14px] font-semibold text-primary/70 hover:text-primary transition-colors duration-300 block"
                                            >
                                                {detail.value}
                                            </a>
                                        ) : (
                                            <p className="text-[14px] font-semibold text-primary/70 whitespace-pre-line leading-relaxed">
                                                {detail.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="relative rounded-[32px] overflow-hidden border border-black/[0.04] shadow-2xl shadow-black/[0.04] h-full min-h-[400px] lg:min-h-[500px]">
                            {/* Accent border top */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/20 z-10" />
                            <iframe
                                title="MAGENOR Location - Mohammedia, Maroc"
                                src="https://maps.google.com/maps?q=90+Boulevard+La+Resistance+Mohammedia+Morocco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full lg:min-h-[500px]"
                            />
                            {/* Pin label overlay */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-lg border border-black/5 flex items-center gap-3 z-10">
                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                    <MapPin size={16} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[12px] font-black text-primary uppercase tracking-wider">MAGENOR</p>
                                    <p className="text-[11px] font-medium text-primary/50">Mohammedia, Maroc</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
