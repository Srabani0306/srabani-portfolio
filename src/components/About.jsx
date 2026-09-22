import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, Award, CheckCircle, Code, Server, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years Experience", value: personalInfo.yearsExperience, icon: Award },
    { label: "Projects Completed", value: personalInfo.completedProjects, icon: CheckCircle },
    { label: "Tech Frameworks", value: "10+", icon: Code },
    { label: "Client Satisfaction", value: "99%", icon: User },
  ];

  const highlights = [
    {
      title: "Frontend Engineering",
      desc: "Pixel-perfect, accessible React, Next.js, and Angular interfaces built for speed and high conversions.",
      icon: Code
    },
    {
      title: "API & Backend Scalability",
      desc: "Robust microservices in Node.js/Express and enterprise RESTful services in PHP (Laravel & CodeIgniter).",
      icon: Server
    },
    {
      title: "Cross-Platform Mobile Apps",
      desc: "Native-quality iOS and Android mobile apps engineered with React Native and Expo framework.",
      icon: Smartphone
    },
    {
      title: "Custom CMS & WordPress",
      desc: "Tailored WordPress theme/plugin development and Headless WP decoupled integrations.",
      icon: Globe
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-wider">
          <User className="w-3.5 h-3.5" />
          About Me
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
          Crafting Modern Full Stack & Mobile Systems
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">
          From high-traffic e-commerce backends to mobile applications and single-page apps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 text-left space-y-2">
                <div className="p-3 w-fit rounded-xl bg-indigo-600/10 text-indigo-400">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-100 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Bio & Pillars */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h3 className="text-2xl font-bold text-slate-200">
            Passionate Full Stack & Mobile Developer
          </h3>
          <p className="text-slate-300 leading-relaxed text-base">
            {personalInfo.about}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((h, i) => {
              const HIcon = h.icon;
              return (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                    <HIcon className="w-4 h-4" />
                    <span>{h.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
