import React from 'react'
import BrandProtectionHero from '@/components/shared/heros/brand-protection-hero'
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import AccordionComponent from './components.tsx/accordion';





const ConsumerEngagement= () => {
const description = (
    <p className="max-w-[56.125rem] font-inter text-[1.25rem] font-normal leading-[1.512rem] tracking-[-0.02em] text-left text-[#23262FCC]">
    With ECOCAN’s intelligent solutions, you can now directly engage with your customers through personalized, incentivized, and gamified campaigns— Most affordably. Then Sit back and watch as this targeted engagement boosts your sales and transforms your customer interactions into tangible results.
    <br/><br/>
    Your beverage packaging isn’t just a one-time consumable. With our help, you can transform it into a powerful consumer engagement platform, and marketing billboard.
    </p>
    );


  return (
    <div>
        <BrandProtectionHero title='ConsumerEngagement' description={description} />
        <AccordionComponent />
    </div>
    
  )
}

export default ConsumerEngagement;