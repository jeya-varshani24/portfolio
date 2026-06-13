import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Mail, Linkedin, Github, FileText, XCircle } from "lucide-react";

// ─── EmailJS Configuration ─────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
// 2. Create a Service (Gmail) → copy SERVICE_ID below
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Set "To Email" in the template to: jeyavarshanijeyaraj24@gmail.com
// 4. Copy your PUBLIC KEY from Account → API Keys
// ───────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_de7h9pw";    // ← Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "template_b1l70wr";   // ← Replace with your Template ID
const EMAILJS_PUBLIC_KEY  = "2VcQXUwIG4nNeUH2s";  // ← Replace with your Public Key

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim())    newErrors.name    = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formState.subject.trim()) newErrors.subject = "Subject is required";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formState.name,
          from_email: formState.email,
          subject:    formState.subject,
          message:    formState.message,
          to_email:   "jeyavarshanijeyaraj24@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Contact Info */}
      <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-poppins font-bold text-xl text-white">
              Let's build something impactful.
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              If you are a recruiter, tech lead, or founder looking for an engineering intern or full-time engineer who can deliver measurable business outcomes, I'd love to connect.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <a
              href="mailto:jeyavarshanijeyaraj24@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-lg bg-slate-800 text-primary border border-slate-700">
                <Mail size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Email Me
                </span>
                <span className="text-sm text-white font-medium">
                  jeyavarshanijeyaraj24@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/jeyavarshani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-lg bg-slate-800 text-blue-400 border border-slate-700">
                <Linkedin size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  LinkedIn
                </span>
                <span className="text-sm text-white font-medium">
                  linkedin.com/in/jeyavarshani
                </span>
              </div>
            </a>

            <a
              href="https://github.com/jeya-varshani24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                <Github size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  GitHub
                </span>
                <span className="text-sm text-white font-medium">
                  github.com/jeya-varshani24
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Download Resume */}
        <div className="pt-6 lg:pt-0">
          <a
            href="/resume.pdf"
            download="Jeya_Varshani_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold border-2 border-slate-800 hover:border-primary/50 bg-slate-900/50 hover:bg-primary/5 text-white transition-all font-poppins shadow-md group"
          >
            <FileText size={18} className="text-primary group-hover:scale-110 transition-transform" />
            Download Resume (PDF)
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-7">
        <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden">

          {/* Success Overlay */}
          {submitStatus === "success" && (
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-50 rounded-2xl flex flex-col items-center justify-center text-center p-6">
              <CheckCircle2 size={56} className="text-emerald-400 mb-4 animate-bounce" />
              <h4 className="font-poppins font-bold text-2xl text-white mb-2">
                Message Sent! 🎉
              </h4>
              <p className="text-sm text-slate-400 max-w-sm">
                Your message has been delivered to Jeya Varshani's inbox. She'll get back to you soon!
              </p>
            </div>
          )}

          {/* Error Overlay */}
          {submitStatus === "error" && (
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-50 rounded-2xl flex flex-col items-center justify-center text-center p-6">
              <XCircle size={56} className="text-red-400 mb-4" />
              <h4 className="font-poppins font-bold text-xl text-white mb-2">
                Failed to Send
              </h4>
              <p className="text-sm text-slate-400 max-w-sm mb-4">
                Something went wrong. Please email directly at{" "}
                <a href="mailto:jeyavarshanijeyaraj24@gmail.com" className="text-accent underline">
                  jeyavarshanijeyaraj24@gmail.com
                </a>
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="text-xs font-mono text-slate-400 hover:text-white border border-slate-700 px-4 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={`w-full bg-slate-900 border px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-primary transition-colors ${
                    errors.name ? "border-red-500/50" : "border-slate-800"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle size={10} /> {errors.name}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={`w-full bg-slate-900 border px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-primary transition-colors ${
                    errors.email ? "border-red-500/50" : "border-slate-800"
                  }`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle size={10} /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className={`w-full bg-slate-900 border px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-primary transition-colors ${
                  errors.subject ? "border-red-500/50" : "border-slate-800"
                }`}
                placeholder="Job opportunity, internship, collaboration..."
              />
              {errors.subject && (
                <span className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle size={10} /> {errors.subject}
                </span>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className={`w-full bg-slate-900 border px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none ${
                  errors.message ? "border-red-500/50" : "border-slate-800"
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <span className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle size={10} /> {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-bold rounded-xl shadow-[0_4px_14px_rgba(99,102,241,0.45)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.6)] active:scale-[0.98] transition-all disabled:opacity-75 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>

            <p className="text-center text-[10px] text-slate-600 font-mono">
              Powered by EmailJS • Messages delivered directly to inbox
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
