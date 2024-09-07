import React from 'react'
import WasteLitter from './wasteLitter'
import CheckList from '@/components/contents/consumer/components/checklist';

const steps = [
    {
      id: 1,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">ECOnsumers get free access to the most reliable and convenient product verification technology. Which empowers them to easily identify genuine products before purchase</p>,
    },
    {
      id: 2,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">ECO-Producers are equipped with comprehensive product traceability platform, allowing them to monitor their products’ movement across the entire market, in real-time. This aids in detecting illegal counterfeit and product diversion activities as they occur, enabling swift remedial action.</p>,
    },
    {
      id: 3,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">ECO-Recyclers and ECO-Producers can also monitor in real-time, the collection of their post-consumer packaging.</p>,
    },

  ];


const TNT = () => {
  return (
    <div>
        <WasteLitter
        image='/assets/images/brandPosition/Rectangle.png'
        title='ECOCAN TnT'
        description={
            <div className='w-[33.313rem]'>
            <p className="font-inter text-[1.25rem] font-normal leading-[1.5125rem] tracking-[-0.02em] text-left">
                The <span className='text-[#4AC63F]'>ECOCAN Track and Trace</span> is a robust cloud-based platform, that disrupts counterfeit trade by enabling AI-intelligent authentication, and real-time end-to-end traceability of genuine products. The TnT further deploys advanced data analytics tools to process the extensive data it collects, offering deeper insights and control.
            </p>
            <CheckList items={steps} />
            </div>
        }
        />
    </div>
  )
}

export default TNT