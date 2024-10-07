"use client";
import React from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import featureData from "./components/featureData";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { FaqSection } from "./components/faq";
import Testimonials from "./components/testimonials";
import GreatMoments from "./components/greatMoments";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import TextWithComponent from "../consumer/components/text-with-component";
import Image from "next/image";

const Events = () => {
  return (
    <>
      <div className="space-y-24 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0">
        <TextWithCards
          title="Catch the Wave"
          description={
            <>
              Seamlessly blend our cutting-edge green technology with your bomb
              creativity, for a 
              recommendable<br /> fan cocktail. And a BIG win for the environment
            </>
          }
          customCard={<CustomCard features={featureData} />}
        />

        <div className="h-[14.75rem] mx-auto rounded-3xl bg-cover bg-center relative bg-[url('/assets/images/events/sustainable_experts.jpeg')]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-[2.5rem] leading-[3.631rem] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] mb-4">
              We are sustainability experts
            </h1>
            <p className="text-white/80 text-lg w-3/5 mx-auto font-normal leading-[24.2px] tracking-[-0.02em] text-center">
              While the fans revel in your memorable ECO-Event, and you enjoy
              the peace of mind knowing things are running smoothly. We’ll be
              working diligently behind the scenes to ensure eligible empties
              are efficiently collected through the{" "}
              <HyperLink link="ECOCAN DRS" href="/" />, and sent for closed-loop
              recycling.
            </p>
          </div>
        </div>

        <ImageAndItem
          className="items-center md:flex-row-reverse"
          image={
            <Image
              src="/assets/images/events/bottle.svg"
              alt="Online store"
              priority
              width={500}
              height={100}
              className="ms-auto"
            />
          }
          item={
            <TextWithComponent
              title="We’ll avail ECOCAN RVMs"
              description={
                <div className="w-11/12">
                  By teaming up with us, the turnout will be massive for sure;
                  and you&apos;ll sell more drinks, meaning empties will be plenty to
                  collect. So, to boost collection efficiency and give your fans an
                  unforgettable recycling experience, we&apos;ll bring over our
                  intelligent RVMs.
                </div>
              }
            />
          }
        />
        <ImageAndItem
          className="items-center gap-12"
          image={
            <Image
              src="/assets/images/events/club.svg"
              alt="Online store"
              priority
              width={500}
              height={100}
            />
          }
          item={
            <TextWithComponent
            className="w-11/12 ms-auto"
              title="Let’s keep enhancing the fan experience, together"
              description={
                <>
                  We’ve rolled out the Red Carpet for ECOnsumers and availed the
                  ECOCAN RVMs. You can as well sprinkle in a surprise package. That we create a truly immersive and unforgettable ECO-Event
                </>
              }
            />
          }
        />
      </div>
      <Testimonials />
      <div className="space-y-24 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0">
        <FaqSection />
        <GreatMoments />
      </div>
    </>
  );
};

export default Events;
