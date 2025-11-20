import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo_2.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="w-full bg-gradient-to-br from-[#0a1a3b] via-[#10244f] to-[#1a1445] text-white shadow-md fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-1">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center gap-3">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center gap-0 ml-10"
            onClick={() => handleLinkClick("/")}
          >
            <img
              src={Logo}
              alt="Merkeb Technologies Logo"
              className="h-14 md:h-16 w-auto"
            />
            <div className="text-white font-semibold text-sm md:text-base leading-none">
              <span className="text-xl font-semibold block">Merkeb</span>
              <span className="text-sm block -mt-0.5">Technologies</span>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 items-center">
            <li>
              <button
                onClick={() => handleLinkClick("/")}
                className="hover:text-blue-600 transition-colors duration-200 font-normal text-base"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/about")}
                className="hover:text-blue-200 transition-colors duration-200 font-normal text-lg"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/team")}
                className="hover:text-blue-200 transition-colors duration-200 font-normal text-lg"
              >
                Our Team
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/service")}
                className="hover:text-blue-200 transition-colors duration-200 font-normal text-lg"
              >
                Service
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/portfolio")}
                className="hover:text-blue-200 transition-colors duration-200 font-normal text-lg"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/price")}
                className="hover:text-blue-200 transition-colors duration-200 font-normal text-lg"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/contact")}
                className="hover:text-blue-200 transition-colors duration-200 font-normal text-lg"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="w-32"></div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => handleLinkClick("/")}
          >
            <img
              src={Logo}
              alt="Merkeb Technologies Logo"
              className="h-12 w-auto"
            />

            {/* ✅ Mobile Title Fixed */}
            <div className="text-white font-semibold leading-none">
              <span className="text-lg font-semibold block">Merkeb</span>
              <span className="text-sm block -mt-1">Technologies</span>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-600 pt-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick("/")}
                  className="w-full text-left py-2 hover:text-blue-200 transition-colors font-normal text-lg"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/about")}
                  className="w-full text-left py-2 hover:text-blue-200 transition-colors font-normal text-lg"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/team")}
                  className="w-full text-left py-2 hover:text-blue-200 transition-colors font-normal text-lg"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/service")}
                  className="w-full text-left py-2 hover:text-blue-200 transition-colors font-normal text-lg"
                >
                  Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/portfolio")}
                  className="w-full text-left py-2 hover:text-blue-200 transition-colors font-normal text-lg"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/price")}
                  className="w-full text-left py-2 hover:text-blue-200 transition-colors font-normal text-lg"
                >
                  Price
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/contact")}
                  className="w-full text-left py-2 hover:text-blue-200 transition-colors font-normal text-lg"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
