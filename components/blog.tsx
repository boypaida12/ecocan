import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Blog() {
  return (
    <div className="max-w-[1040px] mx-auto px-4">
      <div className="text-center">
        <h1 className="font-bold text-[72px] leading-[80px] bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text mb-5">
          Blog
        </h1>
        <p className="font-normal text-[16px] leading-[24px] text-[#777E90]">
          Sustainability News
        </p>
      </div>

      <div className="lg:flex mt-8 h-[516px] overflow-hidden rounded-3xl">
        <div className="lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
          <Image
            src="/assets/images/blog.jpeg"
            alt="blog"
            className=""
            width={560}
            height={526}
          />
        </div>
        <div className="lg:w-1/2 lg:flex justify-center items-center">
          <div className="md:w-[368px] md:h-[320px] flex flex-col gap-2 md:gap-5 p-4 md:p-0">
            <div className="bg-[#23262F] text-white text-[14px] font-bold rounded-full pt-1 pb-1 text-center w-[134px] h-[28px]">
              <p>Tips and tricks</p>
            </div>
            <h2 className="text-[#141416] font-bold text-xl lg:text-5xl leading-8 lg:leading-[48px]">
              Convergent and divergent plate margins
            </h2>
            <p className="text-[#777E90] text-[14px] md:text-[16px] font-normal leading-6">
              Track your workouts, get better results, and be the best version
              of you. Less thinking
            </p>
            <Button className="bg-[#4AC63F] text-white leading-4 font-bold rounded-full flex items-center w-[134px] h-[44px]">
              Read more
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
