"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Deefake Audio Detection",
    description: "Custom lightweight CNN for Deepfake Audio Detection using MFCC for Audio Detection and ASR Robustness",
    image: "/images/projects/deepfakeaudiodetection.jpg",
    tag: ["All", "ML",],
    gitUrl: "",
    previewUrl: "https://github.com/Kss004/DeepFake-Audio-Detection",
    featured: true,
  },
  {
    id: 8,
    title: "Gmeet Bot for AI based Notetaking and Action Item Extraction",
    description: "Intelligent meeting assistant that automatically joins a Gmeet,transcribes, summarizes, and extracts action items from meetings using advanced state of the art models Models.",
    image: "/images/projects/gmeetbot.png",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/Kss004/GMeetBotPocV2",
    previewUrl: "",
    featured: true,
  },
  {
    id: 9,
    title: "Career Recommendation System",
    description: "ML-powered career guidance system that analyzes skills, interests, and market trends to suggest optimal career paths for undergrads, graduates, and new professionals.",
    image: "/images/projects/crs.png",
    tag: ["All", "ML", "GenAI"],
    gitUrl: "https://github.com/Kss004/career-recommendation-system-squ",
    previewUrl: "",
    featured: false,
  },
  {
    id: 3,
    title: "Multimodal Tumor Detection System",
    description: "Real-time MRI Tumor Detection System using advanced image processing, classical machine learning, and CNN-based models for high-accuracy medical image classification.",
    image: "/images/projects/braintumordetection.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/Kss004/PyTumorDetection",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Cognitive Workforce Intelligence Engine",
    description: "Engineered a real-time semantic analytics core by fusing high-dimensional vector clustering with agentic LLM workflows, instantly transforming unstructured employee narratives into quantifiable strategic insights.",
    image: "/images/projects/backendsurverydetection.png",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/Kss004/BackendSurveryPipeline.git",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Built a dynamic and responsive personal portfolio built with Next.js, designed to showcase projects, skills, and contact details.",
    image: "/images/projects/image.png",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/Kss004/Portfolio",
    previewUrl: "",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="relative py-8 bg-transparent overflow-hidden">
      {/* Editorial decorative elements */}
      <div className="absolute top-20 right-20 w-12 h-12 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-cyan-400"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-10 w-8 h-8 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-purple-500"/>
        </svg>
      </div>
      <div className="absolute top-1/3 left-1/4 w-10 h-10 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-orange-400"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-emerald-300"/>
        </svg>
      </div>
      <div className="absolute top-40 right-1/5 w-6 h-6 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-red-400"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        {/* Editorial Header */}
        <div className="mb-20 px-4 xl:px-16">
          <div className="grid md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-8">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-400 font-light mb-8 block">
                03 — Portfolio
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-neutral-100 mb-4 leading-[0.8] tracking-tight">
                Featured
              </h2>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-neutral-500 leading-[0.8] tracking-tight">
                Projects
              </h3>
            </div>
            <div className="md:col-span-4">
              <p className="text-lg text-neutral-300 leading-relaxed font-light">
                A collection of AI-powered applications, machine learning models, and modern web solutions 
                that showcase my expertise in cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Filter Tags */}
        <div className="flex flex-wrap justify-start items-center gap-6 py-8 mb-16 px-4 xl:px-16">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="GenAI"
            isSelected={tag === "GenAI"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="ML"
            isSelected={tag === "ML"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
        </div>

        {/* Editorial Projects Grid */}
        <div className="px-4 xl:px-16">
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} h-full`}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  featured={true}
                />
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Editorial grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Editorial CTA Section */}
        <div className="mt-32 px-4 xl:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-neutral-100 mb-6 leading-tight">
                Interested in 
                <span className="font-serif italic text-neutral-500"> Working Together?</span>
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed font-light mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether it's AI development, machine learning, or end to end application, let's create something exceptional.
              </p>
              <Link
                href="/#contact"
                className="inline-block border border-white/20 hover:bg-white text-neutral-100 hover:text-neutral-950 font-light px-8 py-4 transition-all duration-300"
              >
                <span className="text-sm uppercase tracking-wider">Start Project</span>
              </Link>
            </div>
            <div className="text-right">
              <div className="text-sm text-neutral-400 uppercase tracking-wider mb-4">
                Ready to collaborate
              </div>
              <Link
                href="https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white/60"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;