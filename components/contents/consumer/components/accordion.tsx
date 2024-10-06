"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideCheckCircle2 } from "lucide-react";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import StyledText from "@/components/shared/styled-text";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

interface AccordionData {
  id: number;
  title: string;
  description: React.ReactNode;
}

const iconSize = 12;

const accordionData: AccordionData[] = [
  {
    id: 1,
    title: "Get EcocanApp today",
    description: (
      <>
        <StyledText>
          Download EcocanApp <HyperLink link="here" href="" />, sign up in under
          2 minutes, and start earning today!
        </StyledText>
        <StyledText>
          After registration, you can join the exclusive ECOmmunity here, to
          enjoy jaw-dropping discounts, and Red-Carpet benefits.
        </StyledText>
      </>
    ),
  },
  {
    id: 2,
    title: "Scan to Authenticate",
    description: (
      <>
        <StyledText>
          With <HyperLink link="Eco-Scanner" href="" />, you can easily and
          securely tell what’s real from fake.
        </StyledText>
        <StyledText>
          Just scan the ECOCAN security codes, and an authentication page will
          pop up. If it doesn’t pop up,{" "}
            <span className="text-red-500">it’s a fake! DON’T BUY IT!</span>
        </StyledText>
      </>
    ),
  },
  {
    id: 3,
    title: "Return for recycling",
    description: (
      <>
        <StyledText>
          After enjoying your drink, you can find the nearest ECO-station on ECOCAN Map with
          just a quick tap.
        </StyledText>
        <StyledText>
          While there, either hand your empties to Egents, or drop them into{" "}
          <HyperLink link="ECOCAN R.V.Ms" href="/" />
        </StyledText>
      </>
    ),
  },
  {
    id: 4,
    title: "Get paid, right away",
    description: (
      <>
        <StyledText>
          Once your <HyperLink link="eligible empties" href="/" /> are verified
          and accepted, you won&apos;t have to wait long for payday.
        </StyledText>
        <StyledText>
          You&apos;ll get paid instantly, right into your Eco-wallet!
        </StyledText>
      </>
    ),
  },
  {
    id: 5,
    title: "Your cash, Your call",
    description: (
      <>
        <StyledText>
          You can order more drinks affordably from ECOCAN Market, transfer
          deposits to friends, donate to charity, or cash out.
        </StyledText>
        <StyledText>
          Take a peek at the <HyperLink link="EcocanApp tutorial" href="/" />{" "}
          for more guidance!
        </StyledText>
      </>
    ),
  },
];

export function AccordionDemo({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const [openItem, setOpenItem] = useState("item-1");

  const handleItemClick = (id: number) => {
    onSelect(id);
    setOpenItem(`item-${id}`);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openItem}
      onValueChange={(value) => setOpenItem(value)}
    >
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="text-accent/80"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center">
              <Image
                src="/assets/images/consumer/checkmark.svg"
                alt="checklist"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div className="w-full">
              <AccordionTrigger onClick={() => handleItemClick(item.id)} className={`text-lg ${nunitoSans.className}`}>
                {item.title}
              </AccordionTrigger>
            </div>
          </div>
          <AccordionContent className={`font-medium ${nunitoSans.className}`}>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
