import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillItem {
  name: string;
  level: number; // Percentage (e.g. 90)
}

interface SkillCardProps {
  category: string;
  skills: SkillItem[];
  icon: React.ReactNode;
  delay?: number;
}

export default function SkillCard({ category, skills, icon, delay = 0 }: SkillCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-secondary">
            {icon}
          </div>
          <h3 className="font-poppins font-bold text-xl text-white tracking-wide">
            {category}
          </h3>
        </div>

        {/* Skill list with progress bars */}
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-slate-200">{skill.name}</span>
                <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: delay + index * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
