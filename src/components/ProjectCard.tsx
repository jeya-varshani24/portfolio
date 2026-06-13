import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Award } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  specialBadge?: string;
  index: number;
}

export default function ProjectCard({
  title,
  tags,
  description,
  highlights,
  githubUrl = "#",
  demoUrl,
  specialBadge,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel p-6 rounded-2xl flex flex-col justify-between h-full group hover:border-primary/40 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Dynamic Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Header (Icon + Badges) */}
        <div className="flex justify-between items-start mb-5">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
            <FolderGit2 size={22} />
          </div>
          
          {specialBadge && (
            <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              <Award size={12} className="animate-pulse" />
              {specialBadge}
            </span>
          )}
        </div>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Desc */}
        <h4 className="font-poppins font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
          {title}
        </h4>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {description}
        </p>

        {/* Key highlights / bullet metrics */}
        <div className="space-y-1.5 mb-6">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer (Links) */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50 mt-auto">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <Github size={14} /> Repository
        </a>
        
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-cyan-300 transition-colors ml-auto"
          >
            <ExternalLink size={14} /> Demo Link
          </a>
        )}
      </div>
    </motion.div>
  );
}
