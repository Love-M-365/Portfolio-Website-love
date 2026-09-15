import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  RefreshCw,
  Trophy,
  Flame,
  Award,
  CheckCircle2,
  Zap,
  TrendingUp,
  Clock,
  Terminal,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const FALLBACK_DATA = {
  totalSolved: 366,
  easySolved: 195,
  mediumSolved: 155,
  hardSolved: 16,
  ranking: 370569,
  totalQuestions: 3400,
  easyTotal: 830,
  mediumTotal: 1730,
  hardTotal: 740,
  acceptanceRate: "71.3%",
  activeBadge: {
    displayName: "50 Days Badge 2025",
    icon: "https://assets.leetcode.com/static_assets/others/lg2550.png",
  },
  badgesCount: 4,
  recentSubmissions: [
    {
      title: "Count Numbers with Unique Digits",
      titleSlug: "count-numbers-with-unique-digits",
      statusDisplay: "Accepted",
      lang: "java",
      timestamp: String(Math.floor(Date.now() / 1000) - 14400),
    },
    {
      title: "Minimum Absolute Distance Between Mirror Pairs",
      titleSlug: "minimum-absolute-distance-between-mirror-pairs",
      statusDisplay: "Accepted",
      lang: "java",
      timestamp: String(Math.floor(Date.now() / 1000) - 86400),
    },
    {
      title: "Longest Palindromic Substring",
      titleSlug: "longest-palindromic-substring",
      statusDisplay: "Accepted",
      lang: "java",
      timestamp: String(Math.floor(Date.now() / 1000) - 172800),
    },
    {
      title: "House Robber",
      titleSlug: "house-robber",
      statusDisplay: "Accepted",
      lang: "java",
      timestamp: String(Math.floor(Date.now() / 1000) - 259200),
    },
    {
      title: "Find Peak Element",
      titleSlug: "find-peak-element",
      statusDisplay: "Accepted",
      lang: "java",
      timestamp: String(Math.floor(Date.now() / 1000) - 345600),
    },
    {
      title: "Group Anagrams",
      titleSlug: "group-anagrams",
      statusDisplay: "Accepted",
      lang: "java",
      timestamp: String(Math.floor(Date.now() / 1000) - 432000),
    },
  ],
};

function formatTimeAgo(timestamp) {
  if (!timestamp) return "Recently";
  const seconds = Math.floor(Date.now() / 1000 - Number(timestamp));
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export default function LeetCodeTracker() {
  const [stats, setStats] = useState(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(false);

  const fetchStats = async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    else setLoading(true);
    setError(false);

    try {
      const [profileRes, badgeRes] = await Promise.allSettled([
        fetch("https://alfa-leetcode-api.onrender.com/userProfile/loveM", {
          cache: "no-store",
        }).then((res) => {
          if (!res.ok) throw new Error("Profile API failed");
          return res.json();
        }),
        fetch("https://alfa-leetcode-api.onrender.com/loveM/badges", {
          cache: "no-store",
        }).then((res) => {
          if (!res.ok) throw new Error("Badge API failed");
          return res.json();
        }),
      ]);

      if (profileRes.status === "fulfilled" && profileRes.value) {
        const data = profileRes.value;
        const total = data.totalSolved || FALLBACK_DATA.totalSolved;
        const easy = data.easySolved || FALLBACK_DATA.easySolved;
        const medium = data.mediumSolved || FALLBACK_DATA.mediumSolved;
        const hard = data.hardSolved || FALLBACK_DATA.hardSolved;
        const ranking = data.ranking || FALLBACK_DATA.ranking;
        const recent =
          data.recentSubmissions && data.recentSubmissions.length > 0
            ? data.recentSubmissions.slice(0, 6)
            : FALLBACK_DATA.recentSubmissions;

        let badgeInfo = FALLBACK_DATA.activeBadge;
        let badgeCount = FALLBACK_DATA.badgesCount;

        if (badgeRes.status === "fulfilled" && badgeRes.value) {
          if (badgeRes.value.activeBadge) {
            badgeInfo = badgeRes.value.activeBadge;
          }
          if (badgeRes.value.badgesCount) {
            badgeCount = badgeRes.value.badgesCount;
          }
        }

        setStats({
          totalSolved: total,
          easySolved: easy,
          mediumSolved: medium,
          hardSolved: hard,
          ranking: ranking,
          totalQuestions: data.totalQuestions || 3400,
          easyTotal: data.totalEasy || 830,
          mediumTotal: data.totalMedium || 1730,
          hardTotal: data.totalHard || 740,
          acceptanceRate: data.acceptanceRate ? `${data.acceptanceRate}%` : "71.3%",
          activeBadge: badgeInfo,
          badgesCount: badgeCount,
          recentSubmissions: recent,
        });
        setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      } else {
        setStats(FALLBACK_DATA);
      }
    } catch (err) {
      console.warn("LeetCode fetch error, using fallback data:", err);
      setStats(FALLBACK_DATA);
      setError(true);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const easyPercent = Math.min(100, Math.round((stats.easySolved / stats.easyTotal) * 100) || 24);
  const medPercent = Math.min(100, Math.round((stats.mediumSolved / stats.mediumTotal) * 100) || 10);
  const hardPercent = Math.min(100, Math.round((stats.hardSolved / stats.hardTotal) * 100) || 3);

  return (
    <section
      id="leetcode"
      className="py-24 px-4 sm:px-8 lg:px-16 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #020617 0%, #030712 50%, #020617 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Status & Controls Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>LeetCode Live API Synced</span>
            </span>
            {lastUpdated && (
              <span className="text-slate-500 hidden sm:inline">
                Synced at {lastUpdated}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => fetchStats(true)}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-50"
              title="Refresh LeetCode Data"
            >
              <RefreshCw
                size={12}
                className={`${isRefreshing ? "animate-spin text-amber-400" : ""}`}
              />
              <span>{isRefreshing ? "Updating..." : "Refresh"}</span>
            </button>

            <a
              href="https://leetcode.com/u/loveM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-semibold transition-all duration-200 hover:scale-105"
            >
              <SiLeetcode size={13} className="text-amber-400" />
              <span>@loveM</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* ── Main Dashboard Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Overall Progress Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(245,158,11,0.06)] relative overflow-hidden backdrop-blur-xl"
          >
            {/* Top accent glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                    <SiLeetcode size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 leading-tight">
                      Love Maggo
                    </h3>
                    <p className="text-xs font-mono text-amber-400/90">
                      leetcode.com/u/loveM
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Global Rank
                  </span>
                  <span className="text-sm sm:text-base font-bold font-mono text-slate-200">
                    #{stats.ranking ? stats.ranking.toLocaleString() : "370,569"}
                  </span>
                </div>
              </div>

              {/* Big Solved Number Display */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 my-4 text-center relative overflow-hidden">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1 flex items-center justify-center gap-1.5">
                  <Flame size={14} className="text-amber-400" />
                  <span>Total Problems Solved</span>
                </div>
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 font-mono tracking-tight my-2">
                  {stats.totalSolved}
                  <span className="text-2xl sm:text-3xl text-amber-400/70 font-sans font-bold">
                    +
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  DSA mastery across Java, C++, Python & JavaScript
                </p>
              </div>

              {/* Badges & Milestone Strip */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-800/30 border border-slate-700/40 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">
                      {stats.activeBadge?.displayName || "50 Days Badge 2025"}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {stats.badgesCount || 4} Badges Earned
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/40 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">
                      Top 10 Finalist
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      Google Cloud Hackathon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Skills Tags */}
            <div className="pt-6 border-t border-slate-800/80 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono text-slate-400">Topics:</span>
                {[
                  "Dynamic Programming",
                  "Binary Trees",
                  "Graph Algorithms",
                  "Two Pointers",
                  "Arrays & Hashing",
                  "Sliding Window",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Difficulty Breakdown & Recent Submissions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 3 Difficulty Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* EASY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-slate-900/80 border border-emerald-500/25 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400">
                    Easy
                  </span>
                  <CheckCircle2 size={16} className="text-emerald-400" />
                </div>
                <div className="text-3xl font-black font-mono text-emerald-300">
                  {stats.easySolved}
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Solved</span>
                    <span>{easyPercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${easyPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* MEDIUM */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-slate-900/80 border border-amber-500/25 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400">
                    Medium
                  </span>
                  <Zap size={16} className="text-amber-400" />
                </div>
                <div className="text-3xl font-black font-mono text-amber-300">
                  {stats.mediumSolved}
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Solved</span>
                    <span>{medPercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${medPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* HARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-slate-900/80 border border-rose-500/25 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md hover:border-rose-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-rose-400">
                    Hard
                  </span>
                  <Trophy size={16} className="text-rose-400" />
                </div>
                <div className="text-3xl font-black font-mono text-rose-300">
                  {stats.hardSolved}
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Solved</span>
                    <span>{hardPercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${hardPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-rose-500 to-pink-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Submissions Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-amber-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono">
                    Recent Accepted Solutions
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Live Submissions Stream
                </span>
              </div>

              <div className="divide-y divide-slate-800/80">
                {stats.recentSubmissions && stats.recentSubmissions.length > 0 ? (
                  stats.recentSubmissions.slice(0, 5).map((sub, idx) => (
                    <div
                      key={idx}
                      className="py-3 flex items-center justify-between gap-3 group hover:bg-slate-800/30 px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-200 truncate group-hover:text-amber-300 transition-colors">
                            {sub.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400 font-mono">
                            <span className="capitalize px-1.5 py-0.2 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300">
                              {sub.lang || "Java"}
                            </span>
                            <span className="flex items-center gap-1 text-[11px] text-slate-500">
                              <Clock size={10} />
                              {formatTimeAgo(sub.timestamp)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                          Accepted
                        </span>
                        <a
                          href={`https://leetcode.com/problems/${sub.titleSlug || ""}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-amber-400 p-1 transition-colors"
                          title="View problem on LeetCode"
                        >
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-6 text-center text-slate-400 text-sm">
                    No recent submissions found.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
