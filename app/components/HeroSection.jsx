"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative bg-transparent overflow-hidden">
      {/* Editorial Decorative Elements - Various sizes and colors */}
      <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-blue-400"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-20 w-12 h-12 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-pink-500"/>
        </svg>
      </div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-purple-300"/>
        </svg>
      </div>
      <div className="absolute top-40 right-1/3 w-8 h-8 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-emerald-400"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/3 w-10 h-10 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-yellow-400"/>
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        {/* Left Content - Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-8 order-2 lg:order-1"
        >

          {/* Large Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-neutral-100 leading-[0.8] tracking-tight mb-2">
                Build your
              </h1>
              <div className="flex flex-wrap items-baseline gap-4">
                <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif italic text-neutral-500 leading-[0.8] tracking-tight">
                  <TypeAnimation
                    sequence={[
                      "next product",
                      2000,
                      "big idea",
                      2000,
                      "digital future",
                      2000,
                      "startup",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-neutral-100 leading-[0.8] tracking-tight">
                  with me
                </h1>
              </div>
            </div>
            
          </motion.div>

          {/* Description - Editorial Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 max-w-md"
          >
            <p className="text-lg text-neutral-300 leading-relaxed font-light">
              AI Engineer & ML engineer building practical, real world solutions 
              that bridge technology and human needs and solve actual, real world problems.
            </p>
          </motion.div>

          {/* Minimal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-12 space-y-1"
          >
            <div className="text-neutral-400 text-sm uppercase tracking-wider">Location</div>
            <div className="text-neutral-100 font-light">New Delhi, India</div>
            <div className="text-neutral-400 text-sm">Available for collaborations</div>
          </motion.div>

          {/* CTA - Editorial Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-8"
          >
            <Link
              href="/#contact"
              className="group border border-white/20 hover:bg-white text-neutral-100 hover:text-neutral-950 font-light px-8 py-4 transition-all duration-300"
            >
              <span className="text-sm uppercase tracking-wider">Explore</span>
            </Link>
            
            <div className="text-sm text-neutral-300 uppercase tracking-wider">
              Scroll to explore my work
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Editorial Image Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Organic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-80 scale-110"></div>
            
            {/* Main Image in circle frame like the design */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-neutral-900/30 border border-white/10">
              <Image
                src="/images/new.png"
                alt="Ayamullah Khan"
                className="object-cover w-full h-full"
                width={320}
                height={320}
                priority
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R5lQKJJlhgkQ="
              />
            </div>

            {/* Floating minimal info cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -top-6 -right-8 bg-neutral-900/70 backdrop-blur-sm px-3 py-2 text-xs text-neutral-300 uppercase tracking-wider border border-white/10"
            >
              20+ Projects
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute -bottom-8 -left-6 bg-neutral-900/70 backdrop-blur-sm px-3 py-2 text-xs text-neutral-300 uppercase tracking-wider border border-white/10"
            >
              2500+ users
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;