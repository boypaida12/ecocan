import React from 'react';
import SimpleCard from './simpleCard';
import CheckList from '@/components/contents/consumer/components/checklist';
import '../../../../components/contents/courier/components/image.css'

const TwoCards = () => {
    const steps = [
        {
          id: 1,
          step: (<p className='text-[#FCFCFD]'>The value of illicit trade is estimated at USD 8 Billion, with 60% of total alcohol sales being illicit! </p>),
        },
        {
          id: 2,
          step: (<p className='text-[#FCFCFD]'>Genuine beverage producers lose on average 40% of their market shares, resulting in a total fiscal loss estimated at USD 472 million.</p>)
        },
        {
          id: 3,
          step: (<p className='text-[#FCFCFD]'>And annual loss of over 50,000 legitimate jobs.(2022)</p>),
        }
      ];

  const cards = [
    {
      title: <h2 className="font-dm-sans text-[24px] font-bold leading-[56px] tracking-[-0.02em] text-left text-[#23262F]">Global</h2>,
      content: (
        <p className="max-w-[56.125rem] font-inter text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-left text-white">
        The annual global value of counterfeit and pirated goods is estimated at USD 2.8 trillion. Beyond the obvious health and safety risks, this leads to the loss of over USD 270 billion in tax revenue annually, and 5.5 million legitimate jobs are lost each year.
        </p>
      ),
      cardClass: 'bg-[#F6C92D] p-4 rounded-2xl max-w-[22.5rem] max-h-[26.25rem]',
    },
    {
      title: <h2 className="z-99  font-dm-sans text-[24px] font-bold leading-[56px] tracking-[-0.02em] text-left text-white">In Kenya for example:</h2>,
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

export default TwoCards;