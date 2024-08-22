import React from "react";
import { LucideEye, LucideHandCoins, LucideRecycle } from "lucide-react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import ImageAndItem from "../../shared/image-and-item/image-and-item";
import BecomeEcostation from "./components/become-ecostation";
import Image from "next/image";
const iconSize = 18;

export default function EcoStationContent() {
  return (
    <ImageAndItem
      image={<Image src="/assets/images/become-ecostation.svg" width={50} height={50} alt="Become an eco-station" className="w-full h-full"/>}
      item={<BecomeEcostation/>}
      className=""
    />
  );
}
