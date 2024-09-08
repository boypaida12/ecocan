import React from 'react';
import SimpleCard from '../../brandProtection/components/simpleCard';
import CheckList from '@/components/contents/consumer/components/checklist';
import '../../../../components/contents/courier/components/image.css'
import HyperLink from '@/components/shared/hyperlink/hyperlink';

const DoubleCards = () => {
    const steps = [
        {
          id: 1,
          step: (<p className='text-[#FCFCFD]'>Go to ECO-market section on EcocanApp, or the ECOCAN website   </p>),
        },
        {
          id: 2,
          step: (<p className='text-[#FCFCFD]'>Browse through the wide selection of ECO-products  </p>)
        },
        {
          id: 3,
          step: (<p className='text-[#FCFCFD]'>Select your favourite drinks, and preferred delivery or pickup option </p>),
        },
        {
            id: 4,
            step: (<p className='text-[#FCFCFD]'>Add existing ECOnsumer benefits to discount your bill </p>),
        },
        {
            id: 4,
            step: (<p className='text-[#FCFCFD]'>Pay balance with your ECOCAN credits, and wait for delivery </p>),
        }
      ];

  const cards = [
    {
      title: <h2 className="font-dm-sans text-xl font-bold leading-[56px] tracking-[-0.02em] text-left text-[#23262F]">To sell on ECOCAN Market:</h2>,
      content: (
        <ul>
            <li className="list-disc font-inter text-[1rem] font-normal leading-[1.21rem] text-left text-[#777E90] py-2">
            <HyperLink link="Register here " href="/" />to list your shop as an ECO-station
            </li>
            <li className="list-disc font-inter text-[1rem] font-normal leading-[1.21rem] text-left text-[#777E90] py-2">
            Sign the ECO-partnership agreement 
            </li>
            <li className="list-disc font-inter text-[1rem] font-normal leading-[1.21rem] text-left text-[#777E90] py-2">
            Update your profile on ECOCAN Market
            </li>
            <li className="list-disc font-inter text-[1rem] font-normal leading-[1.21rem] text-left text-[#777E90] py-2">
            Set your status “live”, and start selling 
            </li>
            <li className="list-disc font-inter text-[1rem] font-normal leading-[1.21rem] text-left text-[#777E90] py-2">
            While accepting empties
            </li>
        </ul>
      ),
      cardClass: 'p-4 rounded-2xl max-w-[22.5rem] h-[26.25rem] border-0 shadow-lg',
    },
    {
      title: <h2 className="z-99  font-dm-sans text-[24px] font-bold leading-[56px] tracking-[-0.02em] text-left text-white">To make a purchase:</h2>,
      content: <>
      <CheckList items={steps} />
      </>,
      cardClass: "relative bg-cover bg-center bg-[url('/assets/images/eco-station-hero.jpeg')] p-4 rounded-2xl max-w-[41.313rem] relative z-10 overlay h-[26.25rem]",
    },
  ];


  
  return (
    <div className='mt-20 flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0'>
      {cards.map((card, index) => (
        <SimpleCard
          key={index}
          title={card.title}
          content={card.content}
          cardClass={card.cardClass}
        />
      ))}
    </div>
  );
};

export default DoubleCards;