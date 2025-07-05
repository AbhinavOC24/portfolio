import React from "react";
import { useViewSettings } from "../store/ViewStore";
import Image from "next/image";
import openFolder from "../public/static/folder_open.svg";
import closeFolder from "../public/static/folder_closed.svg";
import pdf from "../public/static/pdf.svg";
import spotify from "../public/static/Music.svg";
type FileSystemValue = "file" | "spotify";
type FileSystemNode = {
  [key: string]: FileSystemNode | FileSystemValue;
};

const fileSystem: FileSystemNode = {
  Work: {
    About: {
      "About_me.pdf": "file",
      "Tools.pdf": "file",
    },
    Projects: {},
  },
  Spotify_playlists: {
    "Chill.spot": "spotify",
  },
};

function TreeView() {
  const { path, setCurrentPath, openedFile, setOpenedFile } = useViewSettings();

  const renderTree = (node: FileSystemNode, nodePath: string[] = []) => {
    return Object.keys(node).map((key) => {
      const value = node[key];
      const currentFullPath = [...nodePath, key];

      const isInPath = path[nodePath.length] === key;
      const isFile = value === "file";

      const isMusic = value === "spotify";
      let icon;

      if (isFile) {
        icon = pdf;
      } else if (isMusic) {
        icon = spotify;
      } else if (isInPath) {
        icon = openFolder;
      } else {
        icon = closeFolder;
      }

      return (
        <div key={currentFullPath.join("/")} className="ml-4">
          <button
            onClick={() => {
              if (isFile || isMusic) {
                setOpenedFile(key);
              } else {
                setCurrentPath(currentFullPath);
              }
            }}
            className={`flex items-center text-left p-1
  ${openedFile === key ? "bg-green-200" : ""}
  ${!isFile && !isMusic && isInPath ? "bg-grey" : ""}
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
          {!isFile &&
            !isMusic &&
            isInPath &&
            renderTree(value, currentFullPath)}
        </div>
      );
    });
  };

  return <div className="text-sm">{renderTree(fileSystem)}</div>;
}

export default TreeView;
