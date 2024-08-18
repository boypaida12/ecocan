import React from "react";
import TextWithCards from "../shared/text-with-cards/text-with-cards";
import CustomCard from "../shared/text-with-cards/custom-card";
import ImageAndItem from "../shared/image-and-item/image-and-item"
import Image from "next/image";
import {
    Sparkles,
    LucideTriangleAlert,
    LucideRecycle,
    LucideCreditCard,
  } from "lucide-react";
import Link from "next/link";


const iconSize = 18;
const HyperLink = ({ link }: { link: string }) => {
    return (
        <Link href="/" className="text-primary">
        {link}
        </Link>
        );
  };
const featureData = [
    {
        id: 1,
        name: "Make extra cash, Easy & Fast",
        question: (
            <p>
              <HyperLink link="Sign up" /> here to become an Ecourier, and start making money today! Just have a smartphone.
              <br /> pocket
            </p>
          ),
        icon: <LucideTriangleAlert size={iconSize} />,
      },
      {
        id: 2,
        name: "You are the boss!",
        question:
          "Make deliveries and pickups whenever you want, and earn as much money as you need. It’s up to you",
        icon: <LucideRecycle size={iconSize} />,
      },
      {
        id: 3,
        name: "Deliver however",
        question: "Fit pick-ups around your lifestyle; Walk, Cycle, Bike, Drive or even Crawl. Just don’t use fossil fuel. And keep time",
        icon: <LucideCreditCard size={iconSize} />,
      },
  ];

  const howToData = [
    {
      id: 1,
      title: "Tell us a bit about yourself",
      description: (
        <>Fill out the <span className="underline text-[#4AC63F]">Sign-up form</span>, maybe tell us why you rock,<br/> and have your ID + Driving licence ready</>
      ),
    },
    {
      id: 2,
      title: "You'll need a smartphone",
      description: (
        <>So, grab a working smartphone and let's get started! </>
      ),
    },
    {
      id: 3,
      title: "Just be mobile",
      description: (
        <>Deliver any way you like without using fossil fuels,<br/>and if you're fast, Econsumers may tip you.</>
      ),
    },
    {
      id: 4,
      title: "And have insurance",
      description: (
        <>We love having you around, and seeing you earn more.<br/>So get yourself covered, that we keep doing this. Together.</>
      ),
    }
  ]
  interface ItemListProps {
    id: number | string;
    title: string;
    description: React.ReactNode;
  }
  
  const ItemList: React.FC<ItemListProps> = ({ id, title, description }) => (
    <div className="flex flex-row mb-8">
      <div className="flex items-center justify-center min-w-5 h-5 bg-[#4AC63F] rounded-full mr-5">
        <p className="text-xs text-white leading-none">{id}</p>
      </div>
      <div className="pt-0.5">
        <p className="text-[1.125rem] font-semibold">{title}</p>
        <p className="text-xs" >{description}</p>
      </div>
    </div>
  );
const Item = ()=> (
  <div className="w-[31.3rem] h-[33.75rem]">
    <div className="text-accent mt-1 mb-8">
      <p className="text-2xl font-semibold pb-1">How to become an Eco-Courier</p>
      <p className="text-sm ">Want to start earning more today? With ECOCAN, it’s <br/>easy like Sunday Morning. </p>
    </div>
    {
      howToData.map((data) => (
        <ItemList key={data.id} title={data.title} description={data.description} id={data.id} />
      ))
    }
  </div>
)

export default function CourierContent() {
  return (
        <div className="space-y-24 py-8">
            <TextWithCards 
                title="Let’s drive your hustle forward"
                description=""
                customCard={<CustomCard features={featureData}/>}
            />
            <div className="h-[46.25rem] flex justify-center items-center" >
              <div className="w-[65rem] p-0 m-0">
                <ImageAndItem
                  title=""
                  subtitle=""
                  description=""
                  item={<Item/>}
                  className=""
                  image={<Image src="/assets/images/courier/become.png" className="p-0 m-0" width={491} height={540} alt=""/>}
                />
              </div>
            </div>

            {/* your hustle your rules */}
            <div className="h-[46.25rem] flex justify-center items-center" >
              <div className="w-[65rem] p-0 m-0">
                <ImageAndItem
                  title=""
                  subtitle=""
                  description=""
                  item={<Item/>}
                  className="flex flex-row-reverse "
                  image={<Image src="/assets/images/courier/become.png" className="p-0 m-0" width={491} height={540} alt=""/>}
                />
              </div>
            </div>

        </div>
  );
}
