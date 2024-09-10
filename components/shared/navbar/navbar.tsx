"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";

interface NavigationBarProps {
  logoSrc: string;
  firstButtonClassName?: React.ReactNode;
  secondButtonClassName?: React.ReactNode;
  className?: string;
  linkColor?: string;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/blog", label: "Blog" },
];

const NavigationBar: React.FC<NavigationBarProps> = ({
  logoSrc,
  firstButtonClassName,
  secondButtonClassName,
  className,
  linkColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 md:px-4 border-b border-b-[#EDEDED] z-[9999] transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center justify-between flex-wrap xl:max-w-[77.5rem] mx-auto px-4 md:px-0">
        <div className="flex items-center flex-shrink-0 text-white py-4">
          <Image
            src={logoSrc}
            alt="ecocan logo"
            width={46}
            height={46}
            className="w-full h-full"
          />
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 text-[#00000080] ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 text-[#00000080] ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
            isOpen ? "block min-h-screen md:min-h-0" : "hidden max-h-none"
          }`}
        >
          <div className="text-sm flex md:flex-row flex-col items-center justify-center gap-4 ms-4">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={clsx(
                  "block md:inline-block text-center text-sm font-[500]",
                  isScrolled ? "text-white" : "text-[#00000080]",
                  linkColor
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-center ms-auto flex-col md:flex-row flex items-center justify-center gap-4 md:pt-0 pt-5">
            <Button
              variant="ghost"
              className={clsx(
                "hover:bg-transparent",
                firstButtonClassName,
                isScrolled
                  ? "text-white border-none hover:text-white"
                  : "text-primary hover:text-primary"
              )}
            >
              Join ECOmmunity
            </Button>
            <Button
              asChild
              className={clsx(
                "rounded-full h-7 xl:h-8 text-black hover:text-primary bg-[#FFDD4C]",
                secondButtonClassName
              )}
            >
              <Link href="/">Download App</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
