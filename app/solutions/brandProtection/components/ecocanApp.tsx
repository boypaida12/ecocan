import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import React from 'react'
import Image from "next/image";
import TextWithComponent from '@/components/contents/consumer/components/buy-online';
import HyperLink from '@/components/shared/hyperlink/hyperlink';
import CheckList from '@/components/contents/consumer/components/checklist';


const steps = [
    {
      id: 1,
      description: "The built-in, machine learning Eco-scanner ensures reliable, fast, and convenient product authentication in under 3 seconds.",
    },
    {
      id: 2,
      description: "And the integrated AI-powered verification technology ensures that only valid ECOCAN security codes are decoded.",
    },
    {
      id: 3,
      description: "After product authentication, the verification process can be leveraged to engage ECOnsumers with personalized marketing campaigns. ",
    },
    {
      id: 4,
      description: "Through EcocanApp’s customizable product carousel, and traceability passports, ECOnsumers enjoy a unique and interactive brand ",
    }
  ];
const EcocanApp = () => {
  return (
    <div className='mt-20 flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0' >
         <ImageAndItem
        className='md:flex-row-reverse'
        image={
          <div className="relative h-[43.5rem] w-[28rem]">
            <Image
              src="/assets/images/ecocan-app.svg"
              width={1000}
              height={1000}
              className="w-full h-full absolute -left-[5rem]"
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title="EcocanApp"
            description={
              <>
                <span>
                EcocanApp is our  proprietary, free to use, mobile application, enabling ECOnsumers to easily and reliably authenticate genuine products. By simply scanning the ECOCAN Security codes printed on eligible products’ packaging, to ensure their authenticity 
                </span>
              </>
            }
            component={<CheckList items={steps}/>}
          />
        }
        alignment='self-start'
      />
    </div>
  )
}

export default EcocanApp