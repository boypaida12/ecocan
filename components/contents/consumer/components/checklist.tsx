import { LucideCheckCircle2 } from "lucide-react";
import React from "react";

const steps = [
  {
    id: 1,
    step: "Verify empties' eligibility by scanning attached ECOCAN security codes. DO NOT rely on your naked eye",
  },
  {
    id: 2,
    step: "Use ECOCAN Map to navigate to the closest or your preferred ECO-station",
  },
  {
    id: 3,
    step: "Hand-over your intact empties to ECO-Station Egents, who will verify them, and digitally issue applicable deposit into your ECO-Wallet",
  },
  {
    id: 4,
    step: "Alternatively, feed eligible empties into ECOCAN R.V.M, which will verify the package and transfer applicable deposit into your ECO-Wallet",
  },
  {
    id: 5,
    step: "That's all. You can then spend your money as you please",
  },
];

export default function CheckList() {
  return steps.map((step) => {
    return (
      <div className="flex items-center gap-3 mt-5" key={step.id}>
        <div>
            <LucideCheckCircle2 className="fill-primary text-white" />
        </div>
        <p className="text-accent text-sm">{step.step}</p>
      </div>
    );
  });
}
