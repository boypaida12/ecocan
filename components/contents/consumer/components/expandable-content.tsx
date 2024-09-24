import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function ExpandableContent({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = content.split(" ");
  const shouldTruncate = words.length > 5;

  const truncatedContent = shouldTruncate
    ? words.slice(0, 5).join(" ") + "..."
    : content;
  return (
    <div>
      <p>{isExpanded ? content : truncatedContent}</p>
      {shouldTruncate && (
        <Button
          variant="link"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 p-0 text-accent/50 hover:text-primary"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}
