"use client";

import React from "react";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import CheckList from "@/components/contents/consumer/components/checklist";
import NavigationBar from "@/components/shared/navbar/navbar";
import PrimaryButton from "@/components/shared/primary-btn";
import StyledText from "@/components/shared/styled-text";
import { LucideDownload } from "lucide-react";
import ExpandableCards from "./expandable-cards";
import { CardData } from "@/types/card-data";
import { useScroll } from "@/lib/useScroll";
import BrandProtection from "./brand-protection/brand-protection";

interface SolutionsContentProps {
  cardData: CardData[];
  onCardExpand: (card: CardData) => void;
}


export default function SolutionsContent({
  cardData,
  onCardExpand,
}: SolutionsContentProps) {
  const isScrolled = useScroll();
  return (
    <>
      <NavigationBar
        logoSrc={isScrolled ? "/assets/images/ecocan-logo.svg": "/assets/images/ecocan-logo-alt.svg"}
        className={
          isScrolled
            ? "bg-white"
            : "bg-transparent text-white border-b-0 "
        }
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      {/* our offering */}
      <div className="lg:h-[36rem] xl:h-[40rem]">
        <div className="bg-[url('/assets/images/solutions/solution-hero.png')] lg:h-[32rem] xl:h-[40rem] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[69.375rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="mt-60 px-4 xl:px-0 text-white z-50 mx-auto">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-[4rem] text-center font-semibold text-white">
                  Smart Sustainable Solutions
                </h1>
              </div>
              <div className="tracking-wide text-sm lg:text-base xl:text-lg font-light text-white my-10 space-y-4">
                <p className="text-center w-3/5 mx-auto">
                  We seamlessly connect the physical and digital worlds in a
                  manner that is most sustainable to our planet, and to the life
                  it nurtures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="py-24">
          <div className="lg:max-w-[69.375rem] mx-auto px-4 xl:px-0">
            <ImageAndItem
              title="Our Offering"
              subtitle="Brand Protection | Packaging recycling | Consumer engagement | Online Sales"
              description="All-in-one!"
              mainClassName="text-accent font-light text-lg"
            />
            {/* expandable cards */}
            <ExpandableCards cardData={cardData} onCardExpand={onCardExpand} />
          </div>
        </div>
        <div className="space-y-24 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0">
          <BrandProtection/>
        </div>
      </div>
    </>
  );
}
