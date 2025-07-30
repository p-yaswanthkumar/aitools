import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import welcomeBg from "../assets/welcome.jpeg";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Signup() {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.state?.isAdmin || false;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Get existing users
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      
      // Check if email already exists
      const emailExists = existingUsers.some(user => user.email === formData.email);
      if (emailExists) {
        setErrors({ email: "Email already exists" });
        return;
      }
      
      // Create new user data
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: isAdmin ? "admin" : "user"
      };
      
      // Add to users array
      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      
      // Set current user and login
      localStorage.setItem("currentUser", JSON.stringify(userData));
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userRole", isAdmin ? "admin" : "user");
      
      // Navigate to welcome page after signup
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-row">
      {/* Left: Form */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-[#181a19]' : 'bg-white'}`}>
        <div className={`w-full max-w-md p-8 ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/20' : 'bg-gray-50 border-gray-200'} border rounded-lg`}>
          {/* Logo */}
          <div className="relative flex justify-center items-center mb-8">
            <div className={`${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'} p-4 rounded-full`}>
              <img src={logo} alt="Logo" className="h-16 w-auto" />
            </div>
            <button
              onClick={toggleTheme}
              className={`absolute right-0 p-2 rounded-full border border-[#19e6f7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${theme === 'dark' ? 'bg-[#232323] hover:bg-[#181a19] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-[#19e6f7]" />
              ) : (
                <MoonIcon className="h-5 w-5 text-[#19e6f7]" />
              )}
            </button>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-bold mb-4`}>Create Account</h2>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Join us as a {isAdmin ? "Admin" : "User"}</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-gray-700'}`}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/30 text-white placeholder-gray-400 focus:border-[#19e6f7]' : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'}`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-gray-700'}`}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/30 text-white placeholder-gray-400 focus:border-[#19e6f7]' : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'}`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/30 text-white placeholder-gray-400 focus:border-[#19e6f7]' : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'}`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{errors.email}</p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-gray-700'}`}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/30 text-white placeholder-gray-400 focus:border-[#19e6f7]' : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'}`}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{errors.password}</p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-gray-700'}`}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/30 text-white placeholder-gray-400 focus:border-[#19e6f7]' : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'}`}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90"
              style={{background: 'linear-gradient(90deg, #000000 0%, #1a1a1a 20%, #00d4aa 40%, #00a080 60%, #2a2a2a 80%, #000000 100%)'}}
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Already have an account?{" "}
              <Link to="/" className={`hover:underline ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-blue-600'}`}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block w-1/2 min-h-screen">
        <img src={welcomeBg} alt="Welcome" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}