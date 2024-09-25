import React from "react";
import { LucideCheck, LucideCheckCircle2 } from "lucide-react";
import Image from "next/image";

interface CheckListItem {
  id: number | string;
  step?: React.ReactNode;
  description?: React.ReactNode;
  icon?:React.ReactNode;
}

interface CheckListProps {
  items: CheckListItem[];
  className?: string;
}

const CheckList: React.FC<CheckListProps> = ({ items, className }) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div className="flex items-start mt-5" key={item.id}>
          <div className="">
            <div className="w-12 h-12 flex">
              <Image
                src="/assets/images/consumer/checkmark.svg"
                alt="checklist"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          </div>
          <div>
            <div>{item.step}</div>
            <div className="text-accent text-sm">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckList;
