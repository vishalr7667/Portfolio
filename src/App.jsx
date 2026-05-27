import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./assets/css/index.css";

export default function App() {
  const location = useLocation();
  
  // Custom Intersection Observer for subtle fade-up scroll animations (no libraries)
  // Re-runs on every path transition, also resetting the viewport scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Track all sections/cards with the animation classes
    const targets = document.querySelectorAll(".fade-up, .fade-in-left, .stagger-card");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [location.pathname]);

  return (
    <div className="bg-[#080D1A] text-[#D1D5DB] min-h-screen flex flex-col font-sans selection:bg-[#4F8EF7]/30 selection:text-[#F1F5F9]">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

