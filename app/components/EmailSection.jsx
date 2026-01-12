"use client";
import { useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (response.ok) {
        console.log("Message sent successfully:", result);
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        console.error("Failed to send message:", result);
        setError("Failed to send message. Please try again or contact me directly.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-8 overflow-hidden bg-transparent"
    >
      {/* Editorial decorative elements */}
      <div className="absolute top-20 left-10 w-10 h-10 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-blue-500"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-20 w-8 h-8 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-pink-500"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Editorial header */}
        <div className="mb-20">
          <div className="grid md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-8">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-400 font-light mb-8 block">
                04 — Contact
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-neutral-100 mb-4 leading-[0.8] tracking-tight">
                Let's
              </h2>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-neutral-500 leading-[0.8] tracking-tight">
                Connect
              </h3>
            </div>
            
            {/* Minimal contact info */}
            <div className="md:col-span-4 text-right space-y-2">
              <p className="text-sm text-neutral-400 uppercase tracking-wider">Email</p>
              <p className="text-neutral-100 font-light">shashwat.sandilya@gmail.com</p>
              <p className="text-sm text-neutral-400 uppercase tracking-wider mt-4">Location</p>
              <p className="text-neutral-100 font-light">New Delhi, India</p>
            </div>
          </div>
          
          <div className="mt-16 max-w-2xl">
            <p className="text-lg text-neutral-300 font-light leading-relaxed">
              Ready to discuss your next project? I'm available for new opportunities and collaborations.
              Let's build something amazing together using cutting-edge AI and web technologies.
            </p>
          </div>
        </div>

        {/* Main content grid - Editorial layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact methods - Editorial style */}
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-light text-neutral-100 mb-8 tracking-wide">
                Schedule a Call
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <Link
                    href="https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-white/10 hover:border-white/20 transition-all duration-300 p-6 bg-neutral-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-neutral-400 uppercase tracking-wider">30 Minutes</span>
                      <Calendar className="w-4 h-4 text-neutral-500" />
                    </div>
                    <h4 className="text-lg font-light text-neutral-100 mb-2">Quick Chat</h4>
                    <p className="text-neutral-300 text-sm font-light">
                      Perfect for initial discussions and project overviews
                    </p>
                  </Link>
                </div>

                <div className="group">
                  <Link
                    href="https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-white/10 hover:border-white/20 transition-all duration-300 p-6 bg-neutral-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-neutral-400 uppercase tracking-wider">60 Minutes</span>
                      <Calendar className="w-4 h-4 text-neutral-500" />
                    </div>
                    <h4 className="text-lg font-light text-neutral-100 mb-2">Project Deep Dive</h4>
                    <p className="text-neutral-300 text-sm font-light">
                      Detailed consultation for complex projects and collaborations
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social links - minimal */}
            <div>
              <h3 className="text-xl font-light text-neutral-100 mb-8 tracking-wide">
                Connect
              </h3>
              <div className="flex gap-8">
                <Link 
                  href="https://github.com/Kss004" 
                  target="_blank"
                  className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-100 transition-colors border-b border-transparent hover:border-white/60"
                >
                  GitHub
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/kumar-shashwat-sandilya-b75332218/" 
                  target="_blank"
                  className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-100 transition-colors border-b border-transparent hover:border-white/60"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form - Editorial style */}
          <div className="lg:mt-16">
            {emailSubmitted ? (
              <div className="text-center py-16">
                <div className="mb-8">
                  <div className="w-1 h-20 bg-white/70 mx-auto mb-6"></div>
                  <h3 className="text-3xl font-light text-neutral-100 mb-4">Message Sent</h3>
                  <p className="text-neutral-300 font-light">
                    Thank you for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-light text-neutral-100 mb-12 tracking-wide">
                  Send a Message
                </h3>
                
                {error && (
                  <div className="mb-8 p-4 border border-red-500/30 bg-red-500/10 text-red-200 text-sm">
                    {error}
                  </div>
                )}
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-8">
                    <div>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white/40 text-neutral-100 text-lg font-light py-4 px-0 focus:outline-none focus:ring-0 transition-colors placeholder-neutral-500"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white/40 text-neutral-100 text-lg font-light py-4 px-0 focus:outline-none focus:ring-0 transition-colors placeholder-neutral-500"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        id="message"
                        required
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white/40 text-neutral-100 text-lg font-light py-4 px-0 focus:outline-none focus:ring-0 transition-colors placeholder-neutral-500 resize-none"
                        placeholder="Tell me about your project..."
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="border border-white/20 hover:bg-white text-neutral-100 hover:text-neutral-950 font-light px-12 py-4 transition-all duration-300 disabled:opacity-50"
                    >
                      <span className="text-sm uppercase tracking-wider">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;