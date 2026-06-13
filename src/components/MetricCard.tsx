import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function MetricCard({
  value,
  suffix,
  label,
  sublabel,
  description,
  icon,
  delay = 0,
}: MetricCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    if (end === 0) return;

    const range = end - start;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(start + easedProgress * range);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden"
    >
      {/* Decorative top gradient border highlight */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent opacity-70" />

      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-accent">
          {icon}
        </div>
        <div className="text-right">
          <span className="block font-poppins font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            {count}
            <span className="text-accent">{suffix}</span>
          </span>
          {sublabel && (
            <span className="text-xs text-slate-500 font-medium block mt-0.5">
              {sublabel}
            </span>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-poppins font-bold text-lg text-white mb-1">
          {label}
        </h3>
        <p className="text-sm text-slate-400 font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
