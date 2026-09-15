import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  X,
  Eye,
  Layers,
  Cloud,
  Code2,
  Cpu,
} from "lucide-react";

import freecodecamp from "../assets/freeCodeCamp.png";
import postman from "../assets/postmann.png";
import js from "../assets/jscertificate.png";
import iit from "../assets/iitcertify.png";
import google from "../assets/googlecertify.png";
import prompt from "../assets/prompt.png";
import genai from "../assets/genai.jpg";

const CERTIFICATES = [
  {
    id: "genai",
    title: "Google Cloud GenAI Exchange Hackathon",
    category: "google",
    issuer: "Google Cloud | Hack2skill",
    date: "2025",
    badge: "Hackathon Finalist",
    badgeColor: "#818cf8",
    description:
      "Recognized among the Top Finalists at Google Cloud Exchange Hackathon 2025 for developing Clario (AI Mental Wellness App).",
    image: genai,
    icon: Cloud,
  },
  {
    id: "prompt",
    title: "Prompt Design in Vertex AI",
    category: "google",
    issuer: "Google Cloud",
    date: "2025",
    badge: "Google Cloud Skill Badge",
    badgeColor: "#38bdf8",
    description:
      "Demonstrated proficiency in Prompt Engineering, Gemini LLM tuning, parameter optimization, and multimodal AI workflows on Vertex AI.",
    image: prompt,
    icon: Sparkles,
  },
  {
    id: "googlecert",
    title: "Google Cloud Computing Foundations",
    category: "google",
    issuer: "Google Cloud",
    date: "2024",
    badge: "Cloud Certified",
    badgeColor: "#60a5fa",
    description:
      "Mastered cloud infrastructure fundamentals, GCP compute instances, IAM roles, cloud networking, and scalable serverless architectures.",
    image: google,
    icon: Cloud,
  },
  {
    id: "postman",
    title: "Postman API Fundamentals Student Expert",
    category: "dev",
    issuer: "Postman",
    date: "2024",
    badge: "API Expert",
    badgeColor: "#f59e0b",
    description:
      "Validated comprehensive skills in RESTful API development, request orchestration, automated testing suites, and collection scripting.",
    image: postman,
    icon: Code2,
  },
  {
    id: "fcc",
    title: "Responsive Web Design Certification",
    category: "dev",
    issuer: "FreeCodeCamp",
    date: "2023",
    badge: "Web Master",
    badgeColor: "#34d399",
    description:
      "Over 300 hours of coursework mastering semantic HTML5, modern CSS3, CSS Grid, Flexbox, responsive typography, and accessibility.",
    image: freecodecamp,
    icon: Layers,
  },
  {
    id: "js",
    title: "The Complete JavaScript Bootcamp (ES6+)",
    category: "dev",
    issuer: "Udemy",
    date: "2024",
    badge: "Core JavaScript",
    badgeColor: "#fbbf24",
    description:
      "In-depth mastery of JavaScript internals, async/await, closures, prototypical inheritance, DOM manipulation, and modern ES6+ tooling.",
    image: js,
    icon: Code2,
  },
  {
    id: "iit",
    title: "Workshop on 5G Physical Layer Architecture",
    category: "specialized",
    issuer: "IIT Delhi",
    date: "2024",
    badge: "IIT Research",
    badgeColor: "#ec4899",
    description:
      "Hands-on workshop exploring high-frequency signal processing, 5G NR architecture, and physical layer communications at IIT Delhi.",
    image: iit,
    icon: Cpu,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Certifications" },
  { id: "google", label: "Google Cloud & AI" },
  { id: "dev", label: "Web & API Engineering" },
  { id: "specialized", label: "Workshops & IIT" },
];

export default function CertificateSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts =
    activeCategory === "all"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === activeCategory);

  return (
    <section
      id="certification"
      className="py-24 px-4 sm:px-8 lg:px-16 text-white relative overflow-hidden bg-black"
      style={{
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px]" />
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
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Award size={13} />
            <span>Credentials & Validations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Honors &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3"
          >
            Industry certifications and competitive validations earned across Google Cloud, Web Development, API Architecture, and Artificial Intelligence.
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCerts.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  layout
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  onClick={() => setSelectedCert(cert)}
                  className="group bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Preview */}
                  <div className="relative h-48 sm:h-52 w-full bg-slate-950/80 overflow-hidden flex items-center justify-center border-b border-slate-800/80">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                    {/* View Overlay Tag */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-mono text-cyan-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye size={12} />
                      <span>Preview</span>
                    </div>

                    {/* Badge */}
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase border backdrop-blur-md shadow-sm"
                      style={{
                        background: `${cert.badgeColor}20`,
                        borderColor: `${cert.badgeColor}40`,
                        color: cert.badgeColor,
                      }}
                    >
                      {cert.badge}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                        <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                        {cert.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono">
                      <span className="text-slate-500 flex items-center gap-1">
                        <CheckCircle2 size={13} className="text-emerald-400" />
                        Verified Credential
                      </span>
                      <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        View Certificate →
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                    {selectedCert.issuer} · {selectedCert.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mt-0.5">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Full Image */}
              <div className="p-4 sm:p-6 bg-slate-950/60 flex items-center justify-center max-h-[60vh] overflow-auto">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[50vh] w-auto rounded-xl shadow-lg border border-slate-800 object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 max-w-md">
                  {selectedCert.description}
                </p>
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-cyan-600/20"
                >
                  <span>Open Fullscreen</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
