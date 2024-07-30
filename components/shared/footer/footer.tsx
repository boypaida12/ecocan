import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

type FooterItem =
  | { type: "logo"; src: string; alt: string }
  | { type: "text"; content: string }
  | {
      type: "social";
      links: { href: string; src: string; alt: string }[];
    }
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
          {
            href: "https://facebook.com",
            src: "/assets/icons/facebook-brands-solid.svg",
            alt: "Facebook",
          },
          {
            href: "https://twitter.com",
            src: "/assets/icons/twitter-brands-solid.svg",
            alt: "Twitter",
          },
          {
            href: "https://instagram.com",
            src: "/assets/icons/instagram-brands-solid.svg",
            alt: "Instagram",
          },
          {
            href: "https://linkedin.com",
            src: "/assets/icons/linkedin-brands-solid.svg",
            alt: "LinkedIn",
          },
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
    title: "JOIN OUR COMMUNITY🔥",
    items: [{ type: "input", placeholder: "Enter your email" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#FCFCFD] py-8">
      <div className="xl:max-w-[65rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                    <p key={itemIndex} className="mb-4 text-gray-600">
                      {item.content}
                    </p>
                  );
                case "social":
                  return (
                    <div key={itemIndex} className="flex space-x-4 mb-4 gap-3">
                      {item.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-800"
                        >
                          <Image
                            src={link.src}
                            alt={link.alt}
                            width={24}
                            height={24}
                          />
                        </a>
                      ))}
                    </div>
                  );
                case "link":
                  return (
                    <div key={itemIndex} className="gap-8">
                      <a
                        href={item.href}
                        className="block mb-2 text-gray-600 hover:text-gray-800 gap-8"
                      >
                        {item.content}
                      </a>
                    </div>
                  );
                case "input":
                  return (
                    <div
                      key={itemIndex}
                      className="mb-4 border border-[#E6E8EC] rounded-full flex items-center"
                    >
                      <Input
                        placeholder="Enter your email"
                        className="text-[#777E90] border-none rounded-full focus:outline-none focus:border-none focus:ring-0"
                      />
                      <Image
                        src="/assets/icons/right-arrow.svg"
                        className="m-2"
                        alt="right chevron arrow"
                        width={32}
                        height={32}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto py-4 border-t border-gray-200 mt-8 flex justify-between items-center text-sm text-gray-600">
        <span>© 2024 Ecocan. All Rights Reserved.</span>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-800">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-800">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
