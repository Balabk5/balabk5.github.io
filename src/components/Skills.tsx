import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

const allSkills = [
  ...portfolioData.skills.core,
  ...portfolioData.skills.frameworks,
  ...portfolioData.skills.tools,
];

const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3 group">
      <div
        className={`flex gap-4 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#c8ff00]/20 transition-all duration-300 whitespace-nowrap cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-[#914BF1]/60" />
            <span className="text-sm text-zinc-300 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { title: "Core Skills", items: portfolioData.skills.core, color: "#c8ff00" },
    { title: "Frameworks & Libraries", items: portfolioData.skills.frameworks, color: "#7c5cfc" },
    { title: "Tools", items: portfolioData.skills.tools, color: "#ff6b6b" },
    { title: "Methodologies", items: portfolioData.skills.methodologies, color: "#00d4ff" },
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7c5cfc]/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A curated collection of technologies I work with daily to build exceptional products.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: category.color }}
                />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs text-zinc-400 rounded-lg border border-white/5 bg-white/[0.03] hover:text-white hover:border-white/10 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
