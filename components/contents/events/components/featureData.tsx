import React from 'react';
import { LucideTriangleAlert, LucideRecycle, LucideCreditCard } from 'lucide-react';
import Link from "next/link";
import HyperLink from '@/components/shared/hyperlink/hyperlink';

const iconSize = 18;


const featureData = [
  {
    id: 1,
    name: "Make extra cash, Easy & Fast",
    question:(
      <p>
        <HyperLink link="Join the ECOmmunity" href="/"/> today, and elevate your event’s sustainability
      </p>
    ),
    answer: (
      <div className="italic text-accent/50 space-y-4">
        <p>
          Ensure legulatory compliance, and tap into our vibrant ECOsumer fan base!
        </p>

      </div>
    ),
    icon: <LucideTriangleAlert size={iconSize} />,
  },
  {
    id: 2,
    name: "You are the boss!",
    question:(
      <p>
      Utilize <HyperLink link="ECOCAN security codes" href="/"/> to protect the integrity of your ticketing
    </p>
    ),
    answer: (
      <div className="italic text-accent/50 space-y-4">
        <p>
        Verify attendance with secure <HyperLink link="ECOCAN ID" href="/"/>, and enjoy peace of mind knowing everything is secure.
        </p>
      </div>
    ),
    icon: <LucideRecycle size={iconSize} />,
  },
  {
    id: 3,
    name: "Deliver however",
    question:
      "Allow your fans to pre-order their favourite genuine drinks in advance ",
    answer: (
        <div className="italic text-accent/50 space-y-4">
          <p>
            And save them the inconvenience of long queues, while you get to plan ahead with ease
          </p>
        </div>
      ),
    icon: <LucideCreditCard size={iconSize} />,
  },
];

export default featureData;