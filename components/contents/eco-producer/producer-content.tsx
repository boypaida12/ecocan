"use client";

import { ReusableAccordion } from "@/components/shared/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import WhiteBgCard from "@/components/shared/white-bg-card";
import {
  LucideAward,
  LucideChevronRight,
  LucideDownload,
  LucideGem,
  LucideRecycle,
} from "lucide-react";
import React from "react";
import HowTo from "../../shared/HowTo";
import Optimize from "./components/optimize";
import { title } from "process";
import { FaqSection } from "../consumer/components/faq";
import Image from "next/image";
import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "../consumer/components/text-with-component";
import ExpandableContent from "../consumer/components/expandable-content";
import SimpleCard from "./components/simpleCard";
import AlchemyControls from "./components/alchemy-controls";
import AlchemyOnlineSales from "./components/alchemy-online-sales";
import AlchemyEngagement from "./components/alchemy-engagement";


const cardContent = [
  {
    src: "/assets/images/producer/revenue.svg",
    content: "Boost your revenues",
  },
  {
    src: "/assets/images/producer/efficiency.svg",
    content: "Optimise your efficiency",
  },
  {
    src: "/assets/images/producer/club.svg",
    content: "Protect your customers",
  },
  {
    src: "/assets/images/producer/planet.svg",
    content: "Preserve the planet",
  },
];



const alchemyContent = [
  {
    icon: "/assets/images/producer/alchemy-1.svg",
    title: "Brand protection",
    content: "We give you the controls",
    child: (
      <>
        <AlchemyControls/>
      </>
    ),
  },
  {
    icon: "/assets/images/producer/alchemy-2.svg",
    title: "Online Sales",
    content: "We live in a world of Super Convenience ",
    child: (
      <>
        <AlchemyOnlineSales/>
      </>
    ),
  },
  {
    icon: "/assets/images/producer/alchemy-3.svg",
    title: "Engagement",
    content: "Econsumers care more than just the price",
    child: (
      <>
        <AlchemyEngagement/>
      </>
    ),
  },
];

const accordionItems = [
  {
    id: "item-1",
    question: "Increase your sustainability",
    answer: (
      <div>
        <p>
          <HyperLink link="Register here" href="/" /> to join the Ecommunity,
          and reduce your carbon, litter and energy footprint.
        </p>
      </div>
    ),
  },
  {
    id: "item-2",
    question: "Protect your integrity!",
    answer: (
      <div>
        <p>
          Deploy <HyperLink link="ECOCAN security codes" href="/" />,{" "}
          <HyperLink link="ECOCAN TnT" href="/" />, and{" "}
          <HyperLink link="ECOCAN DRS" href="/" />, to prevent faking of your
          products. Then sit back, and watch your revenues grow from the
          reclaimed market share, and increased customer loyalty!
        </p>
      </div>
    ),
  },
  {
    id: "item-3",
    question: "Increase sales",
    answer: (
      <div className="space-y-6">
        <p>
          Get your products listed on{" "}
          <HyperLink link="ECOCAN Market" href="/" />, and tap into the large
          pool of ECOnsumers.
        </p>
        <p>
          As bonus to increased revenues from this new market, you&apos;ll
          receive unique insights from <HyperLink link="ECOCAN TnT" href="/" />,
          and engage ECOnsumers with targeted marketing campaigns via{" "}
          <HyperLink link="EcocanApp" href="/" />
        </p>
      </div>
    ),
  },
  {
    id: "item-4",
    question: "Cut production cost",
    answer: (
      <div className="space-y-6">
        <p>
          Packaging costs are skyrocketing! But we can help keep your costs down
          by collecting your empties for reuse or recycling, through the
          clean-loop ECOCAN DRS. If you prefer, we can even process the
          collected empties for you.
        </p>
      </div>
    ),
  },
];

const howToData = [
  {
    id: 1,
    icon: (
      <Image
        src="/assets/images/producer/one.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: (
      <div>
        <HyperLink link="Register Here" href="/" /> and we&apos;ll revert ASAP
      </div>
    ),
    description: (
      <p className="text-sm mt-2">
        Or directly <HyperLink link="get in touch with us here" href="/" />
      </p>
    ),
  },
  {
    id: 2,
    icon: (
      <Image
        src="/assets/images/producer/two.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: "After onboarding, we'll tailor our systems for you",
    description: (
      <p className="text-sm mt-2">
        And customise ECOCAN security codes for your brands
      </p>
    ),
  },
  {
    id: 3,
    icon: (
      <Image
        src="/assets/images/producer/three.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: "Then digitally deliver the codes  to your printers",
    description: (
      <p className="text-sm mt-2">
        For seamless printing onto your packaging using existing printing
        technology; no customisation needed
      </p>
    ),
  },
  {
    id: 4,
    icon: (
      <Image
        src="/assets/images/producer/four.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: "And you are good to go!",
    description: (
      <p className="text-sm mt-2">
        Sit back and let the ECOCAN TnT handle the rest
      </p>
    ),
  },
];

export default function ProducerContent() {
  return (
    <div className="w-full">
      <div className="space-y-24 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0">
        <TextWithCards
          title="Do more in the ECOmmunity"
          description="Directly engage with ECOnsumers to elevate your presence, amplify your impact and shape your strategies"
          customCard={
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {cardContent.map((card, index) => (
                <SimpleCard
                  className="border-transparent p-0 xl:w-[16rem]"
                  image={
                    <div className=" w-[full] max-h-[11.75rem] overflow-hidden">
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
                  title={
                    <p className="text-[1.125rem] font-medium leading-[1.625rem] text-left text-black">
                      {card.content}
                    </p>
                  }
                />
              ))}
            </div>
          }
        />
        {/* what is in it for you */}
        <TextWithCards
          title="What's in for you?"
          description="Reclaim lost market share, conquer new markets, stay compliant with environmental laws, and improve your brand image!"
          customCard={
            <div className="w-3/5">
              <ReusableAccordion items={accordionItems} />
            </div>
          }
        />
        {/* how to join the ecommunity */}
        <HowTo
          itemsTitle="How to join the ECOmmunity"
          items={howToData}
          imageSrc="/assets/images/producer/howto.png"
          imageAlt="Become an Eco-station"
        />
        {/* optimize */}
        <Optimize />
      </div>

      {/* alchemy */}
      <div className="bg-[url('/assets/images/consumer/bananas-bg.svg')] h-[36rem] bg-center bg-cover flex items-center my-16">
        <div className="max-w-[69.375rem] mx-auto">
          <TextWithCards
            title="The Alchemy behind this ECOCAN magic"
            className="mx-auto text-center"
            customCard={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:w-[65rem]">
                {alchemyContent.map((card, index) => (
                  <WhiteBgCard
                    iconPath={card.icon}
                    className="border-none"
                    key={index}
                    title={card.title}
                    content={card.content}
                    child={card.child}
                  />
                ))}
              </div>
            }
          />
        </div>
      </div>
      <div className="space-y-24 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0">
        {/* faq */}
        <FaqSection />

        {/* call to action */}

        <CtaCard
          className="bg-[url('/assets/images/producer/unfair-advantage.jpeg')] ps-[2.25rem] py-[4.75rem] bg-cover bg-center items-center h-[26.75rem]"
          item={
            <TextWithComponent
              title={
                <p className="text-white text-4xl">
                  ECOCAN, your unfair advantage!
                </p>
              }
              description={
                <span className="text-white">Join the ECOmmunity today</span>
              }
            />
          }
          image={
            <div>
              <Image
                src="/assets/images/producer/top-img.png"
                alt=""
                width={841.78}
                height={473.5}
                className="w-full h-full"
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
