import React from "react";
import clsx from "clsx";

interface CtaCardProps {
  item?: React.ReactNode;
  className?: string;
  image?: React.ReactNode
}

export default function CtaCard({ item, className, image }: CtaCardProps) {
  return (
    <div>
      <div
        className={clsx("max-w-[65rem] flex mx-auto mt-[6.25rem] ps-[7.25rem] py-[4.75rem] bg-white rounded-2xl", className)}
      >
        <div className="w-3/5">{item}</div>
        <div className="">{image}</div>
      </div>
    </div>
  );
}
