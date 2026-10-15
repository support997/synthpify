import React, { useState } from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Layers, Sparkles, Code2, Cpu, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects({ onScheduleClick }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Custom Web App / SaaS', 'Customer Engagement & RepTech', 'FinTech & PropTech', 'Conversational AI & POS Sync'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 flex-grow bg-slate-50">
      {/* Page Header */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-6">
            <Sparkles size={14} className="text-brand-600" />
            <span>Production Deployments & Client Case Studies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Software Engineered for <span className="text-brand-600">Real Impact.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From multi-location workforce management and customer loyalty engines to real estate underwriting tools and 24/7 autonomous voice agents.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Deployments' : cat.split(' / ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Synthpify Architecture Banner */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Why Businesses Partner with Synthpify
            </h2>
            <p className="text-slate-600 text-base">
              We bridge the gap between bespoke web software development and cutting-edge autonomous AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bespoke Full-Stack Engineering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No cookie-cutter templates. We architect tailored React, Node.js, and cloud database applications designed specifically around your operational bottlenecks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Embedded AI & Voice Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We combine front-end interfaces with autonomous voice agents and LLM automation pipelines so your software handles tasks with human-like precision.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct POS & Tool Integrations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect seamlessly with payment processors (Stripe, Clover POS), CRMs, Google Sheets, and messaging tools through battle-tested webhook pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Ready to Build Your Custom Software or AI Agent?
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Whether you need an internal workforce tool like Beanpilot, a customer growth engine like Engivo, or an autonomous 24/7 voice agent—we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition shadow-lg cursor-pointer"
              >
                Start a Custom Project
              </Link>
              <button
                onClick={onScheduleClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition cursor-pointer"
              >
                Schedule Tech Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Project Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onScheduleClick={onScheduleClick}
        />
      )}
    </div>
  );
}
