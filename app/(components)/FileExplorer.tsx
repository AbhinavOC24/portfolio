"use client";
import React from "react";

import { useViewSettings } from "../store/ViewStore";
import IconView from "./View/IconView";
import ListView from "./View/ListView";
import TreeView from "./View/TreeView";
function FileExplorer() {
  const view = ["tree", "list", "icon"];
  const { currentView } = useViewSettings();

  return (
    <div className="mb-8">
      {view[currentView] === "icon" && <IconView />}
      {view[currentView] === "list" && <ListView />}
      {view[currentView] === "tree" && <TreeView />}

      <hr className="border-dashed mt-5 md:hidden " />
    </div>
  );
}

export default FileExplorer;
