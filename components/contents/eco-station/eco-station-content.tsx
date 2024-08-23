import React from "react";
import {
  LucideCreditCard,
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
const iconSize = 18;

export default function EcoStationContent() {
  return (
    <>
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
                    <HyperLink link="Sign-Up" /> here, and we’ll link you up
                    with
                    <br />
                    the ECOmmunity
                  </p>
                ),
                answer: (
                  <div className="italic text-accent/50 space-y-4">
                    <p>
                      Where ECOnsumers can buy from you on{" "}
                      <HyperLink link="ECOCAN market" /> or navigate to you on{" "}
                      <HyperLink link="ECOCAN Map" />{" "}
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
                    For every <HyperLink link="eligible" /> empty you accept, we’ll pay
                    you a commission
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
    </>
  );
}
