import React, { useState } from 'react';
import BrandProtectionCard from './cards/brand-protection-card';
import ConsumerEngagementCard from './cards/consumer-engagement-card';
import OnlineSalesCard from './cards/online-sales-card';
import PackagingRecyclingCard from './cards/packaging-recycling-card';
import { CardData } from '@/types/card-data';

interface ExpandableCardsProps {
  cardData: CardData[];
  onCardExpand: (card: CardData) => void;
}

const ExpandableCards: React.FC<ExpandableCardsProps> = ({ cardData, onCardExpand }) => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    if (id !== 1) {
      const clickedCard = cardData.find(card => card.id === id);
      if (clickedCard) {
        onCardExpand(clickedCard);
      }
    }
  };

  const isCardActive = (id: number) => id === 1 ? hoveredCardId === null : hoveredCardId === id;

  return (
    <div className="flex space-x-3 h-96 overflow-hidden">
      <BrandProtectionCard
        isAnyOtherCardHovered={hoveredCardId !== null && hoveredCardId !== 1}
        onMouseEnter={() => setHoveredCardId(1)}
        onMouseLeave={() => setHoveredCardId(null)}
      />
      <PackagingRecyclingCard
        isActive={isCardActive(2)}
        onClick={() => handleCardClick(2)}
        onMouseEnter={() => setHoveredCardId(2)}
        onMouseLeave={() => setHoveredCardId(null)}
      />
      <ConsumerEngagementCard
        isActive={isCardActive(3)}
        onClick={() => handleCardClick(3)}
        onMouseEnter={() => setHoveredCardId(3)}
        onMouseLeave={() => setHoveredCardId(null)}
      />
      <OnlineSalesCard
        isActive={isCardActive(4)}
        onClick={() => handleCardClick(4)}
        onMouseEnter={() => setHoveredCardId(4)}
        onMouseLeave={() => setHoveredCardId(null)}
      />
    </div>
  );
};

export default ExpandableCards;