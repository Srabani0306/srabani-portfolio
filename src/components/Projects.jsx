import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ExternalLink, Eye, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile', 'WordPress / PHP'];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5" />
          Featured Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
          Production Projects & Case Studies
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">
          Filter through web apps, mobile apps, enterprise APIs, and WordPress solutions.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between text-left group"
          >
            <div>
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-indigo-400 text-[10px] font-mono border border-indigo-500/30 font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Quick Inspect Hover button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 text-white shadow-lg backdrop-blur-sm transition-all opacity-90 group-hover:opacity-100 cursor-pointer"
                  title="Deep Dive Modal"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] text-indigo-400 font-mono font-medium">
                    {project.subcategory}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/80">
              <button
                onClick={() => setActiveModalProject(project)}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" /> Details & Architecture
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  title="GitHub Source"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Project Modal Overlay */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

    </section>
  );
};

export default Projects;
