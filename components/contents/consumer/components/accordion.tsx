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
          Download our proprietary app here, sign up in under 2 minutes, and
          start earning right away!
        </StyledText>
        <StyledText>
          Subsequently, you can join our exclusive Ecommunity here, to enjoy
          jaw-dropping discounts, and VIP access.
        </StyledText>
      </>
    ),
  },
  {
    id: 2,
    title: "Scan to Authenticate",
    description: (
      <StyledText>
        With Eco-Scanner, you can easily but securely tell what&apos;s real from
        fake. Just scan the ECOCAN security codes, and an authentication page
        will pop up.
      </StyledText>
    ),
  },
  {
    id: 3,
    title: "Navigate with ECOCAN Map",
    description: (
      <>
        <StyledText>
          After enjoying your genuine beverage, finding the nearest Eco-Station
          is a breeze! Just a tap is enough.
        </StyledText>
        <StyledText>
          At the Eco-Stations, you can either hand your empties to Agents, or
          drop them into ECOCAN R.V.Ms (Reverse Vending Machines.)
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
          Once your eligible empties are verified and accepted, you won&apos;t
          have to wait for payday.
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
          Take a peek at the <HyperLink link="EcocanApp tutorial" href="/"/> for more
          guidance!
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
          <div className="flex items-center gap-3">
            <LucideCheckCircle2 className="fill-primary text-white" />
            <div className="w-full">
              <AccordionTrigger onClick={() => handleItemClick(item.id)}>
                {item.title}
              </AccordionTrigger>
            </div>
          </div>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
