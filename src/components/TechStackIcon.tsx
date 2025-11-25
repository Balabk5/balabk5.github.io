import React from "react";
import Image from "next/image";

interface TechStackIconProps {
    item: {
        src: string;
        height: number;
        width: number;
    };
    alt?: string;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ item, alt }) => {
    return (
        <div className="tech-stack-cont p-1">
            <Image
                src={item.src}
                height={item.height}
                width={item.width}
                alt={alt || "Tech stack logo"}
                quality={100}
                className="rounded-lg"
            />
        </div>
    );
};

export default TechStackIcon;
