import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideChevronRight } from "lucide-react";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import TextWithComponent from "../../consumer/components/text-with-component";
import HowTo from "@/components/shared/HowTo";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const howToData = [
  {
    id: 1,
    title: (
      <p className="text-[#404040] font-normal text-base">
        With ECOCAN, you gain comprehensive visibility and vigilance over your
        products. At the lowest cost
      </p>
    ),
  },
  {
    id: 2,
    title: (
      <p className="text-[#404040] font-normal text-base">
        And you’ll always be alerted in real-time whenever criminals attempt to
        copy, counterfeit or divert your products
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <p className="text-[#404040] font-normal text-base">
        Then leverage this market intelligence to take remedial action, and
        refine your operations. Or we can help. Just reach out!{" "}
      </p>
    ),
  },
];

const iconSize = 18;

export default function AlchemyControls() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-transparent ps-0 text-accent/70"
        >
          Learning more 
          <LucideChevronRight size={iconSize} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <HowTo
          itemsTitle="We give you the controls"
          items={howToData}
          imageSrc="/assets/images/producer/courier.svg"
          imageAlt="Become an Eco-station"
        />
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none hover:bg-transparent text-primary/80 hover:text-primary">Go Back</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
