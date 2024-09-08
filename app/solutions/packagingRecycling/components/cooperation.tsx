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
      title: "^",
      description: (<ul className="list-disc pl-5 space-y-2">
        <li>ECOCAN provides requisite technology, and sets up the DRS</li>
        <li>
          ECO-Producers apply deposit incentive to ECO-products, to encourage return for recycling. And print ECOCAN Security Codes onto their packaging, to safeguard product integrity
        </li>
        <li>
          ECOnsumers authenticate genuine products before purchase, and return intact eligible empties to ECO-stations, to reclaim deposit
        </li>
        <li>
          ECO-Stations accept returned packaging and issue applicable deposit. As well as facilitate ECOCAN Market purchases
        </li>
        <li>
          ECOuriers handle deliveries to ECOnsumers, and pick-up returned empties from ECO-stations
        </li>
        <li>
          ECO-Recyclers process dropped-off empties, and manufacture new packaging
        </li>
        <li>
          ECO-Producers use recycled packaging for new ECO-products. And the cycle is repeated
        </li>
        <li>
          ECOCAN ensures everyone is happy, and makes money for their participation
        </li>
      </ul>)
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
  
const Cooperation = () => {
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

export default Cooperation