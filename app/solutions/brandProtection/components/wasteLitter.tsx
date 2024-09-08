import React from 'react'
import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import Image from "next/image";
import TextWithComponent from '../../../../components/contents/consumer/components/buy-online';

interface ImageTextProps {
    image:string;
    className?: string;
    title: string;
    description: React.ReactNode;
  }
  
  const WasteLitter: React.FC<ImageTextProps> = ({ image, className, title, description }) => {
    return (
      <ImageAndItem
        className={`${className} gap-12`}
        image={
          <Image
            src={image}
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
            description={description}

          />
        }
        alignment='self-start'
      />
    );
  };
  
  export default WasteLitter;