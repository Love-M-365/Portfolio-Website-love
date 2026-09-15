import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownCircle,
  Eye,
  FileText,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
  ExternalLink,
  Download,
  Share2,
  Check,
} from "lucide-react";

import resumePDF from "../assets/resume.pdf";
import resumeThumb from "../assets/resume-thumbnail.jpg";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const copyProfileLink = () => {
    navigator.clipboard.writeText(window.location.origin + "/#Resume");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resumeHighlights = [
    {
      icon: Briefcase,
      title: "3+ Industry Experiences",
      desc: "CausalFunnel (GCP/JS/Python), Onit India (Flutter/AWS), Ingraham College (MERN).",
      color: "#38bdf8",
    },
    {
      icon: Trophy,
      title: "Top 10 Finalist @ Google Cloud",
      desc: "Google Cloud Exchange Hackathon 2025 among 185,000+ teams.",
      color: "#818cf8",
    },
    {
      icon: Code2,
      title: "350+ LeetCode Solved",
      desc: "Strong algorithmic foundations in Java, C++, Python, and JavaScript.",
      color: "#f59e0b",
    },
    {
      icon: GraduationCap,
      title: "B.Tech in Computer Science",
      desc: "ADGIPS, GGSIPU New Delhi (2023–2027) · Current CGPA: 9.1",
      color: "#34d399",
    },
  ];

  return (
    <section
      id="Resume"
      className="py-24 px-4 sm:px-8 lg:px-16 text-white relative overflow-hidden bg-black"
      style={{
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <FileText size={13} />
            <span>Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Resume{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3"
          >
            Comprehensive overview of professional experience, production projects, academic achievements, and technical expertise.
          </motion.p>
        </div>

        {/* 2-Column Command Center Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Live Overview & Download Action Center (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  Official Resume · 2026
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Updated
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-100 mb-2">
                Love Maggo
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-mono mb-4">
                Software Development Engineer · Flutter & MERN Stack
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Hands-on building full-stack web applications (MERN) and cross-platform mobile apps (Flutter/Dart). Delivered production apps integrating AWS, Firebase, Google Cloud, OCR (Tesseract.js), AI APIs, and Razorpay payments.
              </p>

              {/* Highlights List */}
              <div className="space-y-3 mb-8">
                {resumeHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div
                        className="p-2 rounded-xl flex-shrink-0"
                        style={{
                          background: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-200">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href={resumePDF}
                  download="LoveMaggo_Resume.pdf"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm cursor-pointer"
                >
                  <Download size={16} />
                  <span>Download Full PDF</span>
                </a>

                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white py-3.5 px-5 rounded-xl transition-all duration-200 text-xs sm:text-sm"
                >
                  <Eye size={16} />
                  <span>Open PDF</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>

                <button
                  onClick={copyProfileLink}
                  className="p-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  title="Copy Resume Section Link"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Visual Resume Card with Interactive Lightbox Hover (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="group relative w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-3 sm:p-4 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]">
              {/* Document Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800/80">
                <img
                  src={resumeThumb}
                  alt="Love Maggo Resume Preview"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Glassmorphic Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        Love Maggo · CV
                      </p>
                      <p className="text-sm font-semibold text-slate-100">
                        PDF Available in Full HD
                      </p>
                    </div>

                    <a
                      href={resumePDF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-transform hover:scale-105"
                    >
                      <Eye size={14} />
                      <span>View Fullscreen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
