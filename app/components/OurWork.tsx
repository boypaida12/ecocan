import React from 'react';
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface OurWorkCardProps {
  header: React.ReactNode;
  icon: string;
  description: string;
}
const cardData = [
  {
    icon: "/assets/icons/check-mark-green.svg",
    header: <>Environmental<br />conservation</>,
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae quis feugiat metus cras. Ipsum purus est odio vivamus amet id euismod. Nibh diam nam molestie a in adipiscing varius arcu. Faucibus nisi adipiscing bibendum in turpis.",
  },
  {
    icon: "/assets/icons/right-arrow.svg",
    header: <>Brand<br />Protection</>,
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae quis feugiat metus cras. Ipsum purus est odio vivamus amet id euismod. Nibh diam nam molestie a in adipiscing varius arcu. Faucibus nisi adipiscing bibendum in turpis.",
  },
  {
    icon: "/assets/icons/check-mark-green.svg",
    header: <>Consumer<br />Engagement</>,
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae quis feugiat metus cras. Ipsum purus est odio vivamus amet id euismod. Nibh diam nam molestie a in adipiscing varius arcu. Faucibus nisi adipiscing bibendum in turpis.",
  }
]
const OurWorkCard: React.FC<OurWorkCardProps> = ({ icon, header, description }) => {
  return (
    <Card className="w-[300px] p-6 border-0 rounded-xl max-h-[229px] md:w-[212px] md:max-h-[160px] md:p-[16.83px] md:pb-[9.67px] lg:w-[300px] lg:max-h-[229px] lg:p-6 ">
      <Image src={icon} className='p-0 m-0 drop-shadow-2xl shadow-[#3232CB] w-[40px] h-[40px] md:w-[28.6px] md:h-[28.6px] md:w-[40px] lg:h-[40px] lg:w-[40px]' width={40} height={40} alt={header}/>
      <CardHeader className='p-0 m-0 mt-4 mb-4 md:my-[11.22px] lg:my-4'>
          <CardTitle className='p-0 m-0 text-2xl leading-[29.05px] font-bold md:text-base md:leading-[19.36px] lg:text-2xl ld:leading-[29.05px]'>{header}</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
          <CardDescription className='text-sm leading-4 text-[rgba(0, 0, 0, 0.5)] max-h-[51px] text-ellipsis overflow-hidden md:text-xs lg:text-sm lg:leading-[16.94px]'>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const OurWork = () => {
  return (
    <div className='bg-[#FAFAFA] w-screen px-0 py-[50px] flex flex-col items-center'>
      <p className='justify-self-center text-[32px] font-bold leading-[33.29px] mb-12'>Our Work</p>
      <div className='w-full flex flex-col gap-12 items-center md:flex-row md:justify-center'>
        {cardData.map((card, index) => (
          <OurWorkCard 
            key={index}
            icon={card.icon} 
            header={card.header} 
            description={card.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;