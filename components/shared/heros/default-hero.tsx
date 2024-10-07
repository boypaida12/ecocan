"use client";

import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import NavigationBar from "../navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import JoinEcommunity from "@/components/contents/consumer/components/join-ecommunity";
import PrimaryButton from "../primary-btn";

export default function DefaultHero() {
  const isScrolled = useScroll();

  return (
    <>
      <NavigationBar
        className={
          isScrolled ? "bg-white" : "bg-white backdrop-blur-xl"
        }
        logoSrc="/assets/images/ecocan-logo.svg"
        firstButtonClassName="rounded-full h-7 xl:h-8 bg-transparent text-primary hover:bg-transparent hover:text-primary"
        secondButtonClassName={`rounded-full h-7 xl:h-8 bg-transparent hover:bg-transparent text-primary border border-primary hover:text-primary`}
      />
      <div className="lg:h-[32.875rem] xl:h-[44rem] mt-[3.575rem]">
        <div className="bg-[url('/assets/images/consumer/hero-bg.jpeg')] bg-center h-[27rem] relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-70 after:z-10">
          <div className="xl:max-w-[69.375rem] flex flex-col md:flex md:flex-row mx-auto lg:gap-12">
            <div className="flex flex-col gap-4 md:w-1/2 px-4 xl:px-0 text-white z-50 items-center justify-center mt-4 xl:mt-16 space-y-4">
              <div>
                <h1 className="lg:text-6xl text-2xl text-center md:text-start font-semibold">
                  Re-imagining{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] text-transparent bg-clip-text">
                    Sustainability
                  </span>
                </h1>
              </div>
              <div className="text-sm lg:text-base space-y-12 xl:space-y-6">
                <p className="tracking-wide text-white text-center md:text-start">
                  At ECOCAN, sustainability goes beyond environmental
                  conservation, to nurturing healthy and thriving communities.
                </p>
                <p className="lg:text-white xl:text-accent">
                  Download EcocanApp to make money by recycling your empties,
                  avoid harmful fake drinks; or order your favourite drinks
                  online.{" "}
                </p>
                <PrimaryButton buttonIcon={<LucideDownload/>}/>
                <JoinEcommunity/>
              </div>
            </div>
            <div className="lg:h-[32rem] xl:h-[44rem] md:w-1/2 relative overflow-hidden lg:overflow-visible z-20">
              <Image
                src="/assets/images/consumer/consumer-hero-mobile.svg"
                className="absolute max-w-[46rem] xl:max-w-none lg:-left-[15.5rem] xl:-left-56 xl:top-5"
                alt="ecocan mobile app"
                width={900}
                height={100}
              />
            </div>
          </div>
          <div className="pt-6 xl:pt-0">
            <h2 className="text-accent text-center text-[2rem] font-medium">
              The ECO-friendly COmmunity
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
