"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getISTStatus } from "../../utils/getTime";
import clock from "../../public/static/Clock.svg";
import envelope from "../../public/static/envelope.svg";
import Link from "next/link";

interface propType {
  type: string;
}
const RESUME_LINK =
  "https://drive.google.com/file/d/1VXt1jLmDK07RVN8Hz4m4IKYKhkvdmt48/view?usp=sharing";
function DisplayBox({ type }: propType) {
  const [timeData, setTimeData] = useState(() => getISTStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeData(getISTStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const { hour, minute, day } = timeData;

  return (
    <div
      className={`flex h-[79px] w-full items-center justify-center  pl-[22px] pr-[72px] border-dashed py-0 relative rounded-[19px] overflow-hidden border  border-black ${
        type != "Date" ? "hover:border-[#803399]" : ""
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
          {type === "Date" ? (
            `${hour}:${minute} IST`
          ) : (
            <Link
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Click Here
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayBox;
