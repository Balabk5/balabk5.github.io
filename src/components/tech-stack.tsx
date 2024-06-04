import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js

interface TechStackComponentProps {
  item: string;
}

const TechStackComponent: React.FC<TechStackComponentProps> = ({ item }) => {
  return (
    <div className="tech-stack-cont p-1">

        <Image
          src={item}
          height={25}
          width={25}
          alt="Tech stack logo"
          quality={100}
        />
      </div>
  );
};

export default TechStackComponent;
