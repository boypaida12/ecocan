'use client'
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import './wasteLitterCard.css'
import HyperLink from "@/components/shared/hyperlink/hyperlink";
export default function WasteLitterCard() {
  return (
    <div className="p-6 pt-0 max-w-5xl mx-auto">
      {/* Main Card */}
      <Card className="p-4 pt-0 mb-8 w-[35.875rem] border-0">
        <CardHeader>
        <CardTitle className="font-inter text-[32px] font-semibold leading-[38.73px] tracking-[-0.02em] text-left text-[#23262FCC]">
            Waste litter ➔ Counterfeit trade
        </CardTitle>
          <CardDescription className="font-inter text-[20px] font-normal leading-[24.2px] tracking-[-0.01em] text-left text-[#777E90]">
            Counterfeit criminals often lack the capacity to legitimately acquire new bottles for their illegal fake drinks. Instead, they rely on genuine used empties carelessly thrown in the environment as their primary source of packaging.
            </CardDescription>
        </CardHeader>
        
        {/* Horizontal Scrollable Cards */}
        <CardContent>
          <div className="flex overflow-x-auto space-x-4 py-4 hide-scrollbar">
            <div className="flex-shrink-0 flex flex-row w-[18.688rem] p-4 bg-white rounded-lg" style={{ boxShadow: '0px 2px 3px 0px #0000004D, 0px 6px 10px 4px #00000026' }}>
            <ul className="list-disc pl-5">
                <li className="font-inter text-sm font-normal leading-[1.059rem] text-left text-[#777E90] tracking-wide">
                    When you carelessly discard empties instead of returning them to ECO-stations, you're helping counterfeit criminals. Who will simply pick the empties, fill them with fake drinks, and put them back to the market. And they'll look exactly similar as genuine drinks.
                </li>
            </ul>
            </div>
            <div className="flex-shrink-0 w-[18.688rem] p-4 bg-white rounded-lg" style={{ boxShadow: '0px 2px 3px 0px #0000004D, 0px 6px 10px 4px #00000026' }}>
            <ul className="list-disc pl-5">
                <li className="font-inter text-sm font-normal leading-[1.059rem] text-left text-[#777E90] tracking-wide">But with <HyperLink link="EcoCanApp" href="/" />, you now have the power to identify fakes. Nevertheless, ensure to return empties to ECO-stations; that way we completely starve these criminals of packaging.
              </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
