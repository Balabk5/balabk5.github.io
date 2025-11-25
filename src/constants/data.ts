import {
    TechStackItem,
    BlogPost,
    Project,
    SocialLink,
    WorkExperience,
    ProfileInfo,
} from "@/types";

export const TECH_STACK: TechStackItem[] = [
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

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "blog-1",
        platform: "LinkedIn",
        platformIcon: "/socials/linked-in-logo.png",
        title: "Elevate Your Design Game with Typography Essentials",
        url: "https://www.linkedin.com/posts/balabk57_typography-essentials-for-web-and-mobile-activity-7161337838486118400-_tAB?utm_source=share&utm_medium=member_desktop",
        tags: ["UX/UI", "Figma"],
    },
    {
        id: "blog-2",
        platform: "LinkedIn",
        platformIcon: "/socials/linked-in-logo.png",
        title: "Ready to master RxJS in Angular?",
        url: "https://www.linkedin.com/posts/balabk57_the-ultimate-guide-to-reactive-programming-activity-7220057311057211394-bet4?utm_source=share&utm_medium=member_desktop",
        tags: ["Angular", "Reactive Programming", "Front-end"],
    },
    {
        id: "blog-3",
        platform: "LinkedIn",
        platformIcon: "/socials/linked-in-logo.png",
        title: "Why UX and UI are Like Peanut Butter and Jelly",
        url: "https://www.linkedin.com/posts/balabk57_ux-vs-ui-activity-7112073238364516353-sKjd?utm_source=share&utm_medium=member_desktop",
        tags: ["UX/UI", "Figma"],
    },
];

export const PROJECTS: Project[] = [
    {
        id: "project-1",
        title: "Data Intelligence Hub",
        description:
            "A portal for data science and machine learning, offering tools for data quality reporting, model building, algorithm analysis, and sales forecasting. Streamlines workflows and enhances data-driven decision-making.",
        thumbnail: "/Projects/Data-inteligence-hub.png",
        githubUrl: "https://github.com/Balabk5/DIgiVerz",
        technologies: ["React", "Python", "MongoDB", "Pandas"],
    },
    {
        id: "project-2",
        title: "Farmers supportive web app",
        description:
            "A web app for new farmers that predicts suitable crops and fertilizers based on soil type and location, identifies plant diseases with remedies, and provides a Beginner's guide and current market prices.",
        thumbnail: "/Projects/FSWA.png",
        githubUrl: "https://github.com/Balabk5/fswa-final",
        technologies: ["Python", "Flask"],
    },
    {
        id: "project-3",
        title: "Wedding Decorators",
        description:
            "Created a captivating landing page for a top Coimbatore wedding decorator, showcasing their works, testimonials, and locations. This project highlights expertise in crafting engaging digital experiences for the events industry.",
        thumbnail: "/Projects/Wedding-decarators.png",
        githubUrl: "https://github.com/Balabk5/wedding_decors",
        technologies: ["UX/UI", "Figma", "React"],
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/balabk57/",
        icon: "svg/socials/icons8-linkedin.svg",
        height: 16,
        width: 16,
    },
    {
        id: "github",
        name: "GitHub",
        url: "https://github.com/Balabk5",
        icon: "svg/socials/icons8-github.svg",
        height: 16,
        width: 16,
    },
    {
        id: "twitter",
        name: "Twitter",
        url: "https://x.com/Thedevbk",
        icon: "svg/socials/icons8-twitterx.svg",
        height: 13,
        width: 13,
    },
    {
        id: "instagram",
        name: "Instagram",
        url: "https://www.instagram.com/bala._.bk/",
        icon: "svg/socials/icons8-instagram.svg",
        height: 16,
        width: 16,
    },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        id: "work-1",
        period: "Nov 2022 - Present",
        position: "Full-Stack Developer",
        company: "Kaar tech",
        description:
            "Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility. Foster a culture of inclusivity by ensuring all digital products are accessible to users of all abilities. Provide guidance and support to teams to meet and exceed accessibility standards.",
    },
    {
        id: "work-2",
        period: "Feb 2022 - Nov 2022",
        position: "Full-Stack Web developer Developer(Intern)",
        company: "Kaar tech",
        description: "Developed Multiple AL/ML based End to end applications.",
    },
];

export const PROFILE_INFO: ProfileInfo = {
    name: "BalaKumar M",
    title: "SDE-2",
    location: "Tamil nadu, India",
    languages: ["English", "Tamil"],
    skills: ["UX/UI", "Full-Stack Dev"],
    profileImage: "/bala-profile-pic.png",
    animatedProfileImage: "/animated-profile-pic.png",
    resumeUrl:
        "https://drive.google.com/file/d/1WZKC72LmGjFHuYFxF05W1QH_1lnmli6N/view?usp=sharing",
    email: "mail4workbk@gmail.com",
};

export const ABOUT_ME = {
    title: "Get to know about me",
    paragraphs: [
        "Hey there! Originally, I come from a mechatronics engineering background, where I was deeply immersed in the world of mechanics, electronics, and computing 🤖. My programming journey began in an unexpected but exciting way—I decided to build a drone using Python 🛸. This hands-on project was not only challenging but also incredibly rewarding, and it ignited a passion for coding that I hadn't anticipated 🔥.",
        "As I continued to explore the vast landscape of programming, I found myself increasingly drawn to web technologies 🌐. The idea of creating interactive, visually appealing web applications fascinated me 💻. It was during this exploration that I had my 'aha' moment and realized that my true passion lay in designing and building user interfaces 🎨.",
        "This newfound love for design led me to dive headfirst into frontend development and UI/UX design 🌟. I began to learn and experiment with various tools and frameworks, honing my skills and enjoying every moment of the creative process. The combination of technical skills from my engineering background and the artistic aspect of design has been an exhilarating journey. It's been a blast ever since, and I look forward to continuing to create and innovate in this exciting field 🚀.",
    ],
};
