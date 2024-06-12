import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js

interface TechStackComponentProps {
  item: {
    src: string;
    height: number;
    width: number;
  }
}

const TechStackComponent: React.FC<TechStackComponentProps> = ({ item }) => {
  return (
    <div className="tech-stack-cont p-1">

        <Image
          src={item.src}
          height={item.height}
          width={item.width}
          alt="Tech stack logo"
          quality={100}
        />
      </div>
  );
};

export default TechStackComponent;
