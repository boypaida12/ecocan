import React from 'react'
import BrandProtectionHero from '@/components/shared/heros/brand-protection-hero'
import TwoCards from './components/twoCards';
import WasteLitter from './components/wasteLitter';
import WasteLitterCard from './components/wasteLitterCard';
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import TNT from './components/tnt';


const BrandPosition = () => {
const description = (
    <p className="max-w-[56.125rem] font-inter text-[1.25rem] font-normal leading-[1.512rem] tracking-[-0.02em] text-left text-[#23262FCC]">
        30% of all beverages sold globally is illicit. In Africa it's worse - 2 out of 5 drinks sold are fake! Consuming these harmful products leads to loss of life, harming of health, depriving value for money, and hurts legitimate trade. Good news? We can now stop this, with EcocanApp.
    </p>
    );
  return (
    <div>
        <BrandProtectionHero title='Brand Protection' description={description} />
        <TwoCards />
        <div className='mt-20 flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0' >
          <WasteLitter
          image='/assets/images/brandPosition/wasteLitter.png'
          title=''
          description = {<WasteLitterCard />}
          />
          <div className='mt-[5.5rem]'>
          <h2 className="font-inter text-[2rem] font-semibold leading-[3.5rem] tracking-[-0.02em] text-left text-[#23262FCC] mb-[1.5rem]">
            Much needed intervention
          </h2>
          <p className="font-inter text-[1.25rem] font-normal leading-[1.5125rem] tracking-[-0.02em] text-left text-[#23262FCC] mb-[1rem]">
            ECOCAN offers a suite of advanced technology solutions, to empower the ECOmmunity to effectively combat harmful counterfeit trade. These intelligent solutions provide high security, 
            yet most affordable anti-counterfeit protection</p>
            <ul className="list-disc pl-5 font-inter text-[1.25rem] font-normal leading-[1.5125rem] tracking-[-0.02em] text-left text-[#23262FCC]">
              <li className='py-2'>Use <HyperLink link="EcocanApp" href="/" /> to reliably authenticate genuine drinks carrying <HyperLink link="ECOCAN security codes" href="/" /></li>
              <li className='py-2'>After enjoying your drink, return empties to ECO-Stations for recycling, via the <HyperLink link="ECOCAN DRS" href="/" /></li>
              <li className='py-2'>The ECOCAN TnT enables real-time monitoring of counterfeiting attempts</li>
            </ul>
          </div>
          <TNT />
        </div>

    </div>
    
  )
}

export default BrandPosition