export interface TechStackItem {
    src: string;
    height: number;
    width: number;
}

export interface BlogPost {
    id: string;
    platform: string;
    platformIcon: string;
    title: string;
    url: string;
    tags: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    githubUrl: string;
    technologies: string[];
}

export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
    height: number;
    width: number;
}

export interface WorkExperience {
    id: string;
    period: string;
    position: string;
    company: string;
    description: string;
}

export interface ProfileInfo {
    name: string;
    title: string;
    location: string;
    languages: string[];
    skills: string[];
    profileImage: string;
    animatedProfileImage: string;
    resumeUrl: string;
    email: string;
}
