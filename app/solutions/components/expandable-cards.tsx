"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface CardData {
  id: number;
  title: string;
  imageGrey: string;
  imageColor: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Brand Protection",
    imageGrey: "/assets/images/solutions/brand-protection.svg",
    imageColor: "/assets/images/solutions/brand-protection-active.svg"
  },
  {
    id: 2,
    title: "Packaging Recycling",
    imageGrey: "/assets/images/solutions/packaging.svg",
    imageColor: "/assets/images/solutions/packaging-active.svg"
  },
  {
    id: 3,
    title: "Consumer Engagemetn",
    imageGrey: "/assets/images/solutions/consumer.svg",
    imageColor: "/assets/images/solutions/consumer-active.svg"
  },
  {
    id: 4,
    title: "Online Sales",
    imageGrey: "/assets/images/solutions/online-sales.svg",
    imageColor: "/assets/images/solutions/onlinesales-active.svg"
  }
];

const ExpandableCards: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);

  return (
    <div className="">
      <div className="flex space-x-1">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`relative cursor-pointer transition-all duration-300 ${
              activeCard === card.id ? 'w-[45.5625rem] h-[29.4375rem]' : 'w-[12.25rem] h-[29.4375rem]'
            } rounded-lg overflow-hidden`}
            onClick={() => setActiveCard(card.id)}
          >
            <Image
              src={activeCard === card.id ? card.imageColor : card.imageGrey}
              alt={card.title}
              layout="fill"
              className='object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableCards;