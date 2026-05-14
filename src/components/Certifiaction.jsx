import React from "react";
import freecodecamp from "../assets/freeCodeCamp.png";
import postman from "../assets/postmann.png";
import js from "../assets/jscertificate.png";
import iit from "../assets/iitcertify.png";
import google from "../assets/googlecertify.png"
import prompt from "../assets/prompt.png"
import genai from "../assets/genai.jpg"


const certificates = [
  {
    title: "Google Cloud Gen AI Exchange Hackathon Certificate",
    image: genai,
    issuer: "Google Cloud | Hack2skill",
    viewLink: genai, // or upload to public folder and give URL
  },
  {
    title: "Responsive Web Design Certificate",
    image: freecodecamp,
    issuer: "FreeCodeCamp",
    viewLink: freecodecamp, // or upload to public folder and give URL
  },
  {
    title: "Postman API Fundamentals",
    image: postman,
    issuer: "Postman",
    viewLink: postman,
  },
   {
    title: "JavaScript Course",
    image: js,
    issuer: "Udemy",
    viewLink: js,
  },
  {
    title: "Prompt Design In Vertex AI",
    image: prompt,
    issuer: "Google Cloud",
    viewLink: prompt,
  },
  {
    title: "Workshop On 5G PH layer at IIT",
    image: iit,
    issuer: "IIT",
    viewLink: iit,
  },
  
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-400">Issued by {cert.issuer}</p>
                <p className="mt-2 text-blue-400 text-sm underline">
                  Click to View
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
