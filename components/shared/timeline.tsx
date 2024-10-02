import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"]
});

interface TimelineItem {
  image: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title: string;
  subtitle: React.ReactNode;
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ title, subtitle, items, className }) => {
  return (
    <div className="max-w-[69.375rem] mx-auto">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="text-lg mb-6">{subtitle}</div>

      <div className="relative">
        {/* This div creates the vertical line */}
        <div className={clsx("absolute left-[40%] top-0 bottom-[30%] w-[1px] bg-black transform -translate-x-1/2", className)}></div>

        {items.map((item, index) => (
          <div key={index} className="mb-8 flex items-stretch">
            <div className="w-2/5 pr-8 flex">
              <div className="relative w-11/12">
                <div className="w-full h-[12.5rem] rounded-2xl overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
                {/* This creates the horizontal line connecting to the vertical line */}
                <div className="absolute top-0 lg:-right-[20.5%] xl:-right-[19.25%] w-3 h-3 bg-black"></div>
              </div>
            </div>
            <div className="w-3/5 flex flex-col">
              <div className="relative w-10/12 mx-auto">
                <h3 className={`font-bold mb-2 ${poppins.className}`}>{item.title}</h3>
                <p className={`font-light ${poppins.className}`}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;