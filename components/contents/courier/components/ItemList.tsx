import React from "react";

interface ItemListProps {
    id: number | string;
    title?: React.ReactNode;
    description?: React.ReactNode;
  }
  
  export const ItemList: React.FC<ItemListProps> = ({ id, title, description }) => (
    <div className="flex flex-row mb-8">
      <div className="flex items-center justify-center min-w-5 h-5 bg-[#4AC63F] rounded-full mr-5">
        <p className="text-xs text-white leading-none">{id}</p>
      </div>
      <div className="pt-0">
        <p className="text-[1.125rem] font-semibold">{title}</p>
        {description}
      </div>
    </div>
  );