import React from 'react'
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'
import logoFooter from '../assets/logo_footer.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 px-6 relative mt-auto border-t border-slate-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 text-white mb-4">
                        <div className="h-8 w-8 flex items-center justify-center overflow-hidden">
                            <img src={logoFooter} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Synthpify.ai</span>
                    </div>
                    <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
                        Engineering custom web platforms and autonomous AI systems that eliminate operational bottlenecks and accelerate business growth.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors"><Twitter size={16} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors"><Linkedin size={16} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors"><Instagram size={16} /></a>
                    </div>
                </div>

                {/* Deployed Work Column */}
                <div>
                    <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Deployed Work</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link to="/projects" className="hover:text-white transition-colors flex items-center gap-1">
                                <span>All Case Studies</span>
                                <ArrowUpRight size={12} className="opacity-60" />
                            </Link>
                        </li>
                        <li><Link to="/engivo" className="hover:text-white transition-colors text-blue-400 font-semibold flex items-center gap-1"><span>Engivo (Restaurant Operating & Loyalty)</span><ArrowUpRight size={12} /></Link></li>
                        <li><Link to="/projects" className="hover:text-white transition-colors text-slate-400">Beanpilot (Payroll)</Link></li>
                        <li><Link to="/projects" className="hover:text-white transition-colors text-slate-400">Propshinsa (PropTech)</Link></li>
                        <li><Link to="/projects" className="hover:text-white transition-colors text-slate-400">Voice AI & POS</Link></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div>
                    <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Company</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact / Estimator</Link></li>
                        <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                        <li>
                            <Link to="/connect" className="hover:text-white transition-colors text-brand-400 font-semibold flex items-center gap-1">
                                <span>Digital Card</span>
                                <ArrowUpRight size={12} />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div>
                    <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Legal</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link to="/security" className="hover:text-white transition-colors">Security Architecture</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-xs text-slate-500">
                <div>
                    &copy; {new Date().getFullYear()} Synthpify AI. All rights reserved.
                </div>
                <div>
                    Engineered with modern web architectures and autonomous AI pipelines.
                </div>
            </div>
        </footer>
    )
}
