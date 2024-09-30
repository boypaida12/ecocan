import MultipleImagesAndItem from "@/components/shared/multiple-images-and-item/multiple-images-and-item";
import React from "react";
import TextWithComponent from "./text-with-component";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Newsletter() {
  return (
    <MultipleImagesAndItem
      item={
        <TextWithComponent
          title="Stay in the loop"
          description="Subscribe to our newsletter and stay updated with what's happening within the Ecommunity."
          component={
            <div className="mb-4 border border-[#E6E8EC] bg-white rounded-full flex items-center w-3/5">
              <Input
                placeholder="Enter your email"
                className="text-[#777E90] border-none rounded-full focus:outline-none focus:border-none focus:ring-0"
              />
              <Image
                src="/assets/icons/right-arrow.svg"
                className="m-2"
                alt="right chevron arrow"
                width={32}
                height={32}
              />
            </div>
          }
        />
      }
      multipleImages={
        <Image
          src="/assets/images/courier/courier-four-img.svg"
          alt="multiple image"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      }
    />
  );
}
