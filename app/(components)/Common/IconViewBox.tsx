"use client";
import React from "react";
import Image from "next/image";
import icon1 from "../../public/static/icon1.svg";
import icon2 from "../../public/static/icon2.svg";
import icon3 from "../../public/static/icon3.svg";
import { useViewSettings } from "../../store/ViewStore";
import back from "../../public/static/Back.svg";
import root from "../../public/static/Root.svg";

function IconViewBox() {
  const icons = [icon3, icon2, icon1];
  const { currentView, setCurrentView, path, setCurrentPath, setOpenedFile } =
    useViewSettings();

  return (
    <div className="flex my-4 justify-between w-auto h-auto">
      <div className="flex gap-3">
        <button
          onClick={() => {
            setOpenedFile(null);
            setCurrentPath(path.slice(0, -1));
          }}
          disabled={path.length === 0}
        >
          {path.length === 0 ? (
            <Image src={root} alt="root" />
          ) : (
            <Image src={back} alt="back" className="cursor-pointer" />
          )}
        </button>

        <div className="text-xl flex justify-center items-center translate-y-[1px] font-family-pp">
          {path[path.length - 1]}
        </div>
      </div>
      <div className="flex">
        {icons.map((current, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrentView(index)}
              className={`w-[33px] h-[25px] flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                currentView === index ? "bg-[#D6D2D8]" : "bg-[#EFE9F1]"
              }`}
            >
              <Image src={current} alt="icons" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IconViewBox;
