import React from "react";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard = ({ title, description, imageSrc }: FeatureProps) => (
  <div className="bg-white overflow-hidden">
    <Image
      src={imageSrc}
      alt={title}
      className="w-full h-60 object-cover rounded-2xl"
      width={100}
      height={100}
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default function Optimize() {
  return (
    <div className="bg-white p-8 rounded-2xl">
      <div className="text-center mb-6">
          <h2 className="text-[2rem] bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text font-semibold">
            Optimise the value of <span className="bg-gradient-to-bl from-[#4AC63F] via-[#FFDD4C] to-[#4AC63F]  text-transparent bg-clip-text">your packaging</span>
          </h2>
          <p className="text-accent text-sm">
            With ECOCAN, a bottle is more than just a bottle
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <FeatureCard
          title="Transform ordinary packaging into digitally connected assets"
          description="We'll help unlock the digital power of your beverage containers, by enabling individual item-unit traceability across the entire market, in real-time! This prevents counterfeiting and diversion activities, as well as offer you unmatched market intelligence"
          imageSrc="/assets/images/producer/optimize-1.svg"
        />
        <FeatureCard
          title="Convert them into low-cost yet expansive, marketing channels"
          description="Your packaging is more than a one-time consumable; we'll convert it into a dynamic marketing platform, for directly engaging with your customers through personalized campaigns. In return, you'll gain actionable insights to enhance your operations"
          imageSrc="/assets/images/producer/optimize-2.svg"
        />
        <FeatureCard
          title="Increase their resource efficiency, and cut your environmental impact"
          description="Through reuse and recycling via the ECOCAN DRS, we'll tell you exactly what individual packaging has been collected and recycled, when and where. We'll also ensure regulators know about your ECO-friendly efforts"
          imageSrc="/assets/images/producer/optimize-3.svg"
        />
        <FeatureCard
          title="Closed-loop recycling"
          description="We directly offer a service for automated bottle washing and quality inspection. Deploying top-of-the-line PAC Swiss bottle washers, and Krones Electronic Bottle Inspector (E.B.I.). That we deliver most hygienic and palletised washed glass bottles ready for reuse"
          imageSrc="/assets/images/producer/optimize-4.svg"
        />
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold mb-4">
          Only ECOCAN can offer you this level of insight, security and
          sustainability. And we say this with Absolute Confidence! Prove us
          wrong
        </p>
      </div>
    </div>
  );
}
