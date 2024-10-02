import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

interface BrandProtectionCardProps {
  isAnyOtherCardHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const BrandProtectionCard: React.FC<BrandProtectionCardProps> = ({
  isAnyOtherCardHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isActive = !isAnyOtherCardHovered;

  return (
    <div
      className={`relative transition-all ease-in-out duration-500 rounded-2xl overflow-hidden cursor-default
        ${isActive ? "w-4/5 bg-white" : "w-1/5 bg-gray-200"}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className={poppins.className}>
          <h3
            className={`font-bold mb-2 ${
              isActive ? "text-black text-3xl" : "text-gray-700 text-lg"
            }`}
          >
            Brand Protection
          </h3>
          {isActive && (
            <div className="space-y-4">
              <p className="text-black text-sm mb-4">
                We offer a platform that boosts product originality and
                sustainability by cutting product counterfeiting and supporting
                extensive post-consumer packaging waste collection for
                closed-loop recycling.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={`absolute ${isActive ? "bottom-0 right-0" : "top-[30%]"}`}>
        <Image
          src={isActive ? "/assets/images/solutions/brand-protection.svg" : "/assets/images/solutions/brand-protection-inactive.svg"}
          alt="Brand Protection"
          width={1000}
          height={100}
        />
      </div>
    </div>
  );
};

export default BrandProtectionCard;
