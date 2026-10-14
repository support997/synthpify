import React from 'react'
import { Zap, Settings, Command, RefreshCw, Cpu, Code2, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto flex-grow">
      {/* Intro Section */}
      <div className="mb-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-6">
          <Layers size={14} /> Full-Stack Engineering & AI Systems
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          About Synthpify.ai
        </h1>
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
          Synthpify is a technology studio that specializes in engineering custom web applications and autonomous AI voice systems. We build modern digital infrastructure that eliminates operational bottlenecks, automates repetitive tasks, and captures every revenue opportunity.
        </p>
      </div>

      {/* Dual Mission & Purpose */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <Code2 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Engineering Mission</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Off-the-shelf software rarely fits how a business actually runs. We partner with founders and business owners to build bespoke web applications—such as workforce timesheet engines, customer loyalty platforms, and dynamic financial underwriting tools.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We focus on clean code, secure multi-tenant architectures, and intuitive user experiences that empower teams to do more with less overhead.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-brand-600 flex items-center gap-1.5">
            <CheckCircle2 size={16} /> Production-grade React, Node.js & Cloud DBs
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
              <Cpu size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Autonomous AI & Voice Reception</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Every missed phone call during rush hours is lost revenue and a frustrated client. Our conversational AI voice agents answer immediately with human-like accuracy, taking orders, booking appointments, and dispatching tickets directly into POS and kitchen workflows.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We give business owners peace of mind knowing that their phone lines and customer communications are running seamlessly 24/7/365.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-purple-600 flex items-center gap-1.5">
            <CheckCircle2 size={16} /> 100% Inbound Call Capture & POS Integration
          </div>
        </div>
      </div>

      {/* Proof of Work Highlight */}
      <div className="mb-20 p-8 md:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-3 block">Real Production Deployments</span>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            See the Deployed Platforms We've Engineered
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            Explore our deep-dive case studies on <strong>Beanpilot</strong> (workforce timesheet and payroll engine), <strong>Envigo</strong> (loyalty rewards & Google review acceleration), and <strong>Prosphinsa.com</strong> (real estate investment underwriting platform).
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl text-sm transition shadow"
          >
            <span>Explore All Deployed Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Connected Workflows & Architecture */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">How We Architect Solutions</h2>
          <p className="text-slate-500 text-base">We build smart, connected workflows that save time, prevent errors, and scale smoothly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Zap size={20} className="text-brand-600" /> Event Triggers & QR Check-Ins
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Initiate workflows instantly when a customer scans a table QR code, places a phone order, checks into a shift, or books online.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Settings size={20} className="text-brand-600" /> Automated Business Logic
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Automatically calculate tip pooling, overtime brackets, and loyalty points, or route tickets straight to Clover POS and receipt printers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Command size={20} className="text-brand-600" /> Smart Review & Funnel Rules
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Intelligently guide happy customers to leave 5-star Google reviews, handle internal feedback loops, and manage dispute resolution.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <RefreshCw size={20} className="text-brand-600" /> Real-Time Database Sync
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Seamlessly sync data across PostgreSQL, Google Sheets, Stripe, Clover, QuickBooks, and messaging APIs without manual reconciliation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
