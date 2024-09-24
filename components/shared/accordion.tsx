import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemData {
  id: string;
  question: React.ReactNode;
  answer: React.ReactNode;
}

interface ReusableAccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function ReusableAccordion({ items, className = "" }: ReusableAccordionProps) {
  return (
    <Accordion type="multiple" className={className}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}