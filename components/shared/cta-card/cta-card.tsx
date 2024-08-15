import Image from "next/image";
import React from "react";
import PrimaryButton from "../primary-btn";

interface CtaCardProps {
  src: string;
  description?: string;
  heading?: string;
  flexReverse?: string;
}

export default function CtaCard({
  src,
  heading = "Keep the Environment Clean and Earn",
  description = "Discover new Eco-stations, your favourite spots or hidden gems, new Eco-products and more, for future purchases",
  flexReverse,
}: CtaCardProps) {
  return (
    <div
      className={`max-w-[77.5rem] flex mx-auto py-[6.25rem] mt-[6.25rem] px-12 bg-white rounded-2xl ${flexReverse}`}
    >
      <div className="md:flex-grow-0 space-y-8">
        <h2 className="text-2xl lg:text-5xl text-[#23262FCC] font-bold">
          {heading}
        </h2>
        <p className="text-xl text-[#4E5157] tracking-wide font-light">
          {description}
        </p>
        <div>
            <PrimaryButton />
        </div>
      </div>
      <div className="">
        <div className="w-[25rem] h-[25rem] ms-auto ">
          <Image
            src={src}
            alt={src}
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
