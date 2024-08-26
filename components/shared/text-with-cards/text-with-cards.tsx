import React from "react";
import CustomCard from "./custom-card";
import Link from "next/link";
import clsx from "clsx";
import HyperLink from "../hyperlink/hyperlink";

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
  customCard = <CustomCard />,
  className
}: TextWithCardsProps) {
  return (
    <div>
      <div className={clsx("text-accent w-[72%]", className)}>
        <h2 className="font-bold text-[2.5rem]">{title}</h2>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
      {customCard}
    </div>
  );
}
