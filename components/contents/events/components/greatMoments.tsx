import React from 'react';
import Image from "next/image";
import CtaCard from '@/components/shared/cta-card/cta-card';
import TextWithComponent from '../../consumer/components/buy-online';
import PrimaryButton from '@/components/shared/primary-btn';

const GreatMoments = () => {
  return (
    <div className='max-w-[65rem] mx-auto p-8'>
      <CtaCard
        className="bg-[url('/assets/images/events/great.png')] ps-[7.25rem] py-[4.75rem] bg-cover bg-no-repeat relative after:absolute after:inset-0 after:content-['']  overflow-hidden z-50 flex items-center h-[33rem]"
        item={
          <TextWithComponent
            title={
            <p className="text-white text-5xl font-inter font-bold leading-[58.09px] tracking-[-0.02em] text-left">
              Great moments, with 
              <br />
              the lightest footprint
            </p>
            }
            description={
              <span className="text-white">
                Only with ECOCAN
              </span>
            }
            component={
              <div className="flex gap-4">

              </div>
            }
          />
        }
        // image={
        //   <div className="w-[19.75rem] h-[22.625rem] mx-auto">
        //     <Image
        //       src="/assets/images/mobile-alt.svg"
        //       alt=""
        //       width={100}
        //       height={100}
        //       className="w-full h-full"
        //     />
        //   </div>
        // }
      />
    </div>
  );
};

export default GreatMoments;