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
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import SimpleCard from "../eco-producer/components/simpleCard";

const cardContent = [
  {
    src: '/assets/images/recycler/why.png',
    title:'Food-grade recyclate',
    content: "ECOCAN DRS’s clean-loop, incentivised, and fully digitised ECO-system ensures recyclate segregation at source. ",
  },
  {
    src: '/assets/images/recycler/why.png',
    title:'Reliable recyclate supply',
    by:"by John Smith",
    content: "Our extensive ECO-station network, and direct engagement with ECOnsumers, ensures dependable and high-volume empties collection",
  },
  {
    src: '/assets/images/recycler/why.png',
    title:'Cut your carbon footprint',
    by:"by John Smith",
    content: "We deploy e-mobility in our operations. Including delivery of recyclate to you. That we cut CO2e emissions to the bare minimum",
  }
];

const steps = [
  {
    id: 1,
    icon: (
      <div className="w-[2.5rem] h-[2.5rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
        <Image src="/assets/images/recycler/recycle_icon.png" width={24} height={24} alt="icon" />
      </div>
    ),
    step: (<p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">Increased recycling rates</p>),
    description:
      " You’re familiar with how difficult it is to capture empties circulated off-trade. But are also aware of the spellbinding magic of a worthwhile refundable deposit! So 1 + 1 = 2",
  },
  {
    id: 2,
    icon: (
      <div className="w-[2.5rem] h-[2.5rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
        <Image src="/assets/images/recycler/hour_glass_icon.png" width={24} height={24} alt="icon" />
      </div>
    ),
    step: (<p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">Highest purity empties</p>),
    description:
      "Recycling is more of a quality than quantity question. And a DRS elaborately delivers non-contaminated recyclate with over 30% greater market value",
  },
  {
    id: 3,
    icon: (
      <div className="w-[2.5rem] h-[2.5rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
        <Image src="/assets/images/recycler/earth_icon.png" width={24} height={24} alt="icon" />
      </div>
    ),
    step: (<p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">Extended Producer Responsibility</p>),
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
    icon: (
      <div className="w-[2.5rem] h-[2.5rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
        <Image src="/assets/images/recycler/gold_medal_icon.png" width={24} height={24} alt="icon" />
      </div>
    ),
    step: (<p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">It’s the Gold-Standard</p>),
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
    <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
      <TextWithComponent
        title={<p className="text-[#23262FCC] font-inter text-4xl font-bold leading-[3.5rem] tracking-[-0.02em] text-left">
          Closed-loop recycling
        </p>}
        description={
          <div className="w-4/5">
            <p>
              <HyperLink link="Register here" href="/" /> to join the ECOmmunity
              on one fundamental guarantee; you WILL NOT{" "}
              <HyperLink link="downcycle" href="/" /> empties collected by the
              ECOmmunity. To us, that&apos;s worse than doing nothing at all!
            </p>
          </div>
        }
      />
            <TextWithCards
              title="Why join the ECO-system?"
              description= {<p className="text-sm">
              Want to cut contaminated recyclate losses? Boost your
              efficiency? And make more money? Then the ECOCAN collection
              system is where you should be
            </p>}
              customCard={
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 flex justify-evenly items-center">

                  {cardContent.map((card, index) => (
                    <SimpleCard
                    className="border-transparent p-0 w-[18.063rem]"
                    image={<div className=" w-[full] max-h-[11.75rem] overflow-hidden"><Image src={card.src} alt="image" width={280} height={220} className="object-cover h-full w-full"/></div>}
                    key={index}
                    title={card.title}
                    content={<p >
                      {/* <span className="text-[#4F4F4F]">
                      {card.by}
                    </span><br/> */}
                    <div className=" font-roboto text-[0.75rem] font-normal leading-[0.87875rem] text-left text-[#333333]">
                      {card.content}
                    </div>
                    </p>}
                  />
                  ))}
                </div>
              }
            />
      {/* Deposit Refund System */}
      <ImageAndItem
        image={
          <div className="relative w-[32.688rem] h-[37.375rem]">
            <p className="text-[#23262FCC] font-sans text-2xl font-semibold leading-[3.5rem] tracking-[-0.02em] text-left">
                Why a Deposit Refund System?
              </p>
              <p className="mb-3 text-[#23262FCC] font-sans text-base font-normal leading-[1.21rem] tracking-[-0.02em] text-left">
                  You're an expert, so we'll skip the 101
                </p>
            <Image
              src="/assets/images/recycler/frank.png"
              width={486}
              height={400}
              priority
              alt="How to return eligible empties"
              className="w-[486px] h-[400px] "
            />
          </div>
        }
        item={
          <TextWithComponent
            // title="Why a Deposit Refund System?"
            // description="You're an expert, so we'll skip the 101"
            component={<CheckList items={steps} />}
          />
        }
      />
      {/* DRS takeover */}
      <ImageAndItem
        image={
          <div className="relative w-[31.013rem] h-[30.719rem]">
            <Image
              src="/assets/images/recycler/biker.png"
              width={496.21}
              height={491.5}
              priority
              alt="How to return eligible empties"
              className="w-[496.21px] h-[491.5px] "
            />
          </div>
        }
        item={
            <div className="h-[30.688rem] flex items-center justify-start">
              <div className="flex flex-col">
                <p className="text-[#23262FCC] font-inter text-4xl font-bold leading-[3.5rem] tracking-[-0.02em] text-left">
                  DRS takeover
                </p>
                <p className="font-inter text-base font-normal leading-[1.5125rem] tracking-[-0.02em] text-left">
                  Due to its efficacy, the <HyperLink link="Nordic-design DRS" href="/" /> is rapidly becoming a near universal feature of the 
                  Developed Markets’ recycling landscape; with 18 countries having already established nationwide 
                  Nordic DRSs. And many others have passed legislation to establish the one.
                </p>
              </div>
            </div>
        }
        className="md:flex-row-reverse"
      />
      <div>
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
                src="/assets/images/recycler/drs-world.png"
                alt="DRS"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            }
          />
        </div>

        {/* that which matters */}
        <div className="max-w-[65rem] h-auto flex gap-16 my-[6rem] mx-auto">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-green-700 mb-2">Recycling</h2>
            <h1 className="text-3xl font-bold text-green-600">That which <span className="text-green-700">matters</span></h1>
            <p className="text-base text-gray-600 mt-4">
              You already know what they mean, but they mean most to us. So we’ve developed technology to facilitate their implementation.
            </p>
            <p className="text-base text-gray-600 mt-2">
              And we expect you to also uphold them, if you want a gig with us.
            </p>
          </div>
          <div className="flex-1 flex flex-col space-y-4 text-green-600 justify-center">
            <a href="#" className="text-base">1. Segregation-at-source</a>
            <a href="#" className="text-base">2. Clean-loop collection</a>
            <a href="#" className="text-base">3. Collected-for-Recycling</a>
          </div>
          <div className="flex-1 flex flex-col space-y-4 text-green-600 justify-center">
            <a href="#" className="text-base">4. Sent-to-Recycling</a>
            <a href="#" className="text-base">5. Closed-loop Recycling</a>
          </div>
        </div>

        {/* faq */}
        <FaqSection />
        {/* call to action */}

        <CtaCard
          className="bg-[url('/assets/images/recycler/recycler-cta.jpeg')] py-[4.75rem] bg-cover bg-center items-center"
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
