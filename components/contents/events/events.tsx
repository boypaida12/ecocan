'use client'
import React from 'react'
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import featureData from './components/featureData';
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import ImageText from './components/image-text';
import { FaqSection } from './components/faq';
import Testimonials from './components/testimonials';
import GreatMoments from './components/greatMoments';

const Events = () => {
  return (
    <>
      <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
      <TextWithCards
        title="Catch the Wave"
        description={<>Seamlessly blend our cutting-edge green technology with your bomb creativity, for a <br/>recommendable fan cocktail. And a BIG win for the environment</>}
        customCard={<CustomCard features={featureData} />}
      />
      </div>
      <div className="w-full bg-slate-800 h-[14.75rem] bg-cover bg-center relative" style={{ backgroundImage: "url('assets/images/events/sustainable_experts.jpeg')" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl leading-[3.631rem] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] mb-4">
          We are sustainability experts
        </h1>
        <p className="text-white/80 text-[20px] font-normal leading-[24.2px] tracking-[-0.02em] text-center max-w-[56.125rem]">
          While the fans revel in your memorable ECO-Event, and you enjoy the peace of mind knowing things are running smoothly. We’ll be working diligently behind the scenes to ensure eligible empties are efficiently collected through the <HyperLink link="ECOCAN DRS" href="/"/>, and sent for closed-loop recycling.
        </p>
      </div>
    </div>

    <div className="space-y-24 py-8 max-w-[65rem] mx-auto px-4 xl:px-0">
    <ImageText 
        className="md:flex-row-reverse" 
        title="We’ll avail ECOCAN RVMs" 
        description={(
          <>
            By teaming up with us, the turnout will be massive for sure; and you’ll sell more drinks, meaning empties will be plenty to collect.<br/><br/>
            So, to boost collection efficiency and give your fans an unforgettable recycling experience, we’ll bring over our intelligent RVMs.
          </>
        )}
      />
    <ImageText 
        title="Let’s keep enhancing the fan experience, together " 
        description={(
          <>
          We’ve rolled out the Red Carpet for ECOnsumers and availed the ECOCAN RVMs. You can as well sprinkle in a surprise package.<br/><br/>

        That we create a truly immersive and unforgettable ECO-Event
          </>
        )}
      />
      <FaqSection/>      
    </div>
    <div className="w-full bg-white">
        <Testimonials />
        <GreatMoments />
    </div>
    </>
  )
}

export default Events