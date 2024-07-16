import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="max-w-[1040px] lg:min-h-[720px] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
      <div className="flex flex-col gap-4 lg:gap-8 self-center lg:w-1/2 px-4 xl:px-0">
        <h1 className="lg:text-7xl text-5xl text-center md:text-start font-semibold">
          Re-imagining{" "}
          <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
            Sustainability
          </span>
        </h1>
        <p className="tracking-wide text-sm md:text-base text-center md:text-start">
          At ECOCAN, sustainability encompasses more than just environmental
          preservation. It transcends to healthy and thriving communities.
        </p>
        <div className="flex md:gap-6">
          <div className="w-2/5 mx-auto md:mx-0">
            <Image
              src="/assets/images/google-play.png"
              className="cursor-pointer hover:shadow-lg w-full h-full transition-all ease-in-out"
              alt="download ecocan from playstore"
              width={221.05}
              height={65.5}
            />
          </div>
          <div className="w-2/5 mx-auto md:mx-0">
            <Image
              src="/assets/images/apple-store.png"
              className="cursor-pointer hover:shadow-lg w-full h-full transition-all ease-in-out"
              alt="download ecocan from playstore"
              width={195.94}
              height={65.5}
            />
          </div>
        </div>
      </div>
      <div className="min-h-[55vh] -order-1 md:order-2 md:w-3/4 lg:w-1/2 bg-[url('/assets/images/hero-img.png')] bg-contain bg-no-repeat bg-[center_left_4rem] lg:mt-0 lg:bg-[center_top_4rem]"></div>
    </div>
  );
}
