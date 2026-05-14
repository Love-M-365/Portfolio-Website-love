import React, { useRef } from "react";
import { motion } from "framer-motion";


import spendImg from "../assets/spends.jpeg";
import weskillImg from "../assets/weskilll.jpeg";
import agrosarthiImg from "../assets/agrosathi.jpeg";
import nextstepImg from "../assets/nextstep.jpeg";
import maptyImg from "../assets/mapty.png";
import clarioImg from "../assets/clario.jpeg";

const projects = [
  {
  title: "Clario",
  description:
    "Clario is an AI-powered mental wellness and journaling mobile application built using Flutter and Firebase. It features multilingual AI chat support, mood-based journaling, relationship mapping, personalized wellness insights, and secure Google Authentication. The app integrates Google Cloud services and scalable backend APIs to deliver a smooth and responsive cross-platform experience.",
  video: "/videos/clarioD.mp4",
  image: clarioImg,
  tech: [
    "Flutter",
    "Firebase",
    "Google Cloud",
    "AI Chatbot",
    "Cloud Run",
    "Dart",
  ],
  github: "https://github.com/Love-M-365/clario",
},
  {
    title: "Spend Smart",
    description:
      "Spend Smart is an intelligent expense manager that simplifies finance tracking with OCR-based bill scanning and AI-powered category prediction. It supports friend-based expense splitting, monthly budgets, and mobile-first design.",
    video: "/videos/spends.mp4",
    image: spendImg,
    tech: ["React", "Node.js", "MongoDB", "OCR", "AI"],
    link: "https://spend-smart-gamma.vercel.app/",
    github: "https://github.com/Love-M-365/spendsmart",
  },
  {
    title: "WeSkill",
    description:
      "WeSkill is an AI-driven freelance marketplace where users post gigs, complete tasks, and get ranked by quality, efficiency, and reviews. It ensures equal opportunities for all skill levels.",
    video: "/videos/weskill.mp4",
    image: weskillImg,
    tech: ["React", "Express", "Tailwind", "AI Model"],
    link: "https://we-skill-lake.vercel.app/",
    github: "https://github.com/Love-M-365/weskill",
  },
  {
    title: "AgroSarthi",
    description:
      "AgroSarthi is a frontend web app for farmers providing real-time mandi prices, schemes, weather updates, and an interactive map using Leaflet.js. It's mobile-friendly and easy to navigate.",
    video: "/videos/agrosathi.mp4",
    image: agrosarthiImg,
    tech: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    github: "https://github.com/Love-M-365/Agrosarthi",
  },
  {
    title: "NextStep",
    description:
      "NextStep is an AI-based career guidance tool that analyzes user answers from a predefined questionnaire and predicts suitable career directions. It provides clear and personalized suggestions.",
    video: "/videos/nextstep.mp4",
    image: nextstepImg,
    tech: ["React", "Node.js", "Python", "Machine Learning"],
    github: "https://github.com/Love-M-365/NextStep",
  },
  {
    title: "Mapty",
    description:
      "Mapty is a fitness tracker where users can log running or cycling activities by selecting locations on a map. Built with Leaflet.js and pure JavaScript, it's a lightweight frontend app.",
    video: "/videos/mapty.mp4",
    image: maptyImg,
    tech: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    github: "https://github.com/Love-M-365/mapty",
  },
];

export default function ProjectsSection() {
  return (
    <section className="  z-10 py-24 px-6 sm:px-12 lg:px-24 bg-black">
      
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects That Speak for Me
        </motion.h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
          Showcasing walkthroughs and functionality of my latest work
        </p>
      </div>

      <div className="space-y-12 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const videoRef = useRef(null);

          return (
            <motion.div
              key={index}
              className="group relative bg-transparent border border-white/10  rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(59,130,246,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Section */}
           
                {/* Video Section */}
                <div
                  className="relative h-64 md:h-full"
                  onMouseEnter={() => videoRef.current?.play()}
                  onMouseLeave={() => videoRef.current?.pause()}
                >
                  <video
                       ref={videoRef}
                       src={project.video}
                       className="w-full h-full object-fit"
                        muted
                        loop
                        playsInline/>

                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 text-white flex flex-col justify-center bg-gradient-to-br from-white/5 to-white/10">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/20 text-xs px-3 py-1 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 hover:underline"
    >
      View Live →
    </a>
  )}
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-300 hover:underline"
    >
      GitHub →
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
