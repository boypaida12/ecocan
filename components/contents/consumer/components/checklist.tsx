import React from "react";
import { LucideCheck, LucideCheckCircle2 } from "lucide-react";

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

const CheckList: React.FC<CheckListProps> = ({ 
  items, 
  className, 
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div className="flex items-start gap-3 mt-5" key={item.id}>
          <div>
            {item.icon ? item.icon : <LucideCheck className="text-white bg-primary rounded-full p-1" />}
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