import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { LucideDownload } from "lucide-react";

export default function Hero() {
  return (
    <div className="max-w-[1040px] pt-24 lg:min-h-[720px] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
      <div className="flex flex-col gap-4 lg:gap-8 self-center md:w-1/2 px-4 xl:px-0">
        <h1 className="lg:text-7xl text-5xl text-center md:text-start font-semibold">
          Re-imagining{" "}
          <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
            Sustainability
          </span>
        </h1>
        <p className="tracking-wide text-sm lg:text-base text-center md:text-start">
          At ECOCAN, sustainability encompasses more than just environmental
          preservation. It transcends to healthy and thriving communities.
        </p>
        <Button className="before:ease rounded-full relative h-[52px] mx-auto md:mx-0 w-fit py-3 px-8 overflow-hidden text-white transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-56">
          <span className="relative z-10 text-lg">Download App</span>
          <LucideDownload className="ml-2"/>
        </Button>
      </div>
      <div className="h-[500px] md:h-[70vh] md:w-1/2 relative overflow-hidden lg:overflow-visible pt-8 md:pt-14 -z-10">
        <Image
          src="/assets/images/hero-img.png"
          className=" absolute left-[18.8vw] md:top-28 md:left-12 lg:left-0 lg:top-8 xl:left-[6vw]"
          alt="ecocan mobile app"
          width={1000}
          height={2000}
        />
      </div>
    </div>
  );
}
