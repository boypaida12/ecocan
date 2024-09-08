import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import React, { useState } from 'react'
import Image from "next/image";
import TextWithComponent from '@/components/contents/consumer/components/buy-online';
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import { Dot } from 'lucide-react';
import ItemList from '../../brandProtection/components/itemList';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';


interface AccordionData {
    id: number;
    title: string;
    description: React.ReactNode;
  }
const accordionData: AccordionData[] = [
    {
      id: 1,
      title: "ECOCAN security codes ",
      description: "Unlock the digital power of your packaging, by transforming them from traditional physical assets, into digitally connected resources, for direct engagement with consumers."
    },
    {
        id: 2,
        title: "ECOCAN TnT ",
        description: "We’ll instantly alert you every time a customer engages with your products, detailing exactly when and where it happens. Plus, with advanced data analytics tools, the TnT will generate dynamic performance reports on all interactions. You can then use these insights to take your business to the next level."
      },
      {
        id: 3,
        title: "ECOCAN DRS ",
        description: "Cutting your negative environmental impact is just the beginning. Get the full picture—know who, when and where your empties are returned for recycling. "
      },
      {
        id: 4,
        title: "EcocanApp  ",
        description: "ECOnsumers tell us about what they like, why they like it, what they want more of, and where and when they engage. This lets us deliver personalized advertising tailored to their exact preferences."
      },
      {
        id: 5,
        title: "ECOCAN Market",
        description: "We don’t just spark your customers’ interest and leave them hanging—we close the deal! Our Marketplace lets them buy their favourite drinks from you. While ECOuriers handle the deliveries and pick-ups, ensuring a seamless experience from start to finish"
      },
      
  ];
  
  export function AccordionDemo({
    onSelect,
  }: {
    onSelect: (id: number) => void;
  }) {
    const [openItem, setOpenItem] = useState("item-1");
  
    const handleItemClick = (id: number) => {
      onSelect(id);
      setOpenItem(`item-${id}`);
    };
  
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full pr-[10px]"
        value={openItem}
        onValueChange={(value) => setOpenItem(value)}
      >
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            className="text-accent/80"
          >
            <div className="flex items-center gap-3">
              <div className="w-full">
                <AccordionTrigger onClick={() => handleItemClick(item.id)}>
                  {item.title}
                </AccordionTrigger>
              </div>
            </div>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  
const AccordionComponent = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleAccordionSelect = (id: number) => {
      setSelectedImage(id - 1);
    };
  return (
    <div className='mt-20 h-[51.688rem] flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0' >
         <ImageAndItem
        className='md:flex-row-reverse ml-16'
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/packaging/cooperation.png"
              width={421}
              height={508}
              className="mr-2 self-center"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title={<p className="font-dm-sans text-[1.5rem] font-bold leading-[3.5rem] tracking-[-0.02em] text-left ">
                Recycling is cooperation
              </p>}
            description={<p className='text-[#4E5157] font-semibold'>We all have a role to play in the ECOmmunity:</p>}
            component={<AccordionDemo onSelect={handleAccordionSelect} />}
          />
        }
        alignment='self-start'
      />
    </div>
  )
}

export default AccordionComponent