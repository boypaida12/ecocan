"use client";

import React, { useEffect, useState } from "react";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { ReusableAccordion } from "@/components/shared/accordion";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "@/components/contents/consumer/components/buy-online";
import CheckList from "@/components/contents/consumer/components/checklist";
import { FaqSection } from "@/components/contents/consumer/components/faq";
import NavigationBar from "@/components/shared/navbar/navbar";
import ExpandedCards from "@/components/contents/recycler/components/brand-protection";

const steps = [
  {
    id: 1,
    step: "Increased recycling rates",
    description:
      " You’re familiar with how difficult it is to capture empties circulated off-trade. But are also aware of the spellbinding magic of a worthwhile refundable deposit! So 1 + 1 = 2",
  },
  {
    id: 2,
    step: "Highest purity empties",
    description:
      "Recycling is more of a quality than quantity question. And a DRS elaborately delivers non-contaminated recyclate with over 30% greater market value",
  },
  {
    id: 3,
    step: "Extended Producer Responsibility",
    description: (
      <p>
        A Nordic-design DRS is aligned with the{" "}
        <HyperLink link="‘Polluter Pays Principle’" href="/" />, and most
        effectively fulfils this mandate, ensuring everyone contributes{" "}
      </p>
    ),
  },
  {
    id: 4,
    step: "It’s the Gold-Standard",
    description:
      "Endorsed by the United Nation, and European Union’s PPWR and SUP directives, a DRS is the only known take-back system that can collect over 90% of eligible empties, with top-notch quality",
  },
];

const accordionItems = [
  {
    id: "item-1",
    question: "Food-grade recyclate",
    answer: (
      <div>
        <p>
          ECOCAN DRS&apos;s clean-loop, incentivised, and fully digitised
          ECO-system ensures{" "}
          <HyperLink link="recyclate segregation at source." href="/" />{" "}
        </p>
      </div>
    ),
  },
  {
    id: "item-2",
    question: "Reliable recyclate supply",
    answer:
      "Our extensive collection networks, and direct engagement with ECOnsumers, ensures dependable and high-volume empties collection",
  },
  {
    id: "item-3",
    question: "Cut your carbon footprint",
    answer:
      "We deploy e-mobility in our operations. Including delivery of recyclate to you. So it’s up to you to further reduce your environmental impact from your side.",
  },
];

const cards = [
    {
      title: "Brand Protection",
      description: "We offer a green-tech platform that boosts producer profitability and sustainability by cutting product counterfeiting and supporting extensive post-consumer packaging waste collection for closed-loop recycling.",
      imageSrc: "/assets/images/brand-protection.png"
    },
    {
      title: "Packaging Recycling",
      description: "Our advanced recycling solutions ensure efficient and environmentally friendly packaging recycling processes.",
      imageSrc: "/assets/images/packaging-recycling.png"
    },
    {
      title: "Consumer Engagement",
      description: "We further facilitate customized, incentivized, and gamified interactions between producers, consumers, and packaging recyclers.",
      imageSrc: "/assets/images/consumer-engagement.png"
    },
    // Add more cards as needed
  ];

export default function RecyclerContent() {
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
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        className={
          isScrolled
            ? "bg-[#4ac63f]"
            : "bg-transparent backdrop-blur-xl border-b-0"
        }
        linkColor="text-white"
      />
      {/* our offering */}
      <div className="lg:h-[36rem] xl:h-[40rem]">
        <div className="bg-[url('/assets/images/recycler-bg.png')] lg:h-[32rem] xl:h-[40rem] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[65rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="mt-60 px-4 xl:px-0 text-white z-50 mx-auto">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-7xl text-center font-semibold text-white">
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
          <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
            <div>
                <ImageAndItem
                  title="Our Offering"
                  subtitle="Brand Protection | Online Sales | Packaging recycling | Consumer engagement"
                  mainClassName="text-accent font-light text-lg"
                />
                {/* expandable cards */}
                <ExpandedCards/>
            </div>
      </div>
      </div>
    </>
  );
}
