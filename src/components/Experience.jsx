import React from 'react';
import { Briefcase, Calendar, Code, User, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ExperienceSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black py-16 px-4 sm:px-6 md:px-20">
      {/* Section Title */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-100 mb-10 flex justify-center items-center gap-2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Experience
        <motion.span
          className="text-yellow-400"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [1, 0.8, 1],
            rotate: [0, 15, -15, 0],
            filter: [
              "drop-shadow(0 0 2px #facc15)",
              "drop-shadow(0 0 4px #facc15)",
              "drop-shadow(0 0 2px #facc15)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.span>
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-sm shadow-2xl rounded-3xl p-4 sm:p-6 md:p-10"
      >
        <div className="flex flex-col md:flex-row gap-8 sm:gap-10">
          {/* Left & Center */}
          <div className="md:w-2/3 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-200 p-2 sm:p-3 rounded-full shadow-md">
                <Briefcase className="text-blue-700 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100">
                  College Website Developer
                </h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
                  Built a full-featured college website with a friend. Integrated admin panel for notices,
                  gallery, faculty applications, and more.
                </p>
              </div>
            </div>

            <ul className="space-y-3 pl-2 sm:pl-8 text-gray-300 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-gray-100" />
                Full-stack: React, Node.js, Express, MongoDB
              </li>
              <li className="flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-100" />
                Team of 2, close collaboration
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-100" />
                <span className="flex gap-2 items-center">
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md text-xs sm:text-sm">
                    June 2025
                  </span>
                  Duration: 1 Month
                </span>
              </li>
            </ul>
          </div>

         
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
