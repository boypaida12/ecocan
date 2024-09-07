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
        className={clsx("flex mx-auto mt-[6.25rem] ps-[7.25rem] rounded-2xl", className)}
      >
        <div className={clsx("w-3/5", itemClass)}>{item}</div>
        <div className="">{image}</div>
      </div>
    </div>
  );
}
