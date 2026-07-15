import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import profileImage from "@/assets/Bala-profile-pic.png";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white tabular-nums">
      +{count}{suffix}
    </span>
  );
}

export function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-10">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#914BF1]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
        {/* Top section */}
        <div className="flex flex-col items-center text-center mb-16">


          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-50 md:h-50 mx-auto">
              <img
                src={profileImage}
                alt={personal.name}
                className="w-full h-full object-cover rounded-full border-4 border-[#914BF1]/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#914BF1]/20 to-transparent" />
            </div>
          </motion.div>

                    <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm mb-8"
          >
            <MapPin size={14} className="text-[#914BF1]" />
            {personal.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-4"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#914BF1] font-medium mb-6"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#914BF1] text-white hover:bg-[#7c3aed] hover:shadow-[0_0_25px_rgba(145,75,241,0.5)] font-medium px-8 py-6 text-base rounded-full cursor-pointer transition-all duration-300 group"
            >
              Let's Talk
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/10 text-white hover:bg-white/5 font-medium px-8 py-6 text-base rounded-full cursor-pointer"
            >
              My Work
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#c8ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="mt-3 text-xs tracking-[0.2em] text-zinc-500 uppercase">
                {stat.label}
              </div>
              <div className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
