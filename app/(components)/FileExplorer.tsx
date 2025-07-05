"use client";
import React from "react";

import { useViewSettings } from "../store/ViewStore";
import IconView from "./IconView";
import ListView from "./ListView";
import TreeView from "./TreeView";
function FileExplorer() {
  const view = ["tree", "list", "icon"];
  const { currentView } = useViewSettings();

  return (
    <div>
      {view[currentView] === "icon" && <IconView />}
      {view[currentView] === "list" && <ListView />}
      {view[currentView] === "tree" && <TreeView />}
    </div>
  );
}

export default FileExplorer;
