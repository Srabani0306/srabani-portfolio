import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Code2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      
      {/* Section Header matching demo screenshot 4 */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white glow-title tracking-tight">
          Experience
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Proven employment record in full stack software engineering and web application architecture.
        </p>
      </div>

      {/* Vertical Timeline matching demo screenshot 4 */}
      <div className="relative border-l-2 border-indigo-500/60 ml-4 sm:ml-8 space-y-12 text-left">
        {experienceTimeline.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            
            {/* Circular Timeline Node matching demo screenshot 4 */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform" />

            {/* Experience Card matching demo screenshot 4 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">{item.role}</h3>
                  <div className="text-slate-200 font-semibold text-sm flex items-center gap-2">
                    <span>{item.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-slate-400 font-mono text-xs w-fit">
                  📅 {item.period}
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Key Projects Section if present */}
              {item.projects && item.projects.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  <div className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" /> Key Enterprise Deliverables:
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {item.projects.map((proj, pIdx) => (
                      <div key={pIdx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                        <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{proj.name}</span>
                        </div>
                        <p className="text-xs text-slate-400 pl-5 leading-normal">
                          {proj.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
