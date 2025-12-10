
import React, { useState } from 'react'
import { Menu } from 'lucide-react' // Import specific icons used
import logoNav from '../assets/logo_nav.png'
import { Link } from 'react-router-dom' // Import Link

export default function Navbar({ onScheduleClick }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    // Helper to handle hash scrolling on home page vs navigation
    const handleScroll = (id) => (e) => {
        // If not on home page, we might need navigation logic (handled by router usually)
        // For now assuming single page scroll sections are only on Home.
        // We will handle this by checking if we are on Home in the future or just using anchor tags for now.
        setMobileMenuOpen(false)
    }

    const handleMobileLinkClick = () => {
        setMobileMenuOpen(false)
        window.scrollTo(0, 0)
    }

    return (
        <nav className="fixed w-full z-50 glass-nav transition-all duration-300 h-16">
            <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between gap-6">
                <Link to="/" className="flex items-center gap-2" onClick={handleMobileLinkClick}>
                    <div className="h-8 w-8 flex items-center justify-center overflow-hidden">
                        <img src={logoNav} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Synthpify.ai</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="/#features" className="hover:text-slate-900 transition-colors">Features</a>
                    <a href="/#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
                    <a href="/#testimonials" className="hover:text-slate-900 transition-colors">Stories</a>
                    <a href="/#verticals" className="hover:text-slate-900 transition-colors">Industries</a>
                    <button
                        onClick={onScheduleClick}
                        className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                        Schedule Demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-slate-600 hover:text-slate-900">
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white border-b border-slate-100 p-4 absolute w-full top-16 left-0 animate-in slide-in-from-top-2 overflow-y-auto max-h-[80vh] shadow-xl">
                    <div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                        <a href="/#features" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>Features</a>
                        <a href="/#how-it-works" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                        <a href="/#testimonials" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>Stories</a>
                        <a href="/#verticals" className="hover:text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>Industries</a>

                        <div className="h-px bg-slate-100 my-1"></div>

                        <Link to="/about" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>About</Link>
                        <Link to="/contact" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>Contact</Link>
                        <Link to="/support" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>Support</Link>
                        <Link to="/privacy" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>Privacy</Link>
                        <Link to="/terms" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>Terms</Link>
                        <Link to="/security" className="hover:text-slate-900 py-1" onClick={handleMobileLinkClick}>Security</Link>

                        <div className="h-px bg-slate-100 my-1"></div>

                        <button
                            onClick={() => { setMobileMenuOpen(false); onScheduleClick(); }}
                            className="text-brand-600 font-semibold text-left py-2"
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
