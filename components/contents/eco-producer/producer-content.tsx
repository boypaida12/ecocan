import { ReusableAccordion } from "@/components/shared/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import WhiteBgCard from "@/components/shared/white-bg-card";
import { LucideAward, LucideDownload, LucideGem, LucideRecycle } from "lucide-react";
import React from "react";
import HowTo from "../courier/components/HowTo";
import Optimize from "./components/optimize";
import { title } from "process";
import { FaqSection } from "../consumer/components/faq";
import Image from "next/image";
import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "../consumer/components/buy-online";

const cardContent = [
  {
    icon: <LucideRecycle />,
    content: "Boost your revenues",
  },
  {
    icon: <LucideAward />,
    content: "Optimise your efficiency",
  },
  {
    icon: <LucideGem />,
    content: "Protect your customers",
  },
  {
    icon: <LucideGem />,
    content: "Preserve the planet",
  },
];

const alchemyContent = [
  {
    icon: <LucideRecycle />,
    title: "Brand protection",
    content: "We give you the controls",
  },
  {
    icon: <LucideAward />,
    title: "Online Sales",
    content: "We live in a world of Super Convenience ",
  },
  {
    icon: <LucideGem />,
    title: "Engagement",
    content: "Econsumers care more than just the price",
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
];

const howToData = [
  {
    id: 1,
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
    title: "After onboarding, we'll tailor our systems for you",
    description: (
      <p className="text-sm mt-2">
        And customise ECOCAN security codes for your brands
      </p>
    ),
  },
  {
    id: 3,
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
    <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
      <TextWithCards
        title="Do more in the ECOmmunity"
        description="Directly engage with ECOnsumers to elevate your presence, amplify your impact and shape your strategies"
        customCard={
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            {cardContent.map((card, index) => (
              <WhiteBgCard
                className="border-transparent"
                key={index}
                icon={card.icon}
                content={card.content}
              />
            ))}
          </div>
        }
      />
      {/* what is in it for you */}
      <TextWithCards
        title="What's in for you?"
        description="Reclaim lost market share, conquer new markets, stay compliant with environmental laws, and improve your brand image!"
        customCard={<ReusableAccordion items={accordionItems} />}
      />
      {/* how to join the ecommunity */}
      <HowTo
        itemsTitle="How to join the ECOmmunity"
        items={howToData}
        imageSrc="/assets/images/ecommunity.svg"
        imageAlt="Become an Eco-station"
      />
      {/* optimize */}
      <Optimize/>

      {/* alchemy */}
      <TextWithCards
        title="The Alchemy behind this ECOCAN magic"
        className="mx-auto text-center"
        customCard={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {alchemyContent.map((card, index) => (
              <WhiteBgCard
              className="border-transparent shadow-none"
                key={index}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        }
      />

      {/* faq */}
      <FaqSection/>

      {/* call to action */}

      <CtaCard
        className="bg-[url('/assets/images/unfair-advantage.jpeg')] bg-cover bg-center relative"
        item={
          <TextWithComponent
            title={
              <p className="text-black text-5xl">
                ECOCAN, your unfair   
                <br />
                advantage!
              </p>
            }
            description={
              <span className="text-black">
                Join the ECOmmunity today
              </span>
            }
          />
        }
        image={
          <div className="w-[19.75rem] h-[22.625rem] mx-auto">
            <Image
              src="/assets/images/mobile-alt.svg"
              alt=""
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        }
      />
    </div>
  );
}
