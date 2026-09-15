import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Sparkles, Smartphone, Layers, Bot, Cpu } from "lucide-react";

import spendImg from "../assets/spends.jpeg";
import weskillImg from "../assets/weskilll.jpeg";
import agrosarthiImg from "../assets/agrosathi.jpeg";
import nextstepImg from "../assets/nextstep.jpeg";
import maptyImg from "../assets/mapty.png";
import clarioImg from "../assets/clario.jpeg";

const projects = [
  {
    title: "Clario",
    subtitle: "AI-Powered Mental Wellness Mobile Application",
    badge: "Top 10 Finalist · Google Cloud Exchange Hackathon",
    badgeColor: "amber",
    description:
      "Cross-platform mental wellness mobile application built in Flutter with scalable responsive UI/UX; recognized as a Top 10 finalist among 185,000+ teams at Google Cloud Exchange Hackathon 2025. Features multilingual AI chat support with persistent history, mood-based avatars, a dynamic journaling dashboard, relationship mapping, wellness tracking, and secure Google Authentication connected to a Cloud Run backend.",
    video: "/videos/clarioD.mp4",
    image: clarioImg,
    tech: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Google Cloud Platform (GCP)",
      "Cloud Run",
      "AI APIs",
      "Mobile UI/UX",
    ],
    github: "https://github.com/Love-M-365/clario",
    demo: "https://github.com/Love-M-365/clario",
  },
  {
    title: "SecondMind",
    subtitle: "Personal AI Memory Layer & Digital Twin Platform",
    badge: "Google Gemini AI · Multi-Agent · MCP Server",
    badgeColor: "purple",
    description:
      "Full-stack personal AI memory layer and digital twin platform powered by Google Gemini to parse, index, and synthesize developer notes and documents. Created a multi-agent orchestration pipeline for automated cognitive persona synthesis, weekly schedule planning, and grounded vector search. Implemented a predictive simulation engine generating 3-phase career roadmap timelines, feasibility scoring, and curated learning syllabi, while exposing user profile data and memory retrieval tools via standard Model Context Protocol (MCP) server endpoints for integration with IDEs and AI assistants.",
    video: "/videos/secondmind.mp4",
    tech: [
      "React",
      "Vite",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Google Gemini AI",
      "MCP (Model Context Protocol)",
      "Firebase Auth",
    ],
    github: "https://github.com/Love-M-365/SecondMind",
    link: "https://github.com/Love-M-365/SecondMind",
  },
  {
    title: "Spend Smart",
    subtitle: "Intelligent Expense Manager & Bill OCR Engine",
    badge: "MERN Stack · Tesseract.js OCR",
    badgeColor: "cyan",
    description:
      "Full-stack MERN application for managing personal and shared expenses with Tesseract.js OCR integration to automatically extract and categorize data from scanned bills, reducing manual data entry. Built a real-time dashboard to track payment statuses (Due, Paid, Owed) across users, visual analytics to surface expense patterns, and a friend system with smart expense-splitting and contribution tracking.",
    video: "/videos/spends.mp4",
    image: spendImg,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "Tesseract.js OCR",
      "REST APIs",
    ],
    link: "https://spend-smart-gamma.vercel.app/",
    github: "https://github.com/Love-M-365/spendsmart",
  },
  {
    title: "WeSkill",
    subtitle: "AI-Driven Freelance & Skill Marketplace",
    badge: "AI Ranking Engine",
    badgeColor: "emerald",
    description:
      "AI-driven freelance marketplace where users post gigs, complete tasks, and get ranked by quality, efficiency, and peer reviews. Designed with seamless workflow management and equal opportunities for creators of all skill levels.",
    video: "/videos/weskill.mp4",
    image: weskillImg,
    tech: ["React", "Express.js", "Node.js", "Tailwind CSS", "AI Model", "REST APIs"],
    link: "https://we-skill-lake.vercel.app/",
    github: "https://github.com/Love-M-365/weskill",
  },
  {
    title: "NextStep",
    subtitle: "Machine Learning Career Guidance System",
    badge: "AI & ML System",
    badgeColor: "indigo",
    description:
      "AI-based career guidance tool that analyzes user responses from a targeted questionnaire and predicts suitable career pathways with personalized suggestions and actionable growth roadmaps.",
    video: "/videos/nextstep.mp4",
    image: nextstepImg,
    tech: ["React", "Node.js", "Python", "Machine Learning", "Scikit-Learn"],
    github: "https://github.com/Love-M-365/NextStep",
  },
  {
    title: "AgroSarthi",
    subtitle: "Agricultural Advisory & Mandi Price Portal",
    badge: "Real-time Geospatial App",
    badgeColor: "emerald",
    description:
      "Frontend agricultural platform empowering farmers with real-time mandi prices, government welfare schemes, weather updates, and interactive geospatial mapping using Leaflet.js.",
    video: "/videos/agrosathi.mp4",
    image: agrosarthiImg,
    tech: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "OpenWeather API"],
    github: "https://github.com/Love-M-365/Agrosarthi",
  },
  {
    title: "Mapty",
    subtitle: "Geospatial Workout & Activity Tracker",
    badge: "Interactive Map App",
    badgeColor: "indigo",
    description:
      "Fitness tracking web application where users log running and cycling workouts by pinning real-world coordinates on an interactive map with elevation and cadence calculations.",
    video: "/videos/mapty.mp4",
    image: maptyImg,
    tech: ["JavaScript (ES6+)", "Leaflet.js", "Geolocation API", "LocalStorage"],
    github: "https://github.com/Love-M-365/mapty",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="z-10 py-24 px-4 sm:px-8 lg:px-20 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles size={12} />
          <span>Featured Portfolio Work</span>
        </div>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects That Speak for Me
        </motion.h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Showcasing production-ready mobile applications, full-stack web platforms, AI systems, and cloud architectures.
        </p>
      </div>

      <div className="space-y-12 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => {
          const videoRef = useRef(null);

          return (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:border-blue-500/40 hover:shadow-[0_12px_50px_rgba(59,130,246,0.2)] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Video / Preview Section (7 cols) */}
                <div
                  className="lg:col-span-7 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] bg-black/60 flex items-center justify-center overflow-hidden"
                  onMouseEnter={() => videoRef.current?.play()}
                  onMouseLeave={() => videoRef.current?.pause()}
                >
                  <video
                    ref={videoRef}
                    src={project.video}
                    poster={project.image}
                    className="w-full h-full object-cover sm:object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Section (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 text-white flex flex-col justify-between bg-gradient-to-br from-white/[0.03] to-transparent border-t lg:border-t-0 lg:border-l border-white/10">
                  <div>
                    {/* Badge */}
                    {project.badge && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-mono mb-3">
                        <Trophy size={12} className="text-amber-400" />
                        <span>{project.badge}</span>
                      </div>
                    )}

                    <h3 className="text-2xl font-extrabold text-slate-100 mb-1">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-blue-400 font-mono mb-3">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/10 text-gray-200 text-[11px] px-2.5 py-1 rounded-md border border-white/15 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200 hover:underline"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200 hover:underline"
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
