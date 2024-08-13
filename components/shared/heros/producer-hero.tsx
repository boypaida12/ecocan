import { Button } from "@/components/ui/button";
import { LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import NavigationBar from "../navbar/navbar";
import JoinCommunityButton from "../join-community-btn";

export default function ProducerHero() {
  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo.svg"
        firstButton={<Button variant="ghost">Support</Button>}
      />
      <div className="h-[83vh]">
        <div>
          <div className="xl:max-w-[65rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="flex flex-col gap-4 mt-60 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-7xl text-5xl text-center md:text-start font-semibold text-black">
                  Re-imagining{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    Sustainability
                  </span>
                </h1>
              </div>
              <div className=" gap-4">
                <p className="tracking-wide text-sm lg:text-base text-accent  text-center md:text-start my-10">
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
            <div className="h-[78vh] md:w-1/2 relative overflow-hidden lg:overflow-visible pt-8 md:pt-14 z-20">
              <Image
                src="/assets/images/hero-img.svg"
                className="absolute max-w-[35rem] xl:max-w-none h-auto -left-24"
                alt="ecocan mobile app"
                width={700}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
