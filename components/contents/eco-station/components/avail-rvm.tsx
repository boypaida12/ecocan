import HyperLink from "@/components/shared/hyperlink/hyperlink";
import PrimaryButton from "@/components/shared/primary-btn";
import React from "react";

interface TextWithComponentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  component?: React.ReactNode;
}

export default function TextWithComponent({
  title = (
    <p>
        We&apos;ll avail an <span className="bg-gradient-to-t from-[#FFDD4C] to-[#4AC63F] text-transparent bg-clip-text"> RVM</span>
    </p>
  ),
  description = (
    <p>
        If over 100 ECOnsumers return empties to you every day, we can help set up an <HyperLink link="ECOCAN R.V.M" />{" "}To boost your efficiency, and offer ECOnsumers unforgettable recycling experience. That they’ll keep coming back. And spend more&quot;
    </p>
  ),
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
