import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";
import ExpandableContent from "../../consumer/components/expandable-content";
import SimpleCard from "../../eco-producer/components/simpleCard";
import Image from "next/image";

const cardContent = [
  {
    src: "/assets/images/recycler/recyclate.svg",
    title: "Food-grade recyclate",
    content:
      "ECOCAN DRS’s clean-loop, incentivised, and fully digitised ECO-system ensures recyclate segregation at source. ",
  },
  {
    src: "/assets/images/recycler/reliable.svg",
    title: "Reliable recyclate supply",
    by: "by John Smith",
    content:
      "Our extensive ECO-station network, and direct engagement with ECOnsumers, ensures dependable and high-volume empties collection",
  },
  {
    src: "/assets/images/recycler/carbon.svg",
    title: "Cut your carbon footprint",
    by: "by John Smith",
    content:
      "We deploy e-mobility in our operations. Including delivery of recyclate to you. That we cut CO2e emissions to the bare minimum",
  },
];

export default function JoinSystem() {
  return (
    <TextWithCards
      title="Why join the ECO-system?"
      description={
        <p>
          Want to cut contaminated recyclate losses? Boost your efficiency? And
          make more money? Then the ECOCAN collection system is where you should
          be
        </p>
      }
      customCard={
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 items-center">
          {cardContent.map((card, index) => (
            <SimpleCard
              className="border-transparent p-0"
              cardHeight="h-[12rem]"
              image={
                <div className=" w-[full] max-h-[15.75rem] overflow-hidden">
                  <Image
                    src={card.src}
                    alt="image"
                    width={280}
                    height={220}
                    className="object-cover h-full w-full"
                  />
                </div>
              }
              key={index}
              title={card.title}
              content={<ExpandableContent content={card.content} />}
            />
          ))}
        </div>
      }
    />
  );
}
