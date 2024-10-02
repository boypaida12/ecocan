"use client";

import { CardData } from "@/types/card-data";
import React, { useState } from "react";
import ExpandedCardView from "./components/expanded-card-view";
import SolutionsContent from "./components/solutions-content";
import BrandProtection from "./components/brand-protection/brand-protection";
import ConsumerEngagement from "./components/consumer-engagement/consumer-engagement";
import OnlineSales from "./components/online-sales/online-sales";
import PackagingRecycling from "./components/packaging-recycling/packaging-recycling";

const cardData: CardData[] = [
  {
    id: 1,
    title: "Brand Protection",
    description: "kkkk",
    imageGrey: "/assets/images/solutions/brand-protection.svg",
    imageColor: "/assets/images/solutions/brand-protection-active.svg",
  },
  {
    id: 2,
    title: "Packaging Recycling",
    description: "kkkk",
    imageGrey: "/assets/images/solutions/packaging.svg",
    imageColor: "/assets/images/solutions/packaging-active.svg",
    content: <PackagingRecycling />,
  },
  {
    id: 3,
    title: "Consumer Engagement",
    description: "kkkk",
    imageGrey: "/assets/images/solutions/consumer.svg",
    imageColor: "/assets/images/solutions/consumer-active.svg",
    content: <ConsumerEngagement />,
  },
  {
    id: 4,
    title: "Online Sales",
    description: "kkkk",
    imageGrey: "/assets/images/solutions/online-sales.svg",
    imageColor: "/assets/images/solutions/onlinesales-active.svg",
    content: <OnlineSales />,
  },
];

export default function SolutionsPage() {
  const [activeCard, setActiveCard] = useState<CardData | null>(null);

  const handleCardExpand = (card: CardData) => {
    setActiveCard(card);
  };

  const handleBackToSolutions = () => {
    setActiveCard(null);
  };

  return (
    <div>
      {activeCard ? (
        <ExpandedCardView card={activeCard} onBack={handleBackToSolutions} />
      ) : (
        <SolutionsContent cardData={cardData} onCardExpand={handleCardExpand} />
      )}
    </div>
  );
}
