import React, { useEffect, useRef } from "react";

const timeline = [
  {
    year: "2021 – 2022",
    title: "Early Exploration",
    description:
      "Began learning Python and SQL through the school curriculum. Driven by curiosity, I went beyond the syllabus — building multiple mini-projects independently and laying the foundation for a serious programming journey.",
    tags: [
      { label: "Python", color: "blue" },
      { label: "SQL", color: "blue" },
      { label: "Mini-projects", color: "blue" },
    ],
    stats: [],
    journeyIcon: "🌱",
    bgSymbol: "{ }",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2" />
        <path d="M12 6v2M12 16v2M6 12H4M20 12h-2" />
      </svg>
    ),
  },
  {
    year: "2023",
    title: "Fundamentals in Development",
    description:
      "Gained proficiency in HTML, CSS, and C — earning the FreeCodeCamp Responsive Web Design certification along the way. Built a strong understanding of core programming concepts and web structure.",
    tags: [
      { label: "HTML & CSS", color: "blue" },
      { label: "C Language", color: "blue" },
      { label: "FreeCodeCamp Cert", color: "pink" },
    ],
    stats: [],
    journeyIcon: "🎓",
    bgSymbol: "</>",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    year: "Jan – Jun 2024",
    title: "Advancing in JavaScript & C++",
    description:
      "Mastered key JavaScript concepts and applied them to dynamic frontend projects. Explored C++ in parallel to sharpen algorithmic thinking and deepen understanding of data structures.",
    tags: [
      { label: "JavaScript", color: "blue" },
      { label: "C++", color: "blue" },
      { label: "Frontend", color: "blue" },
      { label: "Algorithms", color: "green" },
    ],
    stats: [],
    journeyIcon: "⚡",
    bgSymbol: "=>",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    year: "Jun 2024 – Jan 2025",
    title: "Hackathons & MERN Stack",
    description:
      "Competed in multiple hackathons, consistently ranking in the top 10. Built several personal projects using HTML, CSS, and JavaScript, and began transitioning into full-stack development with the MERN stack.",
    tags: [
      { label: "Top 10 Hackathons", color: "pink" },
      { label: "MERN Stack", color: "blue" },
      { label: "MongoDB", color: "blue" },
      { label: "Express.js", color: "blue" },
    ],
    stats: ["Top 10 finisher, multiple events"],
    journeyIcon: "🏆",
    bgSymbol: "[ ]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6l4-4 4 4" />
        <path d="M12 2v10.3" />
        <path d="M4.9 10C3.1 11.4 2 13.6 2 16a10 10 0 0 0 20 0c0-2.4-1.1-4.6-2.9-6" />
        <circle cx="12" cy="16" r="4" />
      </svg>
    ),
  },
  {
    year: "Jul – Aug 2025",
    title: "Full Stack Developer Intern — Ingraham College",
    description:
      "Built a complete college website using the MERN stack with a modern UI and seamless frontend–backend integration. Enabled faculty-friendly content management and handled end-to-end development including UI design, API integration, and database management.",
    tags: [
      { label: "First Internship", color: "green" },
      { label: "React.js", color: "blue" },
      { label: "Node.js", color: "blue" },
      { label: "MongoDB", color: "blue" },
    ],
    stats: ["End-to-end ownership", "Faculty CMS integration"],
    journeyIcon: "💼",
    bgSymbol: "API",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    year: "2025 — Milestone Year",
    title: "Clario, Spend Smart & Google Cloud Hackathon",
    description:
      "Launched 'Spend Smart' — a full-stack expense management app with OCR receipt scanning via Tesseract.js. Built 'Clario', a cross-platform Flutter mental wellness app with AI chatbot, journaling, and mood tracking. Became a finalist at the Google Cloud Exchange Hackathon 2025 (Top 10, Youth Mental Wellness) among 185,000+ teams.",
    tags: [
      { label: "Google Cloud Finalist", color: "pink" },
      { label: "Flutter", color: "blue" },
      { label: "Firebase", color: "blue" },
      { label: "185k+ teams", color: "green" },
    ],
    stats: [
      "Top 10 — Youth Mental Wellness",
      "350+ LeetCode problems solved",
      "6 hackathon shortlists",
    ],
    journeyIcon: "🚀",
    bgSymbol: "★",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    year: "Feb – June 2026",
    title: "SDE (Flutter) Intern — Onit India, IIIT Delhi",
    description:
      "Engineered two cross-platform mobile apps (Task Provider & Task Performer) for a startup at IIIT Delhi. Integrated AWS backend, Razorpay payment gateway, secure role-based auth, and shipped both apps to the Google Play Store.",
    tags: [
      { label: "Play Store Shipped", color: "green" },
      { label: "Flutter", color: "blue" },
      { label: "AWS", color: "blue" },
      { label: "Razorpay", color: "blue" },
      { label: "Startup", color: "pink" },
    ],
    stats: ["2 apps live on Play Store", "Payment gateway integration"],
    journeyIcon: "📱",
    bgSymbol: "▶",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    year: "July 2026 – Present",
    title: "Software Developer Intern — CausalFunnel Global Inc.",
    description:
      "Developing scalable web applications on Google Cloud Platform (GCP) using JavaScript, Python, and MongoDB. Engineering custom Shopify & WordPress solutions and optimizing production-grade features.",
    tags: [
      { label: "Current Role", color: "green" },
      { label: "GCP Cloud", color: "blue" },
      { label: "Python & JS", color: "blue" },
      { label: "Shopify", color: "pink" },
      { label: "San Francisco", color: "blue" },
    ],
    stats: ["GCP Web Apps", "E-commerce & API Engineering"],
    journeyIcon: "⚡",
    bgSymbol: "☁",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

const tagStyles = {
  blue: { background: "rgba(59,130,246,0.12)", color: "#60a5fa", border: "0.5px solid rgba(59,130,246,0.25)" },
  pink: { background: "rgba(236,72,153,0.10)", color: "#f472b6", border: "0.5px solid rgba(236,72,153,0.25)" },
  green: { background: "rgba(52,211,153,0.10)", color: "#6ee7b7", border: "0.5px solid rgba(52,211,153,0.25)" },
};

const statDotColors = { 0: "#60a5fa", 1: "#f472b6", 2: "#6ee7b7" };

const BG_SYMBOLS = [
  { sym: "const", x: 5, y: 8, size: 11, op: 0.06 },
  { sym: "{ }", x: 88, y: 12, size: 16, op: 0.07 },
  { sym: "=>", x: 15, y: 30, size: 14, op: 0.05 },
  { sym: "</>", x: 80, y: 35, size: 12, op: 0.06 },
  { sym: "fn()", x: 3, y: 55, size: 13, op: 0.05 },
  { sym: "[ ]", x: 90, y: 60, size: 15, op: 0.06 },
  { sym: "API", x: 12, y: 75, size: 14, op: 0.07 },
  { sym: "★", x: 85, y: 78, size: 20, op: 0.06 },
  { sym: "npm", x: 45, y: 5, size: 12, op: 0.05 },
  { sym: "git", x: 55, y: 92, size: 13, op: 0.05 },
  { sym: "0x1F", x: 70, y: 20, size: 10, op: 0.04 },
  { sym: "∑", x: 30, y: 88, size: 18, op: 0.06 },
];

// NODE_SIZE and LINE_OFFSET are shared constants to keep node + line aligned
const NODE_SIZE = 40;
// Desktop: line at 50%, node centred on it
// Mobile: line at NODE_SIZE/2 px from left edge of the timeline area

const MyStory = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.12 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="my-story"
      style={{
        position: "relative",
        background: "#050510",
        color: "#f0f0f0",
        padding: "60px 16px 80px",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500&family=Fira+Code:wght@400;500&display=swap');

        .story-card:hover {
          background: rgba(59,130,246,0.06) !important;
          border-color: rgba(59,130,246,0.3) !important;
          transform: translateY(-3px) !important;
        }
        .story-node:hover {
          border-color: #ec4899 !important;
          box-shadow: 0 0 20px rgba(236,72,153,0.4) !important;
          color: #ec4899 !important;
        }

        @keyframes float-sym-0 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(2deg)} }
        @keyframes float-sym-1 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-8px) rotate(-2deg)} }
        @keyframes float-sym-2 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(1deg)} }

        /* ── Desktop layout ── */
        .tl-wrapper {
          position: relative;
        }

        /* Vertical line — desktop: centred */
        .tl-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, rgba(59,130,246,0.8) 0%, rgba(167,139,250,0.6) 50%, rgba(236,72,153,0.8) 100%);
          border-radius: 2px;
          opacity: 0.5;
        }

        /* Each row */
        .tl-row {
          display: flex;
          align-items: flex-start;
          margin-bottom: 48px;
          position: relative;
        }

        /* Card half — desktop alternating */
        .tl-card-wrap {
          width: calc(50% - 36px);
          flex-shrink: 0;
        }
        .tl-row--left  .tl-card-wrap { margin-right: 36px; }
        .tl-row--right .tl-card-wrap { margin-left: 36px; }
        .tl-row--right { flex-direction: row-reverse; }

        /* Spacer on the empty side — desktop only */
        .tl-spacer {
          width: calc(50% - 36px);
          flex-shrink: 0;
        }

        /* Node — desktop: centred on the line */
        .tl-node {
          position: absolute;
          left: 50%;
          top: 16px;
          transform: translateX(-50%);
          width: ${NODE_SIZE}px;
          height: ${NODE_SIZE}px;
          border-radius: 50%;
          background: #080818;
          border: 2px solid rgba(59,130,246,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          color: #3b82f6;
          transition: border-color 0.3s, box-shadow 0.3s, color 0.3s;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(59,130,246,0.06);
          flex-shrink: 0;
        }

        /* ── Mobile layout (≤ 640px) ── */
        @media (max-width: 640px) {
          /* Line moves to left edge */
          .tl-line {
            left: ${NODE_SIZE / 2}px;
            transform: none;
          }

          /* Both left and right rows become the same: node left, card right */
          .tl-row,
          .tl-row--right {
            flex-direction: row !important;
            align-items: flex-start;
          }

          /* Node sits at the very left; position becomes static so it takes up space in the flex row */
          .tl-node {
            position: static !important;
            transform: none !important;
            left: auto !important;
            top: auto !important;
            flex-shrink: 0;
            align-self: flex-start;
            margin-top: 14px;
          }

          /* Card fills remaining space, left-aligned card wrap */
          .tl-card-wrap {
            width: auto !important;
            flex: 1 1 0;
            min-width: 0;
            margin-left: 14px !important;
            margin-right: 0 !important;
          }

          /* Hide spacer on mobile */
          .tl-spacer {
            display: none !important;
          }
        }
      `}</style>

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }} />

      {/* Floating code symbols */}
      {BG_SYMBOLS.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontFamily: "'Fira Code', monospace",
            fontSize: s.size,
            color: `rgba(96,165,250,${s.op})`,
            fontWeight: 500,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "0.05em",
            animation: `float-sym-${i % 3} ${6 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {s.sym}
        </div>
      ))}

      {/* Ambient orbs */}
      <div style={{ position: "absolute", width: 400, height: 400, top: -120, left: -80, borderRadius: "50%", background: "rgba(59,130,246,0.07)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, bottom: 0, right: -60, borderRadius: "50%", background: "rgba(167,139,250,0.06)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 200, height: 200, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "rgba(236,72,153,0.04)", filter: "blur(60px)", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: "linear-gradient(to right, transparent, rgba(96,165,250,0.6))" }} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "rgba(96,165,250,0.7)", letterSpacing: "0.25em", textTransform: "uppercase" }}>// my journey</span>
            <div style={{ height: 1, width: 40, background: "linear-gradient(to left, transparent, rgba(96,165,250,0.6))" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(26px, 5vw, 48px)",
              fontWeight: 900,
              letterSpacing: "0.04em",
              background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: 12,
            }}
          >
            My Story
          </h2>
          <p style={{ color: "rgba(240,240,240,0.4)", fontSize: 13, fontFamily: "'Fira Code', monospace", letterSpacing: "0.08em" }}>
            {timeline.length} chapters · {new Date().getFullYear() - 2021}+ years of growth
          </p>
        </div>

        {/* Timeline */}
        <div className="tl-wrapper">
          <div className="tl-line" />

          {timeline.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`tl-row ${isLeft ? "tl-row--left" : "tl-row--right"}`}
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  transition: `opacity 0.55s ease ${index * 0.05}s, transform 0.55s ease ${index * 0.05}s`,
                }}
              >
                {/* Card */}
                <div className="tl-card-wrap">
                  <div
                    className="story-card"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "0.5px solid rgba(255,255,255,0.09)",
                      borderRadius: 16,
                      padding: "20px 22px",
                      transition: "background 0.3s, border-color 0.3s, transform 0.3s",
                      cursor: "default",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Watermark */}
                    <div style={{
                      position: "absolute", right: 14, bottom: 10,
                      fontFamily: "'Fira Code', monospace", fontSize: 42,
                      color: "rgba(96,165,250,0.05)", fontWeight: 700,
                      pointerEvents: "none", userSelect: "none", lineHeight: 1,
                    }}>
                      {event.bgSymbol}
                    </div>

                    <div style={{ fontSize: 22, marginBottom: 8, lineHeight: 1 }}>{event.journeyIcon}</div>

                    <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#60a5fa", marginBottom: 5, textTransform: "uppercase" }}>
                      {event.year}
                    </p>
                    <h3 style={{ fontSize: 15, fontWeight: 500, color: "#f0f0f0", marginBottom: 8, lineHeight: 1.3 }}>
                      {event.title}
                    </h3>
                    <p style={{ fontSize: 12, lineHeight: 1.75, color: "rgba(240,240,240,0.5)" }}>
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {event.tags.map((tag, ti) => (
                        <span key={ti} style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.05em", padding: "3px 8px", borderRadius: 20, ...tagStyles[tag.color] }}>
                          {tag.label}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    {event.stats.length > 0 && (
                      <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 10 }}>
                        {event.stats.map((stat, si) => (
                          <span key={si} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 500, color: "rgba(240,240,240,0.65)" }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: statDotColors[si % 3], flexShrink: 0 }} />
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Icon node */}
                <div className="story-node tl-node">
                  <span style={{ width: 18, height: 18, display: "flex" }}>{event.icon}</span>
                </div>

                {/* Desktop spacer */}
                <div className="tl-spacer" />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: "rgba(96,165,250,0.4)", letterSpacing: "0.1em" }}>
            // and the story continues...
          </span>
        </div>
      </div>
    </section>
  );
};

export default MyStory;