import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = 2025; // As explicitly specified: "Built by Vishal Kumar · 2025"
  
  const githubUrl = import.meta.env.VITE_GITHUB_URL || "https://github.com/YOUR_USERNAME";
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/YOUR_USERNAME";

  return (
    <footer className="bg-[#080D1A] border-t border-[#1E2D4A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-[#D1D5DB]/60 text-sm font-medium">
          Built by Vishal Kumar · {currentYear}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#38BDF8] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#38BDF8] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:vishalrajput845866@gmail.com"
            className="text-[#6B7280] hover:text-[#38BDF8] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
