import React from "react";
import { ArrowDownCircle, Eye } from "lucide-react";
import resumePDF from "../assets/resume.pdf";
import resumeThumb from "../assets/resume-thumbnail.jpg"; 

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black  flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-4xl font-bold mb-10 animate-fade-in-up text-center">
        <span className="text-cyan-400">Resume</span> Showcase
      </h1>

      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-full max-w-xl flex flex-col items-center transition hover:scale-[1.01] animate-fade-in-up">
        <img
          src={resumeThumb}
          alt="Resume Preview"
          className="rounded-lg mb-6 shadow-xl w-full object-cover"
        />

        <div className="flex gap-4">

          <a
            href={resumePDF}
            download="LoveMaggo_Resume.pdf"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition duration-300 hover:scale-105"
          >
            <ArrowDownCircle size={20} />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
