import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabContent } from "@/lib/tabContent";

export default function HeroContainer() {
  return (
    <>
      <Tabs defaultValue="ECOsumer" className="w-full">
        <div className="relative">
          {Object.entries(tabContent).map(([tab, { hero }]) => (
            <TabsContent key={tab} value={tab}>
              {hero}
            </TabsContent>
          ))}
        </div>
        <div className="justify-center items-center flex py-8">
          <TabsList className="bg-white border-none rounded-full">
            {Object.keys(tabContent).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full w-36 text-[#0000004D] z-50"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(tabContent).map(([tab, { content }]) => (
          <TabsContent key={tab} value={tab}>
            <div>{content}</div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
