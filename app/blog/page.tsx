"use client";

import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import React from "react";
import BlogHero from "./components/blog-hero";
import Articles from "./components/articles";

export default function Blog() {
  const isScrolled = useScroll();
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
      <div className="space-y-24 py-8 max-w-[77.5rem] mx-auto px-4 xl:px-0 mt-[3.575rem]">
        <div className="text-center">
            <h1 className="bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text text-7xl font-semibold">
              Bl<span className="bg-gradient-to-br from-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">og</span>
            </h1>
            <p className="text-accent/60 mt-4">Sustainability news</p>
        </div>
        <BlogHero/>
        <Articles/>
      </div>
    </>
  );
}
