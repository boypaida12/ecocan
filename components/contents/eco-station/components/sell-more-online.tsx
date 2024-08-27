import React from "react";

export default function SellMoreOnline() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "assets/images/online-store.svg",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-[#12191B] opacity-80"></div>
      <div className="relative z-10 flex flex-col items-center lg:max-w-[1040px] text-center space-y-8">
        <h1
          className="text-[32px] text-white font-semibold"
          style={{ width: "470px", height: "39px" }}
        >
          Sell more online
        </h1>
        <p
          className="text-[20px] text-white font-normal leading-[30px]"
          style={{ width: "624px", height: "120px" }}
        >
          ECOCAN Market connects passionate entrepreneurs like yourself, with
          ECO-friendly ECOnsumers, for sustainable commerce.
        </p>
        <a
          href="#"
          className="text-[20px] italic font-light leading-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C]"
        >
          Click to learn more!
        </a>
      </div>
    </div>
  );
}
