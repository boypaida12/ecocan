"use client"

import { CardData } from '@/types/card-data';
import React, { useState } from 'react';
import ExpandedCardView from './components/expanded-card-view';
import SolutionsContent from './components/solutions-content';
import BrandProtection from './brandProtection/BrandProtection';
import OnlineSales from './onlineSales/OnlineSales';



const cardData: CardData[] = [
  {
    id: 1,
    title: "Brand Protection",
    imageGrey: "/assets/images/solutions/brand-protection.svg",
    imageColor: "/assets/images/solutions/brand-protection-active.svg",
    content: <BrandProtection/>,
  },
  {
    id: 2,
    title: "Packaging Recycling",
    imageGrey: "/assets/images/solutions/packaging.svg",
    imageColor: "/assets/images/solutions/packaging-active.svg",
    content: "Detailed information about Packaging Recycling...",
  },
  {
    id: 3,
    title: "Consumer Engagement",
    imageGrey: "/assets/images/solutions/consumer.svg",
    imageColor: "/assets/images/solutions/consumer-active.svg",
    content: "Detailed information about Consumer Engagement...",
  },
  {
    id: 4,
    title: "Online Sales",
    imageGrey: "/assets/images/solutions/online-sales.svg",
    imageColor: "/assets/images/solutions/onlinesales-active.svg",
    content: <OnlineSales/>,
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
        <ExpandedCardView 
          card={activeCard} 
          onBack={handleBackToSolutions} 
        />
      ) : (
        <SolutionsContent 
          cardData={cardData} 
          onCardExpand={handleCardExpand} 
        />
      )}
    </div>
  );
}