import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-[#05080e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brief */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#hero"
              className="text-lg font-black text-slate-900 dark:text-white hover:text-teal-500 transition-colors"
            >
              Belal<span className="text-teal-600 dark:text-teal-400">.dev</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Computer & Info Systems Student & Front-End Developer • Cairo, Egypt
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Belal"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Belal Hossam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
