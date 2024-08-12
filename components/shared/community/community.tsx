import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JoinCommunity() {
  return (
    <div className="flex max-w-[65rem] mx-auto py-[6.25rem] items-center">
      <div className="space-y-8">
        <h2 className="text-[2rem] text-[#23262FCC] font-semibold">Tap Tap Tap, and Wallah!</h2>
        <p>
          Join the Ecommunity and create a safer world, full of opportunities,
          with just a click of a button
        </p>
        <div className="mb-4 border border-[#E6E8EC] rounded-full flex items-center w-[22rem]">
          <Input
            placeholder="Enter your email"
            className="text-[#777E90] bg-transparent border-none rounded-full focus:outline-none focus:border-none focus:ring-0"
          />
          <Link href="/">
              <Image
                src="/assets/icons/right-arrow.svg"
                className="m-2"
                alt="right chevron arrow"
                width={32}
                height={32}
              />
          </Link>
        </div>
      </div>
      <div>
        <div className="w-[37.5rem] overflow-hidden">
            <Image src="/assets/images/four-pics.svg" alt="ecocan community" width={100} height={100} className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
}
