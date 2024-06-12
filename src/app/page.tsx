"use client";
import TechStackComponent from "@/components/tech-stack";
import Image from "next/image";
import React, { use, useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function Home() {
  let imageList = [
    { src: "/techstack/1.png", height: 25, width: 25 },
    { src: "/techstack/2.png", height: 25, width: 25 },
    { src: "/techstack/3.png", height: 25, width: 25 },
    { src: "/techstack/4.png", height: 25, width: 25 },
    { src: "/techstack/5.png", height: 25, width: 25 },
    { src: "/techstack/6.png", height: 25, width: 25 },
    { src: "/techstack/7.png", height: 25, width: 25 },
    { src: "/techstack/8.png", height: 25, width: 25 },
    { src: "/techstack/9.png", height: 25, width: 25 },
    { src: "/techstack/10.png", height: 25, width: 25 },
    { src: "/techstack/11.png", height: 25, width: 25 },
    { src: "/techstack/12.png", height: 25, width: 25 },
    { src: "/techstack/15.png", height: 25, width: 25 },
    { src: "/techstack/16.png", height: 25, width: 25 },
    { src: "/techstack/17.png", height: 25, width: 25 },
    { src: "/techstack/18.png", height: 25, width: 25 },
  ];

  let techAndToolsList = [{ imageName: "/techstack/1.png", bgColor: "" }];
  const canvasRef = useRef(null);

  return (
    <div className="h-full md:h-screen lg:screen w-full flex justify-center items-center  text-white font-poppins 	">
      <div className="wrapper p-2 flex flex-col lg:flex lg:flex-row justify-center gap-4 items-center">
        {/* About Me Section */}
        <div className="w-2/5  w-full flex flex-col gap-2 portfoliio-grid about-me-cont">
          <div className="about-me-sub-cont-1 portfoliio-grid-item h-1/2 w-full rounded-lg p-6 overflow-hidden	">
            <h1 className="text-base mb-4">Get to know about me</h1>
            <div className="h-5/6	 about-me-description overflow-y-scroll	">
              <p className="text-xs text-slate-400	">
                Hey there! Originally, I come from a mechatronics engineering
                background, where I was deeply immersed in the world of
                mechanics, electronics, and computing. My programming journey
                began in an unexpected but exciting way—I decided to build a
                drone using Python. This hands-on project was not only
                challenging but also incredibly rewarding, and it ignited a
                passion for coding that I hadn&apos;t anticipated.
              </p>

              <p className="text-xs text-slate-400	">
                As I continued to explore the vast landscape of programming, I
                found myself increasingly drawn to web technologies. The idea of
                creating interactive, visually appealing web applications
                fascinated me. It was during this exploration that I had my
                &apos;aha&apos; moment and realized that my true passion lay in
                designing and building user interfaces.
              </p>

              <p className="text-xs text-slate-400	">
                This newfound love for design led me to dive headfirst into
                frontend development and UI/UX design. I began to learn and
                experiment with various tools and frameworks, honing my skills
                and enjoying every moment of the creative process. The
                combination of technical skills from my engineering background
                and the artistic aspect of design has been an exhilarating
                journey. It&apos;s been a blast ever since, and I look forward
                to continuing to create and innovate in this exciting field.
              </p>
            </div>
          </div>
          <div className="about-me-sub-cont-2 portfoliio-grid-item h-1/2 w-full rounded-lg p-6">
            <h1 className="text-base mb-4 ">Over the years</h1>
            <div className="job-role-time-line-wrapper h-auto w-auto flex flex-col gap-2 ">
              <div className="job-role-time-line flex flex-row gap-2">
                <div className="job-role-timeline w-2/5	">
                  <p className="text-slate-400">Nov 2022 - Present</p>
                </div>
                <div className="job-role-timeline-description w-3/5	 ">
                  <p className="mb-1">Frontend Developer - Kaar tech</p>
                  <p className="text-xs text-slate-400">
                    Work closely with cross-functional teams, including
                    developers, designers, and product managers, to implement
                    and advocate for best practices in web accessibility. Foster
                    a culture of inclusivity by ensuring all digital products
                    are accessible to users of all abilities. Provide guidance
                    and support to teams to meet and exceed accessibility
                    standards.
                  </p>
                </div>
              </div>
              <div className="job-role-time-line flex flex-row gap-2">
                <div className="job-role-timeline w-2/5	">
                  <p className="text-slate-400">Feb 2022 - Nov 2022</p>
                </div>
                <div className="job-role-timeline-description w-3/5	 ">
                  <p className="mb-1">
                    Full-Stack Web developer Developer(Intern) - Kaar tech
                  </p>
                  <p className="text-xs text-slate-400">
                    Developed Multiple AL/ML based End to end applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-2/5 w-full flex flex-col gap-2 portfoliio-grid profile-cont">
          <div className="profile-sub-cont-2 portfoliio-grid-item h-auto w-full flex flex-col justify-center gap-4 px-6 py-6 relative rounded-lg">
            <div className="profile-img-and-detail-cont flex flex-row">
              <div className="profile-img">
                <Image
                  src="/bala-profile-pic.png"
                  height={75}
                  width={75}
                  alt="profile-pic"
                  quality={100}
                />
              </div>
              <div className="profile-header-cont p-1 flex flex-col justify-center mx-2">
                <h1 className="text-xl">BalaKumar M</h1>
                <p className="text-xs">Software Developer</p>
              </div>
            </div>
            <div className="profile-tags flex flex-row flex-wrap gap-3">
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                <p className="text-xs">Tamil nadu,India</p>
              </div>
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">
                  language
                </span>
                <p className="text-xs">English, Tamil</p>
              </div>
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">
                  design_services
                </span>
                <p className="text-xs">UX/UI</p>
              </div>
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">sdk</span>
                <p className="text-xs">Front-End Dev</p>
              </div>
            </div>
            <div className="social-menus-cont flex flex-row gap-4">
              <div className="twitter">
                <Image
                  src="svg/socials/icons8-twitterx.svg"
                  height={16}
                  width={16}
                  alt="Twitter logo"
                />
              </div>
              <div className="instagram">
                <Image
                  src="svg/socials/icons8-instagram.svg"
                  height={16}
                  width={16}
                  alt="Instagram logo"
                />
              </div>
              <div className="linkedin">
                <Image
                  src="svg/socials/icons8-linkedin.svg"
                  height={16}
                  width={16}
                  alt="linkedin logo"
                />
              </div>
              <div className="discord">
                <Image
                  src="svg/socials/icons8-discord.svg"
                  height={16}
                  width={16}
                  alt="discord logo"
                />
              </div>
            </div>
            <div className="resume-cont flex flex-row gap-2 items-center absolute top-3 right-3 px-3 py-2 border-2 rounded-md border-slate-800">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
              </span>
              <div className="resume-description flex flex-row gap-1">
                <p className="text-xs">Resume</p>
                <span className="material-symbols-outlined text-xs">
                  arrow_outward
                </span>
              </div>
            </div>
          </div>
          <div className="profile-sub-cont-3 portfoliio-grid-item h-auto w-full rounded-lg p-6">
            <h1 className="text-base mb-4">Tech Stack and Tools</h1>
            <div className="h-auto w-full flex flex-row flex-wrap gap-x-6 gap-y-4  md:gap-x-10 md:gap-y-6  lg:gap-x-6 lg:gap-y-8 overflow-auto	">
              {imageList.map((item, index) => (
                <TechStackComponent key={index} item={item} />
              ))}
            </div>
          </div>
          <div className="profile-sub-cont-1 portfoliio-grid-item h-auto w-full rounded-lg p-6">
            <h1 className="text-base mb-4">Recent Blogs</h1>
            <div className="flex flex-col gap-4" >
            <div className="bolg-wrapper h-auto w-full flex flex-row gap-2 items-center	">
              <TechStackComponent
                item={{
                  src: "/socials/linked-in-logo.png",
                  height: 50,
                  width: 50,
                }}
              />
              <div className="flex  flex-col gap-1">
                <p className="text-sm">
                  Elevate Your Design Game with Typography Essentials
                </p>
                <div className="flex flex-row gap-2">
                  <p className="text-xs">UX/UI</p>
                  <p className="text-xs">Figma</p>
                </div>
              </div>
            </div>
            <div className="bolg-wrapper h-auto w-full flex flex-row gap-2 items-center	">
              <TechStackComponent
                item={{
                  src: "/socials/medium.png",
                  height: 50,
                  width: 50,
                }}
              />
              <div className="flex  flex-col gap-1">
                <p className="text-sm">
                  Elevate Your Design Game with Typography Essentials
                </p>
                <div className="flex flex-row gap-2">
                  <p className="text-xs">UX/UI</p>
                  <p className="text-xs">Figma</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Projects and Contact Section */}
        <div className="w-2/5 w-full flex flex-col gap-2 portfoliio-grid projects-and-contact-cont">
          <div className="about-me-sub-cont-1 portfoliio-grid-item h-4/5 w-full rounded-lg"></div>
          <div className="about-me-sub-cont-2 portfoliio-grid-item h-1/5 w-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
