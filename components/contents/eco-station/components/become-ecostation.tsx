import HyperLink from "@/components/shared/hyperlink/hyperlink";
import React from "react";

export default function BecomeEcostation() {
  return (
    <div className="max-w-[1040px] mx-auto p-4">
      <div className="bg-white flex w-[1044px] h-[536px] mx-auto">
        {/* Right Side with Content */}
        <div className="lg:ml-[73px] lg:w-[530px] h-full flex flex-col gap-8">
          {/* Top Part with Title and Subtitle */}
          <div className="lg:h-[104px]">
            <h1 className="text-[32px] font-semibold text-[#23262F] opacity-80">
              How to become an Eco-station
            </h1>
            <p className="text-[20px] text-[#23262F] opacity-80">
              You are just 4 simple steps away from unlocking limitless
              opportunities
            </p>
          </div>

          {/* Bottom Part with Items */}
          <div className="lg:gap-6 lg:space-y-[24px]">
            {/* Item 1 */}
            <div>
              <div className="flex items-center space-x-3">
                <span className="bg-[#4AC63F] text-white rounded-full w-5 h-5 flex items-center justify-center text-[16px]">
                  1
                </span>
                <h2 className="text-[20px] text-[#404040] font-semibold">
                  For every <HyperLink link="Register here," href={"/"} /> to become an
                  Eco-station
                </h2>
              </div>
              <p className="text-[16px] text-[#777E90] pl-8">
                We will then reach out to you with next steps. Have your
                business documentation in order.
              </p>
            </div>
            {/* Item 2 */}
            <div>
              <div className="flex items-center space-x-3 font-semibold">
                <span className="bg-[#4AC63F] text-white rounded-full w-5 h-5 flex items-center justify-center text-[16px]">
                  2
                </span>
                <h2 className="text-[20px] text-[#404040]">
                  Sign an Eco-partnership agreement
                </h2>
              </div>
              <p className="text-[16px] text-[#777E90] pl-8">
                Everything is transparent, no hidden clauses.
              </p>
            </div>
            {/* Item 3 */}
            <div>
              <div className="flex items-center space-x-3 font-semibold">
                <span className="bg-[#4AC63F] text-white rounded-full w-5 h-5 flex items-center justify-center text-[16px]">
                  3
                </span>
                <h2 className="text-[20px] text-[#404040]">
                  Update your profile on ECOCAN Marketplace
                </h2>
              </div>
              <p className="text-[16px] text-[#777E90] pl-8">
                We leave this to you, just try to be creative.
              </p>
            </div>
            {/* Item 4 */}
            <div>
              <div className="flex items-center space-x-3 font-semibold">
                <span className="bg-[#4AC63F] text-white rounded-full w-5 h-5 flex items-center justify-center text-[16px]">
                  4
                </span>
                <h2 className="text-[20px] text-[#404040]">
                  Set your status “live” and start earning
                </h2>
              </div>
              <p className="text-[16px] text-[#777E90] pl-8">
                We’ll ensure you are prominently visible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
