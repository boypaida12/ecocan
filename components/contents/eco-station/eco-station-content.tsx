import React from "react";
import {
  LucideCreditCard,
  LucideDownload,
  LucideEye,
  LucideHandCoins,
  LucideRecycle,
  LucideTriangleAlert,
} from "lucide-react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import ImageAndItem from "../../shared/image-and-item/image-and-item";
import BecomeEcostation from "./components/become-ecostation";
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import OurSuccess from "./components/our-success";
import { FaqSection } from "../consumer/components/faq";
import CtaCard from "@/components/shared/cta-card/cta-card";
import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import HowTo from "../../shared/HowTo";
import TextWithComponent from "../consumer/components/buy-online";
import SellMore from "./components/sell-more";
import { ReusableAccordion } from "../../shared/accordion";
import News from "../consumer/components/news";

const iconSize = 18;

const accordionItems = [
  {
    id: "item-1",
    question: <p>Unique Customers</p>,
    answer:
      "Know who frequents your store, and why. Interact directly with ECOnsumers who've just placed their first order, or those who've spotted you on ECOCAN Market.",
  },
  {
    id: "item-2",
    question: <p>Orders and order value</p>,
    answer:
      "Get a detailed breakdown of each purchase or order, including average spend.",
  },
  {
    id: "item-3",
    question: <p>Conversion</p>,
    answer:
      "Does listing your business on ECOCAN Market make a difference? Find out by who visited your store or placed orders after opening your profile, and check out their feedback.",
  },
  {
    id: "item-4",
    question: <p>Your sustainability performance</p>,
    answer:
      "We'll share your ECO-friendly contributions; CO2 emissions you've helped reduce, energy saved, and packaging litter you've helped remove from the environment.",
  },
];

const howToData = [
  {
    id: 1,
    title: (
      <div>
        <HyperLink link="Register Here" href="/" /> to grow your business
      </div>
    ),
    description: (
      <p className="text-sm mt-2">
        We&apos;ll then reach out to you with next steps
      </p>
    ),
  },
  {
    id: 2,
    title: "Sign the ECO-partnership agreement",
    description: (
      <p className="text-sm mt-2">
        Everything is transparent, no hidden clauses
      </p>
    ),
  },
  {
    id: 3,
    title: "Update your profile on ECOCAN Market",
    description: (
      <p className="text-sm mt-2">
        We&apos;ll leave this to you, try to be creative
      </p>
    ),
  },
  {
    id: 4,
    title: "Set your status “live”  and start earning",
    description: (
      <p className="text-sm mt-2">
        We&apos;ll ensure you are prominently visible
      </p>
    ),
  },
];

export default function EcoStationContent() {
  return (
    <div className="space-y-48 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
      <TextWithCards
        title="Why become an ECO-station"
        description="It's a win-win-win; while you help keep the environment clean by accepting empties, and issuing deposits to ECOnsumers, we’ll bring more business to you"
        customCard={
          <CustomCard
            features={[
              {
                id: 1,
                name: "Reach new customers",
                question: (
                  <p>
                    <HyperLink link="Sign-Up" href={"/"} /> here, and we&apos;ll
                    link you up with
                    <br />
                    the ECOmmunity
                  </p>
                ),
                answer: (
                  <div className="italic text-accent/50 space-y-4">
                    <p>
                      Where ECOnsumers can buy from you on{" "}
                      <HyperLink link="ECOCAN market" href={"/"} /> or navigate
                      to you on <HyperLink link="ECOCAN Map" href={"/"} />{" "}
                    </p>
                  </div>
                ),
                icon: "/assets/images/eco-station/customers.svg",
              },
              {
                id: 2,
                name: "Earn commissions",
                question: (
                  <p>
                    For every <HyperLink link="eligible" href={"/"} /> empty you
                    accept, we&apos;ll pay you a commission
                  </p>
                ),
                answer: (
                  <div className="italic text-accent/50 space-y-4">
                    <p>
                      ECOuriers will take care of empties pick-up logistics,
                      that you focus on making money.
                    </p>
                  </div>
                ),
                icon: "/assets/images/eco-station/commission.svg",
              },
              {
                id: 3,
                name: "Increase revenues",
                question:
                  "ECOnsumers will keep coming your way. Ensure you have sufficient stock",
                answer: (
                  <div className="italic text-accent/50 space-y-4">
                    <p>
                      And for those redeeming deposits, 60% will most likely
                      spend it right back in your store!
                    </p>
                  </div>
                ),
                icon: "/assets/images/eco-station/revenues.svg",
              },
            ]}
          />
        }
      />
      {/* how to become an eco-station */}
      <HowTo
        itemsTitle="How to become an ECO-station"
        itemsSubtitle="4 easy steps to unlock limitless opportunities"
        items={howToData}
        imageSrc="/assets/images/eco-station/become-ecostation.svg"
        imageAlt="Become an Eco-station"
      />

      {/* We'll avail an RVM */}
      <ImageAndItem
        className="md:flex-row-reverse items-center"
        image={
          <Image
            src="/assets/images/eco-station/rvm.svg"
            alt="RVM"
            className="object-cover rounded-3xl w-full h-full"
            priority
            width={1000}
            height={1000}
          />
        }
        item={
          <TextWithComponent
            title={
              <span>
                We&apos;ll avail an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#228B22] via-[#FFDD4C] to-[#4AC63F]">
                  RVM
                </span>
              </span>
            }
            description={
              <p className="w-[29.375rem]">
                If over 100 ECOnsumers return empties to you every day, we can
                help set up an <HyperLink link="ECOCAN R.V.M." href="/" /> To
                boost your efficiency, and offer ECOnsumers unforgettable
                recycling experience. That they&apos;ll keep coming back. And
                spend more!
              </p>
            }
            component={<PrimaryButton buttonText="Learn more" buttonLink="/" />}
          />
        }
      />
      {/* sell more */}
      <SellMore />

      {/* your success our pride */}
      <ImageAndItem
      className="gap-12 items-center"
        image={
          <Image
            src="/assets/images/eco-station/success-pride.svg"
            alt="eco-can scan"
            width={500}
            height={100}
          />
        }
        item={
          <div className="space-y-6">
            <h2 className="font-semibold text-[2rem]">Your success, our pride</h2>
            <p>
              Facilitate ECOnsumers to return eligible empties to your shop for
              recycling. And over 60% will most likely spend their deposit money
              right back in your shop. And they will for sure come back, or
              place more orders online via ECOCAN Market. Certainly,
              they&apos;ll spread a good word about you{" "}
            </p>
            <p>
              While the ECOmmunity flocks to your store, we&apos;ll help you
              optimize sales by collecting and processing key data from your
              increased operations. And provide you with valuable insights to
              support your decision-making, and to boost your performance
            </p>
          </div>
        }
      />

      {/* intelligent business insights */}
      <ImageAndItem
        className="md:flex-row-reverse items-center gap-12"
        title={
          <span>
            Intelligent insights,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#0000001A]">
              for smart business
            </span>
          </span>
        }
        subtitle={
          <div className="w-3/5 mx-auto">
            Make data-driven decisions with insights from the ECOCAN TnT, giving
            you full visibility into your operations, allowing you to track Key
            Performance Indicators
          </div>
        }
        item={<ReusableAccordion items={accordionItems} defaultOpenItems={["item-1", "item-4"]}/>}
        image={
          <Image
            src="/assets/images/courier/insights.svg"
            alt="Online store"
            className="object-cover rounded-3xl"
            priority
            width={500}
            height={100}
          />
        }
      />
      <News/>
      {/* faq */}
      <FaqSection />

      {/* call to action */}
      <CtaCard
        className="bg-[url('/assets/images/join-eco-community.jpeg')] ps-[7.25rem] py-[3.75rem] bg-cover bg-center relative"
        item={
          <TextWithComponent
            title={
              <p className="text-white text-5xl">
                ECO-friendly heroes must wear caps
              </p>
            }
            description={
              <span className="text-white">You are one of them.</span>
            }
            component={
              <Button
                variant="outline"
                className="bg-[#FFDD4C] hover:bg-[#FFDD4C] rounded-full h-[3.25rem] w-[24.3125rem] border-none px-8 text-lg"
              >
                Join ECOmmunity
              </Button>
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
