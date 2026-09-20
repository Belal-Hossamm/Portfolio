import React from 'react';
import {
  X,
  Printer,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  Code
} from 'lucide-react';
import { personalInfo, experienceData, projectsData, certificationsData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-white dark:bg-[#0c121e] text-slate-800 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
        
        {/* Top Action Bar (hidden in print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Official Resume Preview
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold border border-teal-500/20">
              PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible font-sans">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-slate-200 dark:border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-teal-600 dark:text-teal-400">
              Computer & Information Systems Student (Software Engineering) • Full Stack Trainee
            </p>
            
            {/* Contact Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-teal-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-teal-500" />
                <span>{personalInfo.phone}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-500" />
                <span>{personalInfo.location}</span>
              </span>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-white/10 pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.summary} Holds Cisco certifications in Python and Cybersecurity, demonstrating a solid foundation in programming and security fundamentals. Active in student activities with experience in public relations, social media leadership, and collaborative front-end projects, showcasing strong communication, teamwork, problem-solving, and leadership skills.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-white/10 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
              <div className="font-bold text-slate-900 dark:text-white">
                {personalInfo.education.institution} — {personalInfo.education.location}
              </div>
              <div className="text-teal-600 dark:text-teal-400 font-semibold">
                {personalInfo.education.graduation} | {personalInfo.education.status}
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold text-teal-600 dark:text-teal-400">
              {personalInfo.education.degree} — {personalInfo.education.specialization}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-white/10 pb-1">
              Experience & Student Leadership
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {exp.role} <span className="text-teal-600 dark:text-teal-400">• {exp.organization}</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-white/10 pb-1">
              Selected Projects
            </h2>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 dark:text-white">
                  Ratatouille Home Page <span className="font-normal text-xs text-slate-500">(HTML, CSS)</span>
                </span>
                <a href="https://github.com/Belal-Hossamm" className="text-teal-600 dark:text-teal-400 hover:underline text-xs">
                  GitHub ↗
                </a>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Built a fully responsive landing page using semantic HTML and CSS, focusing on clean layout, readability, and cross-device viewport compatibility.
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm pt-2">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 dark:text-white">
                  Bass Diffusion Model — System Dynamics Simulation <span className="font-normal text-xs text-slate-500">(AnyLogic, Python)</span>
                </span>
                <a href="https://github.com/Belal-Hossamm" className="text-teal-600 dark:text-teal-400 hover:underline text-xs">
                  GitHub ↗
                </a>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Designed a system dynamics model in AnyLogic to simulate the Bass Diffusion model, incorporating stocks, flows, and feedback loops to analyze product adoption.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-white/10 pb-1">
              Skills
            </h2>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p><strong>Programming Languages:</strong> Python, C++, JavaScript, HTML, CSS</p>
              <p><strong>Frameworks & Tools:</strong> Git, GitHub, VS Code, Ubuntu, AnyLogic Simulation, ReactJS, Tailwind CSS</p>
              <p><strong>Concepts & Practices:</strong> Object-Oriented Programming (OOP), Problem Solving, Responsive Web Design, Cybersecurity Fundamentals, System Dynamics Modeling</p>
              <p><strong>Soft Skills:</strong> Leadership, Communication, Team Collaboration, Adaptability, Time Management, Continuous Learning</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-white/10 pb-1">
              Certifications & Honors
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <li><strong>Python Essentials 1</strong> – Cisco Networking Academy</li>
              <li><strong>Introduction to Cybersecurity</strong> – Cisco Networking Academy</li>
              <li><strong>Getting Started with ReactJS Components</strong> — Simplilearn SkillUp</li>
              <li><strong>Public Relations Certificate of Appreciation</strong> — AIBE SAMS</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-1 pt-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-white/10 pb-1">
              Languages
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Arabic – Native &nbsp;|&nbsp; English – Intermediate / Professional Working
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
