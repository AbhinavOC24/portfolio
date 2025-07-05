import React, { useState } from "react";
import { useViewSettings } from "../store/ViewStore";
import Image from "next/image";
import getCurrentLayer from "../utils/getCurrentLayer";
import Folder from "../public/static/FOLDER.svg";
import Music from "../public/static/Music.svg";
import pdf from "../public/static/pdf.svg";
export default function IconView() {
  const { path, setCurrentPath, setOpenedFile } = useViewSettings();
  const currentLayer = getCurrentLayer(path);
  const entries = Object.keys(currentLayer);

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-[14px]">
      {entries.map((key) => {
        const value = currentLayer[key];
        const isFile = value === "file";
        const isMusic = value === "spotify";
        return (
          <div
            key={key}
            onClick={(e) => {
              e.stopPropagation();
              if (isFile || isMusic) setOpenedFile(key);
              setSelected(key);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              if (isFile || isMusic) {
                console.log("Open file:", key);
              } else {
                setCurrentPath([...path, key]);
              }
            }}
            className={`flex flex-col items-center p-2 w-[105px] cursor-pointer rounded 
                        ${
                          selected === key
                            ? "bg-[#F2E8FC]"
                            : "hover:bg-[#EEE7F6]"
                        }`}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {isFile ? (
                <span className="text-3xl">
                  <Image src={pdf} width={40} height={40} alt="pdf"></Image>
                </span>
              ) : isMusic ? (
                <Image src={Music} alt="music" width={40} height={40} />
              ) : (
                <Image src={Folder} alt="folder" width={40} height={40} />
              )}
            </div>
            <div className="mt-1 text-sm text-center break-words">{key}</div>
          </div>
        );
      })}
    </div>
  );
}
