import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Navbar Background Blur Toggle
      setIsScrolled(window.scrollY > 20);

      // 3. Active Section Detection
      const currentScroll = window.scrollY + 120; // offset for navbar height
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // Offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-darkBg z-[9999]">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_10px_#06B6D4]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-[3px] left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? "bg-darkBg/70 backdrop-blur-md border-b border-borderLight shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-poppins font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            JV<span className="text-secondary">.</span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`font-medium text-sm transition-all duration-200 hover:text-white capitalize relative py-1 ${
                  activeSection === section.id
                    ? "text-white font-semibold"
                    : "text-slate-400"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Recruiter Action CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-primary/40 hover:border-accent bg-primary/10 hover:bg-accent/10 transition-all duration-300 text-white font-poppins"
            >
              Hire Me <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed top-[83px] left-0 w-full h-[calc(100vh-83px)] bg-darkBg/95 backdrop-blur-lg border-t border-borderLight transition-all duration-300 flex flex-col justify-start px-8 py-10 space-y-6 ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-left font-poppins font-semibold text-2xl py-2 capitalize transition-all ${
                activeSection === section.id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pl-2 border-l-2 border-primary"
                  : "text-slate-400"
              }`}
            >
              {section.label}
            </button>
          ))}
          <div className="pt-8 border-t border-borderLight flex flex-col">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-center py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white font-poppins shadow-[0_4px_14px_rgba(99,102,241,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
