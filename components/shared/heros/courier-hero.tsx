"use client";
import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";
import { Button } from "@/components/ui/button";
import HeroForm from "../hero-form/hero-form";
import Link from "next/link";
import Image from "next/image";

export default function CourierHero() {
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
        <div className="bg-[url('/assets/images/courier/courier-bg.jpeg')] lg:h-[36rem] xl:h-[48rem] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[65rem] flex flex-col md:flex md:flex-row mx-auto lg:gap-12 lg:pt-[3.125rem] xl:pt-0">
            <div className="flex flex-col gap-4 lg:mt-28 xl:mt-60 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-7xl text-center md:text-start font-semibold">
                  Every day is
                  <br />
                  {/* <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    Payday!
                  </span> */}
                  <span className="bg-clip-text">Payday!</span>
                </h1>
              </div>
              <div className="text-sm lg:text-base xl:text-lg">
                <p>
                  Make deliveries and pick-ups, and get paid
                  <br /> twice!
                </p>
              </div>
            </div>
            <div className="lg:h-[32rem] xl:h-[44rem] md:w-1/2 relative overflow-hidden lg:overflow-visible z-20">
              <Image
                src="/assets/images/courier/side-hustle.svg"
                className="absolute max-w-[20rem] xl:max-w-none h-auto -left-2 top-24"
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
