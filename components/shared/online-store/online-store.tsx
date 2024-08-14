import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OnlineStoreProps {
  heading?: string;
  description?: string;
  buttonText?: React.ReactNode;
  imageSrc?: string;
}

export default function OnlineStore({
  heading = "Online Store",
  description = "Create a safer world, full of opportunities, with just a click of a button! Did you know that 20% of all products sold on the market today are fake?",
  buttonText = "Download App",
  imageSrc = "/assets/images/online-store.svg"
}: OnlineStoreProps) {
  return (
    <div className="max-w-[77.5rem] mx-auto flex flex-col md:flex-row gap-12 py-[6.25rem]">
      <div className="md:flex-grow-0 self-center space-y-4">
        <h2 className="text-[2rem] font-bold text-[#23262FCC]">{heading}</h2>
        <p className="text-[#23262FCC]">{description}</p>
        <Button asChild className="rounded-full h-12 px-8">
          <Link href="/">{buttonText}</Link>
        </Button>
      </div>
      <div className="md:w-1/2">
          <div className="overflow-hidden w-[32.375rem] bg-primary rounded-xl">
            <Image src={imageSrc} alt={imageSrc} width={100} height={100} className="w-full h-full"/>
          </div>
      </div>
    </div>
  );
}
