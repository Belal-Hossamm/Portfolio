import React, { useState, useMemo } from 'react';
import {
  Code2,
  Palette,
  FileCode,
  Boxes,
  Smartphone,
  Flame,
  Terminal,
  Cpu,
  Layers,
  Lightbulb,
  GitBranch,
  Code,
  TerminalSquare,
  Activity,
  ShieldCheck,
  Users,
  Workflow,
  Megaphone,
  Clock,
  Search,
  CheckCircle,
  Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Palette,
  FileCode,
  Boxes,
  Smartphone,
  Flame,
  Terminal,
  Cpu,
  Layers,
  Lightbulb,
  GitBranch,
  Code,
  TerminalSquare,
  Activity,
  ShieldCheck,
  Users,
  Workflow,
  Megaphone,
  Clock
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Frontend',
    'Programming Languages',
    'Concepts & Tools',
    'Leadership & Soft Skills'
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        activeCategory === 'All' || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Filter className="w-3.5 h-3.5" />
            <span>Technical & Leadership Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Interactive Skills & Proficiencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Filter by domain or search for specific technologies to explore my hands-on toolset and conceptual proficiencies.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25 scale-105'
                    : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-sm glass-panel text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl">
            <p className="text-slate-500 dark:text-slate-400 text-base">
              No skills found matching "{searchQuery}" in this category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-teal-500 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={skill.name}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                        {skill.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  {/* Proficiency Indicator Bar */}
                  <div className="pt-4 space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span>Proficiency</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
