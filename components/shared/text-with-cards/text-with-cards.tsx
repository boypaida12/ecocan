import React from "react";
import clsx from "clsx";

interface TextWithCardsProps {
  title?: string;
  description?: React.ReactNode;
  customCard?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function TextWithCards({
  title,
  description,
  subtitle,
  customCard,
  className
}: TextWithCardsProps) {
  return (
    <div>
      <div className={clsx("text-accent w-[72%]", className)}>
        <h2 className="font-bold text-[2rem]">{title}</h2>
        <div>{subtitle}</div>
        <div>{description}</div>
      </div>
      {customCard}
    </div>
  );
}
