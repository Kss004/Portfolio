import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-white/10 text-neutral-100 mt-8 overflow-hidden">
      {/* Editorial decorative elements */}
      <div className="absolute top-8 right-20 w-6 h-6 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-neutral-500"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-16 w-8 h-8 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-slate-300"/>
        </svg>
      </div>
      <div className="absolute top-4 left-1/3 w-4 h-4 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-zinc-400"/>
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-4">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Brand Section - Editorial style */}
          <div className="md:col-span-6">
            <h3 className="text-2xl font-light text-neutral-100 mb-6">
              Shashwat
            </h3>
            <p className="text-neutral-300 mb-8 leading-relaxed max-w-md font-light">
              AI Engineer and Full Stack Developer passionate about building intelligent solutions 
              that drive innovation and create meaningful impact.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="https://github.com/Kss004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-100 transition-colors border-b border-transparent hover:border-white/60"
              >
                GitHub
              </Link>
              <Link 
                href="https://www.linkedin.com/in/kumar-shashwat-sandilya-b75332218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-100 transition-colors border-b border-transparent hover:border-white/60"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://ayamullah-khan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-100 transition-colors border-b border-transparent hover:border-white/60"
              >
                Portfolio
              </Link>
            </div>
          </div>
          
          {/* Quick Links - Editorial style */}
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider text-neutral-400 font-light mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="https://drive.google.com/file/d/1GE1bSnwt2H_4qgWVpb-dRtDAMIFQ2zI2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services - Editorial style */}
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider text-neutral-400 font-light mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  GenAI Development
                </Link>
              </li>
              <li>
                <Link 
                  href="https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  Data Science
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section - Editorial style */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-sm text-neutral-400 font-light">
            © {currentYear} Shashwat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;