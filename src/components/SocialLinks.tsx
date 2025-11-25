import React from "react";
import Image from "next/image";
import { SocialLink } from "@/types";

interface SocialLinksProps {
    links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
    return (
        <div className="social-menus-cont flex flex-row gap-4 items-center">
            {links.map((link) => (
                <div key={link.id} className="sm-item" aria-label={link.name}>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${link.name} profile`}
                    >
                        <Image
                            src={link.icon}
                            height={link.height}
                            width={link.width}
                            alt={`${link.name} logo`}
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SocialLinks;
