import TextWithComponent from "@/components/contents/consumer/components/buy-online";
import React from "react";
import GlobalCountryExample from "./components/global-country-example";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import { beachBottle, computer, serialized, ecocanMobile } from "@/lib/imageIndex";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import WhiteBgCard from "@/components/shared/white-bg-card";
import { Card } from "@/components/ui/card";
import StyledText from "@/components/shared/styled-text";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import CheckList from "@/components/contents/consumer/components/checklist";

const steps = [
  {
    id: 1,
    step: (
      <div className="font-light text-accent/80">
        ECOnsumers get free access to the most reliable and convenient product
        verification technology. Which empowers them to easily identify genuine
        products before purchase
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="font-light text-accent/80">
        ECO-Producers are equipped with comprehensive product traceability
        platform, allowing them to monitor their products’ movement across the
        entire market, in real-time. This aids in detecting illegal counterfeit
        and product diversion activities as they occur, enabling swift remedial
        action.
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="font-light text-accent/80">
        ECO-Recyclers and ECO-Producers can also monitor in real-time, the
        collection of their post-consumer packaging.
      </div>
    ),
  },
];

const stepsTwo = [
  {
    id: 1,
    step: (
      <div className="font-light text-accent/80">
        The built-in, machine learning Eco-scanner ensures reliable, fast, and
        convenient product authentication in under 3 seconds.
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="font-light text-accent/80">
        And the integrated AI-powered verification technology ensures that only
        valid ECOCAN security codes are decoded.
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="font-light text-accent/80">
        After product authentication, the verification process can be leveraged
        to engage ECOnsumers with personalized marketing campaigns.
      </div>
    ),
  },
  {
    id: 4,
    step: (
      <div className="font-light text-accent/80">
        Through EcocanApp’s customizable product carousel, and traceability
        passports, ECOnsumers enjoy a unique and interactive brand.
      </div>
    ),
  },
];

const rvmContent = [
  {
    content:
      "When you carelessly discard empties instead of returning them to ECO-stations, you’ll be helping counterfeit criminals. Who will simply pick the empties, fill them with fake drinks, and put them back to the market. And they’ll look exactly similar as genuine drinks",
  },
  {
    content: (
      <p>
        But with <HyperLink link="EcocanApp" href="/" />, you now have the power
        to identify fakes. Nevertheless, ensure to return your empties to
        ECO-stations, that we completely starve these criminals{" "}
      </p>
    ),
  },
];

export default function BrandProtection() {
  return (
    <div className="space-y-24">
      <TextWithComponent
        title="Brand Protection"
        description={
          <div className="w-4/5">
            <p>
              30% of all beverages sold globally is illicit. In Africa it’s
              worse - 2 out of 5 drinks sold are fake! Consuming these harmful
              products leads to loss of life, harming of health, depriving value
              for money, and hurts legitimate trade. Good news? We can now stop
              this, with EcocanApp{" "}
            </p>
          </div>
        }
      />
      <GlobalCountryExample />
      <ImageAndItem
        className="gap-12"
        image={
          <Image
            src={beachBottle}
            alt="beach bottle"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="Waste litter => Counterfeit trade"
            description="Counterfeit criminals often lack capacity to legitimately acquire new bottles for their illegal fake drinks. Instead, they rely on genuine used empties carelessly thrown in the environment, as their primary source of packaging."
            customCard={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {rvmContent.map((card, index) => (
                  <Card key={index} className="border-none shadow-lg p-4">
                    <StyledText>
                      <div className="text-accent/50 text-sm">
                        {card.content}
                      </div>
                    </StyledText>
                  </Card>
                ))}
              </div>
            }
          />
        }
      />
      {/* much needed intervention */}
      <TextWithComponent
        title="Much needed intervention"
        description={
          <div>
            <p>
              ECOCAN offers a suite of advanced technology solutions, to empower
              the ECOmmunity to effectively combat harmful counterfeit trade.
              These intelligent solutions provide high security, yet most
              affordable anti-counterfeit protection
            </p>
            <StyledText>
              <p>
                Use <HyperLink link="EcocanApp" href="/" /> to reliably
                authenticate genuine drinks carrying{" "}
                <HyperLink link="ECOCAN security codes" href="/" />
              </p>
            </StyledText>
            <StyledText>
              <p>
                After enjoying your drink, return empties to ECO-Stations for
                recycling, via the <HyperLink link="ECOCAN DRS" href="/" />
              </p>
            </StyledText>
            <StyledText>
              <p>
                The ECOCAN TnT enables real time monitoring of counterfeiting
                attemps
              </p>
            </StyledText>
          </div>
        }
      />
      {/* ecocan tnt */}
      <ImageAndItem
        className="gap-12"
        image={
          <Image
            src={computer}
            alt="beach bottle"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="ECOCAN TnT"
            description={
              <div>
                <p>
                  The <HyperLink link="ECOCAN Track and Trace" href="/" /> is a
                  robust cloud-based platform, that disrupts counterfeit trade
                  by enabling AI-intelligent authentication, and real-time
                  end-to-end traceability of genuine products. The TnT further
                  deploys advanced data analytics tools to process the extensive
                  data it collects, offering deeper insights and control
                </p>
              </div>
            }
            customCard={<CheckList items={steps} />}
          />
        }
      />
      <TextWithComponent
        description={
          <div>
            <p>
              <HyperLink link="ECOCAN Security Codes" href="/" /> are
              serialized, blockchain-compatible, anti-copy codes. Which are only
              printed onto packaging of genuine eligible products. To ensure
              each product is unique, is digitally connected, and can be traced.
              ECOnsumers can scan these codes with their ECO-scanners to
              authenticate the products in under 3 seconds.
            </p>
            <HyperLink link="Learn more" href="/" />
          </div>
        }
      />
      <Image
        src={serialized}
        width={1000}
        height={1000}
        alt="serialized and non-serialized"
        className="w-full h-full shadow-lg rounded-2xl"
        priority
      />
      {/* more on the ecocan app */}
      <ImageAndItem
      className="md:flex-row-reverse"
        item={
          <TextWithComponent
            title="EcocanApp"
            description="EcocanApp is our  proprietary, free to use, mobile application, enabling ECOnsumers to easily and reliably authenticate genuine products. By simply scanning the ECOCAN Security codes printed on eligible products’ packaging, to ensure their authenticity"
            component={<CheckList items={stepsTwo} />}
          />
        }
        image={
            <Image src={ecocanMobile} alt="ecocan app mobile" width={1000} height={1000} className="w-full h-full"/>
        }
      />
    </div>
  );
}
