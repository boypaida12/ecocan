import React from "react";
import { Button } from "../ui/button";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

export default function JoinCommunityButton() {
  return (
    <Button
      asChild
      className="rounded-full h-8 bg-transparent border border-primary text-primary hover:bg-transparent"
    >
      <Link href="/">Join Ecommunity</Link>
    </Button>
  );
}
