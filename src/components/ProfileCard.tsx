"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProfileInfo } from "@/types";
import SocialLinks from "./SocialLinks";
import { SOCIAL_LINKS } from "@/constants/data";

interface ProfileCardProps {
    profile: ProfileInfo;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="profile-sub-cont-2 portfolio-grid-item h-auto w-full flex flex-col justify-center gap-4 px-6 py-6 relative rounded-lg animate-moveDown">
            <div className="profile-img-and-detail-cont flex flex-row">
                <div
                    className="profile-wrapper"
                    onMouseEnter={() => setFlipped(true)}
                    onMouseLeave={() => setFlipped(false)}
                >
                    <div
                        className={`profile-inner ${flipped ? "animate-flip" : "animate-flipBack"
                            }`}
                    >
                        <div className="profile-img">
                            <Image
                                src={profile.profileImage}
                                height={75}
                                width={75}
                                alt={`${profile.name} profile picture`}
                                quality={100}
                            />
                        </div>
                        <div
                            className="profile-img-3d"
                            style={{
                                borderRadius: "50%",
                                overflow: "hidden",
                                width: 75,
                                height: 75,
                            }}
                        >
                            <Image
                                src={profile.animatedProfileImage}
                                height={75}
                                width={75}
                                alt={`${profile.name} 3D avatar`}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>

                <div className="profile-header-cont p-1 flex flex-col justify-center mx-2">
                    <h1 className="text-xl">{profile.name}</h1>
                    <p className="text-xs">{profile.title}</p>
                </div>
            </div>

            <div className="profile-tags flex flex-row flex-wrap gap-3">
                <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <p className="text-xs">{profile.location}</p>
                </div>
                <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                    <span className="material-symbols-outlined text-sm">language</span>
                    <p className="text-xs">{profile.languages.join(", ")}</p>
                </div>
                {profile.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2"
                    >
                        <span className="material-symbols-outlined text-sm">
                            {index === 0 ? "design_services" : "sdk"}
                        </span>
                        <p className="text-xs">{skill}</p>
                    </div>
                ))}
            </div>

            <SocialLinks links={SOCIAL_LINKS} />

            <div className="resume-cont sm-item tech-stack-cont absolute top-3 right-3 flex flex-row gap-2 items-center px-3 py-2">
                <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View resume"
                >
                    <div className="absolute top-1 -right-2 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
                    </div>
                    <div className="resume-description flex flex-row gap-1">
                        <p className="text-xs">Resume</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
