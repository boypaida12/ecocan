"use client";

import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import NavigationBar from "../navbar/navbar";
import { useScroll } from "@/lib/useScroll";

export default function DefaultHero() {
  const isScrolled = useScroll();

  return (
    <>
      <NavigationBar
        className={
          isScrolled ? "bg-[#4ac63f]" : "bg-transparent backdrop-blur-xl"
        }
        logoSrc="/assets/images/ecocan-logo.svg"
        firstButtonClassName="rounded-full h-7 xl:h-8 bg-transparent text-primary hover:bg-transparent hover:text-primary"
        secondButtonClassName={`rounded-full h-7 xl:h-8 ${
          isScrolled
            ? "bg-[#FFDD4E] text-[#383A35] hover:bg-[#FFDD4E] hover:text-[#383A35]"
            : "bg-transparent hover:bg-transparent text-primary border border-primary hover:text-primary"
        }`}
      />
      <div className="lg:h-[32.875rem] xl:h-[44rem] mt-[3.575rem]">
        <div className="bg-[url('/assets/images/consumer/hero-bg.jpeg')] bg-center h-[27rem] relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-70 after:z-10">
          <div className="xl:max-w-[65rem] flex flex-col md:flex md:flex-row mx-auto lg:gap-12">
            <div className="flex flex-col gap-4 md:w-1/2 px-4 xl:px-0 text-white z-50 items-center justify-center mt-4 xl:mt-16 space-y-4">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-[4rem] text-center md:text-start font-semibold">
                  Re-imagining{" "}
                  <span className="bg-gradient-to-br from-[#228B22] via-[#4AC63FCF] to-[#A6A6A6] text-transparent bg-clip-text">
                    Sustainability
                  </span>
                </h1>
              </div>
              <div className="text-sm lg:text-base space-y-12">
                <p className="tracking-wide text-white text-center md:text-start">
                  At ECOCAN, sustainability goes beyond environmental
                  conservation, to nurturing healthy and thriving communities.
                </p>
                <p className="lg:text-white xl:text-accent">
                  Download EcocanApp to make money by recycling your empties,
                  avoid harmful fake drinks; or order your favourite drinks
                  online.{" "}
                </p>
                <Button className="before:ease rounded-full relative xl:h-[3.25rem] mx-auto md:mx-0 w-fit xl:py-3 xl:px-8 overflow-hidden text-white transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-56">
                  <span className="relative z-10 text-lg">Download App</span>
                  <LucideDownload className="ml-2" />
                </Button>
                <Button className="rounded-full bg-transparent border border-primary text-primary hover:bg-transparent xl:h-[3.25rem] xl:py-3 xl:px-8 ml-4">
                  <span className="relative z-10 text-lg">Join ECOmmunity</span>
                  <LucideArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="lg:h-[32rem] xl:h-[44rem] md:w-1/2 relative overflow-hidden lg:overflow-visible z-20">
              <Image
                src="/assets/images/consumer/hero-img.svg"
                className="absolute max-w-[35rem] xl:max-w-none h-auto lg:-left-20 xl:-left-0"
                alt="ecocan mobile app"
                width={700}
                height={900}
              />
            </div>
          </div>
          <h2 className="bg-gradient-to-t from-[#228B22] via-[#4AC63FCF] to-[#A6A6A6] text-transparent bg-clip-text text-center text-[2rem] font-medium">
            The ECO-friendly COmmunity
          </h2>
        </div>
      </div>
    </>
  );
}
