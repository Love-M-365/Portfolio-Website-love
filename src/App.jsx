import React, { useEffect, useState } from 'react'

import Home from './components/mainpage'
import ProjectsSection from './components/ProjectSection'
import ResumePage from './components/Resume'
import Contact from './components/Contact'
import MyStory from './components/MyStory'
import CertificateSection from './components/Certifiaction'
import ExperienceSection from './components/Experience'
import GoogleHackathonAchievement from './components/Achieve'
import SkillsSection from './components/SkillsSection'

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div style={{ width: "100%", height: "100%", background: "#253237" }}>

        {/* ── Hero ── */}
        <div style={{ position: "relative" }}>
          <Home />
        </div>

        {/* ── Skills ── */}
        <SkillsSection/>

        {/* ── Achievement ── */}
        <section id="ach">
          <GoogleHackathonAchievement />
        </section>

         {/* ── Experience ── */}
        <section id="experience">
          <ExperienceSection />
        </section>

        {/* ── My Story ── */}
        <section id="ms">
          <MyStory />
        </section>

        {/* ── Projects ── */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* ── Certifications ── */}
        <section id="certification">
          <CertificateSection />
        </section>

       

        {/* ── Resume ── */}
        <section id="Resume">
          <ResumePage />
        </section>

        {/* ── Contact ── */}
        <section id="connect">
          <Contact />
        </section>

      </div>
    </div>
  );
}