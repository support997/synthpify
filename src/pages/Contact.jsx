import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Custom Web Application',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const projectTypes = [
    'Custom Web Application',
    'AI Voice Agent / Phone System',
    'Customer Loyalty & Review Engine',
    'POS & Workflow Automation',
    'Full-Stack Digital Transformation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // First try sending to /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `[${formData.projectType}] Project Inquiry from ${formData.name}`,
          message: `Company: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\nPhone: ${formData.phone || 'N/A'}\n\nDetails:\n${formData.message}`
        })
      });

      if (!response.ok) {
        // If server responded with an error, extract message
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to submit inquiry.');
      }

      // Also trigger lead sync if endpoint is active
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || formData.projectType
        })
      }).catch(() => {});

      setStatus({ submitting: false, submitted: true, error: null });
    } catch (err) {
      console.warn('Form submission notice:', err.message);
      // Even if backend SMTP is not configured on local dev, provide smooth feedback with mailto fallback option
      setStatus({
        submitting: false,
        submitted: false,
        error: err.message || 'Unable to connect to the mail server. You can also email us directly at support@synthpify.ai.'
      });
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto flex-grow">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
          <Sparkles size={14} className="text-brand-600" />
          <span>Start Your Custom Build or AI Agent</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Let’s Build Something <span className="text-brand-600">Exceptional.</span>
        </h1>
        <p className="text-slate-600 text-base md:text-lg">
          Whether you need a custom web platform, a 24/7 autonomous voice receptionist, or automated workflow pipelines, we're ready to engineer your solution.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Founder Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Get in Touch Directly</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Have questions about our deployed projects (Beanpilot, Envigo, Propshinsa) or want a tailored estimate for your business? Reach out directly.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:support@synthpify.ai"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Us</div>
                  <div className="text-sm font-bold text-slate-900">support@synthpify.ai</div>
                </div>
              </a>

              <a
                href="tel:3477380038"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone / Direct Line</div>
                  <div className="text-sm font-bold text-slate-900">(347) 738-0038</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-2xl">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Headquarters</div>
                  <div className="text-sm font-bold text-slate-900">New York, NY</div>
                </div>
              </div>
            </div>

            {/* Link to Wesley's Digital Card */}
            <div className="pt-6 border-t border-slate-100">
              <Link
                to="/connect"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition shadow group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-xs border border-brand-500/30">
                    WL
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Wesley Lin</div>
                    <div className="text-[11px] text-slate-400">Founder Digital Card & VCard</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Project Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {status.submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Our software and automation team will review your project details and get back to you within 24 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setStatus({ submitting: false, submitted: false, error: null });
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        projectType: 'Custom Web Application',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Project Inquiry & Discovery</h3>
                <p className="text-slate-500 text-xs mb-6">Fill out the form below and we will schedule an architectural discovery call.</p>

                {status.error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <div>
                      <span>{status.error}</span>
                      <div className="mt-1">
                        <a href="mailto:support@synthpify.ai" className="font-bold underline">Click here to send an email directly</a>.
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    What are you looking to build?
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                  >
                    {projectTypes.map((pt, i) => (
                      <option key={i} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Acme Hospitality"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Goals & Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about the application, user workflows, integrations (e.g. Clover, Stripe), or AI voice capabilities you need..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {status.submitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Project Details</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
