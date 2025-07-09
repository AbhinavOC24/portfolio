import React from "react";
import { useViewSettings } from "../../store/ViewStore";
import Image from "next/image";
import openFolder from "../../public/static/folder_open.svg";
import closeFolder from "../../public/static/folder_closed.svg";
import pdf from "../../public/static/pdf.svg";
import spotify from "../../public/static/Music.svg";
import globe from "../../public/static/globe.svg";

type FileSystemNode = {
  [key: string]: FileSystemNode | FileSystemValue;
};

type FileSystemValue = "file" | "spotify" | "project" | FileSystemNode;

const fileSystem: FileSystemNode = {
  Work: {
    About: {
      "About_me.pdf": "file",
      "Tools.pdf": "file",
    },
    Projects: {
      Chatty: "project",
      // Sketchspace: "project"
    },
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
            !isProj &&
            isInPath &&
            typeof value === "object" &&
            renderTree(value as FileSystemNode, currentFullPath)}
        </div>
      );
    });
  };

  return <div className="text-sm">{renderTree(fileSystem)}</div>;
}

export default TreeView;
