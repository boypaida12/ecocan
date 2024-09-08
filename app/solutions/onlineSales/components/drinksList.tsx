import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import React from 'react'
import Image from "next/image";
import TextWithComponent from '@/components/contents/consumer/components/buy-online';
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import CheckList from '@/components/contents/consumer/components/checklist';


const steps = [
    {
      id: 1,
      description: "Register here to become an ECO-Producer ",
    },
    {
      id: 2,
      description: "After onboarding, we’ll tailor our systems just for you",
    },
    {
      id: 3,
      description: "Then update your product profiles on ECOCAN Market",
    },
    {
      id: 4,
      description: "That’s all. You are good to go  ",
    }
  ];
const DrinksList = () => {
  return (
    <div className='mt-20 flex shadow-lg items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0 max-h-[26.125rem]' >
         <ImageAndItem
        className='md:flex-row-reverse ml-16'
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/onlineSales/drinksList.png"
              width={536}
              height={367}
              className="pl-12 self-center"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title={<p className="font-dm-sans text-[1.5rem] font-bold leading-[3.5rem] tracking-[-0.02em] text-left">
                To list your drinks on ECOCAN Market
              </p>}
            component={<CheckList items={steps}/>}
          />
        }
        alignment='self-start'
      />
    </div>
  )
}

export default DrinksList