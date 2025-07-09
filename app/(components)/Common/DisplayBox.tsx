"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getISTStatus } from "../../utils/getTime";
import clock from "../../public/static/Clock.svg";
import envelope from "../../public/static/envelope.svg";

interface propType {
  type: string;
}

function DisplayBox({ type }: propType) {
  const [timeData, setTimeData] = useState(() => getISTStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeData(getISTStatus());
    }, 30000); // update every second — can change to 60,000 for minute update

    return () => clearInterval(interval);
  }, []);

  const { hour, minute, day } = timeData;

  return (
    <div
      className={`flex h-[79px] w-[190px] items-center justify-center  pl-[22px] pr-[72px] border-dashed py-0 relative rounded-[19px] overflow-hidden border  border-black ${
        type != "Date" ? "cursor-pointer hover:border-[#803399]" : ""
      }`}
    >
      <div className="flex flex-col items-start justify-center gap-3 relative ">
        <div className="flex  items-center gap-1.5 relative ">
          <Image
            className="relative w-[14px] h-[14px] mt-[-0.25px] mb-[2px] ml-[-0.50px]"
            alt="Clock"
            src={type === "Date" ? clock : envelope}
          />

          <div
            className={`relative w-fit mt-[-1.00px]  font-family-pp  text-[#888888] text-[18px]  leading-[normal] whitespace-nowrap`}
          >
            {type === "Date" ? `${day}` : "Resume"}
          </div>
        </div>

        <div
          className={`relative w-[90px] mb-[2px] [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-lg tracking-[0] leading-[normal] whitespace-nowrap ${
            type !== "Date" ? "text-[#803399]" : "text-black"
          } `}
        >
          {type === "Date" ? `${hour}:${minute} IST` : "Click Here"}
        </div>
      </div>
    </div>
  );
}

export default DisplayBox;
