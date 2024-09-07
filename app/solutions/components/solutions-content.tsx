"use client";

import React, { useEffect, useState } from "react";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { ReusableAccordion } from "@/components/shared/accordion";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "@/components/contents/consumer/components/buy-online";
import CheckList from "@/components/contents/consumer/components/checklist";
import { FaqSection } from "@/components/contents/consumer/components/faq";
import NavigationBar from "@/components/shared/navbar/navbar";
import PrimaryButton from "@/components/shared/primary-btn";
import StyledText from "@/components/shared/styled-text";
import { LucideDownload } from "lucide-react";
import ExpandableCards from "./expandable-cards";
import { CardData } from "@/types/card-data";


interface SolutionsContentProps {
  cardData: CardData[];
  onCardExpand: (card: CardData) => void;
}

const steps = [
  {
    id: 1,
    step: <div className="font-bold">To make a purchase</div>,
  },
  {
    id: 2,
    step: <div className="font-bold">To sell on ECOCAN Market</div>,
  },
  {
    id: 3,
    step: <div className="font-bold">To list your drinks on ECOCAN Market</div>,
  },
];


const facts = [
  "Did you know that used aluminium cans are among the most valuable scrap materials in the world? They can be recycled indefinitely without losing material value. Yes, forever!",
  "Recycling just one aluminium can save up to 95% of the energy required to produce a new can. In other words, the energy saved from recycling a single can could power your TV for three whole days!",
  "And that's not all—100% of collected aluminium cans can be used to manufacture new cans, with zero waste.",
  "Incredible, isn’t it? So, be sure to return your used aluminium cans to the nearest ECO-station for recycling.",
  "From where ECO-couriers will pick-up the cans and drop them off to ECO-recyclers, who will smelt them into blocks called ingots. Then press the ingots into thin sheets used to manufacture new cans.",
  "And your next Eco-product purchase will arrive in a fully recycled, and ECO-friendly container",
];

export default function SolutionsContent({ cardData, onCardExpand }: SolutionsContentProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        className={
          isScrolled
            ? "bg-[#4ac63f]"
            : "bg-transparent backdrop-blur-xl border-b-0"
        }
        linkColor="text-white"
      />
      {/* our offering */}
      <div className="lg:h-[36rem] xl:h-[40rem]">
        <div className="bg-[url('/assets/images/solution-hero.png')] lg:h-[32rem] xl:h-[40rem] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[77.5rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="mt-60 px-4 xl:px-0 text-white z-50 mx-auto">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-7xl text-center font-semibold text-white">
                  Smart Sustainable Solutions
                </h1>
              </div>
              <div className="tracking-wide text-sm lg:text-base xl:text-lg font-light text-white my-10 space-y-4">
                <p className="text-center w-3/5 mx-auto">
                  We seamlessly connect the physical and digital worlds in a
                  manner that is most sustainable to our planet, and to the life
                  it nurtures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="space-y-24 py-8 max-w-[77.5rem] mx-auto px-4 xl:px-0">
          <div>
            <ImageAndItem
              title="Our Offering"
              subtitle="Brand Protection | Packaging recycling | Consumer engagement | Online Sales"
              mainClassName="text-accent font-light text-lg"
            />
            {/* expandable cards */}

            <ExpandableCards cardData={cardData} onCardExpand={onCardExpand} />
          </div>
          {/* online Sales */}
          <TextWithComponent
            title="Online Sales"
            description={
              <div className="font-bold">
                The go-to pocket friendly supermarket, in your pocket
              </div>
            }
            component={
              <div className="space-y-6 font-light w-4/5">
                <p>
                  <HyperLink link="ECOCAN Market" href="/" /> is an online
                  platform that conveniently connects ECO-stations selling
                  genuine eligible drinks, with ECOnsumers seeking authentic
                  affordable drinks. With ECOuriers on-the-go, the products are
                  delivered swiftly and sustainably. Wherever. Whenever!{" "}
                </p>
                <p>
                  Or if ECOnsumers are up for some exercise, they can easily
                  navigate on ECOCAN Map to their preferred ECO-station, to pick
                  up their favourite drinks. Plus, they can place pre-orders if
                  they wish{" "}
                </p>
              </div>
            }
          />
          <ImageAndItem
            className="md:flex-row-reverse gap-12"
            image={
              <Image
                src="/assets/images/online-store.svg"
                alt="online store"
                width={1000}
                height={2000}
                className="w-full h-full"
              />
            }
            item={
              <TextWithComponent
                description={<CheckList items={steps} />}
                component={
                  <PrimaryButton buttonText="Learn more" buttonLink="/" />
                }
              />
            }
          />

          {/* fun facts about eco can*/}
          <ImageAndItem
            className="gap-12"
            image={
              <div className="w-[27.5rem] h-[35.75rem] rounded-xl overflow-hidden bg-primary">
                <Image
                  src=""
                  width={1000}
                  height={1000}
                  alt="fun facts about ecocan"
                  className=""
                />
              </div>
            }
            item={
              <div>
                <h2 className="text-[2rem]">Fun Facts!</h2>
                {facts.map((fact, index) => {
                  return <StyledText key={index}>{fact}</StyledText>;
                })}
              </div>
            }
          />

          {/* call to action */}
          <CtaCard
            className="bg-[#F6C92D] py-0"
            item={
              <TextWithComponent
                title={
                  <p className="text-black text-5xl pt-[3.25rem]">
                    Affordable online
                    <br />
                    purchases
                  </p>
                }
                description={
                  <p className="text-black mt-4">
                    Whenever. Wherever
                  </p>
                }
                component={
                  <PrimaryButton
                    buttonText="Download App"
                    buttonIcon={<LucideDownload />}
                  />
                }
              />
            }
            image={
              <div className="w-[36.575rem] h-[22.625rem]">
                <Image
                  src="/assets/images/solution-cta.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
