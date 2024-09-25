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
    cardData.find((card) => card.title === "Brand Protection")?.id || 1;

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
    <div className="flex xl:space-x-1">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`relative transition-all duration-300 ${
            activeCardId === card.id
              ? "w-[45.5625rem] cursor-pointer"
              : "w-[12.25rem] xl:h-[29.4375rem] lg:h-80"
          } rounded-2xl overflow-hidden`}
          onClick={() => handleCardClick(card)}
        >
          <Image
            src={activeCardId === card.id ? card.imageColor : card.imageGrey}
            alt={card.title}
            layout="fill"
            className="xl:object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableCards;
