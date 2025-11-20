import A1 from "../assets/A1.jpg"; // About image
import v1 from "../assets/v1.jpg"; // Vision image
import vision from "../assets/vision_1.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      className="min-h-screen bg-gray-50 pt-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* =====  Header Section ===== */}
      <div className="bg-white text-blue-900 py-8 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h1 className="text-5xl md:text-5xl font-semibold mb-6">About Us</h1>
          <p className="text-blue-950 mt-8 text-lg md:text-2xl max-w-3xl mx-auto">
            Explore How Merkeb Technologies empowers growth through scalable,
            future-ready innovation.
          </p>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="bg-white">
        {/* === About Section === */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-24">
          {/* Left side - Text */}
          <div className="flex flex-col justify-center py-15">
            <h2 className="text-5xl font-semibold mt-10 mb-5 text-blue-900">
              Merkeb Technology
            </h2>
            <p className="text-blue-950 font-medium leading-relaxed text-lg md:text-1g mb-6">
              <strong>Merkeb Technologies</strong> — we are a team of three
              passionate software engineering students and selles excutive
              turning ideas into real, meaningful digital solutions. Our
              expertise spans frontend and backend development, UI/UX design,
              and full-stack systems. Each member brings unique skills and
              creativity. Together, we build software that works flawlessly,
              looks beautiful, and makes a lasting impact.
            </p>
            <Link
              to="/team"
              className="w-max bg-gradient-to-r from-purple-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
             text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl 
             transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl flex justify-center items-start mt-10 md:mt-20">
            <img
              src={A1}
              alt="About Merkeb"
              className="w-full h-auto object-cover object-center max-h-[500px]"
            />
          </div>
        </div>

        {/* === 💡 What Drives Us === */}
        <div className="bg-blue-50 max-w-7xl mx-auto py-25 px-6 md:px-16 mb-24 mt-0 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 flex justify-center items-center gap-3 text-blue-900">
            What Drives Us?
          </h2>
          <p className="text-blue-950 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto font-medium">
            We started Merkeb Technology to help Ethiopian businesses thrive
            online. Our mission is to build modern, functional websites and
            software that drive growth. Every project is driven by creativity,
            quality, and impact. We believe technology should be simple,
            accessible, and useful for everyone.
          </p>
        </div>

        {/* === 🚀 Our Vision === */}
        <div className="">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 mb-10 mt-5">
            {/* Left - Text */}
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl flex justify-center items-start">
              <img
                src={vision}
                alt="Our Vision"
                className="w-full h-auto object-cover object-center max-h-[500px]"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-semibold mb-6 text-blue-900 flex items-center gap-3">
                Our Vision
              </h1>
              <p className="text-blue-950 leading-relaxed text-lg md:text-xl mb-4 font-medium">
                We dream of growing Merkeb into a hub for innovation, a team
                that not only builds software but also creates opportunities for
                other young developers in Ethiopia.
              </p>
              <p className="text-blue-900 leading-relaxed text-lg md:text-xl font-semibold">
                Let’s Build Something Together
              </p>
              <p className="text-blue-950 leading-relaxed text-lg md:text-xl">
                Have an idea or need a website? We’d love to help bring it to
                life the Merkeb way.
              </p>
              <Link
                to="/contact"
                className="w-max bg-gradient-to-r from-purple-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
             text-white font-medium px-6 mt-5 py-3 rounded-lg shadow-lg hover:shadow-xl 
             transition-all duration-300"
              >
                Join the vision
              </Link>
            </div>

            {/* Right - Image */}
          </div>
        </div>

        {/* === technologies we choose  === */}
        <div className="bg-light max-w-7xl mx-auto px-6 md:px-16 mb-24 mt-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
            Technologies we choose
          </h2>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* React */}
            <div className="flex items-center gap-3 p-4  ">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="2" />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="11"
                  ry="4"
                  transform="rotate(60 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="11"
                  ry="4"
                  transform="rotate(-60 12 12)"
                />
                <ellipse cx="12" cy="12" rx="11" ry="4" />
              </svg>
              <span className="text-gray-800 font-semibold">React</span>
            </div>

            {/* TypeScript */}
            <div className="flex items-center gap-3 p-4 bg-white">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path fill="#fff" d="M8 10h8v2h-3v5h-2v-5H8z" />
              </svg>
              <span className="text-gray-800 font-semibold">TypeScript</span>
            </div>

            {/* Node.js */}
            <div className="flex items-center gap-3 p-4 bg-white ">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
                <path d="M9 9h6v6H9z" />
              </svg>
              <span className="text-gray-800 font-semibold">Node.js</span>
            </div>

            {/* Django */}
            <div className="flex items-center gap-3 p-4 bg-white">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M6 4h6a4 4 0 0 1 0 8H8v8H6V4Z" />
                <path d="M16 8h2v12h-2z" />
              </svg>
              <span className="text-gray-800 font-semibold">Django</span>
            </div>

            {/* MongoDB */}
            <div className="flex items-center gap-3 p-4 bg-white">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2s5 5 5 11-5 9-5 9-5-3-5-9 5-11 5-11Z" />
              </svg>
              <span className="text-gray-800 font-semibold">MongoDB</span>
            </div>

            {/* Flask */}
            <div className="flex items-center gap-3 p-4 bg-white ">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M7 3h10M9 3v6a5 5 0 1 0 6 0V3" />
              </svg>
              <span className="text-gray-800 font-semibold">Flask</span>
            </div>

            {/* Python */}
            <div className="flex items-center gap-3 p-4 bg-white ">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 3h4a3 3 0 0 1 3 3v3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3Z" />
                <path d="M12 21H8a3 3 0 0 1-3-3v-3h10a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-3Z" />
              </svg>
              <span className="text-gray-800 font-semibold">Python</span>
            </div>

            {/* MySQL */}
            <div className="flex items-center gap-3 p-4 bg-white">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3Z" />
                <path d="M20 7v10c0 1.657-3.582 3-8 3s-8-1.343-8-3V7" />
              </svg>
              <span className="text-gray-800 font-semibold">MySQL</span>
            </div>

            {/* PHP */}
            <div className="flex items-center gap-3 p-4 bg-white">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 12h4a3 3 0 1 0 0-6H6v12" />
                <path d="M14 12h4a3 3 0 1 0 0-6h-2v12" />
              </svg>
              <span className="text-gray-800 font-semibold">PHP</span>
            </div>

            {/* Laravel */}
            <div className="flex items-center gap-3 p-4 bg-white">
              <svg
                viewBox="0 0 24 24"
                className="w-15 h-15 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M3 7l6-3 6 3v10l-6 3-6-3V7Z" />
                <path d="M9 4v16" />
                <path d="M15 7l6 3v7l-6 3V7Z" />
              </svg>
              <span className="text-gray-800 font-semibold">Laravel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
