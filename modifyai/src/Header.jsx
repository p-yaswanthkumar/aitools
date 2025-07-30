import React, { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "./assets/logo1.png";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRole } from "./context/RoleContext";
import { useScrollToTop } from "./hooks/useScrollToTop";

const servicesDropdown = [
  { name: "Content & Code Generation", path: "/services/content-generation" },
  { name: "Automation & Workflow Tools", path: "/services/automation-tools" },
  { name: "NLP & Language Intelligence", path: "/services/nlp-intelligence" },
  { name: "Computer Vision Solutions", path: "/services/computer-vision" },
  { name: "AI Chatbots & Assistants", path: "/services/ai-chatbots" },
  { name: "Data Analysis & Forecasting", path: "/services/data-analysis" },
];

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isAdmin, setIsAdmin } = useRole();
  const navigate = useNavigate();
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    console.log('Current user role:', localStorage.getItem("userRole"));
    console.log('Is authenticated:', localStorage.getItem("loggedIn"));
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Get user email and initials
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const email = user.email || "";
  let initials = "";
  if (user.firstName && user.lastName) {
    initials = `${user.firstName[0] || ''}${user.lastName[0] || ''}`.toUpperCase();
  } else if (email) {
    initials = email.slice(0, 2).toUpperCase();
  }

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <header className={
      `${theme === 'dark'
        ? 'bg-[#181a19] text-white'
        : 'bg-gray-100 text-black'} w-full flex items-center justify-between px-6 md:px-12 py-4 md:py-6 shadow-2xl sticky top-0 z-50 transition-all duration-300`
    }>
      {/* Logo */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => handleNavigation('/home')}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <img src={logo} alt="Logo" className="h-14 md:h-[60px] w-auto object-contain drop-shadow-[0_0_10px_#19e6f7]" />
        </button>
      </div>
      {/* Nav and Avatar aligned right */}
      <div className="flex items-center gap-4 ml-auto">
        <nav className={`hidden md:flex items-center gap-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {/* Home Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={`flex items-center gap-1 font-semibold text-lg focus:outline-none transition-colors duration-300
              ${theme === 'dark' ? 'text-white hover:text-[#19e6f7]' : 'text-black hover:text-[#19e6f7]'}`}
            >
              Home
              <FaChevronDown className="ml-1 text-xs" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50
                ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleNavigation('/home')}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200
                          ${theme === 'dark'
                            ? active ? 'bg-[#19e6f7] text-black' : 'text-white'
                            : active ? 'bg-[#19e6f7] text-black' : 'text-black'}`}
                      >
                        Home 1
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleNavigation('/second-home')}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200
                          ${theme === 'dark'
                            ? active ? 'bg-[#19e6f7] text-black' : 'text-white'
                            : active ? 'bg-[#19e6f7] text-black' : 'text-black'}`}
                      >
                        Home 2
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* About Us */}
          <button
            onClick={() => handleNavigation('/about-us')}
            className={`text-lg font-semibold focus:outline-none transition-colors duration-300
              ${theme === 'dark' ? 'text-white hover:text-[#19e6f7]' : 'text-black hover:text-[#19e6f7]'}`}
          >
            About Us
          </button>
          {/* Services Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={`flex items-center gap-1 font-semibold text-lg focus:outline-none transition-colors duration-300
              ${theme === 'dark' ? 'text-white hover:text-[#19e6f7]' : 'text-black hover:text-[#19e6f7]'}`}
            >
              <span className="flex items-center gap-1">
                Services
                <FaChevronDown className="ml-1 text-xs" />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50
                ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleNavigation('/services')}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200
                          ${theme === 'dark'
                            ? active ? 'bg-[#19e6f7] text-black' : 'text-white'
                            : active ? 'bg-[#19e6f7] text-black' : 'text-black'}`}
                      >
                        View All Services
                      </button>
                    )}
                  </Menu.Item>
                  <div className="border-t border-gray-300 my-1"></div>
                  {servicesDropdown.map((service) => (
                    <Menu.Item key={service.path}>
                      {({ active }) => (
                        <button
                          onClick={() => handleNavigation(service.path)}
                          className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200
                            ${theme === 'dark'
                              ? active ? 'bg-[#19e6f7] text-black' : 'text-white'
                              : active ? 'bg-[#19e6f7] text-black' : 'text-black'}`}
                        >
                          {service.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Blog */}
          <button
            onClick={() => handleNavigation('/blog')}
            className={`text-lg font-semibold focus:outline-none transition-colors duration-300
              ${theme === 'dark' ? 'text-white hover:text-[#19e6f7]' : 'text-black hover:text-[#19e6f7]'}`}
          >
            Blog
          </button>
          {/* Contact Us */}
          <button
            onClick={() => handleNavigation('/contact-us')}
            className={`text-lg font-semibold focus:outline-none transition-colors duration-300
              ${theme === 'dark' ? 'text-white hover:text-[#19e6f7]' : 'text-black hover:text-[#19e6f7]'}`}
          >
            Contact Us
          </button>
        </nav>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full border border-[#19e6f7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#19e6f7] mr-2
            ${theme === 'dark' ? 'bg-[#232323] hover:bg-[#181a19] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-[#19e6f7]" />
          ) : (
            <MoonIcon className="h-6 w-6 text-[#19e6f7]" />
          )}
        </button>
        {/* Avatar Dropdown */}
        {email && (
          <Menu as="div" className="relative">
            <Menu.Button
              className="flex items-center justify-center rounded-full bg-[#19e6f7] text-[#181a19] font-bold text-lg w-10 h-10 focus:outline-none"
              style={{ minWidth: 40, minHeight: 40 }}
              title={email}
            >
              {initials}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-[#232323] text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          active ? "bg-[#19e6f7] text-black" : "text-[#19e6f7]"
                        }`}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-[#19e6f7] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181a19] text-white p-6 flex flex-col space-y-4 md:hidden z-50 shadow-2xl animate-fade-in">
          <Link to="/home" className="text-lg hover:text-[#19e6f7] group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-[#19e6f7] transition-transform duration-300">Home</span>
          </Link>
          <Link to="/about-us" className="text-lg hover:text-[#19e6f7] group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-[#19e6f7] transition-transform duration-300">About Us</span>
          </Link>
          <div>
            <p className="text-[#19e6f7] font-semibold mb-2 text-lg">Services</p>
            <ul className="space-y-2">
              {servicesDropdown.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="block text-base hover:text-[#19e6f7] group focus:outline-none"
                  >
                    <span className="group-hover:scale-105 group-hover:text-[#19e6f7] transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/blog" className="text-lg hover:text-[#19e6f7] group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-[#19e6f7] transition-transform duration-300">Blog</span>
          </Link>
          <Link to="/contact-us" className="text-lg hover:text-[#19e6f7] group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-[#19e6f7] transition-transform duration-300">Contact Us</span>
          </Link>
        </div>
      )}
    </header>
  );
}