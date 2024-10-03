"use client";

import React from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import {
  LucideAward,
  LucideGem,
  LucideRecycle,
} from "lucide-react";
import TextWithComponent from "./components/text-with-component";
import { FaqSection } from "./components/faq";
import WhiteBgCard from "@/components/shared/white-bg-card";
import CustomCard from "@/components/shared/text-with-cards/custom-card";
import WasteLitter from "@/app/solutions/components/brand-protection/components/waste-litter";
import IdentifyGenuine from "./components/identify-genuine";
import News from "./components/news";
import ReturnEmpties from "./components/return-empties";
import BuyOnline from "./components/buy-online";
import Exclusive from "./components/exclusive";
import Newsletter from "./components/newsletter";
import CtaCardComponent from "./components/cta-card";
import TapTap from "./components/tap-tap";

const rvmContent = [
  {
    icon: <LucideRecycle />,
    iconPath: "/assets/images/all/scan.svg",
    content:
      "Located at selected ECO-Stations, ECOnsumers identify themselves with their ECOCAN ID, before placing empties into the RVMs' in-feed. It then authenticates the empties by taking up to 1000 pictures/second, to verify them based on ECOCAN security codes, shape, size, weight & material",
  },
  {
    icon: <LucideAward />,
    iconPath: "/assets/images/all/cash.svg",
    content:
      "If the empty is eligible, the RVM accepts it and calculates the deposit owed, which is then digitally refunded into ECO-wallets. ECOnsumers can transact with the deposits to make retail purchases, send it to other ECOnsumers, donate to charity, or cash out",
  },
  {
    icon: <LucideGem />,
    iconPath: "/assets/images/all/measure.svg",
    content:
      "These machines are the world's smallest patented RVMs, measuring only 45.6 X 54.1 X 85 cm, yet equipped with capabilities of larger RVMs. Their compact size dramatically reduces floor space requirements, allowing them to be set up even in the smallest spaces",
  },
];

export default function ConsumerContent() {
  return (
    <>
      <div className="space-y-24 py-8 px-4 xl:px-0">
        <div className="max-w-[69.375rem] mx-auto space-y-24">
          <TextWithCards
            title="Get Started"
            description={
              <span>
                Whether you want to keep your environment clean, earn extra
                cash, or to safeguard your health from fake drinks. With
                EcocanApp, it&apos;s all just a{" "}
                <HyperLink link="click away!" href="/" />
              </span>
            }
            customCard={<CustomCard />}
          />
          <TapTap/>
        </div>
      </div>
      {/* buy online */}
      <BuyOnline />
      {/* exclusive benefits */}
      <Exclusive />

      <div className="max-w-[69.375rem] mx-auto space-y-24 px-4 xl:px-0">
        <WasteLitter />
        <IdentifyGenuine />
        <ReturnEmpties />
      </div>
      <div className="bg-[#B2B2B240] py-8 my-24">
        <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
          <ImageAndItem
            className="md:flex-row-reverse items-center"
            image={
              <Image
                src="/assets/images/consumer/rvm.svg"
                alt="Online store"
                className="object-cover rounded-3xl"
                priority
                width={500}
                height={100}
              />
            }
            item={
              <TextWithComponent
                title="What is ECOCAN RVM?"
                description={
                  <p className="w-4/5">
                    The ECOCAN Reverse Vending Machine is an automated device,
                    that accepts eligible empties returned for recycling, and
                    refunds applicable deposit money digitally into ECO-wallets
                  </p>
                }
              />
            }
          />
          <TextWithCards
            customCard={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {rvmContent.map((card, index) => (
                  <WhiteBgCard
                    iconPath={card.iconPath}
                    className="border bg-transparent shadow-none"
                    key={index}
                    content={card.content}
                  />
                ))}
              </div>
            }
          />
        </div>
      </div>

      <div className="max-w-[69.375rem] mx-auto space-y-24 px-4 xl:px-0">
        <News />
        {/* stay in the loop */}
        <Newsletter />
        <FaqSection />
        <CtaCardComponent />
      </div>
    </>
  );
}
