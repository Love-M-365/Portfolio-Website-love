import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Star,
  Users,
  MapPin,
  Code2,
  Zap,
  Globe,
  Award,
  ChevronRight,
  Sparkles,
  Brain,
  Cloud,
  Terminal,
  GitBranch,
} from "lucide-react";
import badgee from "../assets/badge.jpg";
import meee from "../assets/meee.jpg";

const stats = [
  { icon: Users, value: "278K+", label: "Participants", color: "#818cf8" },
  { icon: Globe, value: "185K+", label: "Teams", color: "#60a5fa" },
  { icon: Trophy, value: "Top 10", label: "Finalist (Mental Wellness)", color: "#a78bfa" },
  { icon: MapPin, value: "Bengaluru", label: "The Leela Palace", color: "#38bdf8" },
];

const techStack = [
  { icon: Code2, name: "Flutter" },
  { icon: Cloud, name: "Firebase" },
  { icon: Globe, name: "Google Cloud" },
  { icon: Brain, name: "Mental Wellness" },
];

function StatCard({ icon: Icon, value, label, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.09 }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid rgba(255,255,255,0.07)`,
          borderRadius: 16,
          padding: "18px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          transition: "border-color 0.3s, background 0.3s",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${color}35`;
          e.currentTarget.style.background = `${color}08`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        }}
      >
        <div style={{ padding: "8px", borderRadius: 10, background: `${color}18`, color, display: "flex" }}>
          <Icon size={18} />
        </div>
        <p style={{ fontSize: 20, fontWeight: 900, color, fontFamily: "'Fira Code', monospace", letterSpacing: "-0.02em", textAlign: "center" }}>
          {value}
        </p>
        <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", fontWeight: 500 }}>
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function GoogleHackathonAchievement() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#030712",
        color: "#e2e8f0",
        padding: "80px 16px",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=DM+Sans:wght@300;400;500;700&display=swap');
      `}</style>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, background: "rgba(99,102,241,0.05)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, background: "rgba(139,92,246,0.05)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", top: "40%", left: "40%", width: 300, height: 300, background: "rgba(56,189,248,0.04)", borderRadius: "50%", filter: "blur(80px)" }} />
        {/* grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <div ref={containerRef} style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 28 }}
        >
          <div style={{ height: 1, width: 40, background: "linear-gradient(to right, transparent, rgba(129,140,248,0.5))" }} />
          <span style={{ color: "rgba(129,140,248,0.75)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.28em", display: "flex", alignItems: "center", gap: 6, fontFamily: "'Fira Code', monospace" }}>
            <Terminal size={11} /> achievement.log
          </span>
          <div style={{ height: 1, width: 40, background: "linear-gradient(to left, transparent, rgba(129,140,248,0.5))" }} />
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          onMouseMove={handleMouseMove}
          style={{
            position: "relative",
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
            overflow: "hidden",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 40px 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* Mouse-follow glow */}
          <div
            style={{
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(99,102,241,0.06), transparent 60%)`,
              transition: "background 0.2s",
            }}
          />

          {/* Top line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(129,140,248,0.5), rgba(56,189,248,0.3), transparent)" }} />

          <div style={{ position: "relative", zIndex: 1, padding: "40px 24px" }}>

            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 40 }}>
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                style={{ marginBottom: 20, position: "relative" }}
              >
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(129,140,248,0.15)", filter: "blur(16px)", transform: "scale(1.6)" }} />
                <div style={{ position: "relative", background: "rgba(99,102,241,0.12)", border: "1px solid rgba(129,140,248,0.25)", borderRadius: 18, padding: 16, display: "flex" }}>
                  <Trophy style={{ color: "#818cf8" }} size={36} />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ fontSize: "clamp(22px, 5vw, 44px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 6, color: "#e2e8f0" }}
              >
                Google Cloud Exchange
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  fontSize: "clamp(22px, 5vw, 44px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Hackathon Finalist
              </motion.h2>
            </div>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 36 }}>
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} index={i} />
              ))}
            </div>

            {/* Images + Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "center", marginBottom: 32 }}>

              {/* Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ display: "flex", flexDirection: "row", gap: 16, alignItems: "flex-end", flexShrink: 0 }}
              >
                {/* Badge */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: -4, borderRadius: 18, background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))", filter: "blur(8px)" }} />
                  <img
                    src={badgee}
                    alt="Google Hackathon Badge"
                    style={{ position: "relative", height: 140, width: 140, borderRadius: 16, objectFit: "cover", border: "1px solid rgba(129,140,248,0.2)", display: "block" }}
                  />
                  <div style={{ position: "absolute", bottom: -8, right: -8, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", fontSize: 9, fontWeight: 800, padding: "3px 8px", borderRadius: 8, display: "flex", alignItems: "center", gap: 4 }}>
                    <Award size={9} /> BADGE
                  </div>
                </div>

                {/* Person photo */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: -4, borderRadius: 22, background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(139,92,246,0.15))", filter: "blur(8px)" }} />
                  <img
                    src={meee}
                    alt="Finalist Photo"
                    style={{ position: "relative", height: 168, width: 136, borderRadius: 20, objectFit: "cover", border: "1px solid rgba(255,255,255,0.08)", display: "block" }}
                  />
                  <div style={{ position: "absolute", bottom: -8, left: -8, background: "linear-gradient(135deg, #8b5cf6, #6366f1)", color: "white", fontSize: 9, fontWeight: 800, padding: "3px 8px", borderRadius: 8, display: "flex", alignItems: "center", gap: 4 }}>
                    <Star size={9} fill="white" /> FINALIST
                  </div>
                </div>
              </motion.div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <p style={{ color: "rgba(226,232,240,0.85)", fontSize: "clamp(14px, 2.5vw, 17px)", lineHeight: 1.7 }}>
                  Recognized as a{" "}
                  <span style={{ color: "#818cf8", fontWeight: 700 }}>Top 10 Finalist team</span> (Youth Mental Wellness track) from over{" "}
                  <span style={{ color: "#818cf8", fontWeight: 700 }}>185,000+ teams</span> and{" "}
                  <span style={{ color: "#818cf8", fontWeight: 700 }}>278,000+ participants</span> across India.
                </p>

                <p style={{ color: "rgba(226,232,240,0.5)", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.8 }}>
                  Built a complete youth mental wellness app using Flutter, Firebase, and Google Cloud —
                  showcased live at{" "}
                  <span style={{ color: "rgba(226,232,240,0.8)", fontWeight: 500 }}>The Leela Palace, Bengaluru</span>.
                </p>

                {/* Tech chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                  {techStack.map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(226,232,240,0.7)",
                        fontSize: 12,
                        padding: "6px 12px",
                        borderRadius: 100,
                        transition: "border-color 0.2s, color 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(129,140,248,0.3)"; e.currentTarget.style.color = "#e2e8f0"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(226,232,240,0.7)"; }}
                    >
                      <Icon size={12} style={{ color: "#818cf8" }} />
                      {name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quote / Closing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{
                position: "relative",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(99,102,241,0.04)",
                padding: "20px 24px",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(129,140,248,0.3), transparent)" }} />
              <div style={{ position: "absolute", top: -8, left: -4, fontSize: 72, color: "rgba(129,140,248,0.06)", fontFamily: "Georgia, serif", lineHeight: 1, userSelect: "none" }}>"</div>

              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", gap: 14 }}>
                <Zap size={16} style={{ color: "#818cf8", flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: "rgba(226,232,240,0.55)", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.7, fontStyle: "italic" }}>
                  The badge represents the achievement. The moment represents the journey.
                  And the journey has only just begun.
                </p>
                <ChevronRight size={16} style={{ color: "rgba(255,255,255,0.15)", flexShrink: 0, marginTop: 2 }} />
              </div>
            </motion.div>

          </div>

          {/* Bottom line */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
        </motion.div>
      </div>
    </div>
  );
}