import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MultipleImagesAndItemProps {
  item: React.ReactNode;
  multipleImages: React.ReactNode;
}

export default function MultipleImagesAndItem({
  item,
  multipleImages,
}: MultipleImagesAndItemProps) {
  return (
    <div className="flex max-w-[77.5rem] mx-auto items-center px-4 xl:px-0">
      {item}
      {multipleImages}
    </div>
  );
}
