"use client";

import React, { useState } from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import { AccordionDemo } from "./components/accordion";
import BuyOnline from "./components/buy-online";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import CustomCard from "@/components/shared/text-with-cards/custom-card";
import {
  LucideAward,
  LucideDownload,
  LucideGem,
  LucideRecycle,
  LucideShieldCheck,
  LucideShieldPlus,
  LucideTicketPercent,
} from "lucide-react";
import MultipleImagesAndItem from "@/components/shared/multiple-images-and-item/multiple-images-and-item";
import TextWithComponent from "./components/buy-online";
import { Input } from "@/components/ui/input";
import { FaqSection } from "./components/faq";
import CtaCard from "@/components/shared/cta-card/cta-card";
import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import WhiteBgCard from "@/components/shared/white-bg-card";

const images = [
  "/assets/images/earn-image.svg",
  "/assets/images/scan-image.svg",
  "/assets/images/map-image.svg",
  "/assets/images/pay-image.svg",
  "/assets/images/earn-image.svg",
];

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

const iconSize = 18;

export default function ConsumerContent() {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };

  return (
    <div className="space-y-24 py-8">
      <TextWithCards />
      <ImageAndItem
        title="How EcocanApp works"
        subtitle="Tap Tap Tap, and, Wallah! It's better than Magic."
        image={
          <Image
            src={images[selectedImage]}
            alt={`EcocanApp step ${selectedImage + 1}`}
            className="object-cover"
            width={500}
            height={100}
          />
        }
        item={<AccordionDemo onSelect={handleAccordionSelect} />}
      />
      <ImageAndItem
        className="md:flex-row-reverse"
        image={
          <Image
            src="/assets/images/online-store.svg"
            alt="Online store"
            className="object-cover rounded-3xl bg-primary"
            width={500}
            height={100}
          />
        }
        item={<TextWithComponent />}
      />
      <TextWithCards
        title="Exclusive discounts  for Econsumers"
        subtitle={
          <p className="bg-gradient-to-t from-[#FFDD4C] to-[#4AC63F] text-transparent bg-clip-text font-semibold">
            You&apos;ll go bananas!
          </p>
        }
        description={
          <p>
            Enjoy unbelievably jaw dropping benefits by simply joining the{" "}
            <HyperLink link="Ecommunity" />.
          </p>
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
              <p className="text-white">
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
