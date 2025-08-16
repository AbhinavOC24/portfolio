import React from "react";
import { useViewSettings } from "../../store/ViewStore";
import Image from "next/image";
import openFolder from "../../public/static/folder_open.svg";
import closeFolder from "../../public/static/folder_closed.svg";
import pdf from "../../public/static/pdf.svg";
import music from "../../public/static/Music.svg";
import Back from "../../public/static/Back.svg";
import globe from "../../public/static/globe.svg";
// 🔹 Define file system entry types
import { getLayerChain } from "@/app/utils/fileSystemTree";

// 🔹 Main Component
function TreeView() {
  // Make sure useViewSettings is typed correctly in your store
  const {
    path,
    setCurrentPath,
    openedFile,
    setOpenedFile,
  }: {
    path: string[];
    setCurrentPath: (path: string[]) => void;
    openedFile: string | null;
    setOpenedFile: (file: string) => void;
  } = useViewSettings();

  const layers = getLayerChain(path);

  return (
    <div className="flex">
      {layers.map((layer, index) => (
        <div key={index} className="w-48 shrink-0 p-1">
          {Object.keys(layer).map((key) => {
            const value = layer[key];
            let isOpen = false;

            const isFolder = typeof value === "object";
            const isFile = value === "file";
            const isMusic = value === "spotify";
            const isProj = value === "project";
            let icon = closeFolder;
            if (isFolder) {
              isOpen = path[index] === key;
              icon = isOpen ? openFolder : closeFolder;
            }
            if (isFile) icon = pdf;
            if (isMusic) icon = music;
            if (isProj) icon = globe;

            return (
              <div
                key={key}
                className={`font-family-pp text-xl h-[20px] mb-[8px] ${
                  isOpen ? "bg-gray-300" : ""
                }`}
              >
                <div className="flex w-[180px] justify-between">
                  <button
                    onClick={() => {
                      if (isFolder) {
                        setCurrentPath([...path.slice(0, index), key]);
                      } else {
                        setOpenedFile(key);
                      }
                    }}
                    className={`flex items-center gap-1 p-1 h-[20px] mb-2 ${
                      openedFile === key ? "bg-green-200 w-[150px]" : ""
                    } ${isOpen ? "bg-gray-300" : ""}`}
                  >
                    <Image
                      src={icon}
                      alt="icon"
                      className="translate-y-[-2px]"
                      width={isFile ? 14 : 18}
                      height={isFile ? 14 : 18}
                    />
                    {key}
                  </button>
                  {isOpen && (
                    <Image
                      src={Back}
                      alt=""
                      className="rotate-180 translate-y-[-5px]"
                      width={6}
                      height={6}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default TreeView;
