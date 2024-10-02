import React from "react";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

interface PackagingRecyclingCardProps {
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PackagingRecyclingCard: React.FC<PackagingRecyclingCardProps> = ({
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`relative transition-all ease-in-out delay-100 duration-500 rounded-2xl overflow-hidden cursor-pointer
        ${isActive ? "w-4/5 bg-yellow-400" : "w-1/5 bg-gray-200"}
      `}
      onClick={onClick}
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
            Packaging Recycling
          </h3>
          {isActive && (
            <div>
              <p className="text-black text-sm mb-4">
                Make an impact and take control of your recycling commitments by
                tracking your used product packaging all the way back to you as
                raw materials for new products.
              </p>
              <Button className="bg-white text-yellow-400 rounded-full shadow-xl">
                Learn more <ChevronRight className="ml-2" size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`absolute ${
          isActive ? "-bottom-5 left-5" : "top-[42%] left-5"
        }`}
      >
        <Image
          src={
            isActive
              ? "/assets/images/solutions/packaging-active.svg"
              : "/assets/images/solutions/packaging-inactive.svg"
          }
          alt="Packaging Recycling"
          width={1000}
          height={100}
        />
      </div>
    </div>
  );
};

export default PackagingRecyclingCard;
