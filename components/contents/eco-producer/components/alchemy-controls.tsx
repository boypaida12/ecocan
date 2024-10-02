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
import PrimaryButton from "@/components/shared/primary-btn";
import { ItemList } from "../../courier/components/ItemList";

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
        <ImageAndItem
          className="items-center gap-6"
          image={
            <Image
              src="/assets/images/producer/courier.svg"
              alt="buy online with ecocan"
              width={500}
              height={100}
            />
          }
          item={
            <div className="space-y-6">
              <h2 className="font-semibold text-3xl">
                We give you the controls
              </h2>
              {howToData.map((data) => (
                <ItemList key={data.id} title={data.title} id={data.id} />
              ))}
              <div className="text-center text-[#23262fcd] text-[0.9375rem]">
                <p>Together, we can create something spellbindingly magical!</p>
              </div>
            </div>
          }
        />
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none hover:bg-transparent text-primary/80 hover:text-primary">
            Go Back
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
