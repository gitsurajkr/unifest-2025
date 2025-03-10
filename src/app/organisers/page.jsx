"use client";
import React, { useState } from "react";
import CardsCoreTeam from "../../components/ui/CardsCoreTeam";
import CardsClubHeads from "../../components/ui/CardsClubHeads"
import Image from "next/image";

export default function CoreTeam() {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div className=" top-0 flex flex-col items-center w-full min-h-screen ">
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden  ">
      <Image
          src="/bgyellow.webp"
          fill={true}
          priority
          sizes="100vw"
          alt="Core Team Background"
          className="object-cover w-full h-full  "
        />
      </div>

      {/* Heading Section */}
      <div className="w-full flex flex-col items-center pt-[20vh] pb-[3vh] md:pt-[30vh] lg:pt-[390px] ">
        <h2 className="font-[Alinore] text-[#CC200E] font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black] text-5xl sm:text-5xl md:text-6xl lg:text-8xl px-4 ">
          ORGANISING TEAM
        </h2>

        {/* Tabs Section */}
        <div className=" flex w-[90%] max-w-[320px] sm:max-w-[400px] md:max-w-[450px] h-[40px] rounded-full bg-[#E5B73B] font-poppins overflow-hidden border z-[25] border-black mt-4 pointer-events-auto">
          <button
            className={`flex-1 text-center py-2 rounded-[73.8px] font-bold text-sm sm:text-base transition-all duration-100 ${
              activeTab === "core"
                ? "bg-[#A50C00] text-white"
                : "bg-[#E5B73B] text-black"
            }`}
            onClick={() => {
              setActiveTab("core");
            }}
          >
            CORE TEAM
          </button>
          <button
            className={`cursor-pointer flex-1 text-center py-2 font-bold rounded-[73.8px] text-sm sm:text-base transition-all duration-100 ${
              activeTab === "club"
                ? "bg-[#A50C00] text-white"
                : "bg-[#E5B73B] text-black"
            }`}
            onClick={() => setActiveTab("club")}
          >
            CLUB HEADS
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full z-10 mt-41 ">
        <CardsCoreTeam activeTab={activeTab} />
        <CardsClubHeads activeTab={activeTab} />
      </div>

    </div>
  );
}
