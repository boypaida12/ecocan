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
    title: "You decide when to make money",
    description: (
      <>
        <p>Go "live" whenever you decide, and accept whatever requests you want </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Get paid twice, on the same journey",
    description: (
        <p>Complete a delivery, and we'll assign you empties pick-up in the same area, to maximize your earnings! No wasting time</p>
    ),
  },
  {
    id: 3,
    title: "While you make more money, we also make a bit",
    description: (
      <>
        <p>The lowest commission ever! That we keep growing together; a tiny 7%, and the rest is yours to keep!</p>
      </>
    ),
  },
  {
    id: 4,
    title: "Receive your money instantly!",
    description: (
      <>
        <p>There's no better feeling than receiving what you've rightfully earned, and we'll ensure you get it fast! </p>
      </>
    ),
  }
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
