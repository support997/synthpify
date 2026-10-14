import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoNav from '../assets/logo_nav.png'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ onScheduleClick }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const handleMobileLinkClick = () => {
        setMobileMenuOpen(false)
        window.scrollTo(0, 0)
    }

    return (
        <nav className="fixed w-full z-50 glass-nav transition-all duration-300 h-16">
            <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between gap-6">
                <Link to="/" className="flex items-center gap-2" onClick={handleMobileLinkClick}>
                    <div className="h-8 w-8 flex items-center justify-center overflow-hidden">
                        <img src={logoNav} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-slate-900">Synthpify.ai</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
                    <Link
                        to="/projects"
                        className={`transition-colors ${location.pathname === '/projects' ? 'text-brand-600 font-bold' : 'hover:text-slate-900'}`}
                    >
                        Case Studies
                    </Link>
                    <a href="/#services" className="hover:text-slate-900 transition-colors">Services</a>
                    <a href="/#features" className="hover:text-slate-900 transition-colors">Features</a>
                    <a href="/#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
                    <Link
                        to="/about"
                        className={`transition-colors ${location.pathname === '/about' ? 'text-brand-600 font-bold' : 'hover:text-slate-900'}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`transition-colors ${location.pathname === '/contact' ? 'text-brand-600 font-bold' : 'hover:text-slate-900'}`}
                    >
                        Contact
                    </Link>
                    <button
                        onClick={onScheduleClick}
                        className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-all shadow-sm hover:shadow cursor-pointer text-xs font-semibold"
                    >
                        Schedule Consultation
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-slate-600 hover:text-slate-900 p-1"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white border-b border-slate-100 p-5 absolute w-full top-16 left-0 animate-in slide-in-from-top-2 overflow-y-auto max-h-[85vh] shadow-2xl">
                    <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                        <Link
                            to="/projects"
                            className="font-bold text-brand-600 py-1.5 flex items-center justify-between"
                            onClick={handleMobileLinkClick}
                        >
                            <span>Case Studies (Deployed Work)</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-bold">New</span>
                        </Link>
                        <a href="/#services" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>Services & Architecture</a>
                        <a href="/#features" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>Voice & POS Features</a>
                        <a href="/#how-it-works" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                        <a href="/#testimonials" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>Client Stories</a>

                        <div className="h-px bg-slate-100 my-2"></div>

                        <Link to="/about" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>About Synthpify</Link>
                        <Link to="/contact" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>Contact & Project Estimator</Link>
                        <Link to="/support" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>Support & Help Center</Link>

                        <div className="h-px bg-slate-100 my-2"></div>

                        <button
                            onClick={() => { setMobileMenuOpen(false); onScheduleClick(); }}
                            className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold text-center cursor-pointer shadow"
                        >
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
