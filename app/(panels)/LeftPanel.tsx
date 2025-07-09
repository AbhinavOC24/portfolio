import React from "react";
import ProfileButton from "@/app/(components)/Common/ProfileButton";
import DisplayBox from "@/app/(components)/Common/DisplayBox";
import GifBox from "@/app/(components)/Common/GifBox";

function LeftPanel() {
  return (
    <div className=" h-[725px] w-[381px] ">
      <ProfileButton />
      <hr className="mt-[18px] mb-[27px] border-dashed" />
      <div className="flex gap-[17px]">
        <DisplayBox type="Date" />
        <DisplayBox type="Resume" />
      </div>
      <GifBox />

      <hr className="mt-[27px] mb-[18px] border-dashed" />
      <div className="font-family-pp font-bold text-[20px] leading-5 tracking-light">
        I combine design sense with web development skills to build clean,
        functional interfaces. As I learn more about Web3, I enjoy creating
        things that are both useful and visually clear, while keeping up with
        how the space is evolving.
      </div>
      <div className="font-family-neue font-bold mt-[150px]">
        Uttarakhand, IND
      </div>
    </div>
  );
}

export default LeftPanel;
