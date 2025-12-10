import React from 'react'
import { LifeBuoy, BookOpen, MessageCircle } from 'lucide-react'

export default function Support() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6">
                    <LifeBuoy size={12} /> Support
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Help Center</h1>
                <p className="text-slate-500 text-lg">Find answers, documentation, and support for Synthpify AI.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-card hover:border-slate-300 transition-all group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Documentation</h3>
                    <p className="text-slate-500 text-sm">Detailed guides on how to configure and optimize your AI agent.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-card hover:border-slate-300 transition-all group cursor-pointer">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Community</h3>
                    <p className="text-slate-500 text-sm">Join our community of business owners sharing tips and tricks.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-card hover:border-slate-300 transition-all group cursor-pointer">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <LifeBuoy size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Support</h3>
                    <p className="text-slate-500 text-sm">Need personalized help? Our support team is ready to assist you.</p>
                </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "How do I update my menu/pricing?", a: "You can update your knowledge base directly in your dashboard. Changes are reflected instantly." },
                        { q: "Can I transfer calls to a real person?", a: "Yes, you can set up call forwarding rules for specific scenarios or during business hours." },
                        { q: "Is there a setup fee?", a: "No, our onboarding process is completely free. You only pay for the subscription plan you choose." },
                    ].map((faq, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                            <p className="text-slate-600 text-sm">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
