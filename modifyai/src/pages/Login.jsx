import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Login({ isAdmin }) {
  const { theme, toggleTheme } = useTheme();
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.prefillEmail || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Default admin credentials (for demo)
  const DEFAULT_ADMINS = [
    { email: "admin@example.in", password: "admin123", role: "admin" },
    { email: "admin@enkonix.in", password: "admin123", role: "admin" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Clear previous login state
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");

    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Combine with default admins for demo
    const allUsers = [...users, ...DEFAULT_ADMINS];
    
    // Find matching user
    const user = allUsers.find(
      user => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid credentials");
      return;
    }

    // Check if role matches (only if isAdmin is explicitly set)
    if (isAdmin && user.role !== "admin") {
      setError("Please login as admin");
      return;
    }

    // Successful login
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("currentUser", JSON.stringify(user));
    
    // Redirect based on role
    navigate(user.role === "admin" ? "/admin-dashboard" : "/home");
  };

  return (
    <div className={theme === "dark" ? "form-container bg-[#181818] text-white" : "form-container bg-gray-50 text-gray-900"}>
      <div className="flex justify-end p-2">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full border border-[#19e6f7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${theme === 'dark' ? 'bg-[#232323] hover:bg-[#181a19] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5 text-[#19e6f7]" />
          ) : (
            <MoonIcon className="h-5 w-5 text-[#19e6f7]" />
          )}
        </button>
      </div>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none text-black"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm text-center bg-red-100 p-2 rounded">{error}</div>}
        <button
          type="submit"
          className="w-full py-3 mt-4 rounded bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center text-gray-500 form-footer">
        Don't have an account?{" "}
        <Link
          to="/signup"
          state={{ isAdmin }}
          className="text-blue-600 font-medium hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
