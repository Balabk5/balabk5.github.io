import React from "react";
import { WorkExperience } from "@/types";

interface WorkTimelineProps {
    experiences: WorkExperience[];
}

const WorkTimeline: React.FC<WorkTimelineProps> = ({ experiences }) => {
    return (
        <div className="job-role-time-line-wrapper h-auto w-auto flex flex-col gap-2">
            {experiences.map((experience) => (
                <div key={experience.id} className="job-role-time-line flex flex-row gap-2">
                    <div className="job-role-timeline w-2/5">
                        <p className="text-xs text-slate-400">{experience.period}</p>
                    </div>
                    <div className="job-role-timeline-description w-3/5">
                        <p className="mb-1">
                            {experience.position} - {experience.company}
                        </p>
                        <p className="text-xs text-slate-400">{experience.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkTimeline;
