import { GitBranchPlus, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">BM</span>
            <span className="text-[#914BF1] text-lg font-bold">.</span>
            <span className="text-zinc-500 text-sm ml-2">
              © {new Date().getFullYear()} Balakumar M
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-[#914BF1] hover:border-[#c8ff00]/20 transition-all">
              <GitBranchPlus size={16} />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`}
              className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-[#914BF1] hover:border-[#c8ff00]/20 transition-all">
              <Mail size={16} />
            </a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-[#914BF1] hover:border-[#c8ff00]/20 transition-all cursor-pointer">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
