import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center p-2 text-white font-poppins">
      <div className="wrapper flex flex-col lg:flex lg:flex-row justify-center gap-4 items-center">

        {/* About Me Section */}
        <div className="w-2/5 w-full flex flex-col gap-2 portfoliio-grid about-me-cont">
          <div className="about-me-sub-cont-1 portfoliio-grid-item h-1/2 w-full rounded-lg "></div>
          <div className="about-me-sub-cont-2 portfoliio-grid-item h-1/2 w-full rounded-lg"></div>
        </div>

        {/* Profile Section */}
        <div className="w-2/5 w-full flex flex-col gap-2 portfoliio-grid profile-cont">
          <div className="profile-sub-cont-1 portfoliio-grid-item h-1/5 w-full rounded-lg"></div>
          <div className="profile-sub-cont-2 portfoliio-grid-item h-auto w-full flex flex-col justify-center gap-4 px-6 py-6 relative rounded-lg">
            <div className="profile-img-and-detail-cont flex flex-row">
              <div className="profile-img">
                <Image
                  src="/bala-profile-pic.png"
                  height={75}
                  width={75}
                  alt="profile-pic"
                />
              </div>
              <div className="profile-header-cont p-1 flex flex-col justify-center mx-2">
                <h1 className="text-xl">BalaKumar M</h1>
                <p className="text-xs">Software Developer</p>
              </div>
            </div>
            <div className="profile-tags flex flex-row flex-wrap gap-3">
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <p className="text-xs">Tamil nadu,India</p>
              </div>
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">language</span>
                <p className="text-xs">English, Tamil</p>
              </div>
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">design_services</span>
                <p className="text-xs">UX/UI</p>
              </div>
              <div className="profile-tag-1 w-auto flex flex-row items-center gap-1 pl-0 pr-1 px-2">
                <span className="material-symbols-outlined text-sm">sdk</span>
                <p className="text-xs">Product Engineering</p>
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
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <div className="resume-description flex flex-row gap-1">
                <p className="text-xs">Resume</p>
                <span className="material-symbols-outlined text-xs">arrow_outward</span>
              </div>
            </div>
          </div>
          <div className="profile-sub-cont-3 portfoliio-grid-item h-2/5 w-full rounded-lg"></div>
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
