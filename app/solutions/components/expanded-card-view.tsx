"use client";

import React, { useEffect, useState } from "react";
import { CardData } from "@/types/card-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import NavigationBar from "@/components/shared/navbar/navbar";

interface ExpandedCardViewProps {
  card: CardData;
  onBack: () => void;
}

const ExpandedCardView: React.FC<ExpandedCardViewProps> = ({
  card,
  onBack,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NavigationBar
        className={
          isScrolled ? "bg-[#4ac63f]" : "bg-transparent backdrop-blur-xl"
        }
        logoSrc="/assets/images/ecocan-logo.svg"
        firstButtonClassName="rounded-full h-7 xl:h-8 bg-transparent border border-primary text-primary hover:bg-transparent hover:text-primary"
        secondButtonClassName="rounded-full h-7 xl:h-8 bg-[#FFDD4E] text-[#383A35] hover:bg-[#FFDD4E] hover:text-[#383A35]"
      />
      <div className="space-y-2 py-8 max-w-[77.5rem] mx-auto px-4 xl:px-0 mt-[3.575rem]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={onBack} className="cursor-pointer">
                Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{card.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="">
          <p>{card.content}</p>
        </div>
        {/* Add more detailed content here */}
      </div>
    </>
  );
};

export default ExpandedCardView;
