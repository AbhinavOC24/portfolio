import { fileSystem } from "./fileSystemTree";
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
