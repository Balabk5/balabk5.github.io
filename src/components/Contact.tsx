import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, GitBranchIcon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.open(`mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
    { icon: Phone, label: "Phone", value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
    { icon: GitBranchIcon, label: "GitHub", value: "Balabk5", href: portfolioData.personal.github },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#914BF1]/3 rounded-full blur-[150px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16 p-12 md:p-16 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#914BF1]/50 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's collaborate</h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Unlock the potential of your product with expert frontend development. Let's create user-centered solutions that delight your users.
          </p>
          <Button onClick={() => document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#914BF1] text-white hover:bg-[#7c3aed] hover:shadow-[0_0_25px_rgba(145,75,241,0.5)] font-medium px-8 py-6 text-base rounded-full cursor-pointer transition-all duration-300 group">
            Get in Touch
            <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="contact-form">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!</p>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#c8ff00]/20 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-[#914BF1]/10 flex items-center justify-center group-hover:bg-[#914BF1]/20 transition-colors">
                    <link.icon size={18} className="text-[#914BF1]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{link.label}</p>
                    <p className="text-sm text-white group-hover:text-[#914BF1] transition-colors">{link.value}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Name</label>
                <Input value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name" required className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-600 focus:border-[#c8ff00]/30 rounded-xl h-12" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Email</label>
                <Input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your@email.com" required className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-600 focus:border-[#c8ff00]/30 rounded-xl h-12" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Message</label>
                <Textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..." required rows={5}
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-600 focus:border-[#c8ff00]/30 rounded-xl resize-none" />
              </div>
              <Button type="submit" className="w-full bg-[#914BF1] text-white hover:bg-[#7c3aed] hover:shadow-[0_0_25px_rgba(145,75,241,0.5)] font-medium py-6 text-base rounded-xl cursor-pointer transition-all duration-300">
                {submitted ? "Message Prepared! ✓" : <><Send size={16} className="mr-2" />Send Message</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
