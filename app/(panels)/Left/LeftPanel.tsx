import React from "react";
import ProfileButton from "@/app/(components)/ProfileButton";
import DisplayBox from "@/app/(components)/DisplayBox";
import GifBox from "@/app/(components)/GifBox";
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
        Combining creativity with technical expertise, I leverage my design and
        development background to craft forward-thinking solutions while staying
        up-to-date with trends.
      </div>
      <div className="font-family-neue font-bold mt-[105px]">
        Uttarakhand, IND
      </div>
    </div>
  );
}

export default LeftPanel;
