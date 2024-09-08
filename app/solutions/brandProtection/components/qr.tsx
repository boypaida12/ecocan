import React from 'react'
import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import Image from "next/image";
  
  const Qr = () => {
    return (
    <div className='relative bg-white p-[2.813rem] mt-8 shadow-lg'>
      <ImageAndItem
        className={`gap-12`}
        image={
          <Image
            src="/assets/images/brandPosition/qr.png"
            alt="qr cards"
            className="object-cover rounded-3xl bg-primary"
            priority
            width={578}
            height={318}
          />
        }
        item={
            <p className="font-inter text-2xl font-semibold leading-[33.89px] tracking-[-0.02em] text-center">
                The ECOCAN TnT is powered<br/>by our proprietary <span className='text-[#4AC63F]'>EcocanApp</span>,<br/><span className='text-[#4AC63F]'>ECOCAN Security codes</span>, and<br/>the <span className='text-[#4AC63F]'>ECOCAN DRS</span>
            </p>
        }
        alignment='self-center'
      />
        <Image
            src="/assets/images/brandPosition/Topographic.png"
            alt="img"
            className="absolute bottom-0 right-0"
            priority
            width={578}
            height={318}
          />
    </div>
    );
  };
  
  export default Qr;