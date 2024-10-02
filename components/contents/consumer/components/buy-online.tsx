import HyperLink from '@/components/shared/hyperlink/hyperlink'
import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import PrimaryButton from '@/components/shared/primary-btn'
import React from 'react'
import TextWithComponent from './text-with-component'
import Image from 'next/image'

export default function BuyOnline() {
  return (
    <div className="bg-white">
        <div className="max-w-[69.375rem] mx-auto pt-24 pb-12 px-4 xl:px-0">
            <ImageAndItem
              className="gap-12 items-center"
              image={
                <Image
                  src="/assets/images/consumer/buy-online-consumer.svg"
                  alt="Online store"
                  className="object-cover rounded-3xl bg-primary"
                  priority
                  width={500}
                  height={100}
                />
              }
              item={
                <div className="w-4/5">
                  <TextWithComponent
                    title="Buy Online"
                    description={
                      <p>
                        Discover new <HyperLink link="ECO-products" href="/" /> on
                        ECOCAN market, and place your order with just a few clicks.
                        After consumption, conveniently request for empties pick up
                        from your door, for recycling
                      </p>
                    }
                    component={<PrimaryButton buttonText="Learn more" />}
                  />
                </div>
              }
            />
          </div>
    </div>
  )
}
