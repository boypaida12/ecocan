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
  alignment? : string;
}

export default function ImageAndItem({
  title,
  subtitle,
  description,
  item,
  className,
  image,
   alignment = 'self-center'
}: ImageAndItemProps) {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-[2rem] font-bold text-[#23262FCC]">{title}</h2>
        <div>{description}</div>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className={clsx("flex flex-col md:flex-row", className)}>
        <div className="md:flex-0 space-y-4 relative">
          {image}
        </div>
        <div className={`md:w-1/2 space-y-4 ${alignment}`}>
          {item}
        </div>
      </div>
    </div>
  );
}
