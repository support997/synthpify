import React from 'react'
import { Mail } from 'lucide-react'

export default function Contact() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6">
                    <Mail size={12} /> Contact
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                    We'd love to hear from you. For general inquiries, sales, and support, please email us directly.
                </p>
            </div>

            <div className="max-w-md mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                    <p className="text-slate-500 mb-6">Drop us a line anytime.</p>
                    <a
                        href="mailto:support@synthpify.ai"
                        className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                    >
                        support@synthpify.ai
                    </a>
                </div>
            </div>
        </div>
    )
}
