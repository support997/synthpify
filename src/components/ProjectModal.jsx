import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers, Cpu, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onScheduleClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.colorTheme.primary} text-white relative flex-shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-3 border border-white/20">
            {project.badge} • {project.industry}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            {project.name}
          </h2>
          <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl">
            {project.tagline}
          </p>

          {project.liveUrl && (
            <div className="mt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-slate-900 rounded-xl text-xs sm:text-sm font-bold hover:bg-slate-100 transition shadow-md"
              >
                <span>Live Sample:</span>
                <span className="text-blue-600 underline font-mono text-xs">{project.liveUrl}</span>
                <ExternalLink size={14} className="text-slate-600" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Live Link Callout Banner */}
          {project.liveUrl && (
            <div className="p-4 rounded-2xl bg-blue-50/90 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">Live Deployed Application</span>
                <span className="text-sm font-semibold text-slate-900">Experience the working online build:</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow"
              >
                <span>Open {project.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}
          {/* Key Impact Stats */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Results & Impact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-2xl font-extrabold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-xs font-bold text-slate-700 mb-0.5">{metric.label}</div>
                  <div className="text-[11px] text-slate-500">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100/80">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-3 text-sm">
                <AlertCircle size={18} />
                <span>The Challenge</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/80">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-3 text-sm">
                <Sparkles size={18} />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Core Architectural Features</h4>
            <div className="space-y-3">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50/70 rounded-xl border border-slate-100">
                  <CheckCircle2 size={18} className="text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-0.5">{feat.title}</h5>
                    <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Technologies Deployed</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have a custom requirement similar to <strong>{project.name}</strong>?
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow cursor-pointer"
              >
                <span>Visit Live Site</span>
                <ExternalLink size={15} />
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onScheduleClick) onScheduleClick();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
