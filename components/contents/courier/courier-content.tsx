"use client";
import React, { useState } from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import ImageAndItem from "../../shared/image-and-item/image-and-item"
import Image from "next/image";
import { AccordionDemo } from "./components/accordion";
import {
    Sparkles,
    LucideTriangleAlert,
    LucideRecycle,
    LucideCreditCard,
  } from "lucide-react";
import Link from "next/link";
import ImageText from "./components/imageText";
import HowTo from "./components/HowTo";
import { FaqSection } from "./components/faq";
import CtaCardComponent from "./components/sustainableHustle";

const iconSize = 18;
const HyperLink = ({ link }: { link: string }) => {
    return (
        <Link href="/" className="text-primary">
        {link}
        </Link>
        );
  };

const featureData = [
    {
        id: 1,
        name: "Make extra cash, Easy & Fast",
        question: (
            <p>
              <HyperLink link="Sign up" /> here to become an ECOurier, and start making money today! 
            </p>
          ),
        icon: <LucideTriangleAlert size={iconSize} />,
      },
      {
        id: 2,
        name: "You are the boss!",
        question:
          "Hustle whenever you want, and earn as much as you need. It’s up to you",
        icon: <LucideRecycle size={iconSize} />,
      },
      {
        id: 3,
        name: "Deliver however",
        question: "Fit pick-ups around your lifestyle; Walk, Cycle, Drive or even Crawl. Just avoid  fossil fuel",
        icon: <LucideCreditCard size={iconSize} />,
      },
  ];



export default function CourierContent() {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };
  return (
        <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
            <TextWithCards 
                title="Let’s drive your hustle forward"
                description=""
                customCard={<CustomCard features={featureData}/>}
            />

            {/* how to become an eco-courier */}
            <HowTo />
            {/* your hustle your rules */}
            
   
            <ImageAndItem
              title="Your hustle, Your rules!"
              subtitle="Making money has never been this Flexible. Easy. And. Transparent"
              image={
                <Image
                  src="/assets/images/courier/your-hustle.png"
                  alt="EcocanApp step"
                  className="object-cover"
                  width={421}
                  height={417}
                />
              }
              className="md:flex-row-reverse"
              item={<AccordionDemo onSelect={handleAccordionSelect} />}
            />

          {/* image text */}
          <ImageText/>

          {/* Faq section */}
          <FaqSection />

          {/* sustainable-hustle*/}
          <CtaCardComponent />
        </div>
  );
}
