import React from "react";
import NavigationBar from "../navbar/navbar";
import { Button } from "@/components/ui/button";
import HeroForm from "../hero-form/hero-form";
import Link from "next/link";

export default function CourierHero() {
  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        className=" text-white backdrop-blur-none bg-transparent border-b-0"
        linkColor="text-white"
      />
      <div className="lg:h-[36rem] xl:h-[47.125rem]">
        <div className="bg-[url('/assets/images/courier-bg.jpeg')] lg:h-[32rem] xl:h-[42rem] lg:bg-contain xl:bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-70 after:z-10">
          <div className="xl:max-w-[65rem] flex flex-col md:flex md:flex-row mx-auto lg:gap-12 lg:pt-[3.125rem] xl:pt-0">
            <div className="flex flex-col gap-4 lg:mt-28 xl:mt-60 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-7xl text-center md:text-start font-semibold">
                  Every day is
                  <br />
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    Payday!
                  </span>
                </h1>
              </div>
              <div className="space-y-8 text-sm lg:text-base xl:text-lg">
                <p className="font-light">
                  Make deliveries and pick-ups, and get <br /> paid twice! Can
                  it really get better than this?
                </p>
              </div>
            </div>
            <div className="lg:h-40 xl:h-[40rem] xl:w-5/12 ms-auto relative overflow-hidden lg:overflow-visible z-40 items-center flex">
              <HeroForm title="Join the hustle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
