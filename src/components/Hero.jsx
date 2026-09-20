import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Code,
  GraduationCap,
  Award,
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/15 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Introduction */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Animated Subtitle / Role */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
                  I am a{' '}
                </span>
                <span className="ml-2 text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 transition-all duration-500">
                  {personalInfo.titles[titleIndex]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Location & University quick badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-500" />
                <span>Sadat Academy — Software Engineering (Year 3)</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 hover:border-teal-500 text-slate-800 dark:text-slate-200 font-semibold text-sm backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-teal-500/10"
              >
                <Download className="w-4 h-4 text-teal-500" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-teal-500 text-sm font-semibold transition-colors"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/40 transition-all hover:scale-110"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-all hover:scale-110"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Belal"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/40 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative gradient border ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-slow" />

              {/* Card Container */}
              <div className="relative rounded-2xl glass-panel p-6 shadow-2xl border border-slate-200/80 dark:border-white/10 space-y-6">
                
                {/* Code Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-teal-500" />
                    <span>belal_profile.js</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto">
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-teal-600 dark:text-teal-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-600 dark:text-blue-300">name:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'{personalInfo.name}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-600 dark:text-blue-300">degree:</span>{' '}
                    <span className="text-amber-600 dark:text-amber-400">'B.Sc. CIS - Software Eng (Year 3)'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-600 dark:text-blue-300">institution:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'Sadat Academy'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-600 dark:text-blue-300">techStack:</span> [
                  </p>
                  <p className="pl-8 text-teal-600 dark:text-teal-300">
                    'React', 'JavaScript', 'Tailwind', 'Python', 'Full-Stack'
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-blue-600 dark:text-blue-300">roles:</span> [
                  </p>
                  <p className="pl-8 text-indigo-500 dark:text-indigo-300">
                    'Full Stack Trainee', 'Marketing Vice Manager'
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-blue-600 dark:text-blue-300">eagerToLearn:</span>{' '}
                    <span className="text-purple-600 dark:text-purple-400">true</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Stat pills inside card */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200 dark:border-white/10">
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/5 text-center">
                    <div className="text-2xl font-black text-teal-600 dark:text-teal-400">2028</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Expected Grad</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/5 text-center">
                    <div className="text-2xl font-black text-teal-600 dark:text-teal-400">4+</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Certs & Honors</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
