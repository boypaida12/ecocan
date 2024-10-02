"use client";
import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";

export default function RecyclerHero() {
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
        <div className="bg-[url('/assets/images/recycler/recycler-bg.png')] lg:h-[36rem] xl:h-[44rem] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/40 after:opacity-50 after:z-10">
          <div className="xl:max-w-[69.375rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="mt-60 px-4 xl:px-0 text-white z-50 mx-auto w-[70.625rem] text-left">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-[4rem] text-left font-semibold text-white">
                  Highest Quality
                  <br />
                  <span className="bg-gradient-to-br from-[#228B22] via-[#4AC63FCF] to-[#A6A6A6] text-transparent bg-clip-text">
                    Recyclate
                  </span>
                </h1>
              </div>
              <div className="tracking-wide text-sm lg:text-base xl:text-lg font-light text-white my-10 space-y-4">
                <p className="text-left">
                  Cut your processing loss rate, with
                  <br />
                  segregated-at-source empties
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
