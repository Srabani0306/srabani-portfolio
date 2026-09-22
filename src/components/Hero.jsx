import React, { useState, useEffect } from 'react';
import { personalInfo, keyStrengths } from '../data/portfolioData';
import { Terminal, ArrowRight, Mail, CheckCircle2, Code2, Layers, Cpu, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const roles = [
  "Full Stack Developer (React & Laravel)",
  "Frontend Engineer (React.js & Next.js)",
  "Angular Web Developer & Designer",
  "Backend & API Specialist (Laravel & PHP)",
  "WordPress & CMS Solution Architect"
];

const codeSnippet = `// Srabani Satadala - Full Stack Architecture
const developer = {
  name: "${personalInfo.name}",
  company: "Strivesteam Pvt. Ltd.",
  experience: "5+ Years Full Stack",
  skills: {
    frontend: ["React.js", "Next.js", "Angular", "Tailwind CSS"],
    backend:  ["Laravel (PHP)", "Express.js", "Node.js", "CodeIgniter"],
    database: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  keyProjects: ["Automoss", "RSP Store System", "Employee Management"]
};

export function buildScalableApp() {
  return developer.skills.frontend.concat(developer.skills.backend);
}`;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Intro & Profile Photo */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Badge & Profile Header */}
          <div className="flex items-center gap-4">
            {/* Developer Photo */}
            <div className="relative group">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/60 shadow-lg shadow-indigo-500/20">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {personalInfo.availability}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {personalInfo.yearsExperience} Experience • Strivesteam Pvt. Ltd.
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{personalInfo.name}</span>
            </h1>
            
            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-mono text-indigo-400 font-semibold">
              <span className="mr-2">&gt;</span>
              <span className="transition-all duration-500 ease-in-out">
                {roles[roleIndex]}
              </span>
              <span className="animate-pulse ml-1 font-bold">|</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {personalInfo.about}
          </p>

          {/* Key Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
            {keyStrengths.slice(0, 4).map((strength, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{strength}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-105 cursor-pointer"
            >
              View My Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-105 cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2 text-slate-400">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs hover:text-indigo-400 transition-colors">
              <GithubIcon className="w-4 h-4" /> {personalInfo.githubUsername}
            </a>
            <span className="text-slate-700">•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs hover:text-indigo-400 transition-colors">
              <LinkedinIcon className="w-4 h-4" /> {personalInfo.linkedinUsername}
            </a>
          </div>

        </div>

        {/* Right Column - Terminal Showcase */}
        <div className="lg:col-span-5 w-full">
          <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
            
            {/* Terminal Window Top Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Srabani-profile.js</span>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs text-left leading-relaxed overflow-x-auto text-slate-300 bg-slate-950/95">
              <pre>
                <code>
                  {codeSnippet.split('\n').map((line, idx) => (
                    <div key={idx} className="table-row">
                      <span className="table-cell pr-4 text-slate-600 select-none text-right">{idx + 1}</span>
                      <span className="table-cell">
                        {line.includes('//') ? (
                          <span className="text-emerald-400/90 italic">{line}</span>
                        ) : line.includes('const') || line.includes('export') || line.includes('function') ? (
                          <span className="text-purple-400">{line}</span>
                        ) : line.includes('React.js') || line.includes('Next.js') || line.includes('Laravel') ? (
                          <span className="text-indigo-300">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Terminal Footer status */}
            <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Scalable Systems Engineer
              </span>
              <span>Strivesteam Pvt. Ltd.</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
