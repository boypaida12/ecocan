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
  LucideDownload,
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

const images = [
  "/assets/images/earn-image.svg",
  "/assets/images/scan-image.svg",
  "/assets/images/map-image.svg",
  "/assets/images/pay-image.svg",
  "/assets/images/earn-image.svg",
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
          <CustomCard
            features={[
              {
                id: 1,
                name: "Coupon discounts",
                question: "Every time you return 10 eligible empties...",
                answer: (
                  <div className="italic text-accent/50 space-y-4">
                    <p>
                      for recycling, not only do you get your deposit money
                      back, but we&apos;ll also give you up to 50% discount on your
                      next Eco-product purchase.{" "}
                    </p>
                  </div>
                ),
                icon: <LucideTicketPercent size={iconSize} />,
              },
              {
                id: 2,
                name: "Loyalty Discounts",
                question: "Before you buy an ECO-product, authenticate...",
                answer: (
                  <div className="italic text-accent/50 space-y-4">
                    <p>
                      it using your ECO-Scanner. After enjoying your purchase,
                      return to ECO-stations exact same empties you
                      authenticated. And we&apos;ll reward you with up to a 50%
                      discount on your next purchase.
                    </p>
                  </div>
                ),
                icon: <LucideShieldCheck size={iconSize} />,
              },
              {
                id: 3,
                name: "VIP Treatment",
                question: "We’ll roll out the Red Carpet, just for YOU...",
                answer: (
                  <div className="italic text-accent/50 space-y-4">
                    <p>
                      Get priority access to exclusive events. Skip the long
                      queues by ordering your drinks in advance. And we might
                      just pop a complimentary bottle for you!
                    </p>
                  </div>
                ),
                icon: <LucideShieldPlus size={iconSize} />,
              },
            ]}
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
        item={
            <TextWithComponent
              title="Cheers to ECO-friendly savings!"
              description="Save BIG, while, Saving the planet. Only with EcocanApp."
              component={
                <div className="flex gap-4">
                  <PrimaryButton
                    buttonText="Download App"
                    buttonIcon={<LucideDownload />}
                  />
                  <Button
                    variant="outline"
                    className="hover:bg-transparent border-primary text-primary hover:text-primary rounded-full h-[3.25rem] py-3 px-8 text-lg"
                  >
                    Become an Econsumer
                  </Button>
                </div>
              }
            />
        }
        image={
          <div className="w-[19.75rem] h-[22.625rem] mx-auto">
            <Image src="/assets/images/mobile-alt.svg" alt="" width={100} height={100} className="w-full h-full"/>
          </div>
        }
      />
    </div>
  );
}
