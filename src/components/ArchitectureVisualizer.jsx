import React, { useState } from 'react';
import { Layers, ArrowRight, Database, Server, Smartphone, Globe, Code2, RefreshCw, Zap } from 'lucide-react';

const ArchitectureVisualizer = () => {
  const [selectedFlow, setSelectedFlow] = useState('fullstack');

  const flows = {
    fullstack: {
      name: "React/Next.js + Node.js/Express + MongoDB",
      type: "Modern MERN / Next Full Stack",
      frontend: { name: "Next.js / React 19", tech: "SSR / React Server Components", color: "from-blue-500 to-indigo-500" },
      backend: { name: "Node.js / Express API", tech: "REST & WebSockets Microservice", color: "from-emerald-500 to-teal-500" },
      storage: { name: "MongoDB & Redis", tech: "NoSQL Collections & Caching", color: "from-green-500 to-emerald-600" },
      flowSteps: ["User hits Next.js route", "Server Action calls Express REST API", "Node query executes on MongoDB", "JWT Auth validated in < 15ms"]
    },
    enterprise_php: {
      name: "React/Angular + Laravel 10 / CodeIgniter + MySQL",
      type: "Enterprise PHP API Architecture",
      frontend: { name: "React / Angular 17", tech: "TypeScript Single Page Application", color: "from-red-500 to-amber-500" },
      backend: { name: "Laravel 10 / CodeIgniter 4", tech: "PHP 8.2 PSR RESTful Controllers", color: "from-indigo-600 to-purple-600" },
      storage: { name: "MySQL 8.0 Cluster", tech: "Indexed InnoDB Transactions", color: "from-blue-600 to-cyan-600" },
      flowSteps: ["Frontend dispatches RxJS / Axios request", "Laravel Sanctum validates bearer token", "Eloquent executes optimized MySQL query", "JSON API response returned with CORS headers"]
    },
    mobile_native: {
      name: "React Native + Express.js API + PostgreSQL",
      type: "Cross-Platform Mobile Stack",
      frontend: { name: "React Native Mobile App", tech: "iOS & Android (Expo & Native Modules)", color: "from-cyan-500 to-blue-600" },
      backend: { name: "Node.js API Gateway", tech: "Express.js Rate Limiting & Auth", color: "from-emerald-500 to-green-600" },
      storage: { name: "PostgreSQL & S3", tech: "Relational DB & Cloud Assets", color: "from-purple-500 to-indigo-600" },
      flowSteps: ["Mobile app triggers camera / biometric auth", "Encrypted payload sent over HTTPS to Express", "Database row updated & push notification sent", "Offline cache updated via AsyncStore"]
    },
    wordpress_headless: {
      name: "Next.js + Headless WordPress + GraphQL",
      type: "Decoupled Modern CMS Architecture",
      frontend: { name: "Next.js 14 Frontend", tech: "Incremental Static Regeneration (ISR)", color: "from-purple-500 to-pink-500" },
      backend: { name: "Headless WordPress (PHP)", tech: "WP GraphQL & Custom PHP Plugins", color: "from-blue-500 to-purple-600" },
      storage: { name: "MySQL & Varnish Cache", tech: "Sub-second CDN cache invalidation", color: "from-slate-600 to-slate-800" },
      flowSteps: ["Editorial posts content in WordPress Gutenberg", "WP GraphQL webhook fires to Vercel/Next.js", "Next.js rebuilds static route via ISR in background", "Global readers get instant 100/100 Lighthouse score"]
    }
  };

  const currentFlow = flows[selectedFlow];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900/30">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          Interactive Architecture Map
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
          How My Tech Stack Integrates
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">
          Select an architectural blueprint to visualize data flow between frontend, backend APIs, and databases.
        </p>
      </div>

      {/* Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {Object.keys(flows).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedFlow(key)}
            className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              selectedFlow === key
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 ring-2 ring-indigo-400/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            {flows[key].type}
          </button>
        ))}
      </div>

      {/* Visual Blueprint Card */}
      <div className="glass-card p-6 sm:p-10 rounded-2xl border border-slate-800 text-left space-y-8 relative overflow-hidden">
        
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">ACTIVE BLUEPRINT</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">{currentFlow.name}</h3>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono w-fit">
            ⚡ High-Throughput & Fault-Tolerant
          </span>
        </div>

        {/* 3-Tier Architecture Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Tier 1: Presentation */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 relative group">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>TIER 1</span>
              <Globe className="w-4 h-4 text-indigo-400" />
            </div>
            <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${currentFlow.frontend.color}`} />
            <h4 className="text-base font-bold text-slate-100">{currentFlow.frontend.name}</h4>
            <p className="text-xs text-slate-400 font-mono">{currentFlow.frontend.tech}</p>
          </div>

          {/* Connection Line 1 to 2 */}
          <div className="hidden md:flex items-center justify-center absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="p-2 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 shadow-md">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Tier 2: API & Gateway */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 relative group">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>TIER 2</span>
              <Server className="w-4 h-4 text-emerald-400" />
            </div>
            <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${currentFlow.backend.color}`} />
            <h4 className="text-base font-bold text-slate-100">{currentFlow.backend.name}</h4>
            <p className="text-xs text-slate-400 font-mono">{currentFlow.backend.tech}</p>
          </div>

          {/* Connection Line 2 to 3 */}
          <div className="hidden md:flex items-center justify-center absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="p-2 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 shadow-md">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Tier 3: Storage */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 relative group">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>TIER 3</span>
              <Database className="w-4 h-4 text-amber-400" />
            </div>
            <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${currentFlow.storage.color}`} />
            <h4 className="text-base font-bold text-slate-100">{currentFlow.storage.name}</h4>
            <p className="text-xs text-slate-400 font-mono">{currentFlow.storage.tech}</p>
          </div>

        </div>

        {/* Step-by-Step Data Flow Breakdown */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" /> Execution Pipeline Sequence
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {currentFlow.flowSteps.map((step, sIdx) => (
              <div key={sIdx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                  {sIdx + 1}
                </span>
                <span className="text-slate-300 leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default ArchitectureVisualizer;
