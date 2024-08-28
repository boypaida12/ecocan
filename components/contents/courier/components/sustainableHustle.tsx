import React from 'react';
import CtaCard from '@/components/shared/cta-card/cta-card';
import TextWithComponent from '../../consumer/components/buy-online';
import Image from 'next/image';
import { LucideDownload } from 'lucide-react';
import PrimaryButton from "@/components/shared/primary-btn";


const CtaCardComponent: React.FC = () => {
  return (
    <CtaCard
      className="bg-[url('/assets/images/courier/sustainable-hustle.jpeg')] bg-cover bg-no-repeat relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50 h-[453px] items-center"
      item={
        <TextWithComponent
          title={
            <p className="text-white text-5xl">
              Sustainable hustle
            </p>
          }
          description={
            <span className="text-white">
              While earning more                                  
            </span>
          }
          component={
            <div className="flex gap-4">
              <PrimaryButton
                buttonText="Join the ECOmmunity"
              />
            </div>
          }
        />
      }
    />
  );
};

export default CtaCardComponent;