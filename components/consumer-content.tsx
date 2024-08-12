import React from "react";
import TextWithCards from "./shared/text-with-cards/text-with-cards";
import CustomCard from "./shared/text-with-cards/custom-card";
import ImageWithText from "./shared/image-with-text/image-with-text";
import OnlineStore from "./shared/online-store/online-store";
import TextWithCard from "./shared/alt-text-with-card/text-with-card";
import CtaCard from "./shared/cta-card/cta-card";
import JoinCommunity from "./shared/community/community";

export default function ConsumerContent() {
  return (
    <>
      <TextWithCards />
      <ImageWithText
        mainImage="/assets/images/scan-image.svg"
        secondaryImage="/assets/images/earn-image.svg"
        title="How the Ecocan app works"
        subtitle="How the Ecocan app works"
        directions={[
          {
            heading: "Download the Ecocan app",
            description:
              "Download our proprietary application, sign up in under 2 minutes, and start earning today! Get Ecocan App",
          },
          {
            heading: "Scan bottle to Authenticate",
            description:
              "Use Eco-Scanner to identify genuine products before purchase.",
          },
          {
            heading: "Get paid on return",
            description:
              "Discover new Eco-products on EcocanApp, place order with just a few clicks, and receive your favourite drinks in minutes.",
          },
        ]}
      />
      <OnlineStore/>
      <TextWithCard/>
      <JoinCommunity/>
      <CtaCard src="/assets/images/mobile-alt.svg"/>
    </>
  );
}
