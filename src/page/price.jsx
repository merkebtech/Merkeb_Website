import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Packages Data
const packages = [
  {
    name: "Basic",
    price: "15,000 - 25,000 ETB",
    description:
      "A simple, clean website for your business with standard pages.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic Contact Form",
      "SEO Friendly",
    ],
  },
  {
    name: "Standard",
    price: "25,000 - 50,000 ETB",
    description:
      "Interactive website with advanced features, clickable forms, and dynamic content.",
    features: [
      "Up to 10 Pages",
      "Interactive Forms",
      "Gallery & Portfolio",
      "Basic Analytics Integration",
      "Responsive & SEO Friendly",
    ],
  },
  {
    name: "Premium E-Commerce",
    price: "50,000 - 100,000 ETB",
    description:
      "Full-featured e-commerce website with integrated backend system and online store.",
    features: [
      "Unlimited Pages",
      "Online Store Integration",
      "Secure Payment Gateway",
      "Inventory Management",
      "Customer Dashboard",
      "Full Analytics & SEO",
      "Responsive & Mobile Optimized",
    ],
  },
];

const PriceCard = ({ pkg }) => {
  const navigate = useNavigate();
  1;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between border-t-4 border-blue-950 mb-7"
    >
      <h3 className="text-2xl font-bold text-blue-900 mb-4">{pkg.name}</h3>
      <p className="text-blue-900  mb-6">{pkg.description}</p>
      <ul className="mb-6 space-y-2">
        {pkg.features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2 text-blue-950"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-blue-900 font-bold">✔</span>
            {feature}
          </motion.li>
        ))}
      </ul>
      <div className="text-xl font-bold text-gray-900">{pkg.price}</div>
      <button
        onClick={() => navigate("/contact")}
        className="mt-6 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-blue-700 hover:to-blue-800  text-white py-2 px-6 rounded-lg transition-all"
      >
        Get Started
      </button>
    </motion.div>
  );
};
export default function Price() {
  return (
    <div
      className="min-h-screen bg-gray-50 pt-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-5 mt-11 ">
          Our Website Development Packages are provided without including
          hosting fees
        </h1>
        <p className="text-blue-950 text-lg md:text-2xl max-w-3xl mx-auto">
          Choose the plan that fits your business needs. Simple, Standard, or
          fully Integrated E-Commerce.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <PriceCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
