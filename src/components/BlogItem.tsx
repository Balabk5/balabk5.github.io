import React from "react";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogItemProps {
    blog: BlogPost;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
    return (
        <div className="blog-wrapper h-auto w-full flex flex-row gap-2 items-center">
            <div className="tech-stack-cont p-1">
                <Image
                    src={blog.platformIcon}
                    height={40}
                    width={40}
                    alt={`${blog.platform} logo`}
                    quality={100}
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1 blog-heading">
                    <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read blog: ${blog.title}`}
                    >
                        <p className="text-xs">{blog.title}</p>
                    </a>
                    <span className="material-symbols-outlined link-btn text-xs">
                        north
                    </span>
                </div>
                <div className="flex flex-row gap-1 flex-wrap">
                    {blog.tags.map((tag, index) => (
                        <div key={index} className="py-1 px-2 tech-stack-cont">
                            <p className="text-xs">{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
