import PrimaryButton from "@/components/shared/primary-btn";
import React from "react";

interface TextWithComponentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  component?: React.ReactNode;
}

export default function TextWithComponent({
  title,
  description,
  component,
}: TextWithComponentProps) {
  return (
    <>
      <div>
          <div className="text-[2rem] text-accent font-semibold">{title}</div>
          <div className="text-accent">{description}</div>
          {component && <div className="mt-5">{component}</div>}
      </div>
    </>
  );
}
