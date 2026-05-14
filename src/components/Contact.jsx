import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_h15luri",    
        "template_pwo1gip",    
        form.current,
        "t3XCG8hb8e6cDQclE"      
      )
      .then(
        () => {
          setStatus("Message Sent Successfully ✅");
          form.current.reset();
        },
        () => {
          setStatus("Something went wrong ❌");
        }
      );
  };

  return (
    <footer className="w-full bg-sky-300/30 text-white backdrop-blur-lg px-6 py-12" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

        {/* LEFT: Social Media Links */}
        <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full md:w-1/2">
          <h2 className="text-6xl mt-12 font-bold text-black">Let's Connect</h2>
          <p className="text-gray-800">Follow or reach out to me on:</p>

          <div className="flex gap-6 mt-2">
            <a
              href="mailto:lovemaggo3605@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-cyan-600 transition"
            >
              <Mail size={36} />
            </a>
            <a
              href="https://linkedin.com/in/lovemaggo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-cyan-600 transition"
            >
              <Linkedin size={36} />
            </a>
            <a
              href="https://github.com/Love-M-365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-cyan-600 transition"
            >
              <Github size={36} />
            </a>
            <a
              href="https://instagram.com/love__lm_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-cyan-600 transition"
            >
              <Instagram size={36} />
            </a>
            <a
  href="https://leetcode.com/loveM"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black hover:text-yellow-500 transition"
>
  <SiLeetcode size={36} />
</a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-black mb-1">
            Contact <span className="text-cyan-600">Me</span>
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full transition duration-300 hover:scale-105"
          >
            <Send size={20} />
            Send Message
          </button>

          {status && (
            <p className="text-sm text-center mt-2 text-green-300">
              {status}
            </p>
          )}
        </form>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-gray-100 text-sm">
        © {new Date().getFullYear()} Love Maggo | All Rights Reserved
      </div>
    </footer>
  );
}
