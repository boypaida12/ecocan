import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import clsx from "clsx";

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
    <Card className={clsx("border-2 border-primary rounded-xl overflow-hidden shadow-lg", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">
          <div className="bg-primary rounded-xl w-fit p-2 text-white mb-4">{icon}</div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-accent/70 text-sm">{content}</p>
      </CardContent>
    </Card>
  );
}
