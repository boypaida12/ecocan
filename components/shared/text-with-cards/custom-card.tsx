"use client";

import React, { useState } from "react";
import {
  Sparkles,
  LucideTriangleAlert,
  LucideRecycle,
  LucideCreditCard,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import HyperLink from "../hyperlink/hyperlink";
import Image from "next/image";
import { greenBall } from "@/lib/imageIndex";

interface Feature {
  id: number;
  name: string;
  question: React.ReactNode;
  answer?: React.ReactNode;
  icon: string;
}

const iconSize = 18;

const defaultFeaturesData: Feature[] = [
  {
    id: 1,
    name: "Avoid Fakes",
    question:
      "Did you know that over 30% of all beverages sold worldwide is illicit, hence harmful to you?",
    answer: (
      <div className="italic text-accent/50 space-y-4">
        <p>
          Eco-Scanner helps you to identify genuine <HyperLink link="eligible" href="/"/> beverages, before
          purchase.
        </p>

        <p>
          Just scan the unique <HyperLink link="ECOCAN security codes" href="/"/> printed only on genuine
          beverages, to verify authenticity.
        </p>

        <p>
          If it&apos;s a fake, EcocanApp will alert you instantly, and block
          access to the authentication page.
        </p>

        <p><span className="text-red-500">DO NOT BUY</span> such fake products!</p>
      </div>
    ),
    icon: "/assets/images/consumer/avoid-fakes.svg",
  },
  {
    id: 2,
    name: "Make Money",
    question:
      "Every week, you eat plastics equivalent to a whole credit card in your food! How?",
    answer: (
      <div className="italic text-accent/50 space-y-4">
        <p>
          Every day 1.4 Billion used <HyperLink link="empties" href="/" /> are
          carelessly thrown into the environment.
        </p>
        <p>
          And our oceans now contain over 1.7 trillion plastic particles, which
          eventually end up on your plate.
        </p>
        <p>
          Help us stop this, by turning in for recycling,{" "}
          <HyperLink link="eligible" href="/" /> used empties of PET plastics,
          Aluminium cans, Glass bottles, and drinks cartons, at any of our{" "}
          <HyperLink link="Eco-Stations," href="/" /> and get paid.
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/make-money.svg",
  },
  {
    id: 3,
    name: "Shop Online",
    question: (
      <p>
        <HyperLink link="ECOCAN Market" href="/" /> is the go-to supermarket, in
        your pocket
      </p>
    ),
    answer: (
      <div className="italic text-accent/50 space-y-4">
        <p>
          Order your favourite genuine drinks with just a few taps, then sit
          back and relax. ECouriers will most affordably deliver it to you, in
          minutes. Wherever. Whenever.
        </p>
        <p>
          Or, allow us 60 minutes to aggregate orders,that we cut our carbon
          footprint
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/shop-online.svg",
  },
];

interface FeaturesGridProps {
  features?: Feature[];
  bgColor?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  features = defaultFeaturesData,
  bgColor = "bg-transparent",
}) => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedFeature(expandedFeature === id ? null : id);
  };

  return (
    <div>
      <div
        className={`mt-8 grid w-full grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-3`}
      >
        {features.map((feature) => {
          const isExpanded = expandedFeature === feature.id;
          return (
            <div
              key={feature.id}
              className={`text-left ${bgColor} py-4 rounded-xl`}
            >
              <div className="w-full h-16 overflow-hidden relative">
                <Image
                  src={feature.icon}
                  alt="green icon"
                  className="w-auto absolute -left-6"
                  width={47}
                  height={47}
                />
              </div>
              <div className="text-md mb-1 font-semibold text-gray-900">
                {feature.name}
              </div>
              <div className="font-regular max-w-sm text-sm text-[#00000080]">
                {feature.question}
              </div>
              {feature.answer && (
                <div className="mt-2 text-sm text-[#00000080]">
                  {isExpanded
                    ? feature.answer
                    : `${feature.answer.toString().slice(0, 0)}`}
                  <button
                    onClick={() => toggleExpand(feature.id)}
                    className={`text-accent/40 underline ${
                      isExpanded ? "mt-4" : "mt-0"
                    }`}
                  >
                    {isExpanded ? "Close" : "Read More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface CustomCardProps extends FeaturesGridProps {}

const CustomCard: React.FC<CustomCardProps> = (props) => {
  return (
    <div>
      <FeaturesGrid {...props} />
    </div>
  );
};

export default CustomCard;
