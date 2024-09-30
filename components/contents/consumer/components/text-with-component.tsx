import PrimaryButton from "@/components/shared/primary-btn";
import clsx from "clsx";
import React from "react";

interface TextWithComponentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  component?: React.ReactNode;
  className?: string;
}

export default function TextWithComponent({
  title,
  description,
  component,
  className,
}: TextWithComponentProps) {
  return (
    <>
      <div className={clsx("space-y-4", className)}>
        <div className="text-[2rem] font-semibold">{title}</div>
        <div className="text-accent">{description}</div>
        {component && <div className="mt-5">{component}</div>}
      </div>
    </>
  );
}
