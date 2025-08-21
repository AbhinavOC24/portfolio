// types/fileSystem.ts

export type FileSystemEntry = "file" | "spotify" | "project" | FileSystem;

// A FileSystem is just an object where keys map to either another folder (FileSystem) or a leaf entry type
export interface FileSystem {
  [key: string]: FileSystemEntry;
}

export const fileSystem: FileSystem = {
  Work: {
    About: {
      "About_me.pdf": "file",
      "Tools.pdf": "file",
    },
    Projects: {
      Chatty: "project",
      Sketchspace: "project",
      ShuttrSpace: "project",
      SPay: "project",
    },
  },
  Spotify_playlists: {
    "Chill.spot": "spotify",
  },
};

// 🔹 Helper to get nested layers for TreeView.tsx
export function getLayerChain(path: string[]): FileSystem[] {
  const layers: FileSystem[] = [];
  let current: FileSystemEntry = fileSystem;

  layers.push(current as FileSystem);

  for (const part of path) {
    if (typeof current === "object") {
      current = current[part];
      if (current && typeof current === "object") {
        layers.push(current);
      }
    }
  }

  return layers;
}

//IconView
export default function getCurrentLayer(path: string[]) {
  let layer: any = fileSystem;

  for (let part of path) {
    if (layer && typeof layer === "object" && part in layer) {
      layer = layer[part];
    } else {
      return {};
    }
  }

  return layer;
}
