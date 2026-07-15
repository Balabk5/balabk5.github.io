// Portfolio data for Balakumar M
export const portfolioData = {
  personal: {
    name: "Balakumar M",
    title: "Frontend Developer",
    location: "Chennai, India",
    email: "balakumar062001@gmail.com",
    phone: "+91 9629660671",
    github: "https://github.com/Balabk5",
    portfolio: "https://balabk5.github.io",
    tagline:
      "Frontend Developer with 4+ years of experience in building scalable, user-centric web applications. Proficient in Angular with a strong focus on UI/UX design, performance optimization, and Agile methodologies.",
    description:
      "Passionate about crafting intuitive digital experiences and continuously exploring emerging web technologies. Successfully delivered 5+ impactful projects, improving efficiency and business growth across industries.",
  },
  stats: [
    { value: 4, suffix: "+", label: "YEARS OF", sublabel: "EXPERIENCE" },
    { value: 5, suffix: "+", label: "PROJECTS", sublabel: "DELIVERED" },
    { value: 3, suffix: "+", label: "INDUSTRY", sublabel: "CLIENTS" },
  ],
  projects: [
    {
      id: "audit-tool",
      title: "Audit Tool",
      subtitle: "US Based Gaming Company",
      company: "Publicis Sapient",
      description:
        "Contributed to developing a migration project, transforming a legacy application into a modern Angular-based web solution. Built and maintained responsive UI components using Angular, HTML5, and CSS.",
      techStack: ["Angular", "RxJS", "Angular Material", "Signals", "Jest", "SonarQube"],
      color: "#c8ff00",
    },
    {
      id: "construction-estimation",
      title: "Construction Estimation Tool",
      subtitle: "US Based Construction Industry",
      company: "Kaar Technologies",
      description:
        "Developed a high-performance frontend for an estimation tool that processes construction plan PDFs and provides real-time cost analysis. Designed an interactive tree view UI to efficiently handle thousands of nested data points.",
      techStack: ["Angular", "RxJS", "NgRx", "PSPDF", "Chart.js", "Prime NG", "FastAPI", "MongoDB"],
      color: "#7c5cfc",
    },
    {
      id: "p2p-workflow",
      title: "P2P Workflow Application",
      subtitle: "Saudi-based Government Entity",
      company: "Kaar Technologies",
      description:
        "Developed a multi-level approval dashboard for a Saudi government entity, streamlining procurement and payment workflows. Designed dynamic forms and approval stages for vendor registration, purchase orders, and invoice processing.",
      techStack: ["Angular", "RxJS", "NgRx", "Ant Design", "Chart.js", "Node.js"],
      color: "#ff6b6b",
    },
  ],
  skills: {
    core: [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React", "Python", "Node.js", "UI Design",
    ],
    frameworks: [
      "RxJS", "NgRx", "Redux", "Tailwind CSS", "PrimeNG", "Ant Design",
      "NZ Zorro", "Angular Material", "Next.js", "Flask", "FastAPI", "MongoDB",
    ],
    tools: [
      "GitHub", "Docker", "Postman", "VS Code", "Figma", "Celery",
      "NX Monorepo", "Storybook", "ESLint", "Prettier",
    ],
    methodologies: [
      "SDLC", "Agile", "Scrum", "Kanban", "CI/CD", "TDD", "DevOps",
    ],
  },
  experience: [
    {
      role: "Experience Engineer L2",
      company: "Publicis Sapient",
      period: "Jun 2025 – Present",
      location: "Chennai",
      highlights: [
        "Contributed to developing a migration project, transforming a legacy application into a modern Angular-based web solution.",
        "Built and maintained responsive UI components using Angular, HTML5, and CSS, ensuring a consistent and user-friendly experience.",
        "Utilized and customized components from an in-house UI library to improve development efficiency and maintain uniform design standards.",
        "Leveraged Slingshot AI tool to accelerate front-end development, improve code quality, and enhance overall productivity.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Kaar Technologies",
      period: "Nov 2022 – Jun 2025",
      location: "Chennai",
      highlights: [
        "Developed a high-performance frontend for an estimation tool that processes construction plan PDFs and provides real-time cost analysis.",
        "Designed an interactive tree view UI to efficiently handle thousands of nested data points, enabling seamless navigation and data input.",
        "Implemented drag-and-drop interactions and optimized state management to ensure a smooth user experience with large datasets.",
        "Enhanced UI responsiveness by integrating virtual scrolling and lazy loading, reducing rendering lag.",
        "Developed a multi-level approval dashboard for a Saudi government entity, streamlining procurement and payment workflows.",
      ],
    },
  ],
  education: {
    degree: "Bachelor Degree – Mechatronics Engineering (B.E)",
    institution: "SNS College of Technology, Coimbatore",
    period: "2018 – 2022",
    cgpa: "9.25 CGPA",
  },
  certifications: [
    { name: "Microsoft AI Fundamentals", icon: "🏆" },
    { name: "AWS Cloud Practitioner", icon: "☁️" },
  ],
  faq: [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in frontend development, building scalable web applications using Angular, React, and modern JavaScript frameworks. I offer UI/UX implementation, performance optimization, responsive design, and full-stack integration with Node.js and Python backends.",
    },
    {
      question: "What is your development process?",
      answer:
        "I follow Agile methodologies with iterative sprints. Starting with requirements analysis and design, I move through development, testing (TDD), code review, and deployment. I use CI/CD pipelines for continuous delivery and maintain clean, well-documented code.",
    },
    {
      question: "How do you handle project timelines?",
      answer:
        "I break projects into manageable milestones with clear deliverables. Regular stand-ups and progress updates keep stakeholders informed. I use Kanban/Scrum boards for task tracking and always factor in buffer time for testing and refinements.",
    },
    {
      question: "Can you work with existing teams?",
      answer:
        "Absolutely! I have experience integrating into cross-functional teams at both Publicis Sapient and Kaar Technologies. I'm comfortable with code reviews, pair programming, and collaborating with designers, backend developers, and project managers.",
    },
    {
      question: "What tools do you use?",
      answer:
        "My toolkit includes VS Code, GitHub, Docker, Figma, Postman, Storybook, and NX Monorepo. For testing, I use Jest and SonarQube. I also leverage AI tools like Slingshot to boost development productivity.",
    },
  ],
};
