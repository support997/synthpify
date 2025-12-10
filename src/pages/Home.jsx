import React from 'react'
import { Activity, PhoneMissed, Bot, ClipboardList, Mic, Banknote, Clock, Shield, Star, BarChart3, Settings, CheckCircle, Headphones } from 'lucide-react'
import HeroBg from '../assets/hero_bg_new.png'

export default function Home({ onScheduleClick }) {
    return (
        <div className="flex-grow">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto text-center relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                    {/* Background Image & Overlay */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${HeroBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 py-24 px-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Trusted by 500+ businesses
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 text-shadow-lg">
                            Never Miss a <span className="text-slate-200">Call Again.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            Stop losing business to a busy phone line. Our AI Voice Agent answers every call, takes every order, and books every appointment—24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={onScheduleClick} className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 hover:-translate-y-[2px] transition-all shadow-lg cursor-pointer">
                                Schedule Free Demo
                            </button>
                            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all flex justify-center items-center backdrop-blur-sm">
                                How It Works
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem / Solution (Split with Stats) */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Left Column: The Problem */}
                        <div className="space-y-6">
                            <div className="inline-block p-3 rounded-xl bg-red-50 text-red-500 mb-2">
                                <PhoneMissed size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">The Problem</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                You're a business owner, not a call center. The phone rings, but you're already stretched thin. You have to choose: serve the person in front of you or risk losing the person on the line. Every missed call is a missed order, leading to lost revenue.
                            </p>

                            {/* Problem Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-white p-5 rounded-2xl shadow-card border border-slate-100">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">67%</div>
                                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Calls Unanswered</div>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-card border border-slate-100">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">$1.2k</div>
                                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Lost Monthly</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: The Solution */}
                        <div className="space-y-6 lg:border-l lg:border-slate-100 lg:pl-12">
                            <div className="inline-block p-3 rounded-xl bg-green-50 text-green-500 mb-2">
                                <Bot size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">The Solution</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Our intelligent AI is more than a chatbot—it's a new member of your team. It sounds and feels like a real person, handling orders and calls professionally so you can focus on running your business. Customers pay at pickup, keeping it simple.
                            </p>

                            {/* Solution Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-brand-50 p-5 rounded-2xl shadow-card border border-brand-100 ring-2 ring-brand-500/10">
                                    <div className="text-3xl font-bold text-brand-600 mb-1">100%</div>
                                    <div className="text-xs text-brand-600/80 font-medium uppercase tracking-wide">Answer Rate</div>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-card border border-slate-100">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Availability</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bento Grid Features Section */}
            <section id="features" className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">The Features That Make Your Business More Efficient</h2>
                        <p className="text-slate-500 text-lg">Discover the powerful capabilities that set our AI Voice Agent apart</p>
                    </div>

                    {/* 6-Card Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Order Capture and Management</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Orders are captured in your custom dashboard for easy viewing and processing.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Settings size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Fulfillment</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Choose how you want to handle orders—physical printouts, KDS, or manual POS entry.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
                            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">No Credit Card Hassle</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                We simplify the process by allowing customers to pay at pickup, removing complexity and liability.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Availability</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Available 24/7 or on-demand during your business hours. Your AI agent works when you need it to capture every opportunity.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Headphones size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Customizable Voice & Tone</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                The AI sounds just like you want it to, matching your brand's personality and style.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Secure & Private</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Your data and your customers' data is protected with enterprise-grade security measures.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* How It Works (Timeline) */}
            <section id="how-it-works" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Three Steps to Success</h2>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Step 1 */}
                            <div className="text-center bg-white">
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-teal-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <span className="text-4xl font-bold text-teal-600">1</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Onboarding & Training</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    We train our AI on your specific business—menu items, pricing, booking policies, and FAQs.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center bg-white">
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-teal-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <span className="text-4xl font-bold text-teal-600">2</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Go Live</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    We provide a dedicated number or integrate with your line. The AI is ready to answer calls 24/7.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center bg-white">
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-teal-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <span className="text-4xl font-bold text-teal-600">3</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Your Orders, Your Way</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Orders appear in your dashboard instantly. Handle them via printout, KDS, or POS entry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries (Tags) */}
            <section id="verticals" className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Perfect for Every Business</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "🍔 Quick Service", "🍽️ Full Service Restaurants", "🧘 Spa & Wellness",
                            "💅 Nail Salons", "✂️ Hair Salons", "🔧 Plumbing",
                            "⚡ Electrical", "❄️ HVAC", "🏥 Medical Offices",
                            "💼 Professional Offices", "🏨 Hotels", "🚗 Car Dealerships"
                        ].map((tag, i) => (
                            <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-slate-400 hover:text-slate-900 transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-8 text-sm text-slate-400">Don't see your industry? We customize for anyone.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Testimonial 1 */}
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                            <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 italic mb-6">"Since implementing the AI Voice Agent, we haven't missed a single order. Our revenue increased by 35% in just three months."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">MR</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Maria Rodriguez</div>
                                    <div className="text-xs text-slate-500">Owner, Bella's Pizzeria</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                            <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 italic mb-6">"The AI agent handles our appointment bookings flawlessly. It's like having a dedicated receptionist 24/7."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">DT</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Dr. Thomas Chen</div>
                                    <div className="text-xs text-slate-500">Dental Practice Owner</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                            <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 italic mb-6">"Game changer for our restaurant! The AI takes orders accurately and handles special requests perfectly."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">JS</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">James Smith</div>
                                    <div className="text-xs text-slate-500">Manager, Urban Bistro</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                            <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 italic mb-6">"The setup was incredibly smooth, and the support team was fantastic. Within a week, we were capturing calls we would have otherwise missed. ROI was immediate."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 text-xs">LW</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Lisa Wang</div>
                                    <div className="text-xs text-slate-500">Owner, Fresh Flowers Co.</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 5 */}
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                            <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 italic mb-6">"Our customers love the quick response and professional service. The AI understands our menu perfectly and even handles complex dietary restrictions. Highly recommended!"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-600 text-xs">RP</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Robert Park</div>
                                    <div className="text-xs text-slate-500">Chef & Owner, Fusion Kitchen</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 6 */}
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                            <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 italic mb-6">"Best investment we've made for our business. The AI agent works seamlessly with our existing systems and has eliminated the stress of missing important calls during busy periods."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600 text-xs">SJ</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Sarah Johnson</div>
                                    <div className="text-xs text-slate-500">Owner, Cozy Café</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
