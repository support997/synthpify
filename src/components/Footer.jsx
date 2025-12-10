
import React from 'react'
import { Twitter, Linkedin, Instagram, Download } from 'lucide-react'
import logoFooter from '../assets/logo_footer.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 px-6 relative mt-auto">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 text-white mb-4">
                        <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                            <img src={logoFooter} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Synthpify.ai</span>
                    </div>
                    <p className="text-sm text-slate-500 max-w-sm mb-6">
                        Empowering small businesses with intelligent, automated voice solutions. Doing more with less.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
                        <a href="#" className="hover:text-white"><Instagram size={18} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                        <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-center gap-4">
                <div className="text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} Synthpify AI. All rights reserved.
                </div>
                <button className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                    <Download size={12} /> Download Template
                </button>
            </div>
        </footer>
    )
}
