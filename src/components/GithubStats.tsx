import { motion } from "framer-motion";
import { Star, GitFork, BookOpen, ExternalLink, Calendar } from "lucide-react";

export default function GithubStats() {
  // Generate mock contribution grid: 53 weeks * 7 days
  // We'll create a simplified grid of 24 weeks * 7 days for responsive sizing
  const gridRows = 7;
  const gridCols = 26; // Half a year for mobile-to-desktop clean rendering
  
  // Deterministic random generator for contributions
  const getContributionColor = (col: number, row: number) => {
    // Make a pattern that looks like a real dev profile
    const seed = (col * 3 + row * 7) % 11;
    if (seed < 3) return "bg-slate-800/60"; // No contributions
    if (seed < 6) return "bg-emerald-950/80 border border-emerald-900/30"; // Light green
    if (seed < 9) return "bg-emerald-800/80 border border-emerald-700/30"; // Mid green
    if (seed < 10) return "bg-emerald-600 shadow-[0_0_4px_#10b981]"; // High green
    return "bg-emerald-400 shadow-[0_0_8px_#34d399]"; // Ultra green (exceptional days)
  };

  const daysOfWeek = ["Mon", "", "Wed", "", "Fri", "", ""];

  const stats = [
    { label: "Repositories", value: "21", icon: <BookOpen size={16} /> },
    { label: "Contributions", value: "110", icon: <Calendar size={16} /> },
  ];

  const repos = [
    {
      name: "vita-gait-iot",
      description: "Firmware and analytics engine identifying gait abnormalities from shoe sensor data.",
      language: "Python",
      stars: 12,
      forks: 4,
      color: "bg-blue-500",
    },
    {
      name: "fake-news-detector-nlp",
      description: "Machine Learning models classifying online misinformation with 92% evaluation accuracy.",
      language: "Jupyter Notebook",
      stars: 18,
      forks: 6,
      color: "bg-amber-500",
    },
    {
      name: "job-portal-api",
      description: "Flask-based REST APIs with custom authentication and recruitment pipeline handling.",
      language: "Python",
      stars: 8,
      forks: 2,
      color: "bg-blue-500",
    },
  ];

  const languages = [
    { name: "Python", percentage: 55, color: "bg-blue-500" },
    { name: "Java", percentage: 25, color: "bg-amber-600" },
    { name: "SQL", percentage: 12, color: "bg-purple-500" },
    { name: "HTML/CSS", percentage: 8, color: "bg-pink-500" },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Block */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel p-4 rounded-xl flex items-center justify-between hover:border-emerald-500/20 transition-colors duration-300"
          >
            <div>
              <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="font-poppins font-extrabold text-2xl text-white">
                {stat.value}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-emerald-400">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contribution Graph - 8 cols */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-poppins font-bold text-lg text-white">
                Contribution Activity
              </h4>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active coder
              </span>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
              <div className="min-w-[500px] flex gap-2">
                {/* Labels column */}
                <div className="flex flex-col justify-between py-1 text-[10px] font-mono text-slate-500 w-8 pr-2">
                  {daysOfWeek.map((day, idx) => (
                    <span key={idx} className="h-[12px] flex items-center">
                      {day}
                    </span>
                  ))}
                </div>

                {/* Squares Grid */}
                <div className="grid grid-flow-col gap-[4px]" style={{ gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))` }}>
                  {Array.from({ length: gridCols }).map((_, col) =>
                    Array.from({ length: gridRows }).map((_, row) => (
                      <div
                        key={`${col}-${row}`}
                        className={`w-[12px] h-[12px] rounded-[2px] transition-all duration-300 hover:scale-125 ${getContributionColor(
                          col,
                          row
                        )}`}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Key and Month Tags */}
          <div className="flex justify-between items-center border-t border-slate-800/60 pt-4 mt-6 text-xs text-slate-400">
            <div className="flex gap-4">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span>Less</span>
              <div className="w-[10px] h-[10px] bg-slate-800/60 rounded-[1px]" />
              <div className="w-[10px] h-[10px] bg-emerald-950/80 rounded-[1px]" />
              <div className="w-[10px] h-[10px] bg-emerald-800/80 rounded-[1px]" />
              <div className="w-[10px] h-[10px] bg-emerald-600 rounded-[1px]" />
              <div className="w-[10px] h-[10px] bg-emerald-400 rounded-[1px]" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Top Languages - 4 cols */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl">
          <h4 className="font-poppins font-bold text-lg text-white mb-6">
            Language Breakdown
          </h4>
          <div className="space-y-4">
            {languages.map((lang, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                    {lang.name}
                  </span>
                  <span className="font-mono text-slate-400">{lang.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${lang.color}`}
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Repositories */}
      <div>
        <h4 className="font-poppins font-bold text-lg text-white mb-5">
          Featured Repositories
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-5 rounded-xl hover:border-emerald-500/20 group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-mono font-bold text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {repo.name}
                  </h5>
                  <a
                    href={`https://github.com/jeya-varshani24/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800/40">
                <span className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${repo.color}`} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-0.5">
                  <Star size={10} className="text-amber-500" /> {repo.stars}
                </span>
                <span className="flex items-center gap-0.5">
                  <GitFork size={10} /> {repo.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
