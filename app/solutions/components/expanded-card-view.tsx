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
      <div className="space-y-2 py-8 max-w-[77.5rem] mx-auto px-4 xl:px-0">
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
          <h2 className="text-2xl font-bold mt-4 mb-2">{card.title}</h2>
          <p>{card.content}</p>
        </div>
        {/* Add more detailed content here */}
      </div>
    </>
  );
};

export default ExpandedCardView;
