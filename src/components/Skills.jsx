import React from "react";
import { Monitor, Server, Database as DatabaseIcon, Code2, Zap, Wrench } from "lucide-react";

export default function Skills() {
  const iconMap = {
    Monitor: Monitor,
    Server: Server,
    Database: DatabaseIcon,
    Code2: Code2,
    Zap: Zap,
    Wrench: Wrench
  };

  const skillGroups = [
    {
      title: "Frontend",
      accentColor: "#4F8EF7",
      borderColorClass: "border-l-[#4F8EF7] hover:border-[#4F8EF7]",
      textColorClass: "text-[#4F8EF7]",
      iconName: "Monitor",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS"],
    },
    {
      title: "Backend",
      accentColor: "#38BDF8",
      borderColorClass: "border-l-[#38BDF8] hover:border-[#38BDF8]",
      textColorClass: "text-[#38BDF8]",
      iconName: "Server",
      skills: ["Node.js", "Express.js", "REST API", "JWT Auth", "Controller-Service-Repository"],
    },
    {
      title: "Database",
      accentColor: "#818CF8",
      borderColorClass: "border-l-[#818CF8] hover:border-[#818CF8]",
      textColorClass: "text-[#818CF8]",
      iconName: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    },
    {
      title: "Laravel",
      accentColor: "#F472B6",
      borderColorClass: "border-l-[#F472B6] hover:border-[#F472B6]",
      textColorClass: "text-[#F472B6]",
      iconName: "Code2",
      skills: ["Laravel 11/12", "Eloquent ORM", "Artisan", "spatie/permissions", "Queue Jobs"],
    },
    {
      title: "Integrations",
      accentColor: "#FBBF24",
      borderColorClass: "border-l-[#FBBF24] hover:border-[#FBBF24]",
      textColorClass: "text-[#FBBF24]",
      iconName: "Zap",
      skills: ["Stripe", "PhonePe", "Cloudinary", "Pusher", "Agenda", "Mailchimp"],
    },
    {
      title: "Tools",
      accentColor: "#34D399",
      borderColorClass: "border-l-[#34D399] hover:border-[#34D399]",
      textColorClass: "text-[#34D399]",
      iconName: "Wrench",
      skills: ["Git", "Docker (Basic)", "Postman", "Vercel", "Render"],
    },
  ];

  return (
    <section id="skills" className="bg-[#080D1A] border-t border-b border-[#1E2D4A] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Title & Subtitle */}
        <div className="mb-12 md:mb-16 fade-up">
          <h2 className="text-3xl md:text-[38px] font-semibold text-[#F1F5F9] leading-tight">
            Skills & Expertise
          </h2>
          <div 
            className="w-12 h-[3px] mt-3 mb-4 rounded-[2px]" 
            style={{ background: "linear-gradient(90deg, #4F8EF7, #38BDF8)" }}
          ></div>
          <p className="text-[#6B7280] text-base">
            Technologies and tools I use to build production systems
          </p>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-[48px] items-start">
          
          {/* Left Column: Bio & Stats (35% Width on Desktop, Sticky on lg breakpoint) */}
          <div className="w-full lg:w-[35%] flex flex-col space-y-8 lg:sticky lg:top-[100px] fade-in-left">
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-[#38BDF8] border-l-2 border-[#4F8EF7] pl-3">
                Engineering Scalable Systems
              </h3>
              <p className="text-[#D1D5DB] text-base leading-[1.6]">
                I design and develop high-performance, secure, and scalable web applications. By bridging the agility of the MERN stack with the enterprise-grade patterns of Laravel, I build clean systems that deliver real-world business value.
              </p>
              <p className="text-[#D1D5DB] text-base leading-[1.6]">
                My focus is on architectural excellence — utilizing design patterns like Controller-Service-Repository, implementing secure session workflows, optimizing database queries, and integrating robust billing models.
              </p>
            </div>

            {/* "By the numbers" stats row with padding and background accent */}
            <div className="pt-8">
              <div className="bg-[rgba(79,142,247,0.05)] border border-[#1E2D4A] rounded-xl py-[20px] px-[24px]">
                <div className="grid grid-cols-3 gap-2 text-center md:flex md:justify-between md:items-center">
                  
                  {/* Years Exp */}
                  <div className="flex-1">
                    <div className="text-[36px] font-bold text-[#4F8EF7] leading-none mb-1.5">2+</div>
                    <div className="text-[10px] sm:text-[12px] text-[#6B7280] uppercase tracking-[1px] font-semibold">
                      Years Exp
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="w-[1px] h-10 bg-[#1E2D4A] self-center hidden md:block"></div>

                  {/* APIs Built */}
                  <div className="flex-grow flex-1 px-2 border-l border-r border-[#1E2D4A]/50 md:border-none">
                    <div className="text-[36px] font-bold text-[#4F8EF7] leading-none mb-1.5">35+</div>
                    <div className="text-[10px] sm:text-[12px] text-[#6B7280] uppercase tracking-[1px] font-semibold">
                      APIs Built
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="w-[1px] h-10 bg-[#1E2D4A] self-center hidden md:block"></div>

                  {/* Projects */}
                  <div className="flex-1">
                    <div className="text-[36px] font-bold text-[#4F8EF7] leading-none mb-1.5">8</div>
                    <div className="text-[10px] sm:text-[12px] text-[#6B7280] uppercase tracking-[1px] font-semibold">
                      Projects
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Cards Grid (65% Width on Desktop) */}
          <div 
            className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl"
            style={{ 
              background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(79,142,247,0.05), transparent)" 
            }}
          >
            {skillGroups.map((group, groupIndex) => {
              const IconComponent = iconMap[group.iconName];

              return (
                <div 
                  key={groupIndex} 
                  className={`bg-[#111827] border border-[#1E2D4A] border-l-[3px] hover:border-l-[4px] ${group.borderColorClass} rounded-xl p-6 transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] stagger-card`}
                  style={{ transitionDelay: `${groupIndex * 80}ms` }}
                >
                  {/* Card Title & Icon */}
                  <div className="flex items-center gap-2 mb-4">
                    {IconComponent && <IconComponent size={16} className={group.textColorClass} />}
                    <h4 className={`text-[15px] font-semibold ${group.textColorClass}`}>
                      {group.title}
                    </h4>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] rounded-[20px] text-[13px] text-[#E2E8F0] font-medium transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
