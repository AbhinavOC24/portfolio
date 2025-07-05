import React, { useState } from "react";
import { useViewSettings } from "../../store/ViewStore";
import Image from "next/image";
import getCurrentLayer from "../../utils/getCurrentLayer";

import Folder from "../../public/static/FOLDER.svg";
import Music from "../../public/static/Music.svg";
import pdf from "../../public/static/pdf.svg";
import globe from "../../public/static/globe.svg";

export default function IconView() {
  const { path, setCurrentPath, setOpenedFile } = useViewSettings();
  const currentLayer = getCurrentLayer(path);
  const entries = Object.keys(currentLayer);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-4">
      {entries.map((key) => {
        const value = currentLayer[key];
        const isFolder = typeof value === "object";
        const isFile = value === "file";
        const isMusic = value === "spotify";
        const isProj = value === "project";

        let icon = Folder;
        if (isFile) icon = pdf;
        if (isMusic) icon = Music;
        if (isProj) icon = globe;

        return (
          <div
            key={key}
            className={`flex flex-col items-center p-2 w-24 cursor-pointer rounded
              ${selected === key ? "bg-[#F2E8FC]" : "hover:bg-[#EEE7F6]"}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelected(key);
              if (isFile || isMusic || isProj) {
                setOpenedFile(key);
              }
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              if (isFolder) {
                setCurrentPath([...path, key]);
              } else {
                console.log("Open file:", key);
              }
            }}
          >
            <Image src={icon} alt="icon" width={40} height={40} />
            <div className="mt-1 text-sm text-center break-words">{key}</div>
          </div>
        );
      })}
    </div>
  );
}
