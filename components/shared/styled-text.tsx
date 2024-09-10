import React from "react";
import { LucideDot } from "lucide-react";

interface StyledTextProps {
  children: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({ children }) => (
  <div className="flex items-start gap-3 py-2">
    <div className="border-2 border-transparent">
        <LucideDot className="fill-accent"/>
    </div>
    <div className="text-accent">{children}</div>
  </div>
);

export default StyledText;