import React from "react";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

interface OnlineSalesCardProps {
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const OnlineSalesCard: React.FC<OnlineSalesCardProps> = ({
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`relative transition-all ease-in-out duration-500 rounded-2xl overflow-hidden cursor-pointer
        ${
          isActive
            ? "w-4/5 bg-[url('/assets/images/solutions/online-sales-active.svg')]"
            : "w-1/5 bg-gray-200"
        }
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div
          className={`${isActive ? "text-center" : "text-start"} ${
            poppins.className
          }`}
        >
          <h3
            className={`font-bold mb-2 ${
              isActive ? "text-white text-3xl" : "text-gray-700 text-lg"
            }`}
          >
            Online Sales
          </h3>
          {isActive && (
            <div>
              <p className="text-white text-sm mb-4">
                The go-to pocket friendly supermarket app in your pocket.
              </p>
              <Button className="bg-white text-[#4AC63F] font-bold hover:bg-white rounded-full shadow-xl">
                Learn more <ChevronRight className="ml-2" size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
      {!isActive && (
        <div className="absolute bottom-0 right-0">
          <Image
            src="/assets/images/solutions/online-sales-inactive.svg"
            alt="Online Sales"
            width={1000}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default OnlineSalesCard;
