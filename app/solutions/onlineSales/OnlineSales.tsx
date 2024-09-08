import React from 'react'
import BrandProtectionHero from '@/components/shared/heros/brand-protection-hero'
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import DoubleCards from './components/doubleCards';
import DrinksList from './components/drinksList';
import Convinience from './components/convinience';



const OnlineSales= () => {
const description = (
    <p className="max-w-[56.125rem] font-inter text-[1.25rem] font-normal leading-[1.512rem] tracking-[-0.02em] text-left text-[#23262FCC]">
        ECOCAN Market is an online platform that conveniently connects ECOstations selling genuine eligible drinks, with ECOnsumers seeking authentic affordable drinks. With ECOuriers on-the-go, the products are delivered swiftly and sustainably. Wherever. Whenever!<br/><br/>  
        Or if ECOnsumers are up for some exercise, they can easily navigate on ECOCAN Map to their preferred ECO-station, to pick up their pre-ordered favourite drinks

    </p>
    );


  return (
    <div>
        <BrandProtectionHero title='Online Sales' description={description} />
        <DoubleCards/>
        <DrinksList/>
        <Convinience/>
    </div>
    
  )
}

export default OnlineSales;