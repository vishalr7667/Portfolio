import React from "react";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Protolabz eServices",
      location: "Phagwara, India",
      role: "Full Stack Developer",
      duration: "Apr 2024 – Present",
      bullets: [
        "Developed 35+ production REST APIs for auth, Stripe billing, and analytics serving 200–500 active users on LintLock SaaS platform",
        "Implemented Stripe webhook lifecycle (subscription.created, invoice.payment_succeeded, subscription.deleted) reducing billing sync errors to near-zero",
        "Resolved N+1 query issues via MongoDB aggregation pipelines and .lean() queries, cutting average API response time by ~200ms in production",
        "Built InfyTracker enterprise platform with 7 user roles, automated DomPDF report generation, and Artisan-scheduled daily cron jobs across 2 branches"
      ],
      stack: ["Node.js", "React", "Laravel", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="bg-[#080D1A] border-t border-[#1E2D4A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        
        {/* Left-Aligned Title (Typographically consistent with Skills and Projects) */}
        <div className="mb-12 md:mb-16 fade-up">
          <h2 className="text-3xl md:text-[38px] font-semibold text-[#F1F5F9] leading-tight">
            Work Experience
          </h2>
          <div 
            className="w-12 h-[3px] mt-3 mb-4 rounded-[2px]" 
            style={{ background: "linear-gradient(90deg, #4F8EF7, #38BDF8)" }}
          ></div>
        </div>

        {/* Timeline Container with custom gradient fade track */}
        <div className="relative pl-8 md:pl-12 space-y-12 py-4">
          
          {/* Vertical timeline line fading to transparent at the bottom */}
          <div 
            className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[1px]" 
            style={{ 
              background: "linear-gradient(to bottom, #1E2D4A 60%, transparent 100%)" 
            }}
          ></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative fade-up">
              
              {/* Company Logo placeholder replacing briefcase */}
              <span className="absolute -left-[45px] md:-left-[53px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] border border-[#4F8EF7] text-[#4F8EF7] font-bold text-sm ring-4 ring-[#080D1A]">
                P
              </span>

              {/* Card Container with Left Border accent */}
              <div className="bg-[#111827] border border-[#1E2D4A] border-l-[3px] border-l-[#4F8EF7] rounded-xl p-6 md:p-8 shadow-md transition-all hover:border-[#4F8EF7]/40">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#F1F5F9]">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-[#4F8EF7] mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-[#D1D5DB]/70 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-4 list-none text-base leading-[1.6] mb-6">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="relative pl-6 text-[#D1D5DB]">
                      <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-[#38BDF8]"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills Row */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E2D4A]">
                  {exp.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] rounded-full text-xs text-[#E2E8F0] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

          {/* Recruiter Callout Opportunities Card */}
          <div className="relative fade-up">
            
            {/* Pulsing Green Dot timeline anchor */}
            <span className="absolute -left-[45px] md:-left-[53px] top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#080D1A] border border-[#1E2D4A] ring-4 ring-[#080D1A]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]"></span>
              </span>
            </span>

            {/* Opportunities Card Content */}
            <div className="bg-[rgba(79,142,247,0.03)] border border-dashed border-[#1E2D4A] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#38BDF8] text-sm font-semibold tracking-wide uppercase">
                  Available for new opportunities
                </span>
              </div>
              <p className="text-[#D1D5DB] text-base leading-[1.6]">
                "Looking for Full Stack roles in Mohali · Chandigarh · Ludhiana · Jalandhar · Remote — Expected CTC: 7 LPA"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
