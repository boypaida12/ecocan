import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import React from 'react'
import Image from "next/image";
import TextWithComponent from '@/components/contents/consumer/components/buy-online';
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import { Dot } from 'lucide-react';
import ItemList from '../../brandProtection/components/itemList';


const steps = [
    {
      id: 1,
      description: "Promote ECOnsumers loyalty by treating them to convenient and pocket friendly online purchases",
    },
    {
      id: 2,
      description: "And delight them with affordable and fast deliveries, right to their doorsteps",
    },
    {
      id: 3,
      description: "Boost your visibility across our platforms with in-app optimisation tools. And watch sales grow",
    },
    {
      id: 4,
      description: "Elaborately recycle your empties. And the ECO-community will support you with more purchases ",
    },
    {
    id: 5,
    description: "Improve your sales efficiency with actionable performance data, from the ECOCAN TnT platform",
    },
    {
        id: 5,
        description: <><HyperLink link="EcocanApp" href="/" />further engages ECOnsumers by incentivising and gamifying the marketplace experience with <HyperLink link="Recycling Coupons, Loyalty discounts, " href="/" /> Red Carpet treats, and other rewards, for ECOnsumers."</>,
        }
  ];
const Convinience = () => {
  return (
    <div className='mt-20 h-[51.688rem] flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0' >
         <ImageAndItem
        className='ml-16'
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/onlineSales/bottle.png"
              width={404}
              height={729}
              className="mr-2 self-center"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title={<p className="font-dm-sans text-[1.5rem] font-bold leading-[3.5rem] tracking-[-0.02em] text-left mb-[4.438rem]">
                We live in a world of Super Convenience
              </p>}
            description={<p className='text-[#777E90]'>And we’ll help you make the most of it</p>}
            component={<ItemList 
                items={steps}
                bullet={<Dot />}
                />}
          />
        }
        alignment='self-start'
      />
    </div>
  )
}

export default Convinience