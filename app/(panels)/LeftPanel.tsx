import React from "react";
import ProfileButton from "@/app/(components)/Common/ProfileButton";
import DisplayBox from "@/app/(components)/Common/DisplayBox";
import GifBox from "@/app/(components)/Common/GifBox";
import ScaledLayout from "../(components)/ScaledLayout";

function LeftPanel() {
  return (
    <div className="h-100% w-full overflow-visible ">
      <div className="h-fit w-full overflow-visible   ">
        <ProfileButton />
      </div>
      <hr className=" mb-5 mt-5 border-dashed" />
      <div className="flex gap-4">
        <DisplayBox type="Date" />
        <DisplayBox type="Resume" />
      </div>
      <GifBox />

      <hr className="mt-7  border-dashed" />
      <div className="flex flex-col mt-4 justify-between h-60">
        <div className="font-family-pp font-bold text-xl leading-5 tracking-light">
          I combine design sense with web development skills to build clean,
          functional interfaces. As I learn more about Web3, I enjoy creating
          things that are both useful and visually clear, while keeping up with
          how the space is evolving.
        </div>
        <div className="font-family-neue font-bold  ">Uttarakhand, IND</div>
      </div>
    </div>
  );
}

export default LeftPanel;
