import React from "react";
import clsx from "clsx";

interface CtaCardProps {
  item?: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
  itemClass?: string;
}

export default function CtaCard({ item, className, image, itemClass }: CtaCardProps) {
  return (
    <div>
      <div
        className={clsx("flex mx-auto mt-[6.25rem] rounded-2xl", className)}
      >
        <div className={clsx("w-3/5 self-center z-50", itemClass)}>{item}</div>
        <div className="z-50">{image}</div>
      </div>
    </div>
  );
}
