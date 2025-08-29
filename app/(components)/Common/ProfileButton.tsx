"use client";
import React from "react";
import Image from "next/image";
import Pfp from "../../public/static/Pfp.jpg";
import { getISTStatus } from "../../utils/getTime";
function ProfileButton() {
  const { color } = getISTStatus();

  return (
    <div className="rounded-xl pl-5 pt-5 w-full h-32 my-shadow  flex flex-col ">
      <div className="flex">
        <div className="w-20 h-20 rounded-[19px] relative ">
          <Image
            src={Pfp}
            alt="profile"
            fill
            className="object-cover object-top rounded-2xl"
          ></Image>
          <div className="absolute bottom-0 right-0 h-5 w-5 bg-[#F9F3FB] rounded-full  z-10">
            <div className={`h-3.5 w-3.5 m-1 ${color} rounded-full`}></div>
          </div>
        </div>

        <div className="flex flex-col ml-3  h-auto mt-3">
          <div className="text-2xl  h-auto font-family-neue  font-medium">
            Abhinav Chauhan
          </div>
          <div className="w-auto text-lg h-auto translate-y-[-2px]  font-family-pp font-bold text-[#888888]">
            Available between 9:00 - 20:00 IST ⛈
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileButton;
