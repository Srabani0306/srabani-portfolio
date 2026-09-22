import React from 'react';
import { services } from '../data/portfolioData';
import { Wrench, Code2, Smartphone, Cpu, Server, Globe, Layout, CheckCircle2, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Server: Server,
  Globe: Globe,
  Layout: Layout
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900/30">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" />
          Services & Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
          What I Can Build For You
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">
          End-to-end engineering capabilities tailored for startups, agencies, and enterprise clients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const ServiceIcon = iconMap[service.icon] || Code2;
          return (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-800 text-left flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <ServiceIcon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-indigo-400 font-semibold">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  Request Consultation <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Services;
