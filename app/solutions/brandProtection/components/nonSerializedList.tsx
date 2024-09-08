import React from 'react'
import ItemList from './itemList';
import { Circle } from 'lucide-react';

const steps = [
    {
      id: 1,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Limited performance analytics</p>,
    },
    {
      id: 2,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">No loyalty program</p>,
    },
    {
      id: 3,
      description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">No supply chain tracking capability</p>,
    },
    {
        id: 4,
        description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">Limited targeting & remarketing</p>,
    },
    {
        id: 5,
        description: <p className="font-inter text-[1rem] font-normal leading-[1.5rem] text-left">No authentication loses customer trust</p>,
    },

  ];

const NonSerializedList = () => {
  return (
    <div>
        <ItemList items={steps} bullet={<Circle color='#D43736' className="fill-[#D43736]" />} />
    </div>
  )
}

export default NonSerializedList