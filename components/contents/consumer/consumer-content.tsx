"use client";

import React, { useState } from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import { AccordionDemo } from "./components/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import {
  LucideAward,
  LucideDownload,
  LucideGem,
  LucideRecycle,
} from "lucide-react";
import MultipleImagesAndItem from "@/components/shared/multiple-images-and-item/multiple-images-and-item";
import TextWithComponent from "./components/buy-online";
import { Input } from "@/components/ui/input";
import { FaqSection } from "./components/faq";
import CtaCard from "@/components/shared/cta-card/cta-card";
import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import WhiteBgCard from "@/components/shared/white-bg-card";
import CheckList from "./components/checklist";
import CustomCard from "@/components/shared/text-with-cards/custom-card";
import ExpandableContent from "./components/expandable-content";
import { ReusableAccordion } from "@/components/shared/accordion";
import WasteLitter from "@/app/solutions/components/brand-protection/components/waste-litter";
import IdentifyGenuine from "./components/identify-genuine";
import News from "./components/news";

const images = [
  "/assets/images/consumer/get-app.svg",
  "/assets/images/consumer/scan-image.svg",
  "/assets/images/consumer/map-image.svg",
  "/assets/images/consumer/pay-image.svg",
  "/assets/images/consumer/earn-image.svg",
];

const iconSize = 18;

const steps = [
  {
    id: 1,
    description:
      "Verify empties' eligibility by scanning attached ECOCAN security codes. DO NOT rely on your naked eye",
  },
  {
    id: 2,
    description:
      "Use ECOCAN Map to navigate to the closest or your preferred ECO-station",
  },
  {
    id: 3,
    description:
      "Hand-over your intact empties to ECO-Station Egents, who will verify them, and digitally issue applicable deposit into your ECO-Wallet",
  },
  {
    id: 4,
    description:
      "Alternatively, feed eligible empties into ECOCAN R.V.M, which will verify the package and transfer applicable deposit into your ECO-Wallet",
  },
  {
    id: 5,
    description: "That's all. You can then spend your money as you please",
  },
];

const cardContent = [
  {
    icon: <LucideRecycle />,
    iconPath: "/assets/images/consumer/coupons.svg",
    title: "Recycling Coupons",
    content:
      "Whenever you return 10 eligible empties for recycling, you'll get back the deposit money, plus, we'll reward you with up to 30% discount on your next purchase. Just activate your e-coupon while at the ECO-station, show the one-time coupon QR code to the Egent, and pay less! Or, if you order online, add the coupon to your order, to discount your bill",
  },
  {
    icon: <LucideAward />,
    title: "Loyalty Discounts",
    iconPath: "/assets/images/consumer/discounts.svg",
    content:
      "Before you buy an ECO-product, authenticate it using your ECO-Scanner. And after enjoying the drink, return to ECO-stations the exact same empties you authenticated. And we'll reward you with up to a 50% loyalty discount on your next ECO-product purchase.",
  },
  {
    icon: <LucideGem />,
    title: "VIP treatment",
    iconPath: "/assets/images/consumer/vip.svg",
    content:
      "Join the ECOmmunity, and we'll roll out the Red Carpet, just for YOU! And enjoy priority access to exclusive events. Skip the long queues by ordering your drinks in advance. Get exclusive behind-the-scenes content. And we might just spoil you by popping a complimentary drink!",
  },
];

const rvmContent = [
  {
    icon: <LucideRecycle />,
    iconPath: "/assets/images/all/light-green.svg",
    content:
      "Located at selected ECO-Stations, ECOnsumers identify themselves with their ECOCAN ID, before placing empties into the RVMs' in-feed. It then authenticates the empties by taking up to 1000 pictures/second, to verify them based on ECOCAN security codes, shape, size, weight & material",
  },
  {
    icon: <LucideAward />,
    iconPath: "/assets/images/all/light-green.svg",
    content:
      "If the empty is eligible, the RVM accepts it and calculates the deposit owed, which is then digitally refunded into ECO-wallets. ECOnsumers can transact with the deposits to make retail purchases, send it to other ECOnsumers, donate to charity, or cash out",
  },
  {
    icon: <LucideGem />,
    iconPath: "/assets/images/all/light-green.svg",
    content:
      "These machines are the world's smallest patented RVMs, measuring only 45.6 X 54.1 X 85 cm, yet equipped with capabilities of larger RVMs. Their compact size dramatically reduces floor space requirements, allowing them to be set up even in the smallest spaces",
  },
];

const accordionItems = [
  {
    id: "item-1",
    question: <p className="text-primary">See full ECO-products list below</p>,
    answer: <CheckList items={steps} className="items-center" />,
  },
];

export default function ConsumerContent() {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };

  return (
    <>
      <div className="space-y-32 py-8 px-4 xl:px-0">
        <div className="max-w-[65rem] mx-auto space-y-32">
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
          <ImageAndItem
            className="gap-12 items-center"
            title="How EcocanApp works"
            subtitle="Tap Tap Tap, and, Wallah!"
            image={
              <Image
                src={images[selectedImage]}
                alt={`EcocanApp step ${selectedImage + 1}`}
                className="object-cover"
                width={500}
                height={100}
                priority
              />
            }
            item={<AccordionDemo onSelect={handleAccordionSelect} />}
          />
        </div>
      </div>

      <div className="bg-[#B2B2B240] py-8 my-32">
        <div className="max-w-[65rem] mx-auto px-4 xl:px-0">
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

      {/* buy online */}
      <div className="max-w-[65rem] mx-auto mb-32 px-4 xl:px-0">
        <ImageAndItem
          className="gap-12 items-center"
          image={
            <Image
              src="/assets/images/consumer/buy-online-consumer.svg"
              alt="Online store"
              className="object-cover rounded-3xl bg-primary"
              priority
              width={500}
              height={100}
            />
          }
          item={
            <div className="w-4/5">
              <TextWithComponent
                title="Buy Online"
                description={
                  <p>
                    Discover new <HyperLink link="ECO-products" href="/" /> on
                    ECOCAN market, and place your order with just a few clicks.
                    After consumption, conveniently request for empties pick up
                    from your door, for recycling
                  </p>
                }
                component={<PrimaryButton buttonText="Learn more" />}
              />
            </div>
          }
        />
      </div>
      {/* exclusive benefits */}
      <div className="bg-[url('/assets/images/consumer/bananas-bg.svg')] h-[36rem] bg-center bg-cover flex items-center mb-32">
        <div className="max-w-[65rem] mx-auto px-4 xl:px-0">
          <TextWithCards
            title="Exclusive benefits for ECOnsumers"
            subtitle={
              <span className="bg-gradient-to-t text-2xl from-[#FFDD4C] to-[#4AC63F] text-transparent bg-clip-text font-semibold">
                You&apos;ll go bananas!
              </span>
            }
            description={
              <span>
                Enjoy unbelievably jaw dropping benefits by simply joining the{" "}
                <HyperLink link="ECOmmunity" href="/" />.
              </span>
            }
            className="mx-auto text-center"
            customCard={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 xl:w-[65rem]">
                {cardContent.map((card, index) => (
                  <WhiteBgCard
                    className="border-none"
                    iconPath={card.iconPath}
                    key={index}
                    title={card.title}
                    content={<ExpandableContent content={card.content} />}
                  />
                ))}
              </div>
            }
          />
        </div>
      </div>
      <div className="max-w-[65rem] mx-auto space-y-32 px-4 xl:px-0">
        <WasteLitter />
        <IdentifyGenuine />
        <ImageAndItem
          className="gap-12 items-center"
          image={
            <Image
              src="/assets/images/consumer/return-empties.svg"
              width={1000}
              height={1000}
              className="w-full h-full"
              priority
              alt="How to return eligible empties"
            />
          }
          item={
            <TextWithComponent
              title="How to return eligible empties"
              description={
                <>
                  <span>
                    Only return intact empties; not compacted nor deformed, and
                    with ECOCAN security codes clearly visible. Of Aluminium
                    cans, PET plastic bottles, glass bottles and beverage
                    cartons. <br />
                    That are listed and published on the ECOCAN website and
                    ECO-products section of EcocanApp
                  </span>
                </>
              }
              component={
                <ReusableAccordion
                  items={accordionItems}
                  defaultOpenItems={[]}
                />
              }
            />
          }
        />
        <News />
        {/* stay in the loop */}
        <MultipleImagesAndItem
          item={
            <TextWithComponent
              title="Stay in the loop"
              description="Subscribe to our newsletter and stay updated with what's happening within the Ecommunity."
              component={
                <div className="mb-4 border border-[#E6E8EC] bg-white rounded-full flex items-center w-3/5">
                  <Input
                    placeholder="Enter your email"
                    className="text-[#777E90] border-none rounded-full focus:outline-none focus:border-none focus:ring-0"
                  />
                  <Image
                    src="/assets/icons/right-arrow.svg"
                    className="m-2"
                    alt="right chevron arrow"
                    width={32}
                    height={32}
                  />
                </div>
              }
            />
          }
          multipleImages={
            <Image
              src="/assets/images/courier/courier-four-img.svg"
              alt="multiple image"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          }
        />
        <FaqSection />
        <CtaCard
          className="bg-[url('/assets/images/consumer/consumer-cta-card.jpeg')] py-[3.75rem] ps-[7.25rem] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50"
          item={
            <TextWithComponent
              title={
                <h2 className="text-white text-5xl mb-3">
                  Cheers to ECO-
                  <br />
                  friendly savings!
                </h2>
              }
              description={
                <span className="text-white">
                  Save BIG, while, Saving the planet. Only with <br />{" "}
                  EcocanApp.
                </span>
              }
              component={
                <div className="flex gap-4">
                  <PrimaryButton
                    buttonText="Download App"
                    buttonIcon={<LucideDownload />}
                  />
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-transparent border-white text-white hover:text-white rounded-full h-[3.25rem] py-3 px-8 text-lg"
                  >
                    Become an Econsumer
                  </Button>
                </div>
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
    </>
  );
}
