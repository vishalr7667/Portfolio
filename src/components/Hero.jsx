import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  // Retrieve resume URL from Vite environment variables
  const resumeUrl = import.meta.env.VITE_RESUME_URL;
  const isResumeAvailable = resumeUrl && resumeUrl !== "your_cloudinary_url_here" && resumeUrl.trim() !== "";

  return (
    <section 
      id="about" 
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between bg-[#080D1A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,142,247,0.12), transparent), #080D1A"
      }}
    >
      {/* Spacer to push content to center */}
      <div className="my-auto mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-8 fade-up visible">
          {/* Availability Badge */}
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E2D4A]/50 border border-[#1E2D4A] backdrop-blur-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]"></span>
            </span>
            <span className="text-[#D1D5DB] text-xs font-medium tracking-wide">
              Open to opportunities · Mohali · Chandigarh · Remote
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight text-[#F1F5F9]">
              Hi, I'm <span className="text-[#4F8EF7]">Vishal Kumar</span>
            </h1>
            <p className="text-[clamp(24px,3vw,36px)] font-semibold text-[#38BDF8] leading-none lg:whitespace-nowrap">
              Full Stack Developer · MERN & Laravel
            </p>
          </div>

          {/* Bio */}
          <p className="text-[#D1D5DB] text-base sm:text-lg leading-[1.6] max-w-xl">
            I build production-grade web applications — SaaS platforms, LMS systems, and multi-tenant tools — using Node.js, React, and Laravel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Primary CTA */}
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-[#4F8EF7] hover:bg-[#3B82F6] text-white font-semibold px-6 py-3.5 rounded-lg border-2 border-[#4F8EF7] transition-all transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_16px_rgba(79,142,247,0.4)] w-full sm:w-auto text-center"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Link>

            {/* Secondary CTA (Resume Download) */}
            <div className="relative group w-full sm:w-auto">
              {/* Resume is hosted on Cloudinary. Upload PDF to Cloudinary and set 
                  VITE_RESUME_URL in Vercel environment variables dashboard. */}
              <a
                href={isResumeAvailable ? resumeUrl : "#"}
                target={isResumeAvailable ? "_blank" : undefined}
                rel={isResumeAvailable ? "noopener noreferrer" : undefined}
                download={isResumeAvailable ? "Vishal_Kumar_Resume.pdf" : undefined}
                onClick={(e) => !isResumeAvailable && e.preventDefault()}
                className={`inline-flex w-full sm:w-auto items-center justify-center gap-2 border-2 border-[#D1D5DB] bg-transparent text-[#D1D5DB] font-semibold px-6 py-3.5 rounded-lg transition-all hover:border-white hover:text-white ${
                  !isResumeAvailable ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              
              {/* Custom Tooltip if resume URL is not configured */}
              {!isResumeAvailable && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#111827] border border-[#1E2D4A] text-xs text-[#F1F5F9] rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md z-20">
                  Resume coming soon
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Static Code Block (GitHub Dark themed) */}
        <div className="w-full max-w-lg lg:max-w-none mx-auto border border-[#30363D] rounded-xl overflow-hidden shadow-lg bg-[#0D1117] fade-up visible">
          {/* macOS window header */}
          <div className="bg-[#161B22] px-4 py-3 border-b border-[#30363D] flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80"></span>
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80"></span>
              <span className="w-3 h-3 rounded-full bg-[#10B981] opacity-80"></span>
            </div>
            <span className="text-xs font-mono text-[#D1D5DB]/60">developer.json</span>
            <div className="w-10"></div>
          </div>

          {/* Code display */}
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-[#E6EDF3]">
            <div><span className="text-[#E6EDF3]">{`{`}</span></div>
            <div className="pl-4"><span className="text-[#79C0FF]">"name"</span>: <span className="text-[#A5F3A5]">"Vishal Kumar"</span>,</div>
            <div className="pl-4"><span className="text-[#79C0FF]">"role"</span>: <span className="text-[#A5F3A5]">"Full Stack Developer"</span>,</div>
            <div className="pl-4"><span className="text-[#79C0FF]">"specialization"</span>: <span className="text-[#A5F3A5]">"MERN & Laravel"</span>,</div>
            <div className="pl-4"><span className="text-[#79C0FF]">"skills"</span>: <span className="text-[#E6EDF3]">{`[`}</span></div>
            <div className="pl-8"><span className="text-[#A5F3A5]">"React.js"</span>, <span className="text-[#A5F3A5]">"Next.js"</span>, <span className="text-[#A5F3A5]">"TypeScript"</span>,</div>
            <div className="pl-8"><span className="text-[#A5F3A5]">"Node.js"</span>, <span className="text-[#A5F3A5]">"Express.js"</span>, <span className="text-[#A5F3A5]">"MongoDB"</span>,</div>
            <div className="pl-8"><span className="text-[#A5F3A5]">"Laravel"</span>, <span className="text-[#A5F3A5]">"MySQL"</span>, <span className="text-[#A5F3A5]">"PostgreSQL"</span>, <span className="text-[#A5F3A5]">"Redis"</span></div>
            <div className="pl-4"><span className="text-[#E6EDF3]">{`]`}</span>,</div>
            <div className="pl-4"><span className="text-[#79C0FF]">"experience"</span>: <span className="text-[#A5F3A5]">"Full Stack Developer @ Protolabz"</span>,</div>
            <div className="pl-4"><span className="text-[#79C0FF]">"openToWork"</span>: <span className="text-[#A5F3A5]">true</span>,</div>
            <div className="pl-4"><span className="text-[#79C0FF]">"location"</span>: <span className="text-[#A5F3A5]">"Mohali · Chandigarh · Remote"</span></div>
            <div><span className="text-[#E6EDF3]">{`}`}</span></div>
          </div>
        </div>

      </div>

    
    </section>
  );
}
