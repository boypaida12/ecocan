import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { LucideArrowRight, LucideDownload } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="lg:min-h-[87vh] pt-[3.25rem] hidden md:block">
        <div className="bg-[url('/assets/images/hero-bg.jpeg')] bg-center h-[27rem] relative after:absolute after:inset-0 after:content-[''] after:bg-black/70 after:opacity-50 after:z-10">
          <div className="xl:max-w-[1040px] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="flex flex-col gap-4 mt-52 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-7xl text-5xl text-center md:text-start font-semibold">
                  Re-imagining{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    Sustainability
                  </span>
                </h1>
                <p className="tracking-wide text-sm lg:text-base text-center md:text-start lg:mt-2">
                  At ECOCAN, sustainability encompasses more than just
                  environmental preservation. It transcends to healthy and
                  thriving communities.
                </p>
              </div>
              <p className="text-accent text-sm lg:text-base">
                Download EcocanApp to avoid harmful fake drinks, make money by
                recycling your empties; or order your favourite drinks online.{" "}
              </p>
              <div className="flex gap-4">
                <Button className="before:ease rounded-full relative h-[3.25rem] mx-auto md:mx-0 w-fit py-3 px-8 overflow-hidden text-white transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-56">
                  <span className="relative z-10 text-lg">Download App</span>
                  <LucideDownload className="ml-2" />
                </Button>
                <Button className="rounded-full h-[3.25rem] group bg-white border hover:bg-white border-primary mx-auto md:mx-0 w-fit py-3 px-8 text-primary transition-all">
                  <span className="relative z-10 text-lg">Join Community</span>
                  <LucideArrowRight className="ml-2 transition-all duration-500 group-hover:translate-x-4" />
                </Button>
              </div>
            </div>
            <div className="h-[70vh] md:w-1/2 relative overflow-hidden lg:overflow-visible pt-8 md:pt-14 z-50">
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
      <div className="block md:hidden min-h-screen">
        <div className=" min-h-[65vh] bg-[url('/assets/images/hero-bg.jpeg')] bg-cover bg-center flex relative after:absolute after:inset-0 after:content-[''] after:bg-black/70 after:opacity-50 after:z-10">
          <div className="text-white self-center z-40">
            <h1 className="lg:text-7xl text-5xl text-center md:text-start font-semibold leading-[4rem] mb-4">
              Re-imagining{" "}
              <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                Sustainability
              </span>
            </h1>
            <p className="tracking-wide w-[22.375rem] mx-auto font-semibold text-base text-center md:text-start lg:mt-2">
              At ECOCAN, sustainability encompasses more than just environmental
              preservation. It transcends to healthy and thriving communities.
            </p>
          </div>
        </div>
        <div>
          <p className="text-accent px-4 py-6">
            Download EcocanApp to avoid harmful fake drinks, make money by
            recycling your empties; or order your favourite drinks online.{" "}
          </p>
          <div className="flex flex-col gap-4">
            <Button className="before:ease rounded-full relative h-[3.25rem] mx-4 md:mx-0 lg:w-fit py-3 px-8 overflow-hidden text-white transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-56">
              <span className="relative z-10 text-lg">Download App</span>
              <LucideDownload className="ml-2" />
            </Button>
            <Button className="rounded-full h-[3.25rem] group bg-white border hover:bg-white border-primary mx-4 lg:w-fit md:mx-0 w- py-3 text-primary transition-all">
              <span className="relative z-10 text-lg">Join Community</span>
              <LucideArrowRight className="ml-2 transition-all duration-500 group-hover:translate-x-4" />
            </Button>
          </div>
        </div>
        <div className="h-[70vh] md:w-1/2 relative overflow-hidden lg:overflow-visible pt-8 md:pt-14 z-10">
          <Image
            src="/assets/images/hero-mobile.svg"
            className=""
            alt="ecocan mobile app"
            width={400}
            height={472}
          />
        </div>
      </div>
    </>
  );
}
