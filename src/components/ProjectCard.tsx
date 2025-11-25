import React from "react";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-wrapper w-full h-auto flex flex-row gap-2">
            <div className="project-thumbnail w-1/4">
                <div className="tech-stack-cont p-1">
                    <Image
                        src={project.thumbnail}
                        height={100}
                        width={500}
                        alt={`${project.title} thumbnail`}
                        quality={100}
                        className="rounded-lg"
                    />
                </div>
            </div>
            <div className="project-description w-3/4 flex flex-col gap-2">
                <div className="flex flex-row gap-1 blog-heading items-center">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                    >
                        <h1 className="text-base">{project.title}</h1>
                    </a>
                    <span className="material-symbols-outlined link-btn text-xs">
                        north
                    </span>
                </div>
                <p className="text-xs text-slate-400">{project.description}</p>
                <div className="flex flex-row gap-1 flex-wrap">
                    {project.technologies.map((tech, index) => (
                        <div key={index} className="py-1 px-2 tech-stack-cont">
                            <p className="text-xs">{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
