import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CardData } from "@/types/card-data";

interface ExpandableCardsProps {
  cardData: CardData[];
  onCardExpand: (card: CardData) => void;
}

const ExpandableCards: React.FC<ExpandableCardsProps> = ({
  cardData,
  onCardExpand,
}) => {
  const consumerEngagementCardId =
    cardData.find((card) => card.title === "Consumer Engagement")?.id || 3;

  const [activeCardId, setActiveCardId] = useState<number>(
    consumerEngagementCardId
  );

  useEffect(() => {
    setActiveCardId(consumerEngagementCardId);
  }, [consumerEngagementCardId]);

  const handleCardClick = (card: CardData) => {
    if (activeCardId === card.id) {
      onCardExpand(card);
    } else {
      setActiveCardId(card.id);
    }
  };

  return (
    <div className="flex space-x-1">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`relative transition-all duration-300 ${
            activeCardId === card.id
              ? "w-[45.5625rem] h-[29.4375rem] cursor-pointer"
              : "w-[12.25rem] h-[29.4375rem]"
          } rounded-xl overflow-hidden`}
          onClick={() => handleCardClick(card)}
        >
          <Image
            src={activeCardId === card.id ? card.imageColor : card.imageGrey}
            alt={card.title}
            layout="fill"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableCards;
