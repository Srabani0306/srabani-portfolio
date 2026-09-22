import React, { useState } from 'react';
import { techSkills } from '../data/portfolioData';
import { Cpu,Zap, Search, CheckCircle2, Layout, Server, Smartphone, Globe, Database, Code, Terminal, GitBranch, Layers } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...techSkills.map((s) => s.category)];

  const iconSkillsGrid = [
    { name: "React.js", category: "Frontend", icon: Layout, color: "text-cyan-400" },
    { name: "Next.js", category: "Frontend", icon: Code, color: "text-slate-100" },
    { name: "Laravel", category: "Backend", icon: Server, color: "text-red-400" },
    { name: "CodeIgniter", category: "Backend", icon: Server, color: "text-orange-500" },
    { name: "PHP", category: "Backend", icon: Code, color: "text-indigo-400" },
    { name: "Python", category: "Backend", icon: Terminal, color: "text-yellow-400" },
    { name: "FastAPI", category: "Backend", icon: Zap, color: "text-emerald-400" },
    { name: "Angular", category: "Frontend", icon: Layout, color: "text-red-500" },
    { name: "Node.js & Express", category: "Backend", icon: Cpu, color: "text-emerald-400" },
    { name: "React Native", category: "Mobile", icon: Smartphone, color: "text-sky-400" },
    { name: "WordPress", category: "CMS", icon: Globe, color: "text-blue-400" },
    { name: "MySQL & PostgreSQL", category: "Database", icon: Database, color: "text-amber-400" },
    { name: "Git Version Control", category: "DevOps", icon: GitBranch, color: "text-orange-400" },
    { name: "TypeScript", category: "Frontend", icon: Terminal, color: "text-blue-500" },
    { name: "CodeIgniter", category: "Backend", icon: Server, color: "text-orange-500" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">

      {/* Section Header with glowing title */}
      <div className="text-center space-y-4 mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white glow-title tracking-tight">
          Skills
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Full Stack engineering competencies built across real-world production systems.
        </p>
      </div>

      {/* Grid Icons Row matching demo screenshot 3 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
        {iconSkillsGrid.map((item, i) => {
          const IconComp = item.icon;
          return (
            <div
              key={i}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center justify-center text-center space-y-3 group hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all cursor-pointer"
            >
              <div className={`p-3 rounded-xl bg-slate-900/90 border border-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
                <IconComp className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Detailed Categorized Skill Engine matching demo screenshot 1 */}
      <div className="space-y-8">
        {techSkills.map((categoryObj, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800/80 text-left space-y-4">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-3 gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-100">{categoryObj.category}</h3>
                <span className="text-[10px] text-indigo-400 font-mono tracking-widest uppercase">{categoryObj.badge}</span>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800 w-fit">
                {String(categoryObj.count).padStart(2, '0')} Technologies
              </span>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categoryObj.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-200 hover:border-indigo-500/50 hover:text-indigo-300 transition-all flex items-center gap-2"
                >
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded">
                    {skill.exp}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
