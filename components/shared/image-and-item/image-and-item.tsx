import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImageAndItemProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  item?: React.ReactNode;
  image?: React.ReactNode;
  className?: string;
  mainClassName?: string;
}

export default function ImageAndItem({
  title,
  subtitle,
  description,
  item,
  mainClassName,
  className,
  image,
}: ImageAndItemProps) {
  return (
    <div>
      <div className={clsx("text-center mb-12")}>
        <h2 className="text-[2rem] font-bold text-[#23262FCC]">{title}</h2>
        <p
          className={clsx(
             "text-[#23262FCC]",
            mainClassName
          )}
        >
          {subtitle}
        </p>
      </div>
      <div className={clsx("flex flex-col md:flex-row", className)}>
        <div className="space-y-4 relative">{image}</div>
        <div className="md:w-1/2 space-y-4 self-center me-auto">{item}</div>
      </div>
    </div>
  );
}
