"use client";

import TechStackIcon from "@/components/TechStackIcon";
import ProfileCard from "@/components/ProfileCard";
import BlogItem from "@/components/BlogItem";
import ProjectCard from "@/components/ProjectCard";
import WorkTimeline from "@/components/WorkTimeline";
import Image from "next/image";
import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  TECH_STACK,
  BLOG_POSTS,
  PROJECTS,
  WORK_EXPERIENCE,
  PROFILE_INFO,
  ABOUT_ME,
} from "@/constants/data";

export default function Home() {
  return (
    <div className="h-auto w-full flex flex-col items-center p-2 text-white font-poppins">
      <GoogleAnalytics gaId="G-YK69QJ1P9M" />

      <div className="wrapper p-2 flex flex-col lg:flex lg:flex-row justify-center gap-4">
        {/* Profile Section */}
        <div className="w-2/5 w-full md:order-2 flex flex-col gap-2 portfolio-grid profile-cont">
          {/* Tech Stack */}
          <div className="profile-sub-cont-3 portfolio-grid-item h-auto w-full rounded-lg p-6 animate-moveDown">
            <h1 className="text-base mb-4">Tech Stack and Tools</h1>
            <div className="h-auto w-full flex flex-row flex-wrap gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-4 lg:gap-x-6 lg:gap-y-5 overflow-auto">
              {TECH_STACK.map((item, index) => (
                <TechStackIcon key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <ProfileCard profile={PROFILE_INFO} />

          {/* Recent Blogs */}
          <div className="profile-sub-cont-1 portfolio-grid-item h-auto w-full rounded-lg p-6 animate-moveDown">
            <h1 className="text-base mb-4">Recent Blogs</h1>
            <div className="flex flex-col gap-6">
              {BLOG_POSTS.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="w-2/5 w-full md:order-1 flex flex-col gap-2 portfolio-grid about-me-cont">
          <div className="about-me-sub-cont-1 portfolio-grid-item h-1/2 w-full rounded-lg p-6 overflow-hidden animate-moveDown">
            <h1 className="text-base mb-4">{ABOUT_ME.title}</h1>
            <div className="about-me-description">
              {ABOUT_ME.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-xs text-slate-400 mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Work Timeline */}
          <div className="about-me-sub-cont-2 portfolio-grid-item h-1/2 w-full rounded-lg p-6 animate-moveDown">
            <h1 className="text-base mb-4">Over the years</h1>
            <WorkTimeline experiences={WORK_EXPERIENCE} />
          </div>
        </div>

        {/* Projects and Contact Section */}
        <div className="w-2/5 w-full md:order-3 flex flex-col gap-2 portfolio-grid projects-and-contact-cont">
          {/* Projects */}
          <div className="about-me-sub-cont-1 portfolio-grid-item h-4/5 w-full rounded-lg p-6 animate-moveDown">
            <h1 className="text-base mb-4">Projects</h1>
            <div className="projects-cont flex flex-col gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="about-me-sub-cont-2 portfolio-grid-item h-1/5 w-full rounded-lg p-6 animate-moveDown relative">
            <h1 className="text-3xl">Let&apos;s 👋</h1>
            <h1 className="text-3xl mb-4">work together</h1>
            <a
              href={`mailto:${PROFILE_INFO.email}?subject=Hello&body=I wanted to reach out to you...`}
              aria-label="Send email to start collaboration"
            >
              <p className="text-base sm-item underline">Let&apos;s talk</p>
            </a>
            <div className="lets-talk-image-cont absolute -bottom-7 right-0">
              <Image
                src="/lets-talk.png"
                height={150}
                width={150}
                alt="Let's talk illustration"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm pt-6 pb-1 md:p-1">
        Do what you love, Limited Time❗
      </p>
    </div>
  );
}
