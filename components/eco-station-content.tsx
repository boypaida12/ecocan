import React from 'react'
import TextWithCards from './shared/text-with-cards/text-with-cards'
import CustomCard from './shared/text-with-cards/custom-card'
import { LucideRecycle } from 'lucide-react'

export default function EcoStationContent() {
  return (
    <>
     <TextWithCards
        customCard={
          <CustomCard
            features={[
              {
                id: 1,
                name: "Avoid Fakes",
                description: "Custom description",
                icon: <LucideRecycle />,
              },
              {
                id: 2,
                name: "Custom Feature",
                description: "Custom description",
                icon: <LucideRecycle />,
              },
              {
                id: 3,
                name: "Custom Feature",
                description: "Custom description",
                icon: <LucideRecycle />,
              },
              
            ]}
          />
        }
      />
    </>
  )
}
