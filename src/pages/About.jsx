import React from 'react'
import { Info, Zap, Settings, Command, RefreshCw, Cpu } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 text-center">About Synthpify.ai</h1>

        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          At Synthpify.ai, we believe that small business owners should be able to focus on their passion: providing the best customer service and experience to their clients, regardless of how they connect. Customer satisfaction and speed of service are critical growth factors for businesses in every industry.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed mb-16">
          Through our AI service, we empower businesses to achieve this focus. We help you reduce lost revenue, increase operational efficiency, and eliminate the mundane, repetitive tasks that shackle your team. Most importantly, we give time back to the business owner so you can concentrate on what you're passionate about—growing your business.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-12">
          Our mission is to empower small businesses with intelligent, automated solutions that increase efficiency and enhance the customer experience. Through AI workflow automation, we create custom solutions that enable you to add a workforce that runs 24/7. This allows you to carry out tasks with speed and accuracy while keeping expenses at bay and adding revenue streams from opportunities that were otherwise missed. We bring the true meaning of "Doing more with less" to life.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Purpose</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-16">
          We are purpose-built to give you peace of mind. Every missed call is a missed opportunity, and every overwhelmed employee is a risk to your business. Our service is designed to eliminate these worries by ensuring every phone call is answered promptly, professionally, and productively. We are here to help you capture every order, book every reservation, and qualify every lead, so your business never has to miss a beat.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">What We Do</h2>
        <p className="text-slate-500 text-lg mb-8">We build smart, connected workflows that save your business time, reduce errors, and increase efficiency.</p>
        <h3 className="text-xl font-bold text-slate-900 mb-8">How It Works</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Zap size={20} className="text-brand-600" /> Triggers
            </h4>
            <p className="text-slate-600 text-sm">
              Start a workflow when a customer places an order, fills out a form, sends a message, or books online.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Settings size={20} className="text-brand-600" /> Automated Tasks
            </h4>
            <p className="text-slate-600 text-sm">
              Instantly send confirmations, update spreadsheets or CRMs, notify your team, generate receipts, and more.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Command size={20} className="text-brand-600" /> Smart Rules
            </h4>
            <p className="text-slate-600 text-sm">
              Add if/then logic to handle approvals, prevent conflicts, upsell automatically, or guide customer decisions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <RefreshCw size={20} className="text-brand-600" /> Data Sync
            </h4>
            <p className="text-slate-600 text-sm">
              Seamlessly connect and update your tools like Google Sheets, Stripe, QuickBooks, CRMs, calendars, and databases.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Cpu size={20} className="text-brand-600" /> AI Integration
            </h4>
            <p className="text-slate-600 text-sm">
              Use AI to understand voice calls, extract key info from messages, summarize orders, or qualify leads—all automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
