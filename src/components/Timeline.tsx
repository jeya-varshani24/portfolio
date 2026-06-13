import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  type: "work" | "education";
  achievements?: string[];
  metrics?: string;
  index: number;
}

function TimelineCard({
  title,
  subtitle,
  period,
  location,
  type,
  achievements,
  metrics,
  index,
}: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative pl-8 pb-12 last:pb-0">
      {/* Glow vertical line connector */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-slate-800 last:bottom-4" />

      {/* Floating Node Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.15 }}
        className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 z-10 ${
          type === "work"
            ? "bg-slate-900 border-primary text-primary shadow-[0_0_8px_rgba(99,102,241,0.4)]"
            : "bg-slate-900 border-accent text-accent shadow-[0_0_8px_rgba(6,182,212,0.4)]"
        }`}
      >
        {type === "work" ? <Briefcase size={12} /> : <GraduationCap size={12} />}
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-slate-700/60"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full pointer-events-none" />

        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h4 className="font-poppins font-bold text-lg text-white group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-sm text-slate-300 font-medium">{subtitle}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="flex items-center gap-1.5 text-xs font-mono bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full text-slate-300">
              <Calendar size={12} className="text-primary" /> {period}
            </span>
            {location && (
              <span className="text-xs text-slate-500 mt-1">{location}</span>
            )}
          </div>
        </div>

        {metrics && (
          <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent">
            <Award size={12} /> {metrics}
          </div>
        )}

        {achievements && achievements.length > 0 && (
          <ul className="space-y-2.5">
            {achievements.map((item, i) => (
              <li key={i} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const workData = [
    {
      title: "Data Analyst Intern",
      subtitle: "Bluestock Fintech",
      period: "Present",
      type: "work" as const,
      achievements: [
        "Analyzing complex fintech datasets to extract actionable market intelligence.",
        "Developing analytical dashboards and reports for tracking core fintech performance indicators.",
      ],
    },
    {
      title: "Machine Learning Intern",
      subtitle: "Cybernaut Education Technology",
      period: "Internship",
      type: "work" as const,
      metrics: "92% Fake News Detection Accuracy",
      achievements: [
        "Built a Fake News Detection system employing Natural Language Processing (NLP) with 92% classification accuracy.",
        "Improved the Credit Card Approval prediction system precision by 15% through meticulous feature engineering and hyperparameter tuning.",
        "Developed and optimized a Boston Housing Prediction model utilizing advanced regression methodologies.",
      ],
    },
    {
      title: "Python Development Intern",
      subtitle: "Cybernaut Education Technology",
      period: "Internship",
      type: "work" as const,
      metrics: "80% Time Reduction | 500+ Users Supported",
      achievements: [
        "Reduced manual testing and extraction times by 80% through robust Selenium web automation scripts.",
        "Architected the Flask Job Portal backend supporting 500+ users with secure, responsive REST API endpoints.",
        "Optimized web scraper throughput by 40% using concurrent requests, multithreading, and proxy rotation.",
      ],
    },
    {
      title: "UI/UX Intern",
      subtitle: "CodSoft",
      period: "Internship",
      type: "work" as const,
      achievements: [
        "Designed and wireframed mobile-responsive interfaces using Figma.",
        "Created interactive, high-fidelity prototypes to improve user engagement and visualize seamless user journeys.",
      ],
    },
  ];

  const educationData = [
    {
      title: "B.E Computer Science Engineering",
      subtitle: "PSNA College of Engineering and Technology",
      period: "2023 – 2027",
      location: "Dindigul, Tamil Nadu",
      type: "education" as const,
      metrics: "CGPA: 8.53 / 10",
      achievements: [
        "Active member of the core Computer Science department societies.",
        "Focused studies: Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems.",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Experience Column */}
      <div className="lg:col-span-7 space-y-6">
        <h3 className="font-poppins font-bold text-2xl text-white flex items-center gap-3 mb-8">
          <span className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
            <Briefcase size={20} />
          </span>
          Professional Experience
        </h3>
        <div className="pl-1">
          {workData.map((item, index) => (
            <TimelineCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Education Column */}
      <div className="lg:col-span-5 space-y-6">
        <h3 className="font-poppins font-bold text-2xl text-white flex items-center gap-3 mb-8">
          <span className="p-2 rounded-xl bg-accent/10 text-accent border border-accent/20">
            <GraduationCap size={20} />
          </span>
          Education
        </h3>
        <div className="pl-1">
          {educationData.map((item, index) => (
            <TimelineCard key={index} {...item} index={index + 4} />
          ))}
        </div>
      </div>
    </div>
  );
}
