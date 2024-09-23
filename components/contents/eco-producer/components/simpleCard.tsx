import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import clsx from "clsx";
import Image from "next/image";


export default function SimpleCard({
 image,
  title,
  content,
  className,
}: {
  image?: React.ReactNode;
  title?: string;
  content?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={clsx(
        "border-2 border-primary rounded-xl overflow-hidden shadow-lg",
        className
      )}
    >
        {image}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
}
