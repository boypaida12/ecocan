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
import { LucideChevronRight, LucideX } from "lucide-react";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import TextWithComponent from "../../consumer/components/text-with-component";
import HowTo from "@/components/shared/HowTo";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { ItemList } from "../../courier/components/ItemList";

const howToData = [
  {
    id: 1,
    title: (
      <p className="text-[#404040] font-normal text-base">
        Optimise our tech to promote brand loyalty by treating your customers to
        convenient online purchases. Plus, delight them with most affordable
        deliveries, right to their doorsteps.
      </p>
    ),
  },
  {
    id: 2,
    title: (
      <p className="text-[#404040] font-normal text-base">
        Boost your visibility across our platforms with our optimisation and
        in-app marketing, and watch as EConsumers seek you out to buy more from
        you!
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <p className="text-[#404040] font-normal text-base">
        Increase your sustainability by collecting your empties, for closed loop
        recycling. And we’ll inform ECOmmunity about this, that they will
        support you with more purchases
      </p>
    ),
  },
  {
    id: 4,
    title: (
      <p className="text-[#404040] font-normal text-base">
        Improve your marketing and sales efficiency with actionable performance
        data provided by the ECOCAN TnT platform, and increase your revenues
      </p>
    ),
  },
];

const iconSize = 18;

export default function AlchemyOnlineSales() {
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
        <AlertDialogCancel className="hover:bg-transparent text-black/60 hover:text-black w-fit border-none">
          <LucideX />
        </AlertDialogCancel>
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
                ECOnsumers care more than just the price
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
      </AlertDialogContent>
    </AlertDialog>
  );
}
