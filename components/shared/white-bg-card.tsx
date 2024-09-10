import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import clsx from "clsx";
import Image from "next/image";
import { greenBall } from "@/lib/imageIndex";

export default function WhiteBgCard({
  icon,
  title,
  content,
  className,
}: {
  icon?: React.ReactNode;
  title?: string;
  content?: string;
  className?: string;
}) {
  return (
    <Card
      className={clsx(
        "border-2 border-primary rounded-xl overflow-hidden shadow-lg",
        className
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">
          <Image
            src={greenBall}
            alt="green icon"
            className="w-12 h-12"
            width={47}
            height={47}
          />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-accent/70 text-sm">{content}</p>
      </CardContent>
    </Card>
  );
}
