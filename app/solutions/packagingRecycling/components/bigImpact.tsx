import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import React from 'react'
import Image from "next/image";
import TextWithComponent from '@/components/contents/consumer/components/buy-online';
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import CheckList from '@/components/contents/consumer/components/checklist';


const steps = [
    {
      id: 1,
      description: "You’ll be helping reduce packaging litter in the environment",
    },
    {
      id: 2,
      description: "Combat illicit trade by depriving counterfeit criminals of their primary source of packaging",
    },
    {
      id: 3,
      description: "And increasing the usefulness of used packaging which are recycled to make new bottles ",
    },
    {
      id: 4,
      description: "Therefore, reducing CO2e emissions, significantly curbing global warming and climate change ",
    },
    {
      id: 5,
      description: "And we will make sure your recycling experience is most convenient, and pleasantly unforgettable. ",
    }
  ];
const BigImpact = () => {
  return (
    <div className='mt-20 flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0 max-h-[44.438rem]' >
         <ImageAndItem
        className='md:flex-row-reverse ml-16'
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/packaging/bigImpact.png"
              width={441}
              height={536}
              className="pl-12 self-center"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title={<p className="font-dm-sans text-[1.5rem] font-bold leading-[3.5rem] tracking-[-0.02em] text-left">
                Small deeds, with BIG impacts
              </p>}
            description={
              <p className='text-[#23262FCC]'>Whether your motivation for returning empties is to earn money, or because you are ecologically conscious:</p>
            }
            component={<CheckList items={steps}/>}
          />
        }
        alignment='self-start'
      />
    </div>
  )
}

export default BigImpact