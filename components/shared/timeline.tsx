import React from "react";
import Image from "next/image";
import clsx from "clsx";

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
    <div className="max-w-[65rem] mx-auto">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="text-lg mb-6">{subtitle}</div>

      <div className="relative">
        {/* This div creates the vertical line */}
        <div className={clsx("absolute left-1/2 top-0 bottom-[30%] w-0.5 bg-black transform -translate-x-1/2", className)}></div>

        {items.map((item, index) => (
          <div key={index} className="mb-8 flex items-stretch">
            <div className="w-1/2 pr-8 flex">
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
                <div className="absolute top-0 lg:-right-[18%] xl:-right-[17.75%] w-3 h-3 bg-black"></div>
              </div>
            </div>
            <div className="w-1/2 pl-8 flex flex-col">
              <div className="relative w-11/12 ms-auto">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;