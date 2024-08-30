import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemData {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface ReusableAccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function ReusableAccordion({ items, className = "" }: ReusableAccordionProps) {
  return (
    <Accordion type="multiple" defaultValue={[items[0]?.id]} className={className}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}