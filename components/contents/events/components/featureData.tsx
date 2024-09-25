import React from 'react';
import { LucideTriangleAlert, LucideRecycle, LucideCreditCard } from 'lucide-react';
import Link from "next/link";
import HyperLink from '@/components/shared/hyperlink/hyperlink';

const iconSize = 18;


const featureData = [
  {
    id: 1,
    name: "Collabo with us",
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
    icon: "/assets/images/consumer/avoid-fakes.svg",
  },
  {
    id: 2,
    name: "Secure your ticketing ",
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
    icon: "/assets/images/consumer/avoid-fakes.svg",
  },
  {
    id: 3,
    name: "Streamline your sales",
    question:
      "Allow your fans to pre-order their favourite genuine drinks in advance ",
    answer: (
        <div className="italic text-accent/50 space-y-4">
          <p>
            And save them the inconvenience of long queues, while you get to plan ahead with ease
          </p>
        </div>
      ),
    icon: "/assets/images/consumer/avoid-fakes.svg",
  },
];

export default featureData;