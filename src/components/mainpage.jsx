import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Name from './Name';
import me from '../assets/lovely.jpeg';
import SplitText from './Hello';
import CurvedLoop from "./CurvedLoop";

import { Menu, X } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "Skills", link: "#skills" },
    { label: "Achievements", link: "#ach" },
    { label: "MyStory", link: "#ms" },   
    { label: "Projects", link: "#projects" },
    { label: "Experience", link: "#experience" },
    { label: "Certificates", link: "#certification" },
    { label: "Resume", link: "#Resume" },
    { label: "Connect", link: "#connect" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const [menuOpen, setMenuOpen] = useState(false);

 const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className="min-h-screen  font-sans text-white overflow-hidden bg-black">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob1" />
  {/* Blob 2 */}
     <div className="absolute top-1/3 right-20 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-2xl animate-blob2" />
  {/* Blob 3 */}
  
  {/* Blob 4 */}
  <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob4" />
  {/* Blob 5 */}
  <div className="absolute top-1/4 left-[55%] w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob5" />
  {/* Blob 6 */}
  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-2xl animate-blob6" />

      {/* NAVBAR */}
   <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md p-3 shadow-md border-b border-white/10"
          : "bg-transparent p-4"
      }`}
      style={{ fontFamily: "poppins" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between md:justify-center">
     

        {/* Hamburger Icon */}
        <div className="md:hidden absolute top-8 right-6">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Centered Links on Desktop */}
        <div className="hidden md:flex gap-6 text-sm md:text-base absolute left-1/2 transform -translate-x-1/2" >
          {navLinks.map((nav, i) => (
            <motion.a
              key={i}
              href={nav.link}
              style={{ fontFamily: "poppins" }}
              whileTap={{ scale: 0.95, boxShadow: "0 0 10px #7fdf7c" }}
              whileHover={{ scale: 1.1 }}
              {...(nav.download && { download: true })}
              className="relative px-3 py-1 text-white transition-all duration-300 rounded hover:bg-white/10 hover:text-[#7fdf7c] active:scale-95"
            >
              {nav.label}
            </motion.a>
          ))}
        </div>
      </div>

     {/* Mobile Dropdown */}
{menuOpen && (
  <div className="md:hidden px-6 pb-4 flex flex-col items-center space-y-3 bg-black/80 backdrop-blur-md">
    {navLinks.map((nav, i) => (
      <motion.a
        key={i}
        href={nav.link}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setMenuOpen(false); // 👈 closes the menu
        }}
        className="text-white text-base px-4 py-2 w-full text-center rounded hover:bg-white/10 hover:text-[#7fdf7c] transition-all duration-300"
      >
        {nav.label}
      </motion.a>
    ))}
  </div>
)}

    </nav>

      {/* Hero Scrolling Text */}
      <CurvedLoop
        marqueeText="Code ✦ Create ✦ Elevate ✦"
        speed={3}
        curveAmount={150}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      {/* Main Section */}
    <section
  id="home"
  className=" px-4 sm:px-6 md:px-20 min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 relative z-10"
>
  {/* Left: Text Section */}
  <motion.div
    className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    
  >
    <div style={{fontFamily:"Bebas Neue"}}>

       <SplitText
  text="Hello"
  className="text-8xl  text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
    </div>
   
    <h2 className="text-[1.5rem]  text-[#85c1e9] font-bold">I AM</h2>
    <Name />
    <p className="text-base sm:text-lg  text-[whitesmoke] leading-relaxed max-w-xl  mx-auto md:mx-0" >
     Full Stack & Flutter Developer focused on building scalable, high performance digital experiences that blend clean design with real world functionality. With experience in MERN stack, cloud integration, AI driven systems, and cross platform mobile development, I love turning complex ideas into intuitive products that users genuinely enjoy. Constantly exploring, learning, and innovating - I build with both creativity and purpose.    </p>
  </motion.div>

  {/* Right: Profile Image + Tags */}
  <motion.div
    className="w-full md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0 z-10"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="relative w-[240px] sm:w-[270px] md:w-[320px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 p-2 border border-white/10 shadow-lg transform hover:scale-105 transition duration-500">
      <img
        src={me}
        alt="me"
        className="w-full h-auto object-cover rounded-2xl"
      />
    </div>

    {/* BADGES */}
    <div className="flex flex-wrap justify-center mt-4 gap-2 sm:gap-3 px-4">
      {["Frontend Dev", "Backend Dev", "MERN Stack","Web Dev"].map((tag, i) => (
        <span
          key={i}
          className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:border-[#7fdf7c] hover:text-[#7fdf7c]"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
</section>

    </div>
  );
}
