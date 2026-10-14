import React, { useState } from 'react'
import {
  Activity, PhoneMissed, Bot, ClipboardList, Mic, Banknote, Clock, Shield,
  Star, BarChart3, Settings, CheckCircle, Headphones, Sparkles, Code2, Cpu,
  Zap, ArrowRight, Layers, Smartphone, ExternalLink
} from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroBg from '../assets/hero_bg_new.png'
import { projects } from '../data/projectsData'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

export default function Home({ onScheduleClick }) {
  const [activeProject, setActiveProject] = useState(null);

  // Take the top 3 featured client projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
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
            <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-24 px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Custom Web Engineering & Autonomous AI Agents
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 text-shadow-lg max-w-4xl mx-auto">
              Engineering Custom Web Platforms & <span className="text-brand-300">Intelligent AI Agents.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              We design and build bespoke software—from workforce management engines and client portals to 24/7 autonomous voice receptionists that never miss an order.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-500 hover:-translate-y-[2px] transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Deployed Work</span>
                <ArrowRight size={18} />
              </a>
              <button
                onClick={onScheduleClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 hover:-translate-y-[2px] transition-all shadow-lg cursor-pointer"
              >
                Schedule Tech Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Section */}
      <section id="services" className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-3">
              <Layers size={14} /> Full-Spectrum Digital Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              What We Build & Deliver
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Everything your business needs to modernize its software stack and automate routine operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Code2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Web Apps & SaaS</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Bespoke internal platforms, workforce schedulers, dynamic calculators, and client portals built with React, Node.js, and cloud databases.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-600" /> Multi-Tenant SaaS Architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-600" /> Role-Based Access & Dashboards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-600" /> Mobile-Optimized Responsive Web
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <Cpu size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Autonomous Voice & AI Agents</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  24/7 conversational voice assistants that answer phone calls, take accurate restaurant orders, book appointments, and sync data into your CRM.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-600" /> 100% Inbound Call Capture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-600" /> Human-Like Natural Tone
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-600" /> Instant Order & Booking Capture
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">POS, Kiosk & QSR Solutions</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  End-to-end QSR technology featuring custom POS registers, self-service kiosks, online ordering apps, and an integrated kitchen display management system. Deliver the seamless operations and enterprise-grade capabilities of major restaurant chains at a price built for SMBs.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-600" /> Custom POS & Self-Service Kiosks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-600" /> Online Ordering & Kitchen Display Systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-600" /> Enterprise-Grade Solutions, SMB-Friendly Pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deployed Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
                <Sparkles size={14} /> Proven Track Record
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                Featured Deployed Work
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl">
                Explore real applications engineered and deployed to production by the Synthpify team.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition"
            >
              <span>View All Deployments & Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid of Deployed Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-xl text-slate-800 font-semibold text-sm hover:border-slate-400 hover:bg-slate-50 transition shadow-sm"
            >
              <span>See Full Architecture & Case Studies for All 4 Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Voice AI Problem / Solution Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: The Problem */}
            <div className="space-y-6">
              <div className="inline-block p-3 rounded-xl bg-red-50 text-red-500 mb-2">
                <PhoneMissed size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">The Problem: Missed Inbound Calls</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                You're a business owner, not a call center. The phone rings during rush hours, but your team is already stretched thin. Serving the customer in front of you often means missing the customer on the line—leading to lost orders and wasted marketing dollars.
              </p>

              {/* Problem Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-5 rounded-2xl shadow-card border border-slate-100">
                  <div className="text-3xl font-bold text-slate-900 mb-1">67%</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Calls Unanswered</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-card border border-slate-100">
                  <div className="text-3xl font-bold text-slate-900 mb-1">$1.2k+</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Lost Monthly Per Location</div>
                </div>
              </div>
            </div>

            {/* Right Column: The Solution */}
            <div className="space-y-6 lg:border-l lg:border-slate-100 lg:pl-12">
              <div className="inline-block p-3 rounded-xl bg-green-50 text-green-500 mb-2">
                <Bot size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">The Solution: Autonomous AI Voice Agents</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our intelligent voice agents sound and react just like human team members. They answer on ring one, accurately capture complex orders or bookings, and dispatch directly to your kitchen, calendar, or POS system.
              </p>

              {/* Solution Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-brand-50 p-5 rounded-2xl shadow-card border border-brand-100 ring-2 ring-brand-500/10">
                  <div className="text-3xl font-bold text-brand-600 mb-1">100%</div>
                  <div className="text-xs text-brand-600/80 font-medium uppercase tracking-wide">Answer Rate</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-card border border-slate-100">
                  <div className="text-3xl font-bold text-slate-900 mb-1">24/7/365</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Continuous Availability</div>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Enterprise Features Built for Reliability
            </h2>
            <p className="text-slate-500 text-lg">
              Explore the capabilities driving our custom software and AI voice implementations
            </p>
          </div>

          {/* 6-Card Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Order & Data Management</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                All phone orders, employee timesheets, and customer data are captured in unified management dashboards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Fulfillment & POS Sync</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Choose how you handle orders—physical printer receipts, Kitchen Display Systems (KDS), or direct Clover POS injection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Credit Card Liability</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Keep phone transactions secure with pay-at-pickup options, or send secure Stripe/Clover payment links via SMS.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 or On-Demand Calling</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Run voice reception full-time or trigger it automatically when your staff is busy or after regular business hours.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headphones size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tailored Brand Voice</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Custom persona, tone, and pacing designed to match your brand identity and handle complex inquiries gracefully.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200 group">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Secure & Enterprise-Grade</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Encrypted communications, rate-limited APIs, and role-based access control protecting client and customer data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Timeline) */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Three Steps to Production</h2>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center bg-white">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-brand-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-4xl font-bold text-brand-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Discovery & Architecture</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We audit your current operational bottlenecks, review your tech stack, and design the custom software or AI voice specifications.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center bg-white">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-brand-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-4xl font-bold text-brand-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Development & Training</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We engineer your custom web application or configure your AI agent with business rules, menu items, pricing, and integrations.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center bg-white">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-brand-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-4xl font-bold text-brand-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Launch & Ongoing Support</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We connect your phone lines or deploy your cloud application. You receive ongoing support, analytics, and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries (Tags) */}
      <section id="verticals" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Tailored for High-Volume Industries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🍔 Quick Service Restaurants", "🍽️ Full Service Dining", "💼 Real Estate & PropTech",
              "⏱️ Multi-Location Workforce", "💅 Salons & Wellness", "🔧 Field & Home Services",
              "🏥 Medical & Dental Clinics", "🚗 Car Dealerships", "📦 Retail & E-Commerce"
            ].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium hover:border-slate-400 hover:text-slate-900 transition-colors cursor-default shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-400">Need a bespoke solution for your specific niche? We architect custom tools for any industry.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What Business Leaders Say</h2>
            <p className="text-slate-500 text-base">Feedback from companies utilizing Synthpify software and AI automation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"Since implementing the AI Voice Agent, we haven't missed a single order during our Friday rush. Our revenue increased by 35% in three months."</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 text-xs">MR</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Maria Rodriguez</div>
                  <div className="text-xs text-slate-500">Owner, Bella's Pizzeria</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"Having our custom shift scheduling and payroll calculation automated through Beanpilot saved our managers 10 hours every week. Zero calculation errors."</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-xs">DT</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">David Tan</div>
                  <div className="text-xs text-slate-500">Operations Director, Metro Hospitality</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"The real estate analysis platform built for Propshinsa gave us institutional-grade underwriting in minutes. We evaluate 5x more properties with complete confidence."</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700 text-xs">JS</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">James Smith</div>
                  <div className="text-xs text-slate-500">Principal, Urban Realty Acquisitions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Project Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onScheduleClick={onScheduleClick}
        />
      )}
    </div>
  )
}
