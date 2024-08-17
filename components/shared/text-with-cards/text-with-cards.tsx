import React from "react";
import CustomCard from "./custom-card";
import Link from "next/link";
import clsx from "clsx";

interface TextWithCardsProps {
  title?: string;
  description?: React.ReactNode;
  customCard?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function TextWithCards({
  title = "Get Started",
  description = (
    <p>
      Whether you want to keep your environment clean, earn extra cash, or to
      safeguard your health from fake drinks. With our <span className="font-semibold">free-to-use</span> EcocanApp,
      it&apos;s all just a <Link href="/" className="text-primary">click away!</Link>
    </p>
  ),
  subtitle,
  customCard = <CustomCard />,
  className
}: TextWithCardsProps) {
  return (
    <div className="max-w-[77.5rem] mx-auto">
      <div className={clsx("text-accent w-[72%]", className)}>
        <h2 className="font-bold text-[2.5rem]">{title}</h2>
        {subtitle}
        {description}
      </div>
      {customCard}
    </div>
  );
}
