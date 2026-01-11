import React from "react";
import { Star, Bot, Brain, Globe, Folder } from "lucide-react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-0 py-2 font-light transition-all duration-300 text-sm uppercase tracking-wider border-b-2 ${
        isSelected
          ? "text-white border-white/60"
          : "text-neutral-400 hover:text-white border-transparent hover:border-white/30"
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;