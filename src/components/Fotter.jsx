import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo_2.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      className="w-full bg-gradient-to-br from-[#0a1a3b] via-[#10244f] to-[#1a1445] text-white py-12 px-6 md:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Remove max-w-7xl to make full width */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ===== Company Info with Logo ===== */}
        <div>
          <div
            className="cursor-pointer flex items-center gap-0 mb-4"
            onClick={() => navigate("/")}
          >
            <img
              src={Logo}
              alt="Merkeb Technologies Logo"
              className="h-14 md:h-16 w-auto"
            />
            <div className="text-white font-semibold text-sm md:text-base leading-none">
              <span className="text-2xl font-semibold block">Merkeb</span>
              <span className="text-sm block -mt-0.5">Technologies</span>
            </div>
          </div>
          <p className="text-white/90 leading-relaxed text-sm font-medium">
            We are a full-service web development and digital consultancy
            company. From static websites to full-stack solutions, we empower
            businesses through innovative and intelligent software.
          </p>
        </div>

        {/* ===== Services ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Our Services
          </h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-white transition cursor-pointer">
              UX/Ui design
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Web Applications
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Domain and Hosting
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Digital Consultancy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Website Maintenance
            </li>
          </ul>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/team">Our Team</Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/service">Services</Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/price">Pricing</Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* ===== Contact & Social ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaMapMarkerAlt className="text-white" />
            <span>Bahir Dar, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaPhone className="text-white" />
            <span>+251964866786</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaMapMarkerAlt className="text-white" />
            <span>Dessie, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaPhone className="text-white" />
            <span>+251 992467835</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaMapMarkerAlt className="text-white" />
            <span>Hawassa, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaPhone className="text-white" />
            <span>+251 921566341</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaMapMarkerAlt className="text-white" />
            <span>Adiss Abeba, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <FaPhone className="text-white" />
            <span>+251 939445408</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 mb-4">
            <FaEnvelope className="text-white" />
            <span>merkebtech1 @gmail.com</span>
          </div>

          {/* ==== Social Media Links ==== */}
          <div className="flex space-x-5 mt-4">
            <a
              href="https://t.me/merkeb_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-2xl transition-transform transform hover:scale-110"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com/merkeb_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-2xl transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583313303819"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-2xl transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@merkeb_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-2xl transition-transform transform hover:scale-110"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/in/merkeb-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-2xl transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/251964866786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-green-400 text-2xl transition-transform transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* ===== Bottom Footer Line ===== */}
      <div className="border-t border-blue-600 mt-10 pt-6 text-center text-white/70 text-sm w-full">
        © {new Date().getFullYear()} Merkeb Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}
