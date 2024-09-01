"use client";

import React, { useState } from "react";
import TextWithComponent from "../../consumer/components/buy-online";
import PrimaryButton from "@/components/shared/primary-btn";
import Image from "next/image";

export default function ExpandedCards() {
  const [selectedCard, setSelectedCard] = useState(0);

  const cardData = [
    {
      id: 0,
      title: "Brand Protection",
      description:
        "We offer a green tech platform that boosts producer profitability and sustainability by cutting product counterfeiting and supporting extensive post-consumer packaging waste collection for closed-loop recycling.",
      bgColor: "bg-white",
      image: "/assets/images/brand.svg",
    },
    {
      id: 1,
      title: "Packaging Recycling",
      description:
        "Moreover, this platform enables consumers to reliably identify genuine products from fake before purchase, and to earn money by recycling their used product packaging.",
      bgColor: "bg-[#F6C92D]",
      image: "/assets/images/packaging.svg",
    },
    {
      id: 2,
      title: "Consumer Engagement",
      description:
        "We further facilitate customized, incentivized, and gamified interactions between producers, consumers, and packaging recyclers.",
      bgColor: "bg-primary",
      image: "/assets/images/consumer.svg",
    },
  ];

  return (
    <>
      <div className="flex space-x-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          onClick={() => setSelectedCard(card.id)}
          className={`cursor-pointer h-[27rem] py-8 ps-8 rounded-2xl overflow-hidden transition-all duration-300 ${
            selectedCard === card.id ? "w-full" : "w-1/3 opacity-50 grayscale"
          } ${card.bgColor}`}
        >
          <TextWithComponent
            title={
              <p
                className={
                  selectedCard === card.id ? "text-left" : "text-left"
                }
              >
                {card.title}
              </p>
            }
            description={selectedCard === card.id ? card.description : ""}
            component={
              <div>
                {selectedCard === card.id ? (
                  <div className="text-left">
                    <PrimaryButton
                      buttonText="Learn more"
                      className={
                        selectedCard
                          ? "bg-white text-primary hover:text-primary hover:bg-white mb-5"
                          : ""
                      }
                    />
                  </div>
                ) : (
                    ""
                )}
                <div className="relative  h-[23rem] w-[36rem]">
                  <Image
                    src={card.image}
                    width={1000}  
                    height={10000}
                    objectFit="cover"  
                    alt={card.title}
                    className="absolute top-0  left-0 transition-all duration-300 "
                  />
                </div>
              </div>
            }
          />
        </div>
      ))}
    </div>
    </>
  );
}
