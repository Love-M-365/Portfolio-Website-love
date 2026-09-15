import React from 'react';
import {
  Calendar,
  Smartphone,
  Globe,
  Cloud,
  Star,
  Zap,
  Trophy,
  Shield,
  CreditCard,
  CheckCircle2,
  ExternalLink,
  Rocket,
  Store,
  Building2,
  Code,
  Sparkles,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const achievements = [
  'Top 10 Finalist (Youth Mental Wellness) at Google Cloud Exchange Hackathon 2025 among 185,000+ teams.',
  'Solved 350+ problems on LeetCode with strong foundations in JavaScript, Java, C++, and Python.',
  'Built AI-powered mental wellness mobile application (Clario) using Flutter + Cloud Run + Google Cloud.',
  'Shortlisted in top teams across 6 hackathons, delivering end-to-end production systems from ideation to deployment.',
];

const causalFeatures = [
  { icon: Cloud,     label: "GCP & Cloud",     desc: "Scalable web infrastructure",      color: "#38bdf8" },
  { icon: Layers,    label: "Full Stack Web",  desc: "JavaScript, Python, MongoDB",     color: "#818cf8" },
  { icon: Store,     label: "E-Commerce",      desc: "Shopify & WordPress engineering",  color: "#34d399" },
  { icon: Sparkles,  label: "Production APIs", desc: "Feature development & testing",    color: "#f59e0b" },
  { icon: Zap,       label: "Optimization",    desc: "Performance & bug debugging",     color: "#ec4899" },
  { icon: Building2, label: "San Francisco",   desc: "Global engineering collaboration",color: "#a78bfa" },
];

const onitFeatures = [
  { icon: Smartphone, label: "2 Apps Built",     desc: "Task Provider & Task Performer", color: "#818cf8" },
  { icon: Store,      label: "Play Store Live",  desc: "Both apps shipped & published",  color: "#34d399" },
  { icon: CreditCard, label: "Razorpay Gateway", desc: "In-app payment integration",     color: "#60a5fa" },
  { icon: Shield,     label: "Role-based Auth",  desc: "Secure RBAC management",         color: "#a78bfa" },
  { icon: Cloud,      label: "AWS Backend",      desc: "Scalable cloud data handling",   color: "#38bdf8" },
  { icon: Zap,        label: "Startup @ IIIT-D", desc: "Fast-paced startup ecosystem",   color: "#fbbf24" },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{
        background: "#030712",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-24 px-6 sm:px-12 lg:px-24"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=DM+Sans:wght@300;400;500;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .card-pad { padding: 22px 18px 24px; }
        @media (min-width: 640px)  { .card-pad { padding: 30px 30px 34px; } }
        @media (min-width: 1024px) { .card-pad { padding: 38px 38px 42px; } }

        .feature-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
        @media (min-width: 640px)  { .feature-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
        @media (min-width: 1024px) { .feature-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; } }

        .bullet-cols { columns: 1; column-gap: 28px; }
        @media (min-width: 1024px) { .bullet-cols { columns: 2; } }

        .playstore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.08));
          border: 1px solid rgba(52,211,153,0.35);
          border-radius: 10px;
          padding: 9px 16px;
          color: #34d399;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.2s, border-color 0.2s, transform 0.15s, box-shadow 0.2s;
          cursor: pointer;
          white-space: nowrap;
        }
        @media (min-width: 640px) { .playstore-btn { font-size: 14px; padding: 10px 20px; } }
        .playstore-btn:hover {
          background: linear-gradient(135deg, rgba(52,211,153,0.25), rgba(52,211,153,0.14));
          border-color: rgba(52,211,153,0.6);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(52,211,153,0.2);
        }
        .playstore-btn:active { transform: translateY(0px); }

        .stack-cta-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (min-width: 768px) {
          .stack-cta-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "5%", left: "-5%", width: 500, height: 500, background: "rgba(99,102,241,0.04)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", top: "45%", right: "-5%", width: 500, height: 500, background: "rgba(56,189,248,0.04)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "10%", width: 400, height: 400, background: "rgba(139,92,246,0.04)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(99,102,241,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="max-w-7xl mx-auto" style={{ position: "relative" }}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48, gap: 12 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ height: 1, width: 40, background: "linear-gradient(to right, transparent, rgba(129,140,248,0.5))" }} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "rgba(129,140,248,0.7)", textTransform: "uppercase", letterSpacing: "0.25em" }}>career journey</span>
            <div style={{ height: 1, width: 40, background: "linear-gradient(to left, transparent, rgba(129,140,248,0.5))" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "#e2e8f0", letterSpacing: "-0.02em", textAlign: "center", margin: 0 }}>
            Work Experience
          </h2>
          <p style={{ color: "rgba(148,163,184,0.8)", fontSize: "clamp(13px, 1.4vw, 16px)", textAlign: "center", maxWidth: 600, margin: 0 }}>
            Delivering high-impact software across fast-scaling startups, global companies, and production deployments.
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════
            1. CAUSALFUNNEL GLOBAL INC. (Current Role)
        ════════════════════════════════════════════ */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 30 }}>
          {/* Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.3)", borderRadius: 100, padding: "4px 12px" }}>
              <Building2 size={11} style={{ color: "#38bdf8" }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "'Fira Code', monospace" }}>San Francisco, CA · Remote</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 100, padding: "4px 12px" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span style={{ fontSize: 10, fontWeight: 700, color: "#34d399", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "'Fira Code', monospace" }}>Present / Current Role</span>
            </div>
          </div>

          {/* Card */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 20, overflow: "hidden", position: "relative", boxShadow: "0 0 60px rgba(56,189,248,0.08), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #38bdf8, #818cf8, #34d399)" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at top left, rgba(56,189,248,0.08) 0%, transparent 60%)" }} />

            <div className="card-pad" style={{ position: "relative", zIndex: 1 }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
                <div style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 14, padding: 12, display: "flex", flexShrink: 0 }}>
                  <Cloud style={{ color: "#38bdf8" }} size={26} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: "clamp(17px, 2.2vw, 24px)", fontWeight: 800, color: "#e2e8f0", margin: "0 0 4px", lineHeight: 1.25 }}>
                    Software Developer Intern
                  </h3>
                  <p style={{ color: "#38bdf8", fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 600, margin: "0 0 4px" }}>
                    CausalFunnel Global Inc. · San Francisco, California (Remote)
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
                    <span style={{ fontSize: 12, color: "#34d399", fontFamily: "'Fira Code', monospace", fontWeight: 600 }}>July 2026 – Present</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "rgba(226,232,240,0.7)", fontSize: "clamp(13px, 1.4vw, 16px)", lineHeight: 1.75, marginBottom: 20 }}>
                Building and deploying scalable web applications on Google Cloud Platform (GCP). Developing production features, integrating robust APIs, customizing Shopify and WordPress enterprise solutions, and optimizing runtime performance across engineering teams.
              </p>

              {/* Feature grid */}
              <div className="feature-grid" style={{ marginBottom: 20 }}>
                {causalFeatures.map(({ icon: Icon, label, desc, color }) => (
                  <div
                    key={label}
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "flex-start", gap: 10, transition: "border-color 0.25s, background 0.25s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.background = `${color}08`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  >
                    <div style={{ background: `${color}15`, borderRadius: 8, padding: 7, display: "flex", flexShrink: 0 }}>
                      <Icon size={15} style={{ color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0", margin: "0 0 2px" }}>{label}</p>
                      <p style={{ fontSize: 11, color: "rgba(226,232,240,0.45)", margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullet points */}
              <div className="bullet-cols" style={{ marginBottom: 20 }}>
                {[
                  "Developing scalable web applications using JavaScript, Python, MongoDB, and Google Cloud Platform (GCP).",
                  "Building and customizing Shopify and WordPress solutions through feature development and API integrations.",
                  "Developing production-ready features while debugging, testing, and optimizing application performance.",
                  "Collaborating with cross-functional engineering teams using Git-based development workflows.",
                  "Writing clean, maintainable, and scalable code following software engineering best practices.",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, breakInside: "avoid" }}>
                    <CheckCircle2 size={14} style={{ color: "#38bdf8", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: "clamp(12px, 1.3vw, 14px)", color: "rgba(226,232,240,0.7)", lineHeight: 1.65, margin: 0 }}>{point}</p>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="stack-cta-row">
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'Fira Code', monospace", flexShrink: 0 }}>stack:</span>
                  {["JavaScript", "Python", "MongoDB", "Google Cloud (GCP)", "Shopify", "WordPress", "REST APIs", "Git"].map((tech) => (
                    <span key={tech} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.22)", color: "#7dd3fc", fontFamily: "'Fira Code', monospace" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            2. ONIT INDIA (Startup)
        ════════════════════════════════════════════ */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 30 }}>
          {/* Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(129,140,248,0.25)", borderRadius: 100, padding: "4px 12px" }}>
              <Rocket size={11} style={{ color: "#818cf8" }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "'Fira Code', monospace" }}>Startup · IIIT Delhi</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 100, padding: "4px 12px" }}>
              <Store size={11} style={{ color: "#34d399" }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: "#34d399", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "'Fira Code', monospace" }}>2 Apps on Play Store</span>
            </div>
          </div>

          {/* Card */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(129,140,248,0.2)", borderRadius: 20, overflow: "hidden", position: "relative", boxShadow: "0 0 60px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #6366f1, #8b5cf6, #38bdf8)" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.07) 0%, transparent 60%)" }} />

            <div className="card-pad" style={{ position: "relative", zIndex: 1 }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
                <div style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(129,140,248,0.2)", borderRadius: 14, padding: 12, display: "flex", flexShrink: 0 }}>
                  <Smartphone style={{ color: "#818cf8" }} size={26} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: "clamp(17px, 2.2vw, 24px)", fontWeight: 800, color: "#e2e8f0", margin: "0 0 4px", lineHeight: 1.25 }}>
                    Software Development Engineer (Flutter) Intern
                  </h3>
                  <p style={{ color: "#818cf8", fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 600, margin: "0 0 4px" }}>
                    Onit India (Startup) · IIIT Delhi (Hybrid)
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'Fira Code', monospace" }}>Feb 2026 – June 2026</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "rgba(226,232,240,0.65)", fontSize: "clamp(13px, 1.4vw, 16px)", lineHeight: 1.75, marginBottom: 20 }}>
                Engineered two cross-platform mobile apps (Task Provider & Task Performer) using Flutter and Dart. Integrated AWS backend services, RBAC authentication, Razorpay payments, and owned full end-to-end delivery with both apps published on Google Play Store.
              </p>

              {/* Feature grid */}
              <div className="feature-grid" style={{ marginBottom: 20 }}>
                {onitFeatures.map(({ icon: Icon, label, desc, color }) => (
                  <div
                    key={label}
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "flex-start", gap: 10, transition: "border-color 0.25s, background 0.25s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${color}30`; e.currentTarget.style.background = `${color}08`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  >
                    <div style={{ background: `${color}15`, borderRadius: 8, padding: 7, display: "flex", flexShrink: 0 }}>
                      <Icon size={15} style={{ color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0", margin: "0 0 2px" }}>{label}</p>
                      <p style={{ fontSize: 11, color: "rgba(226,232,240,0.45)", margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullet points */}
              <div className="bullet-cols" style={{ marginBottom: 20 }}>
                {[
                  "Engineered two cross-platform mobile applications (Task Provider & Task Performer) using Flutter and Dart.",
                  "Designed intuitive UI/UX flows streamlining task assignment, real-time tracking, and navigation.",
                  "Integrated AWS backend services to enable scalable, efficient data handling across both applications.",
                  "Implemented secure authentication and role-based access control (RBAC) for differentiated user workflows.",
                  "Integrated Razorpay payment gateway to support secure in-app transactions.",
                  "Owned end-to-end delivery including frontend development, API integration, and deployment in a hybrid setup.",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, breakInside: "avoid" }}>
                    <CheckCircle2 size={14} style={{ color: "#34d399", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: "clamp(12px, 1.3vw, 14px)", color: "rgba(226,232,240,0.65)", lineHeight: 1.65, margin: 0 }}>{point}</p>
                  </div>
                ))}
              </div>

              {/* Stack + Play Store CTA */}
              <div className="stack-cta-row">
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'Fira Code', monospace", flexShrink: 0 }}>stack:</span>
                  {["Flutter", "Dart", "AWS", "Firebase", "Razorpay", "RBAC", "REST APIs"].map((tech) => (
                    <span key={tech} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)", color: "#a5b4fc", fontFamily: "'Fira Code', monospace" }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.onitapp.india" target="_blank" rel="noopener noreferrer" className="playstore-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M3.18 1.07C2.45 1.48 2 2.25 2 3.13v17.74c0 .88.45 1.65 1.18 2.06l.1.06 9.93-9.93v-.23L3.28 3.01l-.1.06z" fill="#34d399"/>
                    <path d="M16.34 16.25l-3.31-3.31v-.23l3.31-3.31.07.04 3.92 2.23c1.12.63 1.12 1.68 0 2.32l-3.92 2.23-.07.03z" fill="#34d399" opacity="0.8"/>
                    <path d="M16.41 16.22L13.03 12.9 3.18 22.93c.37.39.94.44 1.59.08l11.64-6.79" fill="#34d399" opacity="0.6"/>
                    <path d="M16.41 7.78L4.77 1c-.65-.37-1.22-.32-1.59.08L13.03 11.1l3.38-3.32z" fill="#34d399" opacity="0.4"/>
                  </svg>
                  View on Play Store
                  <ExternalLink size={13} />
                </a>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            3. INGRAHAM COLLEGE
        ════════════════════════════════════════════ */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 30 }}>
          <div
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden", position: "relative", transition: "border-color 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(56,189,248,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
          >
            <div style={{ height: 2, background: "linear-gradient(to right, #38bdf8, #6366f1, transparent)" }} />

            <div className="card-pad">
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
                <div style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 12, padding: 12, display: "flex", flexShrink: 0 }}>
                  <Globe style={{ color: "#38bdf8" }} size={24} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 800, color: "#e2e8f0", margin: "0 0 4px" }}>Full Stack Developer Intern</h3>
                  <p style={{ color: "#38bdf8", fontSize: "clamp(12px, 1.4vw, 15px)", fontWeight: 600, margin: "0 0 4px" }}>Ingraham Institute Degree College, Ghaziabad | Hybrid</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'Fira Code', monospace" }}>Jul 2025 – Aug 2025</span>
                  </div>
                </div>
              </div>

              <p style={{ color: "rgba(226,232,240,0.6)", fontSize: "clamp(13px, 1.3vw, 15px)", lineHeight: 1.75, marginBottom: 16 }}>
                Architected and deployed a full-stack college website using the MERN stack with a modern UI and seamless frontend-backend integration. Built a faculty-friendly content management system and managed end-to-end development.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {[
                  "Architected and deployed a full-stack college website using the MERN stack with a modern UI and seamless frontend-backend integration.",
                  "Built a faculty-friendly content management system, reducing time required for routine content updates.",
                  "Managed end-to-end development including UI design, REST API integration, and database schema management.",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={14} style={{ color: "#38bdf8", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: "clamp(12px, 1.3vw, 14px)", color: "rgba(226,232,240,0.6)", lineHeight: 1.65, margin: 0 }}>{point}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'Fira Code', monospace", flexShrink: 0 }}>stack:</span>
                {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"].map((tech) => (
                  <span key={tech} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: "rgba(56,189,248,0.07)", border: "1px solid rgba(56,189,248,0.18)", color: "#7dd3fc", fontFamily: "'Fira Code', monospace" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            HONORS & HIGHLIGHTS BANNER
        ════════════════════════════════════════════ */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div style={{ background: "rgba(99,102,241,0.03)", border: "1px solid rgba(129,140,248,0.15)", borderRadius: 20, position: "relative", overflow: "hidden" }} className="card-pad">
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(129,140,248,0.4), transparent)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(129,140,248,0.2)", borderRadius: 12, padding: 10, display: "flex" }}>
                <Trophy style={{ color: "#818cf8" }} size={20} />
              </div>
              <h3 style={{ fontSize: "clamp(16px, 2.2vw, 24px)", fontWeight: 800, color: "#e2e8f0", margin: 0 }}>Honors & Milestones</h3>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px 16px", color: "rgba(226,232,240,0.7)", fontSize: "clamp(12px, 1.2vw, 14px)", lineHeight: 1.7, transition: "border-color 0.25s, color 0.25s", cursor: "default", display: "flex", alignItems: "flex-start", gap: 10 }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(129,140,248,0.3)"; e.currentTarget.style.color = "rgba(226,232,240,0.95)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(226,232,240,0.7)"; }}
                >
                  <Star size={12} style={{ color: "#818cf8", flexShrink: 0, marginTop: 3 }} fill="currentColor" />
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;