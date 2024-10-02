import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import React, { useState, useEffect } from "react";
import { AccordionDemo } from "./accordion";
import Image from "next/image";

const images = [
  "/assets/images/consumer/get-app.svg",
  "/assets/images/consumer/scan-image.svg",
  "/assets/images/consumer/map-image.svg",
  "/assets/images/consumer/pay-image.svg",
  "/assets/images/consumer/earn-image.svg",
];

export default function TapTap() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleAccordionSelect = (id: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedImage(id - 1);
      setIsVisible(true);
    }, 300);
  };

  return (
    <ImageAndItem
      className="gap-12 items-center"
      title="How EcocanApp works"
      subtitle="Tap Tap Tap, and, Wallah!"
      image={
        <Image
          src={images[selectedImage]}
          alt={`EcocanApp step ${selectedImage + 1}`}
          className={`object-cover transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          width={500}
          height={100}
          priority
        />
      }
      item={<AccordionDemo onSelect={handleAccordionSelect} />}
    />
  );
}
