import PrimaryButton from "@/components/shared/primary-btn";
import React from "react";

interface TextWithComponentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  component?: React.ReactNode;
}

export default function TextWithComponent({
  title = "Buy Online",
  description = " Discover new ECO-products on ECOCAN market, place your order with just a few clicks, and have your favourite drinks delivered to your doorstep, or wherever you are, in minutes",
  component = <PrimaryButton buttonText="Learn more" />,
}: TextWithComponentProps) {
  return (
    <div>
      <div className="xl:w-3/5">
          <h2 className="text-5xl text-accent font-bold">{title}</h2>
          <p className="text-accent my-5">{description}</p>
          {component && <div className="mt-10 w-3/5">{component}</div>}
      </div>
    </div>
  );
}
