import React from 'react'
import { LucideEye, LucideHandCoins, LucideRecycle } from 'lucide-react'
import TextWithCards from '../shared/text-with-cards/text-with-cards';
import CustomCard from '../shared/text-with-cards/custom-card';
import ImageWithText from '../shared/image-with-text/image-with-text';

const iconSize = 18;

export default function EcoStationContent() {
  return (
    <>
     <TextWithCards
        title="Why become an Eco-station?"
        description="Improve your sales and gain access to new markets."
        customCard={
          <CustomCard
            features={[
              {
                id: 1,
                name: "Improve visibility",
                description: "Customers will easily find your store on ECOCAN map",
                icon: <LucideEye size={iconSize}/>,
              },
              {
                id: 2,
                name: "Earn commission",
                description: "For every eligible used bottle you accept for recycling, ECOCAN will pay you a commission.",
                icon: <LucideHandCoins size={iconSize}/>,
              },
              {
                id: 3,
                name: "Improve your sustainability",
                description: "Make your fair contribution to protecting our planet from packaging litter, associated carbon emissions, and fighting counterfeit trade. All while you make more money",
                icon: <LucideRecycle size={iconSize}/>,
              },
              
            ]}
          />
        }
      />
    </>
  )
}
