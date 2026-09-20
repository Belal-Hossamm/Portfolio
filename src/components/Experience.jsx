import React from 'react';
import {
  Briefcase,
  Calendar,
  Sparkles,
  Award,
  CheckCircle2,
  Users,
  Compass,
  ChevronRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Leadership Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A chronological timeline of hands-on frontend engineering, student organization leadership, and community impact.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center/Left line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-slate-300 dark:to-slate-800" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-teal-500 flex items-center justify-center text-teal-400 shadow-md shadow-teal-500/30 group-hover:scale-125 transition-transform duration-300">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Spacer for symmetrical desktop view */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-teal-500 transition-all">
                      
                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-teal-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4 flex items-center gap-1">
                        <span>{item.organization}</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                          {item.organizationType}
                        </span>
                      </div>

                      {/* Brief description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key achievements list */}
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech / Skills tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/10">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
