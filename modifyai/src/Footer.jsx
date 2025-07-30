import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import logo from "./assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";

export default function Footer({ theme }) {
  const navigate = useNavigate();
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className={theme === "dark" ? "bg-[#181818] text-gray-300" : "bg-gray-100 text-gray-900"}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-row items-start justify-between gap-8">
          {/* Company Info & Social */}
          <div className={theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"}>
            <img src={logo} alt="Logo" className="h-20 w-49 pr-20 mb-4 -ml-14 -mt-6" />
            <h3 className="text-xl font-bold mb-6 text-[#27bdb5]">AI Tools Company</h3>
            <p className={theme === "dark" ? "text-gray-300 text-sm leading-relaxed mb-6 max-w-xs" : "text-black text-sm leading-relaxed mb-6 max-w-xs"}>
              Leading the future with cutting-edge AI tools and solutions.
            </p>
            <div className="flex gap-4 justify-start">
              {[
                { icon: FaLinkedin, url: "https://www.linkedin.com", label: "LinkedIn" },
                { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
                { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
                { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group
                    ${theme === 'dark'
                      ? 'bg-[#333] text-white hover:bg-[#19e6f7] hover:text-black'
                      : 'bg-gray-200 text-[#181818] hover:bg-[#19e6f7] hover:text-black'}
                    hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg transition-transform duration-300 group-hover:scale-125" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"}>
            <h3 className="text-xl font-bold mb-6 text-[#27bdb5]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/home" },
                { label: "About Us", path: "/about-us" },
                { label: "Services", path: "/services" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={(theme === "dark" ? "text-gray-300" : "text-black") + " hover:text-blue-400 transition-colors duration-300 w-full text-left"}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"}>
            <h3 className="text-xl font-bold mb-6 text-[#27bdb5]">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "AI Chatbots & Assistants", path: "/services/ai-chatbots" },
                { name: "Content & Code Generation", path: "/services/content-generation" },
                { name: "Data Analysis & Forecasting", path: "/services/data-analysis" },
                { name: "NLP & Language Intelligence", path: "/services/nlp-intelligence" },
                { name: "Computer Vision Solutions", path: "/services/computer-vision" },
                { name: "Automation & Workflow Tools", path: "/services/automation-tools" },
              ].map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleNavigation(service.path)}
                    className={(theme === "dark" ? "text-gray-300" : "text-black") + " hover:text-blue-400 transition-colors duration-300 cursor-pointer w-full text-left"}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className={theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"}>
            <h3 className="text-xl font-bold mb-6 text-[#27bdb5]">Get In Touch</h3>
            <div className="space-y-4 mb-6 w-full max-w-xs">
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaPhoneAlt className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">+919390594407</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaEnvelope className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">ai@tools.in</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaMapMarkerAlt className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">India</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaClock className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">Mon - Fri: 9am - 6pm</span>
              </div>
            </div>
            <button 
              onClick={() => handleNavigation('/contact-us')}
              className="w-full bg-[#27bdb5] text-white font-bold py-3 px-3 rounded-lg hover:bg-[#12716c] transition-all duration-300 hover:scale-105"
            >
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={theme === "dark" ? "text-gray-400 text-sm mb-0 md:mb-0 text-center md:text-left" : "text-black text-sm mb-0 md:mb-0 text-center md:text-left"}>
            © {new Date().getFullYear()} AI Tools Company. All rights reserved.
          </p>
          <div className={theme === "dark" ? "flex gap-6 text-sm text-gray-400 justify-center md:justify-end" : "flex gap-6 text-sm text-black justify-center md:justify-end"}>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
