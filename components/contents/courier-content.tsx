import React from "react";
import TextWithCards from "../shared/text-with-cards/text-with-cards";
import CustomCard from "../shared/text-with-cards/custom-card";
import {
    Sparkles,
    LucideTriangleAlert,
    LucideRecycle,
    LucideCreditCard,
  } from "lucide-react";
import Link from "next/link";


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
              <HyperLink link="Sign up" /> here to become an Ecourier, and start making money today! Just have a smartphone.
              <br /> pocket
            </p>
          ),
        icon: <LucideTriangleAlert size={iconSize} />,
      },
      {
        id: 2,
        name: "You are the boss!",
        question:
          "Make deliveries and pickups whenever you want, and earn as much money as you need. It’s up to you",
        icon: <LucideRecycle size={iconSize} />,
      },
      {
        id: 3,
        name: "Deliver however",
        question: "Fit pick-ups around your lifestyle; Walk, Cycle, Bike, Drive or even Crawl. Just don’t use fossil fuel. And keep time",
        icon: <LucideCreditCard size={iconSize} />,
      },
  ];

export default function CourierContent() {
  return (
        <div className="space-y-24 py-8">
            <TextWithCards 
                title="Let’s drive your hustle forward"
                description=""
                customCard={<CustomCard features={featureData}/>}
            />
        </div>
  );
}
