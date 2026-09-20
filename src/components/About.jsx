import React from 'react';
import {
  GraduationCap,
  Calendar,
  Globe,
  Sparkles,
  Layout,
  Cpu,
  Users,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Layout,
      title: "Front-End & UI Engineering",
      description:
        "Passionate about transforming creative ideas into pixel-perfect, responsive web interfaces using semantic HTML5, CSS3, modern JavaScript, and React components."
    },
    {
      icon: Cpu,
      title: "Algorithmic & Systems Thinking",
      description:
        "Grounded in object-oriented programming (OOP), Python, and C++, supplemented by dynamic simulation modeling (AnyLogic) and cybersecurity fundamentals."
    },
    {
      icon: Users,
      title: "Leadership & Cross-Team Synergy",
      description:
        "Experienced in student activities (Hult Prize & AIBE SAMS) leading social media campaigns, managing PR communications, and driving team collaboration."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crafting Digital Experiences with Engineering Precision
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A third-year Computer & Information Systems student specializing in Software Engineering, bridging technical development with engaging digital experiences and collaborative leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Background Story */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Story Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-500" />
                <span>My Journey & Vision</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am currently enrolled in my third year at{' '}
                <strong className="text-slate-900 dark:text-white">Sadat Academy for Management Sciences</strong> in Cairo, pursuing my Bachelor of Science in Computer and Information Systems with a focused specialization in <strong className="text-teal-600 dark:text-teal-400 font-bold">Software Engineering</strong>.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                As an active Full Stack Trainee and Marketing Vice Manager, I combine full-stack architectural concepts, component-driven UI design, and strategic team leadership to build impactful software products.
              </p>
            </div>

            {/* Academic Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border-l-4 border-l-teal-500">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Formal Education
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {personalInfo.education.degree}
                  </h4>
                  <div className="inline-block mt-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                    {personalInfo.education.specialization}
                  </div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-2">
                    {personalInfo.education.institution} — {personalInfo.education.location}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                  {personalInfo.education.status}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="w-4 h-4 text-teal-500" />
                <span>{personalInfo.education.graduation}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {personalInfo.education.details}
              </p>
            </div>

            {/* Languages Bar */}
            <div className="glass-panel rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-500" />
                <span>Language Proficiencies</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-white/5">
                    <div className="font-semibold text-sm text-slate-900 dark:text-white">{lang.name}</div>
                    <div className="text-xs text-teal-600 dark:text-teal-400 font-medium">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3 Strategic Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              What I Bring to the Table
            </h3>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick quote / philosophy */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-500/10 via-slate-900/5 to-cyan-500/10 dark:from-teal-950/30 dark:to-slate-900/50 border border-teal-500/20 text-slate-700 dark:text-slate-300 text-sm italic">
              "Driven by curiosity and discipline: building clean, user-focused web products while sharpening the software engineering foundations that make them resilient."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
