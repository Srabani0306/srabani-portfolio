import React from 'react';
import { X, ExternalLink, Layers, Check, Server, Database, Smartphone } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-3xl max-h-[90vh] rounded-2xl border border-slate-700 shadow-2xl overflow-y-auto text-left relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="px-3 py-1 rounded-full bg-indigo-600/80 text-white text-xs font-mono font-semibold">
              {project.subcategory}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-3">
            {project.metrics.map((metric, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                ⚡ {metric}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">Overview</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">Technical Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Breakdown */}
          {project.architecture && (
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Architecture Stack Specs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-500 text-[10px]">FRONTEND LAYER</div>
                  <div className="text-slate-200 font-semibold">{project.architecture.frontend}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-500 text-[10px]">BACKEND & API</div>
                  <div className="text-slate-200 font-semibold">{project.architecture.backend}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-500 text-[10px]">DATABASE / STORAGE</div>
                  <div className="text-slate-200 font-semibold">{project.architecture.database}</div>
                </div>
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all"
            >
              Live Demo Preview
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              Source Code (GitHub)
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
