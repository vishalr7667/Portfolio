import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";

export default function Projects() {
  const projectsList = [
    {
      name: "LintLock",
      stack: ["Node.js", "Express", "MongoDB", "React", "Stripe", "Cloudinary"],
      tags: ["SaaS", "Multi-Tenant", "MERN"],
      bullets: [
        "Multi-tenant platform with 3-role system serving 200–500 active users; 35+ APIs with Stripe subscription billing and full webhook lifecycle management",
        "In-memory audit log queue batch-inserts via background worker every 5 seconds, keeping API response times unaffected by logging overhead"
      ],
      links: {
        github: "",
        live: ""
      }
    },
    {
      name: "InfyTracker",
      stack: ["Laravel 12", "MySQL", "spatie/permissions", "DomPDF", "Mailchimp", "Pusher"],
      tags: ["Enterprise", "Multi-Branch", "Laravel"],
      bullets: [
        "7-role hierarchy with branch-scoped data access; Artisan cron auto-generates and emails branch PDF reports daily across 2 office locations",
        "Full recruitment pipeline with 4 interview stages, Mailchimp campaign integration, and Pusher real-time announcements with per-employee read-tracking"
      ],
      links: {
        github: "",
        live: ""
      }
    },
    {
      name: "TerraByte LMS",
      stack: ["Next.js SSR", "Node.js", "MongoDB", "Agenda", "JWT"],
      tags: ["LMS", "Full Stack", "MERN"],
      bullets: [
        "Server-side content gating strips premium fields before API response, protecting paid content across 11 MongoDB collections",
        "Video progress auto-saved every 5 seconds; synced to MongoDB on pause or tab-close via visibilitychange event for seamless student resume-playback"
      ],
      links: {
        github: "",
        live: ""
      }
    },
    {
      name: "Shahi Libas",
      stack: ["Laravel", "MySQL", "PhonePe", "FFmpeg", "Intervention Image", "Queues"],
      tags: ["E-Commerce", "Laravel", "Payment"],
      bullets: [
        "PhonePe gateway with SHA256 checksum + server-to-server webhook dual-verification for tamper-proof payment confirmation on every order",
        "Newsletter queue chunked into 100 subscribers/job; media pipeline auto-converts images to WebP and trims product videos to 8 seconds via FFmpeg"
      ],
      links: {
        github: "",
        live: ""
      }
    },
    {
      name: "Event-Hub",
      stack: ["Next.js", "Node.js", "MongoDB", "Redis", "Cloudinary"],
      tags: ["Directory", "MERN", "Redis"],
      bullets: [
        "Redis-cached dashboard stats (60s TTL) + auth rate-limiting (10 req/min); compound index on city+eventType+status delivering sub-10ms vendor queries",
        "Bulk CSV importer with Mongoose transaction sessions for atomic writes across 4 collections with pre-check duplicate detection"
      ],
      links: {
        github: "",
        live: ""
      }
    },
    {
      name: "Saloon Management SaaS",
      stack: ["Node.js", "Express", "MongoDB", "React", "Mobile APIs"],
      tags: ["SaaS", "Multi-Tenant", "In Progress"],
      bullets: [
        "Multi-tenant platform for saloon chains with per-tenant data isolation, mobile employee app REST APIs, and super admin web dashboard",
        "Wallet management and subscription billing with platform-level controls for saloon owner access"
      ],
      links: {
        github: "",
        live: ""
      },
      isInProgress: true
    }
  ];

  const getTopBorderClass = (project) => {
    if (project.isInProgress) return "border-t-2 border-t-[#FBBF24]";
    if (project.tags.includes("MERN")) return "border-t-2 border-t-[#4F8EF7]";
    if (project.tags.includes("Laravel")) return "border-t-2 border-t-[#F472B6]";
    return "border-t-2 border-t-[#1E2D4A]";
  };

  return (
    <section id="projects" className="bg-[#080D1A] border-t border-[#1E2D4A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Typographically consistent Title & Underline */}
        <div className="mb-12 md:mb-16 fade-up">
          <h2 className="text-3xl md:text-[38px] font-semibold text-[#F1F5F9] leading-tight">
            Things I've Built
          </h2>
          <div 
            className="w-12 h-[3px] mt-3 mb-4 rounded-[2px]" 
            style={{ background: "linear-gradient(90deg, #4F8EF7, #38BDF8)" }}
          ></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => {
            const hasGithub = project.links.github && project.links.github !== "";
            const hasLive = project.links.live && project.links.live !== "";
            const topBorderClass = getTopBorderClass(project);

            return (
              <div 
                key={index}
                className="relative p-[1px] rounded-xl bg-[#1E2D4A] hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#38BDF8] transition-all duration-300 shadow-md group hover:-translate-y-1 fade-up"
              >
                {/* Inner Card Content */}
                <div className={`bg-[#111827] rounded-[11px] p-6 h-full flex flex-col justify-between ${topBorderClass}`}>
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg md:text-[20px] font-semibold text-[#F1F5F9]">
                            {project.name}
                          </h3>
                          {project.isInProgress && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/20">
                              In Progress
                            </span>
                          )}
                        </div>
                        {/* Stack string representation */}
                        <p className="text-xs text-[#D1D5DB]/60 font-mono">
                          {project.stack.join(" · ")}
                        </p>
                      </div>

                      {/* Labeled Code / Live Buttons */}
                      <div className="flex items-center gap-2">
                        {/* Code Button */}
                        {hasGithub ? (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6B7280] hover:text-[#4F8EF7] border border-[#1E2D4A] rounded-lg px-2.5 py-1 transition-colors bg-[#111827]"
                          >
                            <Code size={12} />
                            <span>Code</span>
                          </a>
                        ) : (
                          <div 
                            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6B7280] opacity-30 border border-[#1E2D4A] rounded-lg px-2.5 py-1 cursor-not-allowed group relative bg-[#111827]"
                          >
                            <Code size={12} />
                            <span>Code</span>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#111827] border border-[#1E2D4A] text-[10px] text-[#F1F5F9] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md z-20">
                              Private repo
                            </div>
                          </div>
                        )}

                        {/* Live Button */}
                        {hasLive ? (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6B7280] hover:text-[#4F8EF7] border border-[#1E2D4A] rounded-lg px-2.5 py-1 transition-colors bg-[#111827]"
                          >
                            <ExternalLink size={12} />
                            <span>Live</span>
                          </a>
                        ) : (
                          <div 
                            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6B7280] opacity-30 border border-[#1E2D4A] rounded-lg px-2.5 py-1 cursor-not-allowed group relative bg-[#111827]"
                          >
                            <ExternalLink size={12} />
                            <span>Live</span>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#111827] border border-[#1E2D4A] text-[10px] text-[#F1F5F9] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md z-20">
                              Private repo
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description Bullets */}
                    <ul className="space-y-3 mb-6 list-none text-sm md:text-base leading-[1.6]">
                      {project.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="relative pl-5 text-[#D1D5DB]">
                          <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#4F8EF7]"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags footer - matching skills pills design */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E2D4A]">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] rounded-full text-xs text-[#E2E8F0] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
