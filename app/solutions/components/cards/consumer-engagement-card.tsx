import React from "react";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

interface ConsumerEngagementCardProps {
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ConsumerEngagementCard: React.FC<ConsumerEngagementCardProps> = ({
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`relative transition-all ease-in-out duration-500 rounded-2xl overflow-hidden cursor-pointer
        ${isActive ? "w-4/5 bg-[#4AC63F]" : "w-1/5 bg-gray-200"}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className={`${isActive ? "text-center" : "text-start"} ${poppins.className}`}>
          <h3
            className={`font-bold mb-2 ${
              isActive ? "text-black text-3xl" : "text-gray-700 text-lg"
            }`}
          >
            Consumer Engagement
          </h3>
          {isActive && (
            <div>
              <p className="text-black text-sm mb-4">
                We foster direct engagements between producers, consumers, and
                packaging recyclers.
              </p>
              <Button className="bg-white text-[#4AC63F] font-bold hover:bg-white rounded-full shadow-xl">
                Learn more <ChevronRight className="ml-2" size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-5`}
      >
        <Image
          src={
            isActive
              ? "/assets/images/solutions/consumer-active.svg"
              : "/assets/images/solutions/consumer-inactive.svg"
          }
          alt="Consumer Engagement"
          width={1000}
          height={100}
        />
      </div>
    </div>
  );
};

export default ConsumerEngagementCard;
