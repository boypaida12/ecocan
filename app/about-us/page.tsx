import React from "react";
import AboutHero from "./components/hero";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import { ReusableAccordion } from "@/components/shared/accordion";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import WhiteBgCard from "@/components/shared/white-bg-card";
import { LucideAward, LucideGem, LucideRecycle } from "lucide-react";
import Partners from "./components/partners";
import CtaCard from "@/components/shared/cta-card/cta-card";
import { DM_Sans, Poppins } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

const accordionItems = [
  {
    id: "item-1",
    question: "To protect our planet",
    answer:
      "Unlock the digital power of your packaging, by transforming them from traditional physical assets, into digitally connected resources, for direct engagement with consumers.",
  },
  {
    id: "item-2",
    question: "Preserve life",
    answer:
      "We'll instantly alert you every time a customer engages with your products, detailing exactly when and where it happens. Plus, with advanced data analytics tools, the TnT will generate dynamic performance reports on all interactions. You can then use these insights to take your business to the next level.",
  },
  {
    id: "item-3",
    question: "And support communities",
    answer:
      "ECOnsumers tell us about what they like, why they like it, what they want more of, and where and when they engage. This lets us deliver personalized advertising tailored to their exact preferences.",
  },
  {
    id: "item-4",
    question: "While promoting economic sustainability",
    answer:
      "We enhance the resource efficiency of product packaging; by optimising its value. And facilitate reclamation of lost market shares, plus acquisition of new markets",
  },
];

const rvmContent = [
  {
    icon: <LucideRecycle />,
    title: "Conserve our environment",
    content: "Currently, our cities and oceans are choking with plastic waste",
  },
  {
    icon: <LucideAward />,
    title: "Protect consumer health",
    content:
      "Our markets are filled with counterfeit products, dangerous to our health",
  },
  {
    icon: <LucideGem />,
    title: "Support our communities",
    content:
      "We offer fair opportunities for everyone to make their contribution to protect our planet, and earn from it.",
  },
  {
    icon: <LucideRecycle />,
    title: "First to market Solutions",
    content:
      "We offer innovative technology to revolutionise the packaging and brand protection sectors",
  },
  {
    icon: <LucideAward />,
    title: "Legal Compliance",
    content:
      "We facilitate beverage producers and consumers to comply with environmental laws. We offer innovative technology to revolutionise the packaging and brand protection sectors",
  },
  {
    icon: <LucideGem />,
    title: "We think we are cool",
    content:
      "We are on a mission, driving a movement, with a purpose. Stand for something you believe in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <div className="space-y-24 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0">
        <TextWithCards
          title="Who is ECOCAN"
          subtitle={
            <p
              className={`bg-gradient-to-r from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text font-semibold text-3xl ${dmSans.className}`}
            >
              We are catalysts of positive change
            </p>
          }
          description={
            <div className="mt-4 text-[#23262fcc] w-4/5">
              <p>
                Offering an end-to-end service, for sustainable management of
                beverage products; from point of manufacture, through retail, to
                recycling. This dynamic, first-to-market service is delivered
                through the <HyperLink link="ECOCAN TnT platform" href="/" />; a
                revolutionary technology leveraging IoT, Blockchain, and AI, to
                provide comprehensive product circulation insights, and deep
                market intelligence. Giving stakeholders greater and
                unparalleled control. At the core of the ECOCAN TnT is our
                free-to-use <HyperLink link="EcocanApp" href="/" />, robust{" "}
                <HyperLink link="ECOCAN security codes" href="/" />, and the
                innovative <HyperLink link="ECOCAN DRS" href="/" />.{" "}
              </p>
            </div>
          }
        />

        {/* who is ecocan */}
        <ImageAndItem
          className="gap-12 md:flex-row-reverse items-center"
          image={
            <Image
              src="/assets/images/about/people.svg"
              alt="community of people on ground"
              width={500}
              height={100}
              className="w-full h-full"
              priority
            />
          }
          item={
            <TextWithComponent
              description={
                <div>
                  <h2
                    className={`bg-gradient-to-r my-2 from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text font-semibold text-3xl ${dmSans.className}`}
                  >
                    Building a COmmunity of <br />
                    visionaries{" "}
                  </h2>
                  <p>
                    Who envision a planet fee from pollution, safe for all the
                    life it sustains, and brimming with limitless opportunities
                    to thrive. Sounds like a Cinderella tale. But to us, the
                    change makers, disruptors, and go getters, it&apos;s an
                    achievable reality; when we bring communities together, and
                    empower them with intelligent tools to prosper
                  </p>
                </div>
              }
            />
          }
        />

        {/* on a mission */}
        <ImageAndItem
          className="gap-12 items-center"
          image={
            <Image
              src="/assets/images/about/more-people.svg"
              alt="community of people on ground"
              width={500}
              height={100}
              className="w-full h-full"
              priority
            />
          }
          item={
            <TextWithComponent
              title={
                <h2
                  className={`bg-gradient-to-tl my-2 from-[#FFDD4C] via-[#FFDD4C] to-[#228B22] text-transparent bg-clip-text font-semibold text-3xl ${dmSans.className}`}
                >
                  On a mission
                </h2>
              }
              description={<ReusableAccordion items={accordionItems} />}
            />
          }
        />

        {/* to be committed */}
        <ImageAndItem
          className="md:flex-row-reverse items-center"
          image={
            <Image
              src="/assets/images/about/board-char.svg"
              alt="community of people on ground"
              width={500}
              height={100}
              className="ms-auto"
              priority
            />
          }
          item={
            <TextWithComponent
              description={
                <div>
                  <h2
                    className={`bg-gradient-to-bl my-2 from-[#228B22] via-[#4AC63F] to-[#0000001A] text-transparent bg-clip-text font-semibold text-3xl ${dmSans.className}`}
                  >
                    To which we are{" "}
                    <span className="bg-gradient-to-bl from-[#4AC63F] via-[#FFDD4C] to-[#0000001A] text-transparent bg-clip-text">
                      committed
                    </span>
                  </h2>
                  <p>
                    Environmental, health and economic sustainability are our
                    north stars. And promoting healthier and fulfilled
                    communities remains our focus. We think we have a solid plan
                    to archive this. And we&apos;ve built needed technology and tools
                    to get started. But we can&apos;t make it all the way without you
                  </p>
                </div>
              }
            />
          }
        />

        {/* draw identity */}
        <ImageAndItem
          className="gap-12 items-center"
          image={
            <Image
              src="/assets/images/about/dog-street.svg"
              alt="community of people on ground"
              width={500}
              height={100}
              className="w-full h-full"
              priority
            />
          }
          item={
            <TextWithComponent
              description={
                <div className="w-11/12 ms-auto">
                  <h2
                    className={`bg-gradient-to-bl my-2 from-[#228B22] via-[#4AC63F] to-[#0000001A] text-transparent bg-clip-text font-semibold text-3xl ${dmSans.className}`}
                  >
                    And draw our{" "}
                    <span className="bg-gradient-to-tr from-[#4AC63F] via-[#FFDD4C] to-[#0000001A] text-transparent bg-clip-text">
                      identity
                    </span>
                  </h2>
                  <p>
                    A strong belief in meaningful cooperation. Formidable spirit
                    of resilience. The ability to re-imagine. And the courage to
                    disrupt. That&apos;s the essence of our DNA. And the CORE of
                    ECOCAN. We pledge to uphold this all the way. That&apos;s our
                    promise you!
                  </p>
                </div>
              }
            />
          }
        />

        {/* partner with us */}
        <TextWithCards
          title="Come partner with us"
          className="text-center mx-auto"
          customCard={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {rvmContent.map((card, index) => (
                <WhiteBgCard
                  iconPath="/assets/images/all/green-ball.svg"
                  className="border-none"
                  title={card.title}
                  key={index}
                  content={card.content}
                />
              ))}
            </div>
          }
        />

        {/* join our disruptors */}
        <div className="space-y-6">
          <TextWithCards
            className="mx-auto text-center"
            title="And join other disruptors"
            description={
              <>
                <p className="text-[#777E90] w-4/6 mx-auto">
                  Building on our collaborative spirit, you&apos;ll be joining these
                  strategic partners, who are instrumental to bringing our
                  aspirations to fruition. Cheers to them, or as they say in
                  Finland; hölökyn kölökyn!
                </p>
              </>
            }
          />
          <Partners />
        </div>

        {/* call to action */}
        <CtaCard
          className="bg-white py-0 md:flex-row-reverse shadow-lg rounded-2xl h-[18rem] gap-12 overflow-hidden"
          item={
            <TextWithComponent
              title={<p className="text-accent text-4xl">In the ECOmmunity</p>}
              description={
                <p className="text-black/70 mt-4 lg:w-4/5">
                  We believe in the power of collaboration to drive positive
                  change. And the capability of technology to transform lives.
                  We invite you to join this once-in-a- generation revolution.
                  Or as they say in Kenya; Karibu sana!
                </p>
              }
            />
          }
          image={
            <div className="w-full overflow-hidden">
              <Image
                src="/assets/images/about/hands.svg"
                alt=""
                width={1200}
                height={100}
                className="w-full h-full"
              />
            </div>
          }
        />
      </div>
    </>
  );
}
