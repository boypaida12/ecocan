import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImageAndItemProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?:React.ReactNode;
  item?: React.ReactNode;
  image?: React.ReactNode;
  className?: string;
}

export default function ImageAndItem({
  title,
  subtitle,
  description,
  item,
  className,
  image
}: ImageAndItemProps) {
  return (
    <div className="max-w-[77.5rem] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[2rem] font-bold text-[#23262FCC]">{title}</h2>
        <p>{description}</p>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className={clsx("flex flex-col md:flex-row gap-12", className)}>
        <div className="md:flex-0 space-y-4">
          {image}
        </div>
        <div className="md:w-1/2 space-y-4 self-center">
          {item}
        </div>
      </div>
    </div>
  );
}
