import React from "react";
import CustomCard from "./custom-card";
import Link from "next/link";

interface TextWithCardsProps {
  title?: string;
  description?: React.ReactNode;
  customCard?: React.ReactNode;
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
  customCard = <CustomCard />,
}: TextWithCardsProps) {
  return (
    <div className="max-w-[77.5rem] mx-auto">
      <div className="text-accent w-[72%]">
        <h2 className="font-bold text-[2.5rem]">{title}</h2>
        {description}
      </div>
      {customCard}
    </div>
  );
}
