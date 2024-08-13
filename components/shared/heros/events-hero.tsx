import React from "react";
import NavigationBar from "../navbar/navbar";
import { Button } from "@/components/ui/button";
import HeroForm from "../hero-form/hero-form";
import { LucideDownload } from "lucide-react";

export default function EventsHero() {
  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        firstButton={<Button variant="ghost">Support</Button>}
        className=" text-white backdrop-blur-none bg-transparent border-b-0"
        linkColor="text-white"
      />
      <div className="h-[83vh]">
        <div className="bg-[url('/assets/images/events-hero-bg.jpeg')] bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-70 after:z-10">
          <div className="xl:max-w-[65rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="flex flex-col gap-4 mt-60 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-7xl text-5xl text-center md:text-start font-semibold">
                  Re-imagining{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    Sustainability
                  </span>
                </h1>
              </div>
              <div>
                <p className="tracking-wide text-sm lg:text-base text-white  text-center md:text-start my-10">
                  At ECOCAN, sustainability encompasses more than just
                  environmental preservation. It transcends to healthy and
                  thriving communities.
                </p>
                <Button className="before:ease rounded-full relative h-[3.25rem] mx-auto md:mx-0 w-fit py-3 px-8 overflow-hidden text-white transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-56">
                  <span className="relative z-10 text-lg">Download App</span>
                  <LucideDownload className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="h-[70vh] md:w-1/2 relative overflow-hidden lg:overflow-visible md:mt-14 z-40 items-center flex">
              <HeroForm title="Let's grow together" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
