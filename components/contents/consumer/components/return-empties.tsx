import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Timeline from "@/components/shared/timeline";
import React from "react";

const timelineData = {
  title: "How to return eligible empties",
  subtitle: (
    <div className="text-base w-4/5">
      Only return empties of Aluminium cans, PET, Glass bottles and beverage
      cartons carrying ECOCAN Security codes. And are published on the ECOCAN
      website, and ECO-products section of EcocanApp.{" "}
      <HyperLink link="See list here" href="/" />
    </div>
  ),
  items: [
    {
      image: "/assets/images/consumer/verify.svg",
      title: "Verify eligibility",
      description:
        "The empties should be intact, not compacted nor deformed. And with ECOCAN security codes clearly visible. Authenticate them by scanning the attached codes",
    },
    {
      image: "/assets/images/consumer/egents.svg",
      title: "Return to Egents",
      description:
        "Then use ECOCAN Map to find the nearest ECO-Station, where Egents will verify your empties and digitally transfer the deposit into your ECO-Wallet. That you can spend as you please",
    },
    {
      image: "/assets/images/consumer/recycle.svg",
      title: "Or recycle via ECOCAN RVMs",
      description:
        "Scan your ECOCAN ID to the RVM, place your empties into the infeed, then complete the session. And you’ll immediately receive applicable deposits directly into your ECO-wallet",
    },
  ],
};

export default function ReturnEmpties() {
  return (
    <Timeline
      title={timelineData.title}
      subtitle={timelineData.subtitle}
      items={timelineData.items}
    />
  );
}
