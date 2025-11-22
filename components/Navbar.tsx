import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <Compass className={`w-8 h-8 ${isScrolled ? 'text-brand-600' : 'text-white'} group-hover:rotate-45 transition-transform duration-500`} />
                    <span className={`text-xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                        ADRENALINE
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className={`text-sm font-medium uppercase tracking-wide hover:text-brand-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
                    <div className="flex flex-col p-6 space-y-4">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-800 font-medium hover:text-brand-600"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};