"use client"
import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";

export default function ProducerHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        className={
          isScrolled
            ? "bg-[#4ac63f]"
            : "bg-transparent backdrop-blur-xl text-white border-b-0 "
        }
        linkColor="text-white"
      />
      <div className="lg:h-[36rem] xl:h-[47.575rem]">
        <div className="bg-[url('/assets/images/producer/producer-hero.jpeg')] lg:h-[32rem] xl:h-[45rem] lg:bg-contain xl:bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-60 after:z-10">
          <div className="xl:max-w-[77.5rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="lg:mt-28 xl:mt-60 px-4 xl:px-0 text-white z-50 mx-auto">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-7xl text-center font-semibold text-white">
                Maximize Earnings,<br/>
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                  Minimize Pollution
                  </span>
                </h1>
              </div>
              <div className="tracking-wide text-sm lg:text-base xl:text-lg font-light text-white my-10 space-y-4">
                <p className="text-center">
                With ECOCAN, it&apos;s not business as usual. But ECO-smart business.
                </p>
                <p className="text-center lg:w-4/5 mx-auto">Become a catalyst for positive change by leveraging ECOCAN&apos;s suite of advanced technology to boost your sales, cut production costs, protect your customers from counterfeits, and most importantly, protect our planet from litter. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
