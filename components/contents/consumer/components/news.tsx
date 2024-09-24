import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const newsCards = [
  {
    image: "/assets/images/consumer/wind-turbine.svg",
    title: "Select Smart Choices: Unveiling The Advantages Of Smart Packaging",
  },
  {
    image: "/assets/images/consumer/plastic-bottles.svg",
    title: "Avoid counterfeits, Recycle to earn",
  },
  {
    image: "/assets/images/consumer/beverage-fridge.svg",
    title: "Avoid counterfeits, Recycle to earn",
  },
];

export default function News() {
  return (
    <>
      <TextWithCards
        title="News and Updates"
        customCard={
          <div className="grid lg:grid-cols-3 gap-3">
            {newsCards.map((card, index) => {
              return (
                <Card className="border-none bg-transparent shadow-none">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="w-full"
                  />
                  <h2 className="text-md font-semibold mt-2">{card.title}</h2>
                </Card>
              );
            })}
          </div>
        }
      />
    </>
  );
}
