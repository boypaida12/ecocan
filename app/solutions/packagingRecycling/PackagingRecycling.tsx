import React from 'react'
import BrandProtectionHero from '@/components/shared/heros/brand-protection-hero'
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import BigImpact from './components/bigImpact';
import HowItWorks from './components/howItWorks';
import Cooperation from './components/cooperation';




const PackagingRecycling= () => {
const description = (
    <p className="max-w-[56.125rem] font-inter text-[1.25rem] font-normal leading-[1.512rem] tracking-[-0.02em] text-left text-[#23262FCC]">
    ECOCAN D.R.S is a circular economy platform, which streamlines the extensive collection and recycling of <HyperLink link="genuine eligible empties" href="/" />. And ensures participants make money for taking part
    <br/><br/>
    This is achieved by creating a marketplace for used empties, by conveniently connecting ECO-Producers and ECO-Recyclers seeking to ‘buy’ empties for reuse or recycling, with ECOnsumers who have the empties but lack access to the market
    </p>
    );


  return (
    <div>
        <BrandProtectionHero title='Packaging Recycling' description={description} />
        <HowItWorks/>
        <Cooperation/>
        <BigImpact/>
    </div>
    
  )
}

export default PackagingRecycling;