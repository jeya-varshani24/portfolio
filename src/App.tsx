import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Target,
  Code2,
  Brain,
  Database,
  Cloud,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Award,
  Zap,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import MetricCard from "./components/MetricCard";
import SkillCard from "./components/SkillCard";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import GithubStats from "./components/GithubStats";
import ContactForm from "./components/ContactForm";

export default function App() {
  // Navigation sections
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "github", label: "GitHub" },
    { id: "contact", label: "Contact" }
  ];

  // Cycling titles for Hero Section
  const roles = [
    "Software Engineer",
    "Machine Learning Enthusiast",
    "Data Analyst",
    "Problem Solver"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Filter projects by category
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projectCategories = ["All", "Machine Learning", "Web & APIs", "IoT & Hardware"];

  const projectsData = [
    {
      title: "Vita Gait Sensor",
      tags: ["IoT", "HealthTech", "Python"],
      description: "An intelligent IoT-enabled wearable shoe sensor and analytics system designed to track gait metrics, identify structural abnormalities, and assist clinical diagnosis.",
      highlights: [
        "Recipient of the Govt. of India E-YUVA Innovation Grant.",
        "Monitors dynamic foot pressure and gait patterns in real-time.",
        "Facilitates faster diagnosis of rehabilitation progress for patients."
      ],
      specialBadge: "E-YUVA Grant",
      category: "IoT & Hardware"
    },
    {
      title: "Sign Language Recognition System",
      tags: ["Deep Learning", "Computer Vision", "Python"],
      description: "A real-time hand gesture recognition system converting sign language into text and voice outputs to bridge communication gaps for the hearing and speech impaired.",
      highlights: [
        "Employs OpenCV hand-landmark tracking and LSTM neural networks for gesture sequence translation.",
        "Achieved high classification accuracy on custom and benchmark datasets.",
        "Optimized processing pipelines to ensure low-latency inference on consumer webcams."
      ],
      specialBadge: "Real-time AI",
      category: "Machine Learning"
    },
    {
      title: "Fake News Detection",
      tags: ["NLP", "Machine Learning", "Python"],
      description: "A machine learning pipeline utilizing Natural Language Processing (NLP) to analyze web publication headers and body texts to detect misinformation.",
      highlights: [
        "Achieved 92% classification accuracy in model validation tests.",
        "Combines TF-IDF vectorization with customized classification models.",
        "Features visual report outputs detailing text bias markers."
      ],
      specialBadge: "92% Accuracy",
      category: "Machine Learning"
    },
    {
      title: "Job Portal Backend",
      tags: ["Flask", "REST APIs", "SQL"],
      description: "A secure, relational database-backed web application service facilitating full job posting, search, application, and tracking lifecycles.",
      highlights: [
        "Supports 500+ concurrent user accounts securely.",
        "Features JWT authentication and standardized REST API routing.",
        "Engineered with clean model-view-controller (MVC) architecture."
      ],
      category: "Web & APIs"
    },
    {
      title: "Credit Card Approval Prediction",
      tags: ["Machine Learning", "Python", "EDA"],
      description: "A predictive underwriting model evaluating loan applicant risks using automated pipeline processing and data visualizations.",
      highlights: [
        "Boosted evaluation precision by 15% through hyperparameter tuning.",
        "Optimized feature selection using statistical correlation analysis.",
        "Deploys structured exploratory data analysis dashboards."
      ],
      category: "Machine Learning"
    },
    {
      title: "Boston Housing Prediction",
      tags: ["Regression Analysis", "Python", "Data Analyst"],
      description: "A multivariate regression analysis project exploring demographic factors and real estate variables to estimate urban property valuations.",
      highlights: [
        "Compares Linear, Ridge, and Lasso regression models.",
        "Analyzes multicollinearity and implements feature scaling.",
        "Delivers predictive outputs with minimized residual error rates."
      ],
      category: "Machine Learning"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // Testimonials slide data
  const testimonials = [
    {
      quote: "Jeya Varshani showed exceptional technical skills and initiative during her time with us. Her work on automated scripting saved our team hours of manual verification.",
      author: "Technical Lead",
      role: "Cybernaut Education Technology",
      company: "Internship Mentor"
    },
    {
      quote: "An innovative problem solver. Receiving the E-YUVA grant is a testament to Jeya's ability to turn complex research ideas into actual functional prototypes.",
      author: "Project Guide / Evaluator",
      role: "CSE Department",
      company: "PSNA College of Engineering"
    },
    {
      quote: "Demonstrated strong understanding of ML systems and data preparation. She writes clean code and communicates technical decisions effectively.",
      author: "Lead Data Analyst",
      role: "Fintech Division",
      company: "Collaboration Partner"
    }
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Achievements Trophy list
  const achievements = [
    {
      title: "E-YUVA Innovation Grant Principal Investigator",
      description: "Awarded funding from BIRAC, Govt. of India for building the Vita Gait IoT medical sensor.",
      icon: <Award className="text-amber-400" size={24} />
    },
    {
      title: "Smart India Hackathon Participant",
      description: "Represented the college team solving critical national problem statements under tight hackathon timelines.",
      icon: <Trophy className="text-primary" size={24} />
    },
    {
      title: "AWS Cloud Quest Badge",
      description: "Earned cloud-infrastructure credentials by solving simulated cloud architecture scenarios on AWS.",
      icon: <Cloud className="text-sky-400" size={24} />
    },
    {
      title: "NPTEL Java Certification",
      description: "Successfully completed formal Java programming frameworks training with high academic evaluations.",
      icon: <Code2 className="text-secondary" size={24} />
    },
    {
      title: "Google Cloud LLM Certification",
      description: "Completed cloud-native training for Large Language Models and prompt engineering strategies on GCP.",
      icon: <Brain className="text-accent" size={24} />
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 font-sans relative overflow-hidden bg-darkBg">
      {/* Canvas Particle Background */}
      <ParticleBg />

      {/* Decorative Glow Spots */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full glow-bg-primary pointer-events-none z-0" />
      <div className="absolute top-[50%] right-[-10%] w-[40vw] h-[40vw] rounded-full glow-bg-secondary pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full glow-bg-accent pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar sections={sections} />

      {/* Layout Content */}
      <main className="max-w-7xl mx-auto px-6 pt-28 pb-16 relative z-10 space-y-32">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-8 lg:pt-16">
          {/* Text content */}
          <div className="flex-1 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300">
              <Sparkles size={12} className="text-accent animate-spin" />
              <span>Available for Summer Internships & Roles</span>
            </div>
            
            <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Hi, I am <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow-primary">
                Jeya Varshani
              </span>
            </h1>

            {/* Cycling Title */}
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-slate-300 flex items-center gap-2 h-[45px]">
              Aspiring{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary font-extrabold text-glow-accent"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              "Building intelligent solutions that solve real-world problems." A Computer Science Engineering student engineering robust systems at the intersection of software development and artificial intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-semibold text-sm rounded-xl shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 bg-slate-900/80 border border-slate-700/80 text-white font-poppins font-semibold text-sm rounded-xl hover:border-slate-500 hover:bg-slate-800/80 transition-all"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Jeya_Varshani_Resume.pdf"
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
              >
                Download Resume PDF
              </a>
            </div>
          </div>

          {/* Glowing Animated IDE Illustration */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full relative group"
            >
              {/* Box Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-500 pointer-events-none" />

              {/* IDE Frame */}
              <div className="relative glass-panel rounded-2xl overflow-hidden shadow-2xl border-slate-700/50">
                {/* Header bar */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 select-none">
                    jeya_varshani.py — main
                  </span>
                  <div className="w-10" />
                </div>

                {/* Editor Body */}
                <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 select-none">
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">1</span>
                    <p><span className="text-pink-500">import</span> tensorflow <span className="text-pink-500">as</span> tf</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">2</span>
                    <p><span className="text-pink-500">import</span> IoT_Sensor_API</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">3</span>
                    <p><span className="text-slate-600"># Developer Profile Init</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">4</span>
                    <p><span className="text-cyan-400">developer</span> = &#123;</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">5</span>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">"name"</span>: <span className="text-emerald-400">"Jeya Varshani"</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">6</span>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">"education"</span>: <span className="text-emerald-400">"B.E CSE @ PSNA"</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">7</span>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">"focus"</span>: [<span className="text-emerald-400">"Software"</span>, <span className="text-emerald-400">"Machine Learning"</span>],</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">8</span>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">"grant"</span>: <span className="text-emerald-400">"Govt. of India E-YUVA"</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">9</span>
                    <p>&#125;</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">10</span>
                    <p>&nbsp;</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">11</span>
                    <p><span className="text-pink-500">def</span> <span className="text-yellow-400 font-bold">optimize_solution</span>(metrics):</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">12</span>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">if</span> metrics[<span className="text-emerald-400">"time"</span>] &gt; <span className="text-purple-400">80</span>:</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">13</span>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">return</span> tf.automations.deploy()</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none text-right w-5">14</span>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">print</span>(<span className="text-emerald-400">"Precision Optimized by 15%."</span>)</p>
                  </div>
                </div>

                {/* Footer panel */}
                <div className="bg-slate-900/90 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 select-none">
                  <span className="text-emerald-400 animate-pulse flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Connected to IoT Hub
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RECRUITER IMPACT METRICS SECTION */}
        <section className="space-y-8 scroll-mt-24">
          <div className="text-center space-y-2">
            <h3 className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              Performance Outcomes
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              Measurable Business Impact
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Recruiters target outcomes. Here are the key metrics demonstrating engineering value delivered across previous internship projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <MetricCard
              value={92}
              suffix="%"
              label="NLP Accuracy"
              sublabel="Fake News Classification"
              description="Built text classifiers parsing articles to categorize disinformation signals."
              icon={<Brain size={20} />}
              delay={0}
            />
            <MetricCard
              value={80}
              suffix="%"
              label="Time Saved"
              sublabel="Selenium Automation"
              description="Replaced manual tests with concurrent, multithreaded browser scrapers."
              icon={<Clock size={20} />}
              delay={0.1}
            />
            <MetricCard
              value={500}
              suffix="+"
              label="Active Users"
              sublabel="Flask Job Portal"
              description="Developed authentication layers, search features, and job submission paths."
              icon={<Users size={20} />}
              delay={0.2}
            />
            <MetricCard
              value={40}
              suffix="%"
              label="Scraper Speedup"
              sublabel="Throughput Gain"
              description="Redesigned requests pipelines using async routing to query endpoints faster."
              icon={<TrendingUp size={20} />}
              delay={0.3}
            />
            <MetricCard
              value={1}
              suffix=""
              label="E-YUVA Grant"
              sublabel="Principal Investigator"
              description="Secured Govt. of India innovation backing for Vita Gait health sensor."
              icon={<Award size={20} />}
              delay={0.4}
            />
          </div>
        </section>

        {/* ABOUT & WHY HIRE ME SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-24">
          {/* Profile Photo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Photo */}
              <div className="relative w-52 h-64 lg:w-full lg:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Jeya Varshani"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-xs font-poppins font-semibold text-white/90 tracking-wider">Jeya Varshani</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-panel px-3 py-2 rounded-xl border border-primary/30 shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-300">Open to Work</span>
              </div>
            </motion.div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
              <Zap size={10} className="fill-primary" />
              <span>Professional Journey</span>
            </div>
            
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Engineering Intelligent Systems
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              As a Computer Science Engineering student at PSNA College of Engineering and Technology (class of 2027), my engineering philosophy centers on translating complex academic ideas into high-performance web products and intelligence platforms.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              My hands-on experiences across internship postings (Bluestock Fintech, Cybernaut Tech, and CodSoft) have built core strengths in software design patterns, automated scripting, API integrations, and practical machine learning deployment.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether writing selenium routines, deploying Flask REST APIs, or tuning hyperparameters to lift NLP classification scores, I focus on scalability, accessibility, and code quality.
            </p>
          </div>

          {/* Why Hire Me */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-poppins font-extrabold text-2xl text-white mb-6 flex items-center gap-2.5">
              Why Hire Me?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-xl space-y-2 border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/25 flex items-center justify-center">
                  <Target size={16} />
                </div>
                <h4 className="font-poppins font-bold text-sm text-white">
                  Problem Solving
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strong foundations in algorithms, data structures, and database query tuning (SQL, Java, Python).
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl space-y-2 border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent border border-accent/25 flex items-center justify-center">
                  <Code2 size={16} />
                </div>
                <h4 className="font-poppins font-bold text-sm text-white">
                  Internship Experience
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proven reliability in collaborative work settings, handling backends, automated scripts, and analytical boards.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl space-y-2 border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary border border-secondary/25 flex items-center justify-center">
                  <Brain size={16} />
                </div>
                <h4 className="font-poppins font-bold text-sm text-white">
                  AI & ML Engineering
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hands-on NLP pipeline construction, feature adjustments, regression modeling, and prompt structures.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl space-y-2 border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                  <TrendingUp size={16} />
                </div>
                <h4 className="font-poppins font-bold text-sm text-white">
                  Outcome Oriented
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Committed to delivering measurable business value: throughput boosts, user support bounds, and process savings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="scroll-mt-24">
          <div className="text-center space-y-2 mb-12">
            <h3 className="font-mono text-xs text-secondary uppercase tracking-wider font-semibold">
              History
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              Professional Timeline
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Detailing academic milestones, engineering internship roles, and primary achievements in each position.
            </p>
          </div>
          
          <Timeline />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-2">
            <h3 className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              Capabilities
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              Expertise & Tech Stack
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Categorized core skills representing programming, machine learning frameworks, deployment pipelines, and design interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              category="Languages"
              skills={[
                { name: "Python", level: 90 },
                { name: "Java", level: 80 },
                { name: "SQL", level: 85 },
                { name: "HTML & CSS", level: 85 }
              ]}
              icon={<Code2 size={20} />}
              delay={0}
            />
            <SkillCard
              category="Frameworks & Tools"
              skills={[
                { name: "Flask & REST APIs", level: 85 },
                { name: "Streamlit", level: 80 },
                { name: "Selenium Automation", level: 85 },
                { name: "Git & GitHub Actions", level: 80 }
              ]}
              icon={<Database size={20} />}
              delay={0.1}
            />
            <SkillCard
              category="Machine Learning"
              skills={[
                { name: "Scikit-Learn", level: 85 },
                { name: "NLP", level: 80 },
                { name: "Pandas & NumPy", level: 85 },
                { name: "Feature Engineering", level: 80 }
              ]}
              icon={<Brain size={20} />}
              delay={0.2}
            />
            <SkillCard
              category="Cloud & Design"
              skills={[
                { name: "AWS Cloud Quest", level: 75 },
                { name: "Google Cloud LLM", level: 75 },
                { name: "Figma UI/UX", level: 70 }
              ]}
              icon={<Cloud size={20} />}
              delay={0.3}
            />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-2">
            <h3 className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              Portfolio
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Explore specialized models, analytics services, and hardware prototypes crafted with modern software stacks.
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-full border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary shadow-[0_0_10px_rgba(99,102,241,0.4)]"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} index={idx} />
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS TROPHY SHOWCASE */}
        <section id="achievements" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-2">
            <h3 className="font-mono text-xs text-secondary uppercase tracking-wider font-semibold">
              Milestones
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              Trophy Room & Credentials
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Highlighting major competitive grant support, national hacking events, and formal technological certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-secondary/35 transition-all duration-300"
              >
                <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700/60 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-poppins font-bold text-base text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GITHUB INTEGRATION DASHBOARD */}
        <section id="github" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-2">
            <h3 className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              Open Source
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              GitHub Core Operations
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Showcasing repository structures, coding activity, and core languages deployed across version control environments.
            </p>
          </div>
          
          <GithubStats />
        </section>

        {/* TESTIMONIALS SLIDER SECTION */}
        <section className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-2">
            <h3 className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              Testimonials
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              Endorsements & Recommendations
            </h2>
          </div>

          <div className="relative glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-6 left-6 text-slate-800">
              <Quote size={50} className="opacity-20" />
            </div>

            <div className="min-h-[140px] flex flex-col justify-center relative z-10 text-center">
              <p className="text-base sm:text-lg md:text-xl italic text-slate-200 leading-relaxed font-poppins mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              
              <div>
                <h4 className="font-poppins font-bold text-white text-base">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-xs text-slate-400">
                  {testimonials[currentTestimonial].role} — <span className="text-primary font-medium">{testimonials[currentTestimonial].company}</span>
                </p>
              </div>
            </div>

            {/* Slider navigations */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Previous recommendation"
              >
                <ChevronLeft size={16} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentTestimonial === i ? "bg-primary" : "bg-slate-700"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                }
                className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Next recommendation"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-2">
            <h3 className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              Get In Touch
            </h3>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-white">
              Contact / Inquiry Center
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Please submit details using the secure validation form or communicate directly via LinkedIn, GitHub, or direct Email.
            </p>
          </div>

          <ContactForm />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/80 backdrop-blur-md py-10 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm font-mono text-slate-500">
            © {new Date().getFullYear()} Jeya Varshani. All rights reserved.
          </p>
          
          <p className="text-sm font-poppins text-slate-400">
            Designed and developed by{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Jeya Varshani
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
