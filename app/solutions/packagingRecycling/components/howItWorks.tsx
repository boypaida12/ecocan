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
      description: "The ECOCAN D.R.S is a take-back collection instrument for used empties. Whereby a refundable fee is added onto the selling price of ECO-products at point of sale",
    },
    {
      id: 2,
      description: "This fee assigns extrinsic financial value to genuine eligible empties, thereby transforming them from supposed waste, to resource ",
    },
    {
      id: 3,
      description: <p>ECOnsumers can reclaim this fee by returning <HyperLink link="eligible empties" href="/" /> to ECO-Stations for recycling</p>,
    },
    {
      id: 4,
      description: "And if the purchasing ECOnsumer accidentally litters eligible empties, other ECOnsumers can pick them and return to ECO-Stations to claim the deposit",
    },
    {
    id: 5,
    description: "The journey of the empties doesn’t end there. ECOuriers pick-up the empties from ECO-Stations, and drop them off to ECO-Recyclers for closed-loop recycling",
    },
    {
        id: 6,
        description: "Material from recycled bottles is used to manufacture new bottles, hence reducing reliance on virgin materials, cutting CO2 emissions and lowering energy consumption",
        }
  ];
const HowItWorks = () => {
  return (
    <div className='mt-20 h-[51.688rem] flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0' >
         <ImageAndItem
        className='ml-16'
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/onlineSales/bottle.png"
              width={410}
              height={634}
              className="mr-2 self-center"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title={<p className="font-dm-sans text-[1.5rem] font-bold leading-[3.5rem] tracking-[-0.02em] text-left ">
                So how does it really work?
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

export default HowItWorks