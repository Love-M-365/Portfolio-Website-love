import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUp,
  MessageSquare,
  User,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lovemaggo3605@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_h15luri",
        "template_pwo1gip",
        form.current,
        "t3XCG8hb8e6cDQclE"
      )
      .then(
        () => {
          setStatus("success");
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 6000);
        },
        () => {
          setStatus("error");
          setIsSending(false);
          setTimeout(() => setStatus(""), 6000);
        }
      );
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Love-M-365",
      color: "#e2e8f0",
      bg: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.12)",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/lovemaggo",
      color: "#38bdf8",
      bg: "rgba(56,189,248,0.08)",
      border: "rgba(56,189,248,0.25)",
    },
    {
      name: "LeetCode",
      customIcon: SiLeetcode,
      url: "https://leetcode.com/u/loveM",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.08)",
      border: "rgba(245,158,11,0.25)",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/love__lm_",
      color: "#ec4899",
      bg: "rgba(236,72,153,0.08)",
      border: "rgba(236,72,153,0.25)",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:lovemaggo3605@gmail.com",
      color: "#34d399",
      bg: "rgba(52,211,153,0.08)",
      border: "rgba(52,211,153,0.25)",
    },
  ];

  const quickNav = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#ach" },
    { label: "LeetCode", href: "#leetcode" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#Resume" },
  ];

  return (
    <footer
      id="connect"
      className="w-full relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #030712 0%, #020617 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top Accent Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Branding, Details & Socials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase self-start"
            >
              <Sparkles size={13} />
              <span>Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-[1.1]"
            >
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Exceptional
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Have an exciting project, full-time opportunity, or idea to discuss? Feel free to reach out. I'm always open to discussing new engineering challenges, high-impact products, and collaborative opportunities.
            </motion.p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
              {/* Email Card */}
              <div className="bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 backdrop-blur-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:lovemaggo3605@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 truncate block transition-colors"
                    >
                      lovemaggo3605@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-slate-500 hover:text-cyan-400 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone</p>
                  <a
                    href="tel:+919315534818"
                    className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-300 transition-colors"
                  >
                    +91 93155 34818
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">
                    New Delhi, India · Remote Worldwide
                  </p>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Status</p>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                    Open to SDE Roles & Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Social Pill Buttons */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Connect on Profiles
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon || item.customIcon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background: item.bg,
                        border: `1px solid ${item.border}`,
                        color: item.color,
                      }}
                    >
                      <Icon size={16} />
                      <span>{item.name}</span>
                      <ExternalLink size={11} className="opacity-60" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Glassmorphism Contact Form (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Send a Message</h3>
                  <p className="text-xs text-slate-400">Usually responds within 24 hours</p>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@company.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, idea, or opportunity..."
                    rows={4}
                    required
                    className="w-full p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer text-sm"
                >
                  <Send size={16} className={isSending ? "animate-bounce" : ""} />
                  <span>{isSending ? "Sending Message..." : "Send Message"}</span>
                </button>

                {status === "success" && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2 justify-center">
                    <CheckCircle2 size={15} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs text-center">
                    Something went wrong. Please email directly at lovemaggo3605@gmail.com
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* ── Sub-Footer Strip ── */}
        <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300 font-mono tracking-tight">Love Maggo</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} All Rights Reserved</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center font-mono">
            {quickNav.map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {nav.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-all duration-200 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
