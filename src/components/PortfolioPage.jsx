// import React from "react";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#084258] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
      <div className="relative max-w-2xl border-x-4 border-[#4ECCA3] bg-gradient-to-tr from-gray-900 via-[#084258] to-gray-800 p-6 shadow-md">
        <span className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 text-6xl text-[#4ECCA3] font-serif">“</span>
        <h2 className="text-[#4ECCA3] text-2xl font-bold mb-4">WHO I AM?</h2>
        <p className="text-lg leading-relaxed text-white font-playfair">
            Hello! I’m Vishal Rajput, a passionate JavaScript developer specializing in creating innovative web solutions and user-friendly interfaces.
            Currently, I’m expanding into backend development to grow as a full-stack developer and create seamless, robust web applications.
            I’m a lifelong learner and innovator, driven by a desire to contribute to the developer community with new ideas and tools that deliver real value.
            I believe in writing clean, efficient code that enhances performance and scalability.
            Beyond coding, I enjoy exploring emerging technologies.
        </p>
        <span className="absolute bottom-0 right-0 transform translate-x-3 translate-y-9 text-6xl text-[#4ECCA3] font-serif">”</span>
      </div>
        <div className="image-container">
          {/* <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
