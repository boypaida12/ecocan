import { Button } from "@/components/ui/button";
import React from "react";
import NavigationBar from "../navbar/navbar";
import Link from "next/link";

export default function RecyclerHero() {
  return (
    <>
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        firstButton={<Button variant="ghost">Support</Button>}
        secondButton={<Button asChild className="rounded-full h-7 xl:h-8 bg-white text-black hover:bg-white hover:text-black">
          <Link href="/">Download App</Link>
        </Button>}
        className=" text-white backdrop-blur-none bg-transparent border-b-0"
        linkColor="text-white"
      />
      <div className="lg:h-[36rem] xl:h-[47.125rem]">
        <div className="bg-[url('/assets/images/recycler-bg.png')] lg:h-[32rem] xl:h-[45rem] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[77.5rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="mt-60 px-4 xl:px-0 text-white z-50 mx-auto">
              <div>
                <h1 className="lg:text-6xl text-2xl xl:text-7xl text-center font-semibold text-white">
                  Highest Quality{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    Recyclate
                  </span>
                </h1>
              </div>
              <div className="tracking-wide text-sm lg:text-base xl:text-lg font-light text-white my-10 space-y-4">
                <p className="text-center">
                  Cut your recyclate processing loss rate, with
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
