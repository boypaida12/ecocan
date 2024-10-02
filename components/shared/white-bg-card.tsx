import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import clsx from "clsx";
import Image from "next/image";
import { greenBall } from "@/lib/imageIndex";

export default function WhiteBgCard({
  title,
  content,
  className,
  iconPath,
  child
}: {
  title?: string;
  content?: React.ReactNode;
  className?: string;
  iconPath: string;
  child?: React.ReactNode;
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
            src={iconPath}
            alt="green icon"
            className="w-10 h-10"
            width={40}
            height={40}
          />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-accent/70 text-sm">{content}</div>
      </CardContent>
      <CardFooter>
        {child}
      </CardFooter>
    </Card>
  );
}
