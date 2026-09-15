import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  {
    id: "frontend",
    label: "Frontend & Web",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.18)",
    border: "rgba(34,211,238,0.3)",
    pillBg: "rgba(34,211,238,0.08)",
    pillBorder: "rgba(34,211,238,0.22)",
    pillText: "#67e8f9",
    iconClass: "ti ti-layout-2",
    description: "Pixel-perfect UIs, responsive web & modern frameworks",
    skills: [
      { name: "React.js",      icon: "ti ti-brand-react" },
      { name: "Next.js",       icon: "ti ti-brand-nextjs" },
      { name: "MERN Stack",    icon: "ti ti-stack" },
      { name: "JavaScript",    icon: "ti ti-brand-javascript" },
      { name: "HTML5",         icon: "ti ti-brand-html5" },
      { name: "CSS3",          icon: "ti ti-brand-css3" },
      { name: "Tailwind CSS",  icon: "ti ti-brand-tailwind" },
      { name: "Bootstrap",     icon: "ti ti-brand-bootstrap" },
      { name: "Framer Motion", icon: "ti ti-wand" },
      { name: "Redux",         icon: "ti ti-layers-intersect" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Cloud",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.18)",
    border: "rgba(167,139,250,0.3)",
    pillBg: "rgba(167,139,250,0.08)",
    pillBorder: "rgba(167,139,250,0.22)",
    pillText: "#c4b5fd",
    iconClass: "ti ti-server-2",
    description: "Scalable APIs, cloud infra & distributed databases",
    skills: [
      { name: "Node.js",            icon: "ti ti-brand-nodejs" },
      { name: "Express.js",         icon: "ti ti-api" },
      { name: "MongoDB",            icon: "ti ti-database" },
      { name: "Google Cloud (GCP)", icon: "ti ti-brand-google" },
      { name: "AWS",                icon: "ti ti-brand-aws" },
      { name: "Firebase Auth",      icon: "ti ti-fingerprint" },
      { name: "Firestore",          icon: "ti ti-database-import" },
      { name: "Cloud Messaging",    icon: "ti ti-message-dots" },
      { name: "REST APIs",          icon: "ti ti-plug-connected" },
      { name: "Auth0",              icon: "ti ti-shield-lock" },
      { name: "Cloud Run",          icon: "ti ti-cloud-upload" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile & AI",
    accent: "#fb7185",
    glow: "rgba(251,113,133,0.18)",
    border: "rgba(251,113,133,0.3)",
    pillBg: "rgba(251,113,133,0.08)",
    pillBorder: "rgba(251,113,133,0.22)",
    pillText: "#fda4af",
    iconClass: "ti ti-device-mobile",
    description: "Cross-platform mobile apps & AI intelligence",
    skills: [
      { name: "Flutter",        icon: "ti ti-brand-flutter" },
      { name: "Dart",           icon: "ti ti-code" },
      { name: "Cross-platform UI", icon: "ti ti-devices" },
      { name: "AI APIs / LLMs", icon: "ti ti-brain" },
      { name: "Tesseract.js OCR", icon: "ti ti-scan" },
      { name: "Razorpay",       icon: "ti ti-credit-card" },
      { name: "Gemini AI & MCP",icon: "ti ti-sparkles" },
      { name: "State Management", icon: "ti ti-refresh" },
    ],
  },
  {
    id: "tools",
    label: "Languages & Tools",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.18)",
    border: "rgba(251,191,36,0.3)",
    pillBg: "rgba(251,191,36,0.08)",
    pillBorder: "rgba(251,191,36,0.22)",
    pillText: "#fcd34d",
    iconClass: "ti ti-tool",
    description: "Core programming languages, DevOps & tools",
    skills: [
      { name: "Java",                 icon: "ti ti-coffee" },
      { name: "JavaScript",           icon: "ti ti-brand-javascript" },
      { name: "C++",                  icon: "ti ti-code-plus" },
      { name: "Python",               icon: "ti ti-brand-python" },
      { name: "Git",                  icon: "ti ti-git-branch" },
      { name: "GitHub",               icon: "ti ti-brand-github" },
      { name: "Linux",                icon: "ti ti-brand-ubuntu" },
      { name: "Unix Shell Scripting", icon: "ti ti-terminal-2" },
      { name: "Postman",              icon: "ti ti-send" },
      { name: "VS Code",              icon: "ti ti-brand-vscode" },
    ],
  },
];

const totalSkills = SKILLS.reduce((a, c) => a + c.skills.length, 0);

export default function SkillsSection() {
  const [activeId, setActiveId] = useState("frontend");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const active = SKILLS.find((s) => s.id === activeId);

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        background: "#050816",
        color: "#f0f0f0",
        padding: "80px 16px 96px",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500&family=Fira+Code:wght@400;500&display=swap');

        .sk-tab { transition: background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s; }
        .sk-tab:hover { opacity: 0.85; }

        .sk-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          cursor: default;
          user-select: none;
          transition: transform 0.15s, border-color 0.15s, background 0.15s, color 0.15s;
        }
        .sk-pill:hover { transform: translateY(-2px); }

        .sk-tabs-bar::-webkit-scrollbar { display: none; }
        .sk-tabs-bar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes sk-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.6)} }

        @media (max-width: 600px) {
          .sk-stats { flex-direction: column !important; gap: 10px !important; }
          .sk-category-header { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", left: "20%", width: 500, height: 500, borderRadius: "50%", background: "rgba(34,211,238,0.04)", filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "15%", width: 500, height: 500, borderRadius: "50%", background: "rgba(167,139,250,0.04)", filter: "blur(120px)" }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.02,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
          backgroundSize: "3.5rem 3.5rem",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: 52,
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 14px", borderRadius: 100,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "#22d3ee", fontSize: 10,
            textTransform: "uppercase", letterSpacing: "0.28em", fontWeight: 700,
            marginBottom: 20,
          }}>
            <i className="ti ti-cpu" style={{ fontSize: 13 }} aria-hidden="true" />
            Tech Stack
          </div>

          <h2 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(28px, 6vw, 56px)",
            fontWeight: 900,
            margin: "0 0 14px",
            lineHeight: 1.1,
          }}>
            Skills &{" "}
            <span style={{
              background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Technologies
            </span>
          </h2>

          <p style={{
            maxWidth: 480, margin: "0 auto 28px",
            color: "rgba(156,163,175,1)",
            fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.7,
          }}>
            Crafting scalable full-stack apps, immersive mobile experiences,
            and AI-powered systems with modern tools and clean architecture.
          </p>

          {/* Stats strip */}
          <div className="sk-stats" style={{
            display: "inline-flex", flexWrap: "wrap", justifyContent: "center",
            alignItems: "center", gap: "8px 20px",
            padding: "10px 22px", borderRadius: 14,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { label: "Categories",     value: SKILLS.length,     icon: "ti-category" },
              { label: "Technologies",   value: `${totalSkills}+`, icon: "ti-stack-2" },
              { label: "Years Building", value: "3+",              icon: "ti-clock" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
                <i className={`ti ${s.icon}`} style={{ color: "rgba(107,114,128,1)", fontSize: 14 }} aria-hidden="true" />
                <span style={{ fontWeight: 700, color: "#fff" }}>{s.value}</span>
                <span style={{ color: "rgba(107,114,128,1)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tab bar ── */}
     <div style={{
          marginTop: 20,
          marginBottom: 32,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: 10,
        }}>
          {SKILLS.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => setActiveId(cat.id)}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "12px 16px", borderRadius: 14,
                border: `1px solid ${activeId === cat.id ? cat.border : "rgba(255,255,255,0.07)"}`,
                background: activeId === cat.id ? cat.pillBg : "rgba(255,255,255,0.025)",
                cursor: "pointer", textAlign: "left",
                transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                boxShadow: activeId === cat.id ? `0 0 20px ${cat.glow}` : "none",
              }}
            >
              <i className={cat.iconClass} style={{ fontSize: 18, color: cat.accent, flexShrink: 0 }} aria-hidden="true" />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#f0f0f0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {cat.label}
                </div>
                <div style={{ fontSize: 11, color: "rgba(107,114,128,1)", marginTop: 1 }}>
                  {cat.skills.length} technologies
                </div>
              </div>
            </motion.button>
          ))}
        </div>


        {/* ── Active panel ── */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          style={{
            borderRadius: 20,
            border: `1px solid ${active.border}`,
            background: "rgba(255,255,255,0.03)",
            boxShadow: `0 0 48px ${active.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
            overflow: "hidden",
          }}
        >
          {/* Top accent line */}
          <div style={{
            height: 2,
            background: `linear-gradient(to right, transparent 0%, ${active.accent} 30%, ${active.accent} 70%, transparent 100%)`,
            opacity: 0.7,
          }} />

          <div style={{ padding: "28px 28px 32px" }}>

            {/* Category header */}
            <div className="sk-category-header" style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              gap: 16, marginBottom: 24,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {/* Icon box */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: active.pillBg,
                  border: `1px solid ${active.border}`,
                  color: active.pillText,
                  fontSize: 22,
                  boxShadow: `0 0 20px ${active.glow}`,
                }}>
                  <i className={active.iconClass} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: active.accent, flexShrink: 0,
                      animation: "sk-pulse 1.8s ease-in-out infinite",
                    }} />
                    <span style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                      textTransform: "uppercase", color: active.accent,
                    }}>
                      {active.label}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(107,114,128,1)", margin: 0 }}>
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Count badge */}
              <div style={{
                flexShrink: 0,
                padding: "5px 14px", borderRadius: 100,
                background: active.pillBg, border: `1px solid ${active.border}`,
                color: active.pillText, fontSize: 12, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 5,
              }}>
                <i className="ti ti-stack-2" style={{ fontSize: 13 }} aria-hidden="true" />
                {active.skills.length} skills
              </div>
            </div>

            {/* ── All skills — always visible, no collapse ── */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {active.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, delay: i * 0.035, ease: [0.34, 1.2, 0.64, 1] }}
                  className="sk-pill"
                  style={{
                    background: active.pillBg,
                    border: `1px solid ${active.pillBorder}`,
                    color: active.pillText,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${active.pillBg.replace("0.08", "0.16")}`;
                    e.currentTarget.style.borderColor = active.accent;
                    e.currentTarget.style.boxShadow = `0 0 12px ${active.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = active.pillBg;
                    e.currentTarget.style.borderColor = active.pillBorder;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className={skill.icon} style={{ fontSize: 14, lineHeight: 1 }} aria-hidden="true" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── All categories summary strip ── */}
        
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          style={{
            marginTop: 64,
            width: "min(480px, 80vw)",
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(34,211,238,0.35), rgba(167,139,250,0.35), transparent)",
            transformOrigin: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </section>
  );
}