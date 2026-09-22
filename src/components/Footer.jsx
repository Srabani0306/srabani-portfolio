import React from 'react';
import { Code2, ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Brand */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-100 text-sm">
              {personalInfo.name}<span className="text-indigo-500">.dev</span>
            </span>
          </div>
          <p className="text-[11px] text-slate-400 max-w-sm">
            Full-Stack & Mobile Developer specializing in React, Next.js, Node.js, Express, PHP, Laravel, CodeIgniter, WordPress, React Native & Angular.
          </p>
        </div>

        {/* Middle Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 max-w-md">
          {["React", "Node.js", "Next.js", "Express", "WordPress", "PHP", "Laravel", "CodeIgniter", "React Native", "Angular"].map((stack) => (
            <span key={stack} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
              {stack}
            </span>
          ))}
        </div>

        {/* Right Scroll to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all cursor-pointer flex items-center gap-2"
            title="Scroll to top"
          >
            <span className="font-mono text-[10px] uppercase">Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <div>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React 19 & Tailwind CSS.
        </div>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-slate-300">About</a>
          <a href="#skills" className="hover:text-slate-300">Skills</a>
          <a href="#projects" className="hover:text-slate-300">Projects</a>
          <a href="#contact" className="hover:text-slate-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
