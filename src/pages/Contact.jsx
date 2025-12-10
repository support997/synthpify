import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' })
    const [status, setStatus] = React.useState('') // 'sending', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        try {
            const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
            const res = await fetch(`${apiBase}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6">
                    <Mail size={12} /> Contact
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
                <p className="text-slate-500 text-lg">We'd love to hear from you. Here's how to reach us.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                            <Mail size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                        <p className="text-slate-500 mb-4">For general inquiries and sales.</p>
                        <a href="mailto:support@synthpify.ai" className="text-teal-600 font-medium hover:underline">support@synthpify.ai</a>
                    </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
