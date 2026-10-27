import React, { useState, useEffect } from 'react';
import { 
  X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, ArrowRight, 
  Maximize2, ChevronLeft, ChevronRight, Monitor, Layers, ShieldCheck, 
  Clock, Users, Lock, BarChart3, ZoomIn
} from 'lucide-react';

export default function ProjectModal({ project, onClose, onScheduleClick }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
      if (lightboxOpen && project?.gallery?.length > 1) {
        if (e.key === 'ArrowRight') {
          setActiveScreenIndex((prev) => (prev + 1) % project.gallery.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveScreenIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
        }
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, lightboxOpen, project?.gallery]);

  if (!project) return null;

  const hasGallery = project.gallery && project.gallery.length > 0;
  const currentScreen = hasGallery ? project.gallery[activeScreenIndex] : null;

  const nextScreen = () => {
    if (hasGallery) {
      setActiveScreenIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevScreen = () => {
    if (hasGallery) {
      setActiveScreenIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
          onClick={onClose}
        />

        {/* Modal Dialog Box */}
        <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
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
            <p className="text-white/90 text-sm sm:text-base font-medium max-w-2xl">
              {project.tagline}
            </p>

            {project.liveUrl && (
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-slate-900 rounded-xl text-xs sm:text-sm font-bold hover:bg-slate-100 transition shadow-md"
                >
                  <span>{project.adminUrl ? 'Demo Site:' : 'Live Sample:'}</span>
                  <span className="text-blue-600 underline font-mono text-xs">{project.liveUrl}</span>
                  <ExternalLink size={14} className="text-slate-600" />
                </a>
                {project.adminUrl && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/15 backdrop-blur-md text-white rounded-xl text-xs font-semibold border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Admin Portal Showcase (Screens Below)</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Live Link Callout Banner if applicable */}
            {project.adminUrl ? (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">Platform Showcase</span>
                  <span className="text-sm font-semibold text-slate-900 block">Interactive Demo Site + Mobile Merchant Admin Suite</span>
                  <span className="text-xs text-slate-600 block mt-0.5">The demo ordering and loyalty app is live online; the merchant administrative views are showcased below.</span>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow shrink-0"
                >
                  <span>Open Demo Site</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ) : project.liveUrl ? (
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
            ) : null}

            {/* Production Application Visual Gallery (When screenshots exist) */}
            {hasGallery && (
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 sm:p-6 text-white shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-1 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Production System Screens</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>Production Application Walkthrough</span>
                      <span className="text-xs font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                        {activeScreenIndex + 1} of {project.gallery.length}
                      </span>
                    </h3>
                  </div>

                  {/* Module Selector Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                    {project.gallery.map((screen, idx) => (
                      <button
                        key={screen.id}
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                          activeScreenIndex === idx
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        <span>0{idx + 1}.</span>
                        <span>{screen.tabName}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Browser Mockup Window */}
                <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl relative group">
                  {/* Browser Chrome Header */}
                  <div className="bg-slate-800/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-700/80 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      <span className="ml-2 font-mono text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded border border-slate-700/50 hidden sm:inline-block">
                        https://{currentScreen.urlPath}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setLightboxOpen(true)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition cursor-pointer"
                        title="Expand Image"
                      >
                        <ZoomIn size={13} />
                        <span className="hidden sm:inline">Inspect Full Resolution</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Screen Preview */}
                  <div 
                    className="relative bg-slate-950 cursor-pointer overflow-hidden flex items-center justify-center min-h-[280px] sm:min-h-[440px] p-4 sm:p-6"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <div className="relative flex items-center justify-center max-w-full">
                      <img
                        src={currentScreen.image}
                        alt={currentScreen.title}
                        className="w-auto h-auto max-h-[480px] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                    </div>

                    {/* Prev / Next Floating Navigation */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevScreen();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/70 opacity-80 group-hover:opacity-100 transition shadow-lg cursor-pointer"
                      aria-label="Previous screen"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextScreen();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/70 opacity-80 group-hover:opacity-100 transition shadow-lg cursor-pointer"
                      aria-label="Next screen"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Hover Inspect Banner */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 text-xs flex items-center gap-1.5 pointer-events-none">
                      <Maximize2 size={13} className="text-emerald-400" />
                      <span>Click to zoom</span>
                    </div>
                  </div>
                </div>

                {/* Active Screen Architectural Breakdown */}
                <div className="mt-5 p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-slate-700/70">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {currentScreen.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-md w-fit">
                      {currentScreen.category}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {currentScreen.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-700/60">
                    {currentScreen.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Click to switch production screen:
                  </div>
                  <div className={`grid gap-2 ${project.gallery.length === 5 ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : project.gallery.length > 4 ? 'grid-cols-2 sm:grid-cols-4 md:grid-cols-7' : 'grid-cols-2 sm:grid-cols-4'}`}>
                    {project.gallery.map((screen, idx) => (
                      <button
                        key={screen.id}
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`p-1.5 rounded-xl border text-left transition cursor-pointer overflow-hidden ${
                          activeScreenIndex === idx
                            ? 'border-emerald-500 bg-emerald-950/30 ring-2 ring-emerald-500/30'
                            : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                        }`}
                      >
                        <div className="h-16 rounded-lg overflow-hidden bg-slate-900 mb-1.5 border border-slate-800">
                          <img
                            src={screen.image}
                            alt={screen.tabName}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="text-[11px] font-bold text-white truncate">
                          {idx + 1}. {screen.tabName}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {screen.category}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
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
                  <span>The Operational Challenge</span>
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
              <div className="grid sm:grid-cols-2 gap-3">
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
                  <span>{project.adminUrl ? 'Visit Demo Site' : 'Visit Live Site'}</span>
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

      {/* Fullscreen High-Resolution Lightbox */}
      {lightboxOpen && currentScreen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="absolute top-4 left-4 z-20 flex items-center gap-3 text-white">
            <span className="font-bold text-sm sm:text-base">{currentScreen.title}</span>
            <span className="text-xs text-slate-400 bg-white/10 px-2 py-0.5 rounded">
              {activeScreenIndex + 1} of {project.gallery.length}
            </span>
          </div>

          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lightbox Image Container */}
          <div className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center p-2">
            <img
              src={currentScreen.image}
              alt={currentScreen.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Prev/Next arrows in Lightbox */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevScreen}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextScreen}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Bottom Caption in Lightbox */}
          <div className="absolute bottom-4 inset-x-0 mx-auto max-w-2xl px-4 text-center">
            <p className="text-xs sm:text-sm text-slate-300 bg-slate-900/80 backdrop-blur-md py-2 px-4 rounded-xl border border-white/10 shadow-lg">
              {currentScreen.desc}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
