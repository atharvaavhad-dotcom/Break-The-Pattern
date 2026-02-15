import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-slate-900 shadow"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Bedre<span className="text-dark dark:text-white">’s</span> Company
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-300">

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className="hover:text-primary focus:outline-none"
            >
              Services
            </button>

            {/* Mega Menu */}
            {servicesOpen && (
              <div
                className="absolute left-0 mt-4 w-[600px] bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6 grid grid-cols-3 gap-6"
                role="menu"
              >
                <div>
                  <h4 className="font-semibold mb-2">AI & Data</h4>
                  <p className="text-sm text-gray-500">
                    Machine Learning, Analytics, GenAI
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cloud</h4>
                  <p className="text-sm text-gray-500">
                    AWS, Azure, DevOps, Migration
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Digital</h4>
                  <p className="text-sm text-gray-500">
                    Web, Mobile, UX Engineering
                  </p>
                </div>
              </div>
            )}
          </li>

          <li><Link to="/industries" className="hover:text-primary">Industries</Link></li>
          <li><Link to="/insights" className="hover:text-primary">Insights</Link></li>
          <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="px-3 py-1 border rounded"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <Link
            to="/prank"
            className="px-5 py-2 bg-primary text-white rounded hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
