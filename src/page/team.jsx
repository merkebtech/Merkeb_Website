import { useState } from "react";
import A2 from "../assets/A2.jpg"; // Team image
import P2 from "../assets/P2.png";
import P1 from "../assets/P1.png";
import P3 from "../assets/P3.png";
import P4 from "../assets/P4.jpg";
import P5 from "../assets/P5.png";
import P6 from "../assets/P6.png";
import { Link } from "react-router-dom";

// === 👥 Team Members ===
const teamMembers = [
  {
    name: "Lidia Ashenafi",
    role: "Project manager & Front-end Developer",
    bio: "Driven to design smooth, responsive, and visually captivating user interfaces that deliver seamless experiences.",
    img: P1,
    link: "/team/lidia-ashenafi",
  },
  {
    name: "Ermiyas Sharew",
    role: "Full-Stack Developer",
    bio: "Focused on crafting intuitive, responsive, and visually stunning frontend experiences that elevate every digital product.",
    img: P2,
    link: "/team/ermias-sharew",
  },
  {
    name: "Sofonias Alebachew",
    role: "Backend Developer",
    bio: "Committed to creating efficient, secure, and high-performing backend systems that bring ideas to life.",
    img: P3,
    link: "/team/sofonias-alebe",
  },
  {
    name: "Finoteloza Wanaw",
    role: "Socal Media Manger",
    bio: "Innovative Social Media Manager skilled in digital strategy",
    img: P4,
    link: "/team/fenoteloza-wanaw",
  },
  {
    name: "Antenehe Seid",
    role: "Sales Executive at Hawassa",
    bio: "Results-driven Sales Executive skilled in client relations and revenue growth.",
    img: P5,
    link: "/team/fenoteloza-wanaw",
  },
  {
    name: "Ermiyas Getachew",
    role: "Sales Executive at Adiss Abeba",
    bio: "Performance-driven Sales Executive excelling in client partnerships and measurable revenue results.",
    img: P6,
    link: "/team/fenoteloza-wanaw",
  },
];

export default function Team() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleBio = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div
      className="min-h-screen bg-gray-50 pt-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ===== Blue Background Header Section ===== */}
      <div className="bg-white text-blue-900 py-8 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h1
            className="text-5xl md:text-5xl font-semibold mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Team
          </h1>
          <p className="text-blue-950 mt-8 text-lg md:text-2xl max-w-3xl mx-auto">
            Meet the talented individuals behind Merkeb Technologies who drive
            innovation and excellence in every project.
          </p>
        </div>
      </div>

      {/* ===== Main Content ===== */}

      <div className="bg-white">
        {/* === Team Section === */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-24">
          {/* Left side - Text */}
          <div className="flex flex-col justify-center py-15">
            <h2 className="text-5xl font-semibold mt-10 mb-5 text-blue-900">
              Meet Our Team
            </h2>
            <p className="text-blue-950 font-regular leading-relaxed text-base md:text-lg mb-6">
              Behind Merkeb Tech is a small but driven group of developers,
              designers, and problem-solvers who love turning ideas into digital
              reality. Each of us brings something different from clean UI
              design to solid backend systems and together. We collaborate on a
              variety of projects websites, apps, and custom tools, each one
              built with care, creativity, and a shared vision to make
              technology more meaningful in Ethiopia and beyond.
              <br />
              <span className="font-bold">
                Want to see what we’ve built together?
              </span>
            </p>
          </div>

          {/* Right side - Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl flex justify-center items-start mt-10 md:mt-20">
            <img
              src={A2}
              alt="About Merkeb"
              className="w-full h-auto object-cover object-center max-h-[500px]"
            />
          </div>
        </div>

        {/* === 👥 Team Members (Grid Layout) === */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-18">
          <h2 className="text-5xl font-semibold mt-5 mb-5 text-blue-900 align-center">
            Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left   rounded-2xl p-6  transition duration-300"
              >
                {/* Image */}
                <div className="w-full max-w-xs overflow-hidden rounded-lg  mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-76 object-cover"
                  />
                </div>
                {/* Name and Role */}
                <h3
                  className="text-3xl font-semibold text-blue-900 "
                  style={{ fontFamily: "'inter' ,sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-blue-950  font-medium text-1g mt-1">
                  {member.role}
                </p>
                <button
                  onClick={() => toggleBio(index)}
                  className="mt-3 text-blue-900 text-2xl font-medium flex items-center gap-1 "
                >
                  More Info
                  <span
                    className={`transform transition-transform duration -300 ${
                      openIndex === index ? "rotate-180" : " "
                    }`}
                  >
                    ⬇
                  </span>
                </button>
                {openIndex === index && (
                  <div className="bg-blue-50 p-4 rounded-lg w-full mt-2 animate-fadeIn">
                    <p className="text-blue-950 text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
