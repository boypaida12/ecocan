import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Image from "next/image";
import React from "react";

export default function SellMore() {
  return (
    <div className="bg-[url('/assets/images/sell-more.jpeg')] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50 rounded-2xl text-center h-[27rem] flex flex-col justify-center">
      <div className="w-[39rem] mx-auto text-white z-20">
          <h2 className="text-[2rem] font-semibold">Sell more online</h2>
          <p className="my-4 text-xl font-extralight">ECOCAN Market connects passionate entrepreneurs like yourself, with ECO-friendly ECOnsumers, for sustainable commerce. </p>
          <HyperLink link="Click here to Learn more!" href="/" className="text-transparent bg-clip-text bg-gradient-to-tr from-[#228B22] via-[#FFDD4C] to-[#4AC63F] text-xl italic"/>
      </div>
      <Image src="/assets/images/sell-more-graphic.svg" alt="sell-more" width={100} height={100} className="w-full h-full absolute top-0 left-[16rem]"/>
    </div>
  );
}
