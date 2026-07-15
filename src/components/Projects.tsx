import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            Relied on by companies near,
            <br />
            far, and worldwide
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Building impactful products across gaming, construction, and government sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-500"
            >
              {/* Project color header */}
              <div
                className="h-48 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                }}
              >
                <div
                  className="absolute top-6 right-6 w-20 h-20 rounded-full blur-[40px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: project.color }}
                />
                <div className="absolute bottom-6 left-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-3"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} className="text-zinc-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#914BF1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-1">{project.subtitle}</p>
                <p className="text-xs text-zinc-600 mb-4">{project.company}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/5 text-zinc-400 border-white/5 text-xs font-normal hover:bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="bg-white/5 text-zinc-500 border-white/5 text-xs font-normal"
                    >
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
