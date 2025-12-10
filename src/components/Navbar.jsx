
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

    return (
        <nav className="fixed w-full z-50 glass-nav transition-all duration-300 h-16">
            <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between gap-6">
                <Link to="/" className="flex items-center gap-2">
                    <div className="h-8 w-auto flex items-center justify-center overflow-hidden">
                        <img src={logoNav} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Synthpify.ai</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    {/* Note: In a real multi-page app, these hrefs might need to be /#features if on other pages. 
                For simplicity we keep href="#features" which works if on Home, or redirects to Home anchor if we adjust logic.
                For legal pages, we probably want to navigate back to Home first. 
                I will use Link to="/#features" (React Router doesn't handle hash scroll smoothly out of box usually, but let's try standard anchors first)
            */}
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
                <div id="mobile-menu" className="md:hidden bg-white border-b border-slate-100 p-4 absolute w-full top-16 left-0 animate-in slide-in-from-top-2">
                    <div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                        <a href="/#features" className="hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Features</a>
                        <a href="/#how-it-works" className="hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                        <a href="/#testimonials" className="hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Stories</a>
                        <a href="/#verticals" className="hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Industries</a>
                        <button
                            onClick={() => { setMobileMenuOpen(false); onScheduleClick(); }}
                            className="text-brand-600 font-semibold text-left"
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
