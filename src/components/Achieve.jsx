import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import badgee from "../assets/badge.jpg";
import meee from "../assets/meee.jpg";

export default function GoogleHackathonAchievement() {
  return (
    <div className="w-full bg-black text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-neutral-900 rounded-3xl p-12 md:p-16 shadow-xl border border-neutral-800 text-center mx-auto"
      >
        {/* Header */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <Trophy className="text-yellow-400" size={48} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Google Cloud Exchange Hackathon Finalist
          </h2>
        </div>

        {/* Images */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
          <img
            src={badgee}
            alt="Google Hackathon Badge"
            className="h-52 w-52 md:h-64 md:w-64 rounded-2xl shadow-lg border border-neutral-700 object-cover"
          />

          <img
            src={meee}
            alt="Your Photo"
            className="h-56 w-56 md:h-72 md:w-72 rounded-3xl shadow-lg border border-neutral-700 object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-medium">
            Selected among <span className="text-white font-bold">100 finalist teams</span> from
            over <span className="text-white font-bold">185,000+ teams</span> and
            <span className="text-white font-bold"> 278,000 participants</span> across India —
            this achievement remains one of the most defining milestones of my journey.
          </p>

          <p className="text-gray-400 text-lg md:text-xl mt-6 leading-relaxed">
            I built a complete youth mental wellness app using Flutter, Firebase, and Google Cloud 
            showcased live at The Leela Palace, Bengaluru. The experience, the expert feedback,
            and the environment of innovation shaped a major turning point in my growth as a developer.
          </p>

          <p className="text-gray-400 text-lg md:text-xl mt-6 leading-relaxed">
            The badge represents the achievement. The moment represents the journey.
            And the journey has only just begun.
          </p>
        </div>
      </motion.div>
    </div>
  );
}