import React from 'react';
import Image from "next/image";

interface CardProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  imageSrc: string;
  description: React.ReactNode;
}

export const ImageList: React.FC<CardProps> = ({ heading, subheading, imageSrc, description }) => {
  return (
    <div className="bg-white p-6 mt-8 rounded-lg flex flex-col items-center justify-start w-[33.125rem] h-auto">
      <div className="mt-12">
        {heading}
      </div>
      <div className="mb-7 text-gray-600">
        {subheading}
      </div>
      <div className="mb-4">
        <Image width={443} height={400} src={imageSrc} alt="Card image" className="" />
      </div>
      <div className="text-gray-800">
        {description}
      </div>
    </div>
  );
};