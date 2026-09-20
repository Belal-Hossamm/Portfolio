import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Utensils,
  LineChart,
  Laptop,
  Layers,
  Sparkles,
  Check
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

const projectIcons = {
  Utensils,
  LineChart,
  Laptop
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Development', 'Simulation & Algorithms'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Interactive Projects Showcase
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore responsive web interfaces, mathematical system dynamics simulations, and modern software builds.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25 scale-105'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComp = projectIcons[project.icon] || Laptop;
            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-200/80 dark:border-white/10"
              >
                <div>
                  {/* Visual Header Banner */}
                  <div
                    className="h-44 p-6 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ background: project.imageBg }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Top Row: Category tag and main icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/40 text-white/90 backdrop-blur-md">
                        {project.category}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Bottom Title inside banner */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-black text-white drop-shadow-sm line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Quick highlights list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-white/10">
                      {project.details.slice(0, 2).map((det, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <Check className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{det}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-teal-600 dark:hover:bg-teal-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500 transition-colors"
                    title="Quick Details"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel max-w-xl w-full rounded-2xl p-6 sm:p-8 space-y-6 relative border border-slate-200 dark:border-white/15 shadow-2xl">
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Key Architectural Points
                </h4>
                <div className="space-y-2">
                  {selectedProject.details.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal footer links */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
