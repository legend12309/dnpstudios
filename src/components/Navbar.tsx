'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ReactNode } from 'react';

interface NavbarProps {
    additionalControls?: ReactNode;
}

export function Navbar({ additionalControls }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            // Navigate to home first, then scroll will be handled by useEffect in HomePage or manual timeout
            // Simple approach: navigate to /#id
            window.location.href = `/#${id}`;
        } else {
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const isTeamPage = location.pathname === '/team';

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="fixed top-0 left-0 right-0 w-full z-[110]"
            >
                <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${isScrolled || isTeamPage ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center cursor-pointer"
                            onClick={() => {
                                if (location.pathname === '/') {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    window.location.href = '/';
                                }
                            }}
                        >
                            <span className="font-bagel text-white text-xl tracking-wider">DNP STUDIOS</span>
                        </motion.div>

                        {/* Navigation Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => scrollToSection('about')} className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 bg-transparent border-none cursor-pointer">
                                Process
                            </button>
                            <button onClick={() => scrollToSection('services')} className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 bg-transparent border-none cursor-pointer">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('clients')} className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 bg-transparent border-none cursor-pointer">
                                Clients
                            </button>
                            <Link to="/team" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                                Team
                            </Link>
                            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 bg-transparent border-none cursor-pointer">
                                Contact
                            </button>
                        </div>

                        {/* Right Side - CTA + Mobile Menu */}
                        <div className="flex items-center space-x-3 relative">
                            {additionalControls}

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="hidden sm:block bg-red-600 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 gentle-animation ml-4 cursor-pointer"
                            >
                                Get in Touch
                            </motion.button>

                            {/* Mobile Hamburger Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Panel */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90] mobile-menu-panel pointer-events-auto"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex flex-col px-6 pb-6 h-full">
                        <div className="flex flex-col space-y-4 text-white">
                            <button onClick={() => scrollToSection('about')} className="text-left mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20 bg-transparent border-none">
                                Process
                            </button>
                            <button onClick={() => scrollToSection('services')} className="text-left mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20 bg-transparent border-none">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('clients')} className="text-left mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20 bg-transparent border-none">
                                Clients
                            </button>
                            <Link to="/team" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                                Team
                            </Link>
                            <button onClick={() => scrollToSection('contact')} className="text-left mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20 bg-transparent border-none">
                                Contact
                            </button>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('contact')}
                            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 active:bg-red-800 gentle-animation mt-8 cursor-pointer"
                        >
                            Get in Touch
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
