import React from 'react'
import CustomCard from './custom-card'

interface TextWithCardsProps {
    title?: string,
    description?: string,
    customCard?: React.ReactNode
}

export default function TextWithCards({title = "Get Started", description = "Whether you want to keep your environment clean or want to earn extra money more frequently, with ECOCAN you can strike a balance, with just a click of a button", customCard = <CustomCard/>}:TextWithCardsProps) {
  return (
    <div className='max-w-[65rem] mx-auto py-[6.25rem]'>
        <div className="text-accent w-[72%]">
            <h2 className='font-bold text-[2.5rem]'>{title}</h2>
            <p>{description}</p>
        </div>
        {customCard}
    </div>
  )
}
