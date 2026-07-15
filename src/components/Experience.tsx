import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            My professional journey building products that make a difference.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#914BF1]/70 via-[#914BF1]/20 to-transparent" />

          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#914BF1] border-2 border-[#914BF1] z-10 hidden md:block" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group">
                  {/* Role badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={14} className="text-[#914BF1]" />
                    <span className="text-xs text-[#914BF1] font-medium uppercase tracking-wider">
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#914BF1] transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={24} className="text-[#914BF1]" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 max-w-2xl">
            <h4 className="text-lg font-semibold text-white mb-1">
              {portfolioData.education.degree}
            </h4>
            <p className="text-zinc-400 mb-2">{portfolioData.education.institution}</p>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {portfolioData.education.period}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#914BF1]/10 text-[#914BF1] text-xs font-medium">
                {portfolioData.education.cgpa}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
