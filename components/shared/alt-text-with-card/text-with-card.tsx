import React from "react";
import CustomCard from "../text-with-cards/custom-card";
import {
  LucideBadgeDollarSign,
  LucideCreditCard,
  LucideShield,
} from "lucide-react";

export default function TextWithCard({
  heading = "Why do you need EcocanApp?",
}: {
  heading?: string;
}) {
  return (
    <div className="max-w-[77.5rem] mx-auto py-[6.25rem]">
      <h2 className="text-center text-[2rem] font-bold text-[#23262FCC] mb-12">
        {heading}
      </h2>
      <CustomCard
        bgColor="bg-white"
        features={[
          {
            id: 1,
            name: "Safeguard your health",
            description:
              "Did you know that 20% of all products sold on the market today are fake? And counterfeit criminals have been getting smarter and smarter? But not anymore! You can now outsmart them by using the most intelligent, most secure, and easy-to-use EcocanApp.",
            icon: <LucideShield />,
          },
          {
            id: 2,
            name: "Make money",
            description:
              "Earn real cash and coupon discounts, as much as you want, by just returning used eligible packaging to Eco-Stations, to redeem applicable deposit money! It's that simple.",
            icon: <LucideBadgeDollarSign />,
          },
          {
            id: 3,
            name: "Make online purchases",
            description:
              "And if you want, you can order your favourite drinks through ECOCAN Marketplace, from the comfort of your couch and receive it in minutes.",
            icon: <LucideCreditCard />,
          },
        ]}
      />
    </div>
  );
}
