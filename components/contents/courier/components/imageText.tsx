import React from 'react'
import { Card } from '@/components/ui/card'
import { ItemList } from '../courier-content';
import { Button } from '@/components/ui/button';
import './image.css';

const ImageText: React.FC = () => {
    const howToData = [
        {
          id: 1,
          title: "Receive your money instantly!",
          description: (
            <p className="text-base text-white/75">We're busiest with pick-ups between 10:00 AM and 14:00 PM, when other ride-hailing and delivery services go quiet. So, boost your earnings by going live during this time! </p>
          ),
        },
        {
          id: 2,
          title: "Earn more with tips",
          description: (
            <p className="text-base text-white/75">Be professional and nice, it doesn’t cost a thing. But if you are not, it might cost you everything! </p>
          ),
        },
        {
          id: 3,
          title: "Deliver efficiently",
          description: (
            <p className="text-base text-white/75">Both are ECO-friendly, save on energy, and double as workouts—no gym membership needed to stay in shape. For Crawling... well…, if you want to stand out, why not?</p>
          ),
        },
        {
          id: 4,
          title: "Watch out for ECO-promotions",
          description: (
            <p className="text-base text-white/75"> In recognition of your ECO-friendly hustle. So, keep an eye out for those sweet rewards! </p>
          ),
        }
      ]
  return (
    <div className='w-full flex justify-center py-[6.25rem]'>
        <div className='text-white w-[57.125rem] rounded-3xl px-[3.688rem] py-[4.469rem] relative overlay'
            style={{ 
              backgroundImage: 'url("/assets/images/courier/money.png")', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat' 
            }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className='font-semibold text-[2rem]'>While you make more money, we also make a bit</h2>
            <p className='text-base text-white/80 mb-[4.5rem]'>The lowest commission ever! That we keep growing together We’ll load you up with as many trips as you can handle, and we only get a tiny 7% cut of the pay</p>

            {
                howToData.map((data) => (
                    <ItemList key={data.id} title={data.title} description={data.description} id={data.id} />
                ))
            }
            {/* <div className='w-full flex justify-center mt-24'>
              <div className='w-[56.875rem] border-2 border-dashed rounded-3xl border-[#FAFAFA]/40 flex flex-col items-center space-y-3 py-3'>
                <h2 className='text-5xl font-bold text-white'>Sustainable hustle</h2>
                <p className='text-xl text-white'>While earning more</p>
                <Button className="before:ease rounded-full relative xl:h-[3.25rem] mx-auto md:mx-0 w-fit xl:py-3 xl:px-8 overflow-hidden text-white transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-56">
                  <span className="relative z-10 text-lg">Join ECOmmunity</span>
                </Button>
              </div>
            </div> */}
            </div>
        </div>

    </div>

  )
}

export default ImageText