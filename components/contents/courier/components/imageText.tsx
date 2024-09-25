import React from "react";
import { ItemList } from "./ItemList";
import clsx from "clsx";

interface ImageTextOverlayProps {
  className?: string;
  item: React.ReactNode;
}

const ImageTextOverlay = ({ item, className }: ImageTextOverlayProps) => {
  return (
    <div
      className={clsx(
        "text-white w-full rounded-2xl px-[60px] relative bg-cover bg-center after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-80 after:-z-10 overflow-hidden z-50",
        className
      )}
    >
      <div>{item}</div>
    </div>
  );
};

export default ImageTextOverlay;
