"use client";
import React from "react";
import Image from "next/image";
import Pfp from "../../public/static/Pfp.jpg";
import { getISTStatus } from "../../utils/getTime";
function ProfileButton() {
  const { color } = getISTStatus();

  return (
    <div className="rounded-[19px] pl-[18px] pt-[18px] w-full h-[124px] my-shadow flex">
      <div className="w-[88px] h-[82px] rounded-[19px] relative ">
        <Image
          src={Pfp}
          alt="profile"
          fill
          className="object-cover object-top rounded-[19px]"
        ></Image>
        <div className="absolute bottom-0 right-0 h-[19px] w-[19px] bg-[#F9F3FB] rounded-full  z-10">
          <div
            className={`h-[14px] w-[14px] m-[3px] ${color} rounded-full`}
          ></div>
        </div>
      </div>

      <div className="flex flex-col ml-[13px]  h-auto mt-[12px]">
        <div className="text-[26px]  h-auto font-family-neue  font-medium">
          Abhinav Chauhan
        </div>
        <div className="w-auto text-[18px] h-auto translate-y-[-2px]  font-family-pp font-bold text-[#888888]">
          Available between 9:00 - 20:00 IST ⛈
        </div>
      </div>
    </div>
  );
}

export default ProfileButton;
