import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./Components/ui/button";
import Logo from "./assets/images/mesm.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiYoutube } from "react-icons/ci";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "Cyber Services", path: createPageUrl("CyberServices") },
    { name: "Entertainment", path: createPageUrl("Entertainment") },
    { name: "Graphics Design", path: createPageUrl("GraphicsDesign") },
    { name: "Construction", path: createPageUrl("Construction") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          :root {
            --primary-navy: #1e3a8a;
            --primary-gold: #f59e0b;
            --light-navy: #3b82f6;
            --dark-navy: #1e40af;
            --cream: #fef3c7;
            --text-dark: #1f2937;
            --text-light: #6b7280;
          }
        `}
      </style>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="flex items-center space-x-2"
            >
              <img
                src={Logo}
                alt="MESM Logo"
                className="w-10 h-10 rounded object-cover"
              />
              <span className="text-xl font-bold text-gray-900">
                MESM Company Ltd
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-blue-900 bg-blue-50"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-blue-900 bg-blue-50"
                      : "text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/254715825808"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>

      {/* Footer */}
      <footer className="bg-[#030024] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={Logo}
                  alt="MESM Logo"
                  className="w-10 h-10 rounded object-cover"
                />
              </div>
              <p className="text-gray-300 mb-4">
                Professional services across multiple sectors, delivering
                innovation and excellence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to={createPageUrl("CyberServices")}
                    className="hover:text-white"
                  >
                    Cyber Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Entertainment")}
                    className="hover:text-white"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("GraphicsDesign")}
                    className="hover:text-white"
                  >
                    Graphics Design
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Construction")}
                    className="hover:text-white"
                  >
                    Construction
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/mwangiamos15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/Amoh_20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/amos-mwangi-7570a7261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <CiLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100077753770516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://youtube.com/@amosmwangi2976?si=_WcOqBGZPGN0uHaT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <CiYoutube />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 MESM Company Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
