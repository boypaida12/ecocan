import React from 'react'
import CustomCard from './custom-card'

interface TextWithCardsProps {
    title?: string,
    description?: string,
    customCard?: React.ReactNode
}

export default function TextWithCards({title = "Get Started", description = "Whether you want to keep your environment clean, earn extra cash, or to safeguard your health from fake drinks. With our free-to-use EcocanApp, it's all just a click away!", customCard = <CustomCard/>}:TextWithCardsProps) {
  return (
    <div className='max-w-[77.5rem] mx-auto py-[6.25rem]'>
        <div className="text-accent w-[72%]">
            <h2 className='font-bold text-[2.5rem]'>{title}</h2>
            <p>{description}</p>
        </div>
        {customCard}
    </div>
  )
}
