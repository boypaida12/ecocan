"use client";
import React, { useState } from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import ImageAndItem from "../../shared/image-and-item/image-and-item"
import Image from "next/image";
import { AccordionDemo } from "./components/accordion";
import {
    Sparkles,
    LucideTriangleAlert,
    LucideRecycle,
    LucideCreditCard,
  } from "lucide-react";
import Link from "next/link";
import ImageText from "./components/imageText";

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
        <p className="text-xs">Fill out the <span className="underline text-[#4AC63F]">Sign-up form</span>, maybe tell us why you rock,<br/> and have your ID + Driving licence ready</p>
      ),
    },
    {
      id: 2,
      title: "You'll need a smartphone",
      description: (
        <p className="text-xs">It'd be easier to just shout instructions at you, but we can't. So, grab a working smartphone </p>
      ),
    },
    {
      id: 3,
      title: "Be mobile",
      description: (
        <p className="text-xs">Deliver however, but don't use fossil fuel. And don't keep ECOnsumers waiting</p>
      ),
    },
    {
      id: 4,
      title: "And have insurance",
      description: (
        <p className="text-xs">Let's keep the good times rolling! So get yourself covered, that we keep doing this. Together</p>
      ),
    }
  ]
  interface ItemListProps {
    id: number | string;
    title: string;
    description: React.ReactNode;
  }
  
  export const ItemList: React.FC<ItemListProps> = ({ id, title, description }) => (
    <div className="flex flex-row mb-8">
      <div className="flex items-center justify-center min-w-5 h-5 bg-[#4AC63F] rounded-full mr-5">
        <p className="text-xs text-white leading-none">{id}</p>
      </div>
      <div className="pt-0">
        <p className="text-[1.125rem] font-semibold">{title}</p>
        {description}
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
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };
  return (
        <div className="space-y-24 py-8">
            <TextWithCards 
                title="Let’s drive your hustle forward"
                description=""
                customCard={<CustomCard features={featureData}/>}
            />
            {/* how to become an eco-courier */}
            <div className="h-[46.25rem] flex justify-center items-center" >
              <div className="w-[65rem]">
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
            <ImageAndItem
              // title="Your hustle, Your rules!"
              // subtitle="Making money has never been this Flexible. Easy. And. Transparent"
              image={
                <Image
                  src="/assets/images/courier/your-hustle.png"
                  alt="EcocanApp step"
                  className="object-cover"
                  width={421}
                  height={417}
                />
              }
              className="md:flex-row-reverse"
              item={<AccordionDemo onSelect={handleAccordionSelect} />}
            />
          {/* image text */}
          <ImageText/>
        </div>
  );
}
