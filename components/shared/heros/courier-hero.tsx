import React from "react";
import NavigationBar from "../navbar/navbar";
import { Button } from "@/components/ui/button";
import HeroForm from "../hero-form/hero-form";

export default function CourierHero() {
  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        firstButton={<Button variant="ghost">Support</Button>}
        className=" text-white backdrop-blur-none bg-transparent border-b-0"
        linkColor="text-white"
      />
      <div className="h-[83vh]">
        <div className="bg-[url('/assets/images/courier-bg.jpeg')] bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[65rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="flex flex-col gap-4 mt-60 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-5xl text-2xl text-center md:text-start font-semibold">
                  Make money today by{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    <span className="bg-gradient-to-r from-[#4AC63F] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text">
                      delivering orders
                    </span>{" "}
                    and making pick-ups
                  </span>
                </h1>
              </div>
              <div className="space-y-8">
                <p className="">Sign up today to start earning.</p>
              </div>
            </div>
            <div className="h-[70vh] md:w-1/2 relative overflow-hidden lg:overflow-visible md:mt-14 z-40 items-center flex">
              <HeroForm title="1, 2, 3, Go!!" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
