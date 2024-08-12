import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { LucideArrowRight, LucideDownload } from "lucide-react";
import HeroContent from "./shared/hero-content/hero-content";
import HeroContainer from "./hero-container";


export default function Hero() {
  return (
    <>
      <div className=" hidden md:block">
        <HeroContainer/>
      </div>
    </>
  );
}
