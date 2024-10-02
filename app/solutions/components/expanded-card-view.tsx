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
import { useScroll } from "@/lib/useScroll";

interface ExpandedCardViewProps {
  card: CardData;
  onBack: () => void;
}

const ExpandedCardView: React.FC<ExpandedCardViewProps> = ({
  card,
  onBack,
}) => {
  const isScrolled = useScroll();

  return (
    <>
      <NavigationBar
        className={
          isScrolled ? "bg-white" : "bg-transparent backdrop-blur-xl"
        }
        logoSrc="/assets/images/ecocan-logo.svg"
        firstButtonClassName="rounded-full h-7 xl:h-8 bg-transparent text-primary hover:bg-transparent hover:text-primary"
        secondButtonClassName={`rounded-full h-7 xl:h-8 bg-transparent hover:bg-transparent text-primary border border-primary hover:text-primary`}
      />
      <div className="space-y-2 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0 mt-[3.575rem]">
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
      </div>
    </>
  );
};

export default ExpandedCardView;
