import React from "react";
import { useViewSettings } from "../../store/ViewStore";
import Image from "next/image";

import openFolder from "../../public/static/folder_open.svg";
import closeFolder from "../../public/static/folder_closed.svg";
import pdf from "../../public/static/pdf.svg";
import spotify from "../../public/static/Music.svg";
import globe from "../../public/static/globe.svg";

import { FileSystem, fileSystem } from "@/app/utils/fileSystemTree";

function ListView() {
  const { path, setCurrentPath, openedFile, setOpenedFile } = useViewSettings();

  const renderTree = (node: FileSystem, nodePath: string[] = []) => {
    return Object.keys(node).map((key) => {
      const value = node[key];
      const currentFullPath = [...nodePath, key];
      const isInPath = path[nodePath.length] === key;

      const isFolder = typeof value === "object";
      const isFile = value === "file";
      const isMusic = value === "spotify";
      const isProj = value === "project";

      let icon;
      if (isFile) {
        icon = pdf;
      } else if (isMusic) {
        icon = spotify;
      } else if (isProj) {
        icon = globe;
      } else if (isFolder) {
        icon = isInPath ? openFolder : closeFolder;
      }

      return (
        <div key={currentFullPath.join("/")} className="ml-4">
          <button
            onClick={() => {
              if (isFile || isMusic || isProj) {
                setOpenedFile(key);
              } else {
                setCurrentPath(currentFullPath);
              }
            }}
            className={`flex items-center text-left p-1
              ${openedFile === key ? "bg-green-200" : ""}
              ${isFolder && isInPath ? "bg-gray-200" : ""}
            `}
          >
            <Image
              src={icon}
              alt="icon"
              width={14}
              height={14}
              className="mr-1"
            />
            {key}
          </button>

          {isFolder &&
            isInPath &&
            renderTree(value as FileSystem, currentFullPath)}
        </div>
      );
    });
  };

  return <div className="text-sm">{renderTree(fileSystem)}</div>;
}

export default ListView;
