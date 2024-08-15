import Image from "next/image";
import React from "react";
import PrimaryButton from "../primary-btn";
import clsx from "clsx";

interface CtaCardProps {
  item: React.ReactNode;
  className: string;
}

export default function CtaCard({ item, className }: CtaCardProps) {
  return (
    <div
      className={clsx("max-w-[77.5rem] flex mx-auto mt-[6.25rem] px-12 bg-white rounded-2xl", className)}
    >
      {item}
    </div>
  );
}
