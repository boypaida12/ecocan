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
    <div className="flex items-center gap-12">
      {item}
      {multipleImages}
    </div>
  );
}
