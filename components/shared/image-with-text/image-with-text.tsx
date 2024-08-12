import React from "react";
import { LucideCircleCheck } from "lucide-react";
import Image from "next/image";

interface Direction {
  heading: string;
  description: string;
}

interface ImageWithTextProps {
  mainImage: string;
  secondaryImage?: string;
  title: string;
  subtitle: string;
  directions: Direction[];
  imageWidth?: string;
  imageHeight?: string;
}

const DirectionItem: React.FC<Direction> = ({ heading, description }) => (
  <div className="flex items-start mt-4">
    <LucideCircleCheck className="text-white fill-primary mr-2 mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-semibold text-[#404040]">{heading}</h3>
      <p className="text-gray-600 w-11/12">{description}</p>
    </div>
  </div>
);

export default function ImageWithText({
  mainImage,
  secondaryImage,
  title,
  subtitle,
  directions,
  imageWidth = "w-[25.625rem]",
  imageHeight = "h-[12.625rem]",
}: ImageWithTextProps) {
  return (
    <div className="max-w-[65rem] mx-auto flex flex-col md:flex-row gap-12 py-[6.25rem]">
      <div className="md:flex-0 space-y-4">
        <div
          className={`${imageWidth} ${imageHeight} overflow-hidden rounded-2xl`}
        >
          <Image
            src={mainImage}
            alt="Main image"
            width={100}
            height={100}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        {secondaryImage && (
          <div
            className={`${imageWidth} ${imageHeight} overflow-hidden rounded-2xl`}
          >
            <Image
              src={secondaryImage}
              alt="Secondary image"
              width={100}
              height={100}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        )}
      </div>
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-[2rem] font-bold text-[#23262FCC]">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
        <div className="space-y-6">
          {directions.map((direction, index) => (
            <DirectionItem key={index} {...direction} />
          ))}
        </div>
      </div>
    </div>
  );
}
