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
import TextWithComponent from "./components/avail-rvm";
import SellMoreOnline from "./components/sell-more-online";
import OurSuccess from "./components/our-success";
import { FaqSection } from "../consumer/components/faq";
import CtaCard from "@/components/shared/cta-card/cta-card";
import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import { AccordionDemo } from "../consumer/components/accordion";
const iconSize = 18;

export default function EcoStationContent() {
  function handleAccordionSelect(id: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
      <TextWithCards
        title="Why become an ECO-station"
        description="It’s a win-win-win; while you help keep the environment clean by accepting empties, and issuing deposits to ECOnsumers, we’ll bring more business to you"
        customCard={
          <CustomCard
            features={[
              {
                id: 1,
                name: "Reach new customers",
                question: (
                  <p>
                    <HyperLink link="Sign-Up" href={"/"} /> here, and we’ll link
                    you up with
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
                icon: <LucideTriangleAlert size={iconSize} />,
              },
              {
                id: 2,
                name: "Earn commissions",
                question: (
                  <p>
                    For every <HyperLink link="eligible" href={"/"} /> empty you
                    accept, we’ll pay you a commission
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
                icon: <LucideRecycle size={iconSize} />,
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
                icon: <LucideCreditCard size={iconSize} />,
              },
            ]}
          />
        }
      />
      <ImageAndItem
        image={
          <Image
            src="/assets/images/become-ecostation.svg"
            width={50}
            height={50}
            alt="Become an eco-station"
            className="w-full h-full"
          />
        }
        item={<BecomeEcostation />}
        className=""
      />
      <ImageAndItem
        className="md:flex-row-reverse"
        image={
          <Image
            src="/assets/images/rvm.png"
            alt="Online store"
            className="object-cover rounded-3xl bg-primary"
            width={500}
            height={100}
          />
        }
        item={<TextWithComponent />}
      />
      <SellMoreOnline />
      <OurSuccess />
      <FaqSection />
      <CtaCard
        className="bg-[url('/assets/images/join-eco-community.jpeg')] bg-contain relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50"
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
              <div className="flex gap-4">
                <PrimaryButton
                  buttonText="Download App"
                  buttonIcon={<LucideDownload />}
                />
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-transparent border-white text-white hover:text-white rounded-full h-[3.25rem] py-3 px-8 text-lg"
                >
                  Become an Econsumer
                </Button>
              </div>
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
