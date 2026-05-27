import React, { useState } from "react";
import { Mail, Linkedin, Send, AlertCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/YOUR_USERNAME";
  const displayUsername = linkedinUrl.includes("/in/") ? `in/${linkedinUrl.split("/in/")[1].split("/")[0]}` : "LinkedIn Profile";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields before sending.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "b356009d-b38a-40eb-b0e3-bb8eafebc51a");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="bg-[#080D1A] border-t border-[#1E2D4A] py-20 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Toast Alert using #38BDF8 as accent */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-[#111827] border border-[#38BDF8] text-[#F1F5F9] px-4 py-3 rounded-lg shadow-lg animate-bounce">
          <CheckCircle className="text-[#38BDF8]" size={20} />
          <div>
            <p className="font-semibold text-sm">Message Sent!</p>
            <p className="text-xs text-[#D1D5DB]/70">Thank you for reaching out.</p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center fade-up">
          <h2 className="text-3xl md:text-[38px] font-semibold text-[#F1F5F9] leading-tight">
            Let's Work Together
          </h2>
          <div
            className="w-12 h-[3px] mt-3 mb-4 rounded-[2px] mx-auto"
            style={{ background: "linear-gradient(90deg, #4F8EF7, #38BDF8)" }}
          ></div>
          <p className="text-[#D1D5DB] text-base md:text-lg">
            Open to Full Stack roles in Mohali · Chandigarh · Ludhiana · Jalandhar · Remote
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Social Cards (Side by Side Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6 fade-up">
            <h3 className="text-xl font-semibold text-[#F1F5F9]">
              Contact Details
            </h3>
            
            {/* Cards side by side layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <a 
                href="mailto:vishalrajput845866@gmail.com" 
                className="bg-[#111827] border border-[#1E2D4A] hover:border-[#4F8EF7] rounded-xl p-5 flex flex-col justify-between items-start transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <div className="p-3 bg-[#4F8EF7]/10 text-[#4F8EF7] rounded-lg mb-4">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F1F5F9]">Email Me</h4>
                  <p className="text-xs text-[#D1D5DB]/70 mt-1 break-all">
                    vishalrajput845866@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href={linkedinUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111827] border border-[#1E2D4A] hover:border-[#38BDF8] rounded-xl p-5 flex flex-col justify-between items-start transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <div className="p-3 bg-[#38BDF8]/10 text-[#38BDF8] rounded-lg mb-4">
                  <Linkedin size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F1F5F9]">LinkedIn</h4>
                  <p className="text-xs text-[#D1D5DB]/70 mt-1">
                    {displayUsername}
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#111827] border border-[#1E2D4A] rounded-xl p-6 md:p-8 fade-up">
            <h3 className="text-xl font-semibold text-[#F1F5F9] mb-6">
              Send a Message
            </h3>

            {error && (
              <div className="mb-4 flex items-center gap-2 bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] px-4 py-3 rounded-lg text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#D1D5DB] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-[#080D1A] border border-[#1E2D4A] rounded-lg px-4 py-3 text-sm text-[#F1F5F9] placeholder-[#D1D5DB]/40 focus:outline-none focus:border-[#4F8EF7] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#D1D5DB] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your email address"
                  className="w-full bg-[#080D1A] border border-[#1E2D4A] rounded-lg px-4 py-3 text-sm text-[#F1F5F9] placeholder-[#D1D5DB]/40 focus:outline-none focus:border-[#4F8EF7] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#D1D5DB] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#080D1A] border border-[#1E2D4A] rounded-lg px-4 py-3 text-sm text-[#F1F5F9] placeholder-[#D1D5DB]/40 focus:outline-none focus:border-[#4F8EF7] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#4F8EF7] hover:bg-[#4F8EF7]/90 text-[#F1F5F9] font-medium py-3 rounded-lg transition-colors"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
