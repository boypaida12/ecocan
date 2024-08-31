import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import React from 'react'
import Image from "next/image";
import TextWithComponent from '../../consumer/components/buy-online';

interface ImageTextProps {
    className?: string;
    title: string;
    description: React.ReactNode;
  }
  
  const ImageText: React.FC<ImageTextProps> = ({ className, title, description }) => {
    return (
      <ImageAndItem
        className={`${className} gap-12`}
        image={
          <Image
            src="/assets/images/online-store.svg"
            alt="Online store"
            className="object-cover rounded-3xl bg-primary"
            priority
            width={500}
            height={100}
          />
        }
        item={
          <TextWithComponent
            title={title}
            description={
              <p className='max-w-[22.25rem]'>
                {description}
              </p>
            }
          />
        }
      />
    );
  };
  
  export default ImageText;