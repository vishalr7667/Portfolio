
import { ExternalLink } from "lucide-react";
import chetnas from "../assets/images/chetnas.png";
import protolabz from "../assets/images/protolabz.png";
import scanmatter from "../assets/images/Scansmatter.jpg";
import Ftt from "../assets/images/FTT.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Dr chetnas Hospital Management platform",
      description:
        "Dr chetnas Hospital Management platform is a platform for managing a hospital's patients, doctors, and appointments with a modern and responsive design And Dynamic Graph View.",
      tags: ["Php", "J-Query", "Ajax", "Chart.js", "Web Development"],
      links: {
        demo: "https:platform.drchetnas.com",
      },
      image: chetnas,
      featured: false,
    },
    {
      title: "Protolabz Reporting Portal",
      description: "Protolabz Reporting Portal is the official internal platform of our company, designed to facilitate daily reporting and project management. It supports nine distinct user roles, each with specific functionalities based on their permissions. The portal features dynamic graph visualizations for better insights and tracking. Built using Laravel Blade, it incorporates DataTables, AJAX, and jQuery to enhance interactivity and efficiency",
      tags: ["Laravel", "Blade", "DataTables", "AJAX", "jQuery", "Web Development"],
      links: {
        demo: "https://reporting.protolabzit.com",
      },
      image: protolabz,
      featured: true,
    },
    {
      title: "Scansmatter 3D Asset Marketplace",
      description: "Developed a curated 3D asset marketplace for digital artists, game developers, filmmakers, and architects. Implemented credit-based subscription and payment system (via Paddle), integrated file/data management with Bunny, and designed user-friendly workflows. Utilized Laravel Blade, DataTables, AJAX, and jQuery to create a dynamic and responsive platform.",
      tags: ["Laravel", "Blade", "DataTables", "AJAX", "jQuery", "Web Development", "Paddle", "Bunny"],
      links: {
        demo: "https://scansmatter.com/home",
      },
      image: scanmatter,
      featured: true,
    },
    {
      title: "FastTrackTutorials",
      description: "Enhanced an online tutorial platform specializing in 3D art education. Delivered course modules and contributed to outsource studio operations, providing 3D assets and environments for various projects. Utilized Laravel Blade, DataTables, AJAX, and jQuery to improve user experience and platform functionality.",
      tags: ["Laravel", "Blade", "DataTables", "AJAX", "jQuery", "Web Development", "Paddle", "Bunny"],
      links: {
        demo: "https://fasttracktutorials.com/",
      },
      image: Ftt,
      featured: true,
    }
  ];

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg md:h-[450px] ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-center group-hover:scale-10 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br md:max-h-[450px] md:h-[450px] md:overflow-auto from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-10 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    {project.featured && (
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    )}
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
