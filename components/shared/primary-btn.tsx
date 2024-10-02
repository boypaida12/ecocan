import React from "react";
import { Button } from "../ui/button";
import { LucideDownload } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface PrimaryButtonProps {
  buttonText?: string;
  buttonIcon?: JSX.Element;
  buttonLink?: string;
  className?: string;
}

export default function PrimaryButton({
  buttonText = "Download App",
  buttonIcon,
  buttonLink = "/",
  className,
}: PrimaryButtonProps) {
  return (
    <Link href={buttonLink}>
      <Button
        className={clsx(
          "before:ease rounded-full relative h-[3.25rem] mx-auto md:mx-0 w-fit py-3 px-8 overflow-hidden text-white transition-all space-x-4 before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-[36rem]",
          className
        )}
      >
        <span className="relative z-10 text-lg">{buttonText}</span>
        {buttonIcon}
      </Button>
    </Link>
  );
}
