import React from 'react'
import ItemList from './itemList';
import { Circle } from 'lucide-react';

const steps = [
    {
      id: 1,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Advanced performance anlytics</p>,
    },
    {
      id: 2,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Customer loyalty program</p>,
    },
    {
      id: 3,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Advanced targeting & remarketing</p>,
    },
    {
        id: 4,
        description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Anti-counterfeiting monitoring</p>,
    },
    {
        id: 5,
        description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Tracking & Tracing through the supply chain</p>,
    },
    {
        id: 6,
        description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Product authentication to gain trust and protect customers</p>,
    },
    {
        id: 7,
        description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Satisfying customer experience</p>,
    },

  ];

const NonSerializedList = () => {
  return (
    <div>
        <ItemList items={steps} bullet={<Circle color='#4AC63F' className="fill-[#4AC63F]" />} />
    </div>
  )
}

export default NonSerializedList