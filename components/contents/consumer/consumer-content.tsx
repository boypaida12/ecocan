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

const images = [
  "/assets/images/earn-image.svg",
  "/assets/images/scan-image.svg",
  "/assets/images/map-image.svg",
  "/assets/images/pay-image.svg",
  "/assets/images/earn-image.svg",
];

const iconSize = 18;

const cardContent = [
  {
    icon: <LucideRecycle />,
    title: "Recycling Coupons",
    content:
      "Whenever you return 10 eligible empties for recycling, you'll get back the deposit money, plus, we'll reward you with up to 30% discount on your next purchase. Just activate your e-coupon while at the ECO-station, show the one-time coupon QR code to the Egent, and pay less! Or, if you order online, add the coupon to your order, to discount your bill",
  },
  {
    icon: <LucideAward />,
    title: "Loyalty Discounts",
    content:
      "Before you buy an ECO-product, authenticate it using your ECO-Scanner. And after enjoying the drink, return to ECO-stations the exact same empties you authenticated. And we'll reward you with up to a 50% loyalty discount on your next ECO-product purchase.",
  },
  {
    icon: <LucideGem />,
    title: "VIP treatment",
    content:
      "Join the ECOmmunity, and we'll roll out the Red Carpet, just for YOU! And enjoy priority access to exclusive events. Skip the long queues by ordering your drinks in advance. Get exclusive behind-the-scenes content. And we might just spoil you by popping a complimentary drink!",
  },
];

const rvmContent = [
  {
    icon: <LucideRecycle />,
    content:
      "Located at selected ECO-Stations, ECOnsumers identify themselves with their ECOCAN ID, before placing empties into the RVMs' in-feed. It then authenticates the empties by taking up to 1000 pictures/second, to verify them based on ECOCAN security codes, shape, size, weight & material",
  },
  {
    icon: <LucideAward />,
    content:
      "If the empty is eligible, the RVM accepts it and calculates the deposit owed, which is then digitally refunded into ECO-wallets. ECOnsumers can transact with the deposits to make retail purchases, send it to other ECOnsumers, donate to charity, or cash out",
  },
  {
    icon: <LucideGem />,
    content:
      "These machines are the world's smallest patented RVMs, measuring only 45.6 X 54.1 X 85 cm, yet equipped with capabilities of larger RVMs. Their compact size dramatically reduces floor space requirements, allowing them to be set up even in the smallest spaces",
  },
];

export default function ConsumerContent() {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };

  return (
    <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
      <TextWithCards
        title="Get Started"
        description={
          <span>
            Whether you want to keep your environment clean, earn extra cash, or
            to safeguard your health from fake drinks. With our{" "}
            <span className="font-semibold">free-to-use</span> EcocanApp,
            it&apos;s all just a <HyperLink link="click away!" href="/" />
          </span>
        }
      />
      <ImageAndItem
        className="gap-12"
        title="How EcocanApp works"
        subtitle="Tap Tap Tap, and, Wallah! It's better than Magic."
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
      <ImageAndItem
        className="md:flex-row-reverse gap-12"
        image={
          <Image
            src="/assets/images/online-store.svg"
            alt="Online store"
            className="object-cover rounded-3xl bg-primary"
            priority
            width={500}
            height={100}
          />
        }
        item={
          <TextWithComponent
            title="What is ECOCAN RVM?"
            description={
              <p>
                The ECOCAN Reverse Vending Machine is an automated device, that
                accepts eligible empties returned for recycling, and refunds
                applicable deposit money digitally into ECO-wallets
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
                key={index}
                icon={card.icon}
                content={card.content}
              />
            ))}
          </div>
        }
      />
      <ImageAndItem
        className="gap-12"
        image={
          <Image
            src="/assets/images/online-store.svg"
            alt="Online store"
            className="object-cover rounded-3xl bg-primary"
            priority
            width={500}
            height={100}
          />
        }
        item={
          <TextWithComponent
            title="Buy Online"
            description={
              <p>
                Discover new <HyperLink link="ECO-products" href="/" /> on
                ECOCAN market, place your order with just a few clicks, and have
                your favourite drinks delivered to your doorstep, or wherever
                you are, in minutes
              </p>
            }
            component={<PrimaryButton buttonText="Learn more" />}
          />
        }
      />
      <TextWithCards
        title="Exclusive discounts  for Econsumers"
        subtitle={
          <span className="bg-gradient-to-t text-2xl from-[#FFDD4C] to-[#4AC63F] text-transparent bg-clip-text font-semibold">
            You&apos;ll go bananas!
          </span>
        }
        description={
          <span>
            Enjoy unbelievably jaw dropping benefits by simply joining the{" "}
            <HyperLink link="Ecommunity" href="/" />.
          </span>
        }
        className="mx-auto text-center"
        customCard={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {cardContent.map((card, index) => (
              <WhiteBgCard
                key={index}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        }
      />
      <TextWithComponent
        title="How to identify genuine eligible products"
        description={
          <>
            <span className="text-accent/80">
              Use your <HyperLink link="Eco-scanner" href="/" /> to scan{" "}
              <HyperLink link="ECOCAN security codes" href="/" /> which are only
              printed on packaging of genuine eligible products. And an
              authentication landing page will pop-up, confirming if the product
              is authentic, and displaying product details, including the
              deposit amount it carries. If the product is not eligible, a
              warning notification will pop up
            </span>
            <br />
            <br />
            <span className="text-accent/80">
              <span className="text-red-700">
                Do not rely on your naked eye to identify genuine eligible
                products!
              </span>{" "}
              As criminals may try to fool you by imitating ECOCAN security
              codes, without success of course! We&apos;ve ensured ECOCAN
              Security Codes cannot be copied. And the Eco-scanner&apos;s
              advanced machine learning technology will immediately notify you
              if the code is an imitation
            </span>
          </>
        }
        component={
          <Image
            src="/assets/images/identify.png"
            alt="How to identify genuine eligible products"
            width={1000}
            height={1000}
            className="w-full h-full rounded-2xl"
          />
        }
      />
      <ImageAndItem
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/ecocan-app.svg"
              width={1000}
              height={1000}
              className="w-full h-full absolute -left-[5rem]"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title="How to return eligible empties"
            description={
              <>
                <span>
                  Only return intact empties; not compacted nor deformed, and
                  with ECOCAN security codes clearly visible. Of Aluminium cans,
                  PET plastic bottles, glass bottles and beverage cartons.{" "}
                  <br />
                  That are listed and published on the ECOCAN website and
                  ECO-products section of EcocanApp
                </span>
                <div className="mt-4">
                  <HyperLink link="See full ECO-products list here" href="/" />
                </div>
              </>
            }
            component={<CheckList />}
          />
        }
      />
      <MultipleImagesAndItem
        item={
          <TextWithComponent
            title="Stay in the loop"
            description="Subscribe to our newsletter and stay updated with what's happening within the Ecommunity."
            component={
              <div className="mb-4 border border-[#E6E8EC] bg-white rounded-full flex items-center">
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
            src="/assets/images/courier-four-img.svg"
            alt="multiple image"
            width={500}
            height={500}
            className="w-auto h-auto"
          />
        }
      />
      <FaqSection />
      <CtaCard
        className="bg-[url('/assets/images/consumer-cta-card.jpeg')] bg-contain relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50"
        item={
          <TextWithComponent
            title={
              <p className="text-white text-5xl">
                Cheers to ECO-
                <br />
                friendly savings!
              </p>
            }
            description={
              <span className="text-white">
                Save BIG, while, Saving the planet. Only with EcocanApp.
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
  );
}
