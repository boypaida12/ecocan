import React from "react";
import TextWithCards from "../shared/text-with-cards/text-with-cards";
import JoinCommunity from "../shared/multiple-images-and-item/multiple-images-and-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideCheckCircle } from "lucide-react";
import ImageAndItem from "../shared/image-and-item/image-and-item";

interface AccordionData {
  id: number;
  title: string;
  description: string;
}

const accordionData: AccordionData[] = [
  {
    id: 1,
    title: "Get EcocanApp today",
    description: "",
  },
];

export default function ConsumerContent() {
  return (
    <div className="space-y-24 py-8">
      <TextWithCards />
    </div>
  );
}
