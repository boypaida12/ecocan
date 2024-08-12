import React from 'react'
import DefaultHero from './default-hero';

interface DynamicHero {
    dynamicHero?: React.ReactNode;
}

const HeroContent: React.FC<DynamicHero> = ({dynamicHero = <DefaultHero/>}) => {
  return (
    <>{dynamicHero}</>
  )
}

export default HeroContent