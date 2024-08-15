import React from "react";
import NavigationBar from "../navbar/navbar";
import { Button } from "@/components/ui/button";
import HeroForm from "../hero-form/hero-form";
import Link from "next/link";

export default function EcoStationHero() {
  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        firstButton={<Button variant="ghost">Support</Button>}
        secondButton={<Button asChild className="rounded-full h-7 xl:h-8 bg-white text-black hover:bg-white hover:text-black">
          <Link href="/">Download App</Link>
        </Button>}
        className=" text-white backdrop-blur-none bg-transparent border-b-0"
        linkColor="text-white"
      />
      <div className="lg:h-[36rem] xl:h-[47.125rem]">
        <div className="bg-[url('/assets/images/eco-station-hero.jpeg')] lg:h-[32rem] xl:h-[42rem] lg:bg-contain xl:bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[77.5rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12 lg:pt-[3.125rem] xl:pt-0">
            <div className="flex flex-col gap-4 lg:mt-28 xl:mt-60 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-7xl text-center md:text-start font-semibold">
                  Side hustle,<br/> Without the
                  <br />
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    hustle
                  </span>
                </h1>
              </div>
              <div className="space-y-8 text-sm lg:text-base xl:text-lg">
                <p className="tracking-wide text-white  text-center md:text-start font-light">
                  List your shop as an ECO-station, and increase your sales,
                  earn extra income on the side, and enjoy unmatched visibility
                </p>
                <p className="font-light">Sign up today to grow your business.</p>
              </div>
            </div>
            <div className="lg:h-40 xl:h-[40rem] xl:w-5/12 ms-auto relative overflow-hidden lg:overflow-visible z-40 items-center flex">
              <HeroForm title="Let's grow together" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
