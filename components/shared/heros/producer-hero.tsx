"use client";
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
        logoSrc={isScrolled ? "/assets/images/ecocan-logo.svg": "/assets/images/ecocan-logo-alt.svg"}
        className={
          isScrolled
            ? "bg-white"
            : "bg-transparent text-white border-b-0 "
        }
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      <div className="lg:h-[36rem] xl:h-[47.575rem]">
        <div className="bg-[url('/assets/images/producer/hero.svg')] lg:h-[36rem] xl:h-[48rem] lg:bg-cover lg:bg-[300px] relative after:absolute after:inset-0 after:content-[''] after:bg-black/40 after:opacity-60 after:z-10">
          <div className="xl:max-w-[69.375rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="lg:mt-28 xl:mt-60 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-6xl text-2xl text-left font-semibold text-white">
                  Maximize Earnings,
                  <br />
                  <span className="bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#A6A6A6] text-transparent bg-clip-text text-[3rem] text-left space-x-1">
                    <span className="text-[4.25rem] font-light">M</span>
                    <span className="text-[4.0625rem] font-light">i</span>
                    <span className="text-[3.9375rem] font-light">n</span>
                    <span className="text-[3.8125rem] font-light">i</span>
                    <span className="text-[3.6875rem] font-light">m</span>
                    <span className="text-[3.5625rem] font-light">i</span>
                    <span className="text-[3.4375rem] font-light">z</span>
                    <span className="text-[3.3125rem] font-light">e</span>
                    <span className="text-[3.1875rem] font-light"> </span>
                    <span className="text-[3.0625rem] font-light">P</span>
                    <span className="text-[2.9375rem] font-light">o</span>
                    <span className="text-[2.8125rem] font-light">l</span>
                    <span className="text-[2.6875rem] font-light">l</span>
                    <span className="text-[2.5625rem] font-light">u</span>
                    <span className="text-[2.4375rem] font-light">t</span>
                    <span className="text-[2.3125rem] font-light">i</span>
                    <span className="text-[2.1875rem] font-light">o</span>
                    <span className="text-[2.0625rem] font-light">n</span>
                  </span>
                </h1>
              </div>
              <div className="tracking-wide text-sm lg:text-base xl:text-lg font-light text-white my-10">
                <p className="text-left">
                  With ECOCAN, it&apos;s not business as usual.
                </p>
                <p className="text-left">But ECO-smart business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
