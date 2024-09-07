import React from "react";
import { LucideCheckCircle2 } from "lucide-react";

interface CheckListItem {
  id: number | string;
  step?: React.ReactNode;
  description?: React.ReactNode;
}

interface CheckListProps {
  items: CheckListItem[];
  className?: string;
  bullet?:React.ReactNode;
}

const ItemList: React.FC<CheckListProps> = ({ 
  items, 
  className, 
  bullet=<LucideCheckCircle2 className="fill-primary text-white" />
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div className="flex items-start gap-3 mt-5" key={item.id}>
          <div>
            {bullet}
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

export default ItemList;