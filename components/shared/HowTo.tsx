import React from "react";
import ImageAndItem from "./image-and-item/image-and-item";
import Image from "next/image";
import { ItemList } from "../contents/courier/components/ItemList";

interface HowToItem {
  id: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

interface HowToProps {
  itemsTitle: React.ReactNode;
  itemsSubtitle?: string;
  items: HowToItem[];
  imageSrc: string;
  imageAlt: string;
}

const HowTo: React.FC<HowToProps> = ({
  itemsTitle,
  itemsSubtitle,
  items,
  imageSrc,
  imageAlt,
}) => {
  const Item = () => (
    <div className="w-[31.3rem] h-[33.75rem] pl-[48px] ms-auto flex flex-col justify-center">
      <div className="mt-1 mb-8">
        <p className="text-2xl font-semibold pb-1">{itemsTitle}</p>
        <p className="text-base text-[#23262fcc]">{itemsSubtitle}</p>
      </div>
      {items.map((data) => (
        <ItemList
          key={data.id}
          title={data.title}
          description={data.description}
          id={data.id}
          icon={data.icon}
        />
      ))}
    </div>
  );

  return (
    <>
      <ImageAndItem
        item={<Item />}
        image={
          <Image
            src={imageSrc}
            className="w-full h-[33.5rem]"
            width={500}
            height={100}
            alt={imageAlt}
          />
        }
      />
    </>
  );
};

export default HowTo;
