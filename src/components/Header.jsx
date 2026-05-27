import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine active section based on route path
  const activeSection = currentPath === "/" ? "about" : currentPath.substring(1);

  const githubUrl = import.meta.env.VITE_GITHUB_URL || "https://github.com/YOUR_USERNAME";

  const navLinks = [
    { id: "about", text: "About", path: "/" },
    { id: "skills", text: "Skills", path: "/skills" },
    { id: "experience", text: "Experience", path: "/experience" },
    { id: "projects", text: "Projects", path: "/projects" },
    { id: "contact", text: "Contact", path: "/contact" },
  ];

  // Listener to handle background changes on scroll past 50px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full backdrop-blur-[12px] transition-all duration-300 ${
          isScrolled 
            ? "bg-[#080D1A]/95 border-b border-[#1E2D4A]" 
            : "bg-[#080D1A]/60 border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Left: Monogram */}
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold tracking-wider text-[#F1F5F9] hover:text-[#38BDF8] transition-colors"
          >
            VK
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#38BDF8] pb-1 border-b-2 ${
                  activeSection === link.id 
                    ? "text-[#38BDF8] border-[#38BDF8]" 
                    : "text-[#D1D5DB] border-transparent hover:border-[#38BDF8]/40"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Right: GitHub Button */}
          <div className="hidden md:flex items-center">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1E2D4A] px-4 py-2 text-sm font-medium text-[#D1D5DB] transition-all hover:bg-[#1E2D4A] hover:text-[#F1F5F9] hover:border-[#38BDF8]"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#D1D5DB] hover:text-[#F1F5F9] p-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#080D1A]/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#111827] z-50 border-r border-[#1E2D4A] shadow-2xl p-6 md:hidden flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold tracking-wider text-[#F1F5F9]">VK</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#D1D5DB] hover:text-[#F1F5F9] p-1.5 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-md px-4 py-2.5 text-base font-medium transition-all ${
                  activeSection === link.id
                    ? "bg-[#1E2D4A] text-[#38BDF8] border-l-4 border-[#38BDF8] pl-3"
                    : "text-[#D1D5DB] hover:bg-[#1E2D4A] hover:text-[#F1F5F9]"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="pt-4 border-t border-[#1E2D4A]">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-[#1E2D4A] py-2.5 text-base font-medium text-[#D1D5DB] hover:bg-[#1E2D4A] hover:text-[#F1F5F9] transition-all hover:border-[#38BDF8]"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </>
  );
}
