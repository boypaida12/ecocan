import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, LucideFacebook, LucideArrowUpWideNarrow, LucideArrowRightCircle, LucideArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

type FooterItem =
  | { type: "logo"; src: string; alt: string }
  | { type: "text"; content: string }
  | { type: "social"; links: { href: string; icon: JSX.Element }[] }
  | { type: "link"; href: string; content: string }
  | { type: "input"; placeholder: string };

type FooterColumn = {
  title: string | null;
  items: FooterItem[];
};

const footerData: FooterColumn[] = [
  {
    title: null,
    items: [
      {
        type: "logo",
        src: "/assets/images/ecocan-logo.svg",
        alt: "Company Logo",
      },
      {
        type: "text",
        content:
          "A description about the company. This is a brief description.",
      },
      {
        type: "social",
        links: [
          { href: "https://facebook.com", icon: <LucideFacebook /> },
          { href: "https://twitter.com", icon: <Twitter /> },
          { href: "https://instagram.com", icon: <Instagram /> },
          { href: "https://linkedin.com", icon: <Linkedin /> },
        ],
      },
    ],
  },
  {
    title: "Home",
    items: [
      { type: "link", href: "#", content: "About us" },
      { type: "link", href: "#", content: "Solutions" },
      { type: "link", href: "#", content: "Blog" },
      { type: "link", href: "#", content: "Contact us" },
    ],
  },
  {
    title: "Support",
    items: [
      { type: "link", href: "#", content: "Customer support" },
      { type: "link", href: "#", content: "Privacy policy" },
    ],
  },
  {
    title: "Join our community",
    items: [{ type: "input", placeholder: "Enter your email" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#FCFCFD] py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footerData.map((column, index) => (
          <div key={index}>
            {column.title && (
              <h3 className="font-semibold mb-4">{column.title}</h3>
            )}
            {column.items.map((item, itemIndex) => {
              switch (item.type) {
                case "logo":
                  return (
                    <div key={itemIndex} className="mb-4">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={46}
                        height={46}
                      />
                    </div>
                  );
                case "text":
                  return (
                    <p key={itemIndex} className="mb-4">
                      {item.content}
                    </p>
                  );
                case "social":
                  return (
                    <div key={itemIndex} className="flex space-x-4 mb-4">
                      {item.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  );
                case "link":
                  return (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className="block mb-2 text-gray-600 hover:text-gray-800"
                    >
                      {item.content}
                    </a>
                  );
                case "input":
                  return (
                    <div key={itemIndex} className="mb-4 border border-[#E6E8EC] rounded-full flex items-center">
                      <Input placeholder="Enter your email" className="text-[#777E90] border-none rounded-full focus:outline-none focus:border-none focus:ring-0"/>
                      <Image src="/assets/icons/right-arrow.svg" className="m-2" alt="right chevron arrow" width={32} height={32}/>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
    </footer>
  );
}
