import React from "react";
import TextWithComponent from "../consumer/components/buy-online";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { ReusableAccordion } from "@/components/shared/accordion";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import CheckList from "../consumer/components/checklist";
import { FaqSection } from "../consumer/components/faq";
import { Button } from "@/components/ui/button";
import CtaCard from "@/components/shared/cta-card/cta-card";

const steps = [
  {
    id: 1,
    step: "Increased recycling rates",
    description:
      " You’re familiar with how difficult it is to capture empties circulated off-trade. But are also aware of the spellbinding magic of a worthwhile refundable deposit! So 1 + 1 = 2",
  },
  {
    id: 2,
    step: "Highest purity empties",
    description:
      "Recycling is more of a quality than quantity question. And a DRS elaborately delivers non-contaminated recyclate with over 30% greater market value",
  },
  {
    id: 3,
    step: "Extended Producer Responsibility",
    description: (
      <p>
        A Nordic-design DRS is aligned with the{" "}
        <HyperLink link="‘Polluter Pays Principle’" href="/" />, and most
        effectively fulfils this mandate, ensuring everyone contributes{" "}
      </p>
    ),
  },
  {
    id: 4,
    step: "It’s the Gold-Standard",
    description:
      "Endorsed by the United Nation, and European Union’s PPWR and SUP directives, a DRS is the only known take-back system that can collect over 90% of eligible empties, with top-notch quality",
  },
];

const accordionItems = [
  {
    id: "item-1",
    question: "Food-grade recyclate",
    answer: (
      <div>
        <p>
          ECOCAN DRS&apos;s clean-loop, incentivised, and fully digitised
          ECO-system ensures{" "}
          <HyperLink link="recyclate segregation at source." href="/" />{" "}
        </p>
      </div>
    ),
  },
  {
    id: "item-2",
    question: "Reliable recyclate supply",
    answer:
      "Our extensive collection networks, and direct engagement with ECOnsumers, ensures dependable and high-volume empties collection",
  },
  {
    id: "item-3",
    question: "Cut your carbon footprint",
    answer:
      "We deploy e-mobility in our operations. Including delivery of recyclate to you. So it’s up to you to further reduce your environmental impact from your side.",
  },
];

const data = [
  {
    id: 1,
    name: "Product 1",
    description: "xyz",
  },
  {
    id: 2,
    name: "Product 2",
    description: "you",
  },
];

export default function RecyclerContent() {
  return (
    <div className="space-y-24 py-8 max-w-[77.5rem] mx-auto px-4 xl:px-0">
      <TextWithComponent
        title="Closed-loop recycling"
        description={
          <div className="w-4/5">
            <p>
              <HyperLink link="Register here" href="/" /> to join the ECOmmunity
              on one fundamental guarantee; you WILL NOT{" "}
              <HyperLink link="downcycle" href="/" /> empties collected by the
              ECOmmunity. To us, that&apos;s worse than doing nothing at all!
            </p>
            <div className="mt-6">
              <p className="font-semibold">Why join the ECO-system?</p>
              <p className="text-sm">
                Want to cut contaminated recyclate losses? Boost your
                efficiency? And make more money? Then the ECOCAN collection
                system is where you should be
              </p>
            </div>
            <ReusableAccordion items={accordionItems} />
          </div>
        }
      />
      {/* Deposit Refund System */}
      <ImageAndItem
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/ecocan-app.svg"
              width={1000}
              height={1000}
              className="w-full h-full absolute -left-[5rem]"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title="Why a Deposit Refund System?"
            description="You're an expert, so we'll skip the 101"
            component={<CheckList items={steps} />}
          />
        }
      />
      {/* DRS takeover */}
      <div>
        <TextWithComponent
          title="DRS takeover"
          description={
            <p>
              Due to its efficacy, the{" "}
              <HyperLink link="Nordic-design DRS" href="/" /> is rapidly
              becoming a near universal feature of the Developed Markets’
              recycling landscape; with 18 countries having already established
              nationwide Nordic DRSs. And many others have passed legislation to
              establish the one
            </p>
          }
        />
        <div className="bg-white rounded-2xl mt-6 p-6">
          <TextWithComponent
            title="But developing markets have been left behind"
            description={
              <div className="space-y-4">
                <p>
                  We at ECOCAN are on the forefront of championing this DRS
                  revolution in developing markets where it is needed the most.
                  But numerous bottlenecks have been hindering implementation,
                  until now. Leveraging our advanced technologies and extensive
                  recycling experience, we&apos;ve overcome those prohibitive
                  barriers. By tailoring a DRS to developing markets&apos;
                  environment, made it over 70% cheaper to set up, and slashed
                  administration cost by millions of dollars
                </p>

                <p>
                  Curious how we&apos;ve archived this? Join the ECOmmunity to
                  find out
                </p>
              </div>
            }
            component={
              <Image
                src="/assets/images/drs-world.png"
                alt="DRS"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            }
          />
        </div>
        {/* faq */}
        <FaqSection />
        {/* call to action */}

        <CtaCard
          className="bg-[url('/assets/images/recycler-cta.jpeg')] py-[4.75rem] bg-cover bg-center items-center"
          item={
            <TextWithComponent
              title={
                <p className="text-white text-5xl">
                  Recycling is
                  <br />
                  Cooperation
                </p>
              }
              description={
                <p className="text-black mt-4">We can&apos;t do this alone.</p>
              }
            />
          }
        />
      </div>
    </div>
  );
}
