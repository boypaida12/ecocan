"use client"

import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideDownload } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";

interface BrandProtectionHeroProps {
  title: string;
  description: React.ReactNode;
}

export default function BrandProtectionHero({title, description}: BrandProtectionHeroProps) {
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
        className={
          isScrolled ? "bg-[#4ac63f]" : "bg-transparent backdrop-blur-xl"
        }
        logoSrc="/assets/images/ecocan-logo.svg"
        firstButtonClassName="rounded-full h-7 xl:h-8 bg-transparent border border-primary text-primary hover:bg-transparent hover:text-primary"
        secondButtonClassName="rounded-full h-7 xl:h-8 bg-[#FFDD4E] text-[#383A35] hover:bg-[#FFDD4E] hover:text-[#383A35]"
      />
      <div className="mt-20 flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0">
        <p className="font-inter text-[14px] font-normal leading-[28px] text-left text-[#64748B]">Solutions  <span className="mx-2">&gt;</span> <span className="text-[#020617]">{title}</span></p>
      </div>
      <div className="mt-20 flex items-center justify-between flex-wrap xl:max-w-[65rem] mx-auto px-4 md:px-0">
          <h2 className="font-inter text-[40px] font-bold leading-[56px] tracking-[-0.02em] text-left text-[#23262FCC] mb-1.5 ">{title}</h2>
          {description}
      </div>
    </>
  );
}
