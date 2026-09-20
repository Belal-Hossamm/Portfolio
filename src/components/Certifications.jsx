import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Honors
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Industry and academic credentials from Cisco Networking Academy, Simplilearn, and student leadership boards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer border border-slate-200/80 dark:border-white/10"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="space-y-4">
                
                {/* Top Badge & Issuer */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white shadow-md shadow-black/10 group-hover:scale-105 transition-transform`}
                    >
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        {cert.issuer}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Gained Pills */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Card Action */}
              <div className="pt-5 mt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400">
                <span>{cert.category}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Certification Detailed View */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel max-w-lg w-full rounded-2xl p-6 sm:p-8 space-y-6 relative border border-slate-200 dark:border-white/15 shadow-2xl">
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${selectedCert.badgeColor} flex items-center justify-center text-white shadow-md`}
                  >
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      {selectedCert.issuer}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {selectedCert.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Issuer Organization:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedCert.issuer}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Domain:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedCert.category}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Validation Status:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Official Credential
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2">
                  Skills & Knowledge Validated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skillsGained.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs sm:text-sm font-semibold transition-colors"
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
