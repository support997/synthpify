import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, TrendingUp, Users, Star, PhoneCall, Layers, ShieldCheck } from 'lucide-react';

const iconMap = {
  Users: Users,
  Star: Star,
  TrendingUp: TrendingUp,
  PhoneCall: PhoneCall,
};

export default function ProjectCard({ project, onSelect }) {
  const [imgError, setImgError] = useState(false);
  const IconComponent = iconMap[project.placeholderIcon] || Layers;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1">
      {/* Top Media / Mockup Area */}
      <div 
        onClick={() => onSelect(project)}
        className="relative h-56 bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-slate-100 cursor-pointer"
      >
        {/* Background Ambient Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.colorTheme.primary} opacity-20 group-hover:opacity-30 transition-opacity`} />
        
        {/* If image exists and hasn't errored */}
        {!imgError ? (
          <img
            src={project.screenshot}
            alt={project.name}
            className="w-full h-full object-cover object-top rounded-xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-Tech Stylized App Mockup Card */
          <div className="relative z-10 w-full h-full bg-slate-950/80 rounded-xl p-4 border border-white/10 flex flex-col justify-between backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2 tracking-tight">
                  {project.liveUrl ? project.liveUrl.replace('https://', '').replace(/\/$/, '') : `app.${project.id}.live`}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-emerald-400 flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live in Prod
              </span>
            </div>

            <div className="my-auto py-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.colorTheme.primary} flex items-center justify-center text-white shadow-md`}>
                  <IconComponent size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base leading-snug">{project.name}</h4>
                  <p className="text-slate-400 text-xs">{project.industry}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-300">
              <span className="font-semibold text-white">{project.metrics[0]?.value}</span>
              <span className="text-slate-400">{project.metrics[0]?.label}</span>
            </div>
          </div>
        )}

        {/* Category Pill Overlaid */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${project.colorTheme.badgeBg} shadow-sm`}>
            {project.badge}
          </span>
        </div>

        {/* Gallery Screen Count Badge Overlaid */}
        {project.gallery?.length > 0 && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 text-emerald-400 border border-emerald-500/40 backdrop-blur-md shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{project.gallery.length} Production Screens</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
              {project.name}
            </h3>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-slate-900 transition-colors p-1"
                title="Visit Live Site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <p className="text-brand-600 text-sm font-semibold mb-3">
            {project.tagline}
          </p>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Explicit Live Sample Link */}
          {project.liveUrl && (
            <div className="mb-5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200 transition"
              >
                <span>Live Link:</span>
                <span className="font-mono text-[11px] underline">{project.liveUrl}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}

          {/* Metrics Spotlight Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">{m.value}</span>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-slate-400 text-xs font-medium">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button Row */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onSelect(project)}
            className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <span>View Case Study</span>
            <ArrowRight size={16} />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="py-3 px-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center justify-center transition shadow-sm"
              title="Visit Live Application"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
