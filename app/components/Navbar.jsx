"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-transparent backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href={"/"}
          className="text-xl md:text-2xl font-light text-neutral-100 hover:text-neutral-300 transition-all duration-300"
        >
          Ayamullah Khan
        </Link>
        
        {/* Desktop Menu - Editorial style */}
        <div className="menu hidden md:flex md:items-center md:space-x-8" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          
          {/* Minimal CTA Button */}
          <Link
            href="https://calendly.com/ayamk/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider text-neutral-100 transition-colors border-white/40 border-b hover:text-white hover:border-white font-semibold px-4 py-2"
          >
            Book Call
          </Link>
        </div>
        
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
               className="flex items-center px-3 py-2 text-neutral-300 hover:text-white transition-colors">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-neutral-300 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </motion.nav>
  );
};

export default Navbar;