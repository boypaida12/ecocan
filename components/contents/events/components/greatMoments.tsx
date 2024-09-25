import React from "react";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "../../consumer/components/buy-online";

const GreatMoments = () => {
  return (
    <CtaCard
      className="bg-[url('/assets/images/events/great.png')] ps-[7.25rem] h-[33rem] bg-cover flex items-center bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/50 after:opacity-50 after:-z-10 overflow-hidden z-50"
      item={
        <TextWithComponent
          title={
            <h2 className="text-white text-5xl mb-3">
              Great moments, with the lightest footprint
            </h2>
          }
          description={<span className="text-white font-bold">Only with ECOCAN</span>}
        />
      }
    />
  );
};

export default GreatMoments;
