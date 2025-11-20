import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import L7 from "../assets/L7.jpg";

import L7_2 from "../assets/L7_2.png";

import W1 from "../assets/W1.png";
import W2 from "../assets/W2.png";

import L4 from "../assets/L4.jpg";
import L1 from "../assets/L1.jpg";
import L2 from "../assets/L2.jpg";
import L3 from "../assets/L3.jpg";
import L22 from "../assets/L22.jpg";

// ================= SLIDES =================
const slides = [
  { image: L22, title: "Building Digital Empires with Brilliant Code" },
  { image: L4, title: "Innovating the Web with Passion and Precision" },
  {
    image: L2,
    title: "Empowering Businesses Through Smarter, Faster, Better Code",
  },
  { image: L1, title: "Transforming Ideas Into Digital Reality" },
  { image: L3, title: "Your Digital Growth, Powered by Brilliant Minds" },
];

// ================= UNIQUE CONTENT =================
const uniqueContent = [
  {
    title: "Creative, Affordable, and On Time",
    details:
      "At Merkeb Technology, our talented student developers bring fresh ideas and modern design to every project. We focus on delivering high-quality websites that look great, perform smoothly, and are always delivered on time.",
  },
  {
    title: "Innovative Development Approach",
    details:
      "We combine creativity with deep technical knowledge to craft digital solutions that stand out. Our team uses modern frameworks and performance-driven practices to ensure your business thrives online.",
  },
  {
    title: "Client-Centered Collaboration",
    details:
      "We work closely with our clients to reflect their brand and goals. Through transparent communication, we make sure the final product exceeds expectations.",
  },
  {
    title: "Future-Ready Solutions",
    details:
      "Our products are designed with scalability in mind, helping your business stay ahead in a fast-changing tech world.",
  },
];

// ================= COMPONENT =================
export default function Home() {
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  // Preload slides
  useEffect(() => {
    slides.forEach((s) => (new Image().src = s.image));
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= SLIDER ================= */}
      <section className="relative z-0 w-screen min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-50 bg-opacity-40 -z-10 pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].image}
            src={slides[index].image}
            alt={slides[index].title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none -z-10"
          />
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
              {slides[index].title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-[80vh] bg-white pt-24 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Left */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 leading-tight">
              We Build Smart, Modern Websites.
            </h1>
            <p className="mt-4 md:mt-6 text-1g md:text-2xl text-blue-950">
              From sleek designs to fast performance — we create sites that
              bring real results for small businesses, restaurants, and
              organizations.
            </p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="w-max bg-gradient-to-r from-purple-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Work Together
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={L7_2}
              alt="Hero Visual"
              className="w-full h-[320px] md:h-[460px] object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="bg-white text-white py-18 my-15"
      >
        {" "}
        <div className="max-w-6xl mx-auto px-6 text-center">
          {" "}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-blue-900 font-semibold mb-8 md:text-5xl"
          >
            {" "}
            Our Process{" "}
          </motion.h2>{" "}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-950 text-1g md:text-2xl mb-8"
          >
            {" "}
            From idea to launch — here's how we turn your vision into a fully
            functional website.{" "}
          </motion.p>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {" "}
            {/* Step 1 */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 bg-white rounded-2xl shadow transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
            >
              {" "}
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-blue-700 transition-transform transition-colors duration-300 group-hover:text-blue-800 group-hover:scale-105"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {" "}
                  <path d="M7 7.5A1.5 1.5 0 0 1 8.5 6h7A1.5 1.5 0 0 1 17 7.5v5A1.5 1.5 0 0 1 15.5 14H11l-3.293 3.293A1 1 0 0 1 6 16.586V7.5Z" />{" "}
                </svg>{" "}
              </motion.div>{" "}
              <h3 className="text-2xl text-blue-900 font-medium mb-2">
                {" "}
                1. Consultation{" "}
              </h3>{" "}
              <p className="text-blue-950">
                {" "}
                We discuss your goals, ideas, and what kind of site fits your
                brand best.{" "}
              </p>{" "}
            </motion.div>{" "}
            {/* Step 2 */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 bg-white rounded-2xl shadow transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
            >
              {" "}
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-blue-700 transition-transform transition-colors duration-300 group-hover:text-blue-800 group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {" "}
                  <path d="M7 8h10" /> <path d="M7 12h10" />{" "}
                  <path d="M7 16h7" />{" "}
                </svg>{" "}
              </motion.div>{" "}
              <h3 className="text-2xl text-blue-900 font-medium mb-2">
                {" "}
                2. Design & Build{" "}
              </h3>{" "}
              <p className="text-blue-950">
                {" "}
                Once you approve the design, our developers bring it to life
                using modern tools.{" "}
              </p>{" "}
            </motion.div>{" "}
            {/* Step 3 */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 bg-white rounded-2xl shadow transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
            >
              {" "}
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-blue-700 transition-transform transition-colors duration-300 group-hover:text-blue-800 group-hover:scale-105"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {" "}
                  <path d="M14.5 2c-1.933 0-3.5 1.567-3.5 3.5V8H8.5C6.567 8 5 9.567 5 11.5V13h2.586l-2.293 2.293A1 1 0 0 0 6 16.707L8.707 14H10.5v1.793L8.207 18.086a1 1 0 1 0 1.414 1.414L11.5 17.621V20a1 1 0 0 0 1.707.707l2.586-2.586H18.5c1.933 0 3.5-1.567 3.5-3.5V9.5c0-3.59-2.91-6.5-6.5-6.5Z" />{" "}
                </svg>{" "}
              </motion.div>{" "}
              <h3 className="text-2xl text-blue-900 font-medium mb-2">
                {" "}
                3. Launch & Support{" "}
              </h3>{" "}
              <p className="text-blue-950">
                {" "}
                After launch, we provide updates, maintenance, and ongoing
                support as needed.{" "}
              </p>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* ================= WHY UNIQUE ================= */}
      <section className="py-20 bg-gray-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">
        {/* Left */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-4">
            Why Businesses Choose Merkeb Tech
          </h2>
          <p className="text-blue-950 md:text-2xl leading-relaxed font-medium">
            At Merkeb Tech, we bring together creativity, affordability, and
            precision to deliver websites that stand out and perform.
          </p>
        </motion.div>

        {/* Right - Accordion */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {uniqueContent.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all p-5"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-gray-800 font-semibold">
                    {item.title}
                  </h3>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="text-yellow-600 text-2xl font-semibold focus:outline-none"
                    style={{
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {openIndex === i ? "−" : "+"}
                  </button>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 500 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden mt-3"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {item.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= OUR RECENT WORK ================= */}
      <section className="py-16 bg-white text-center px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-blue-900 font-bold mb-10"
        >
          Our Recent Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { img: W1, name: "Fetel Habesha dress Website" },
            { img: W2, name: "KARAWI Hotel Website" },
          ].map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={work.img}
                alt={work.name}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="py-4 bg-gray-50">
                <h3 className="text-xl text-gray-800 font-semibold">
                  {work.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
