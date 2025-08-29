import React from "react";

import FileExplorer from "@/app/(components)/FileExplorer";
import IconViewBox from "@/app/(components)/Common/IconViewBox";
function MiddlePanel() {
  return (
    <div className=" h-auto w-full ">
      <hr className="border-dashed" />
      <IconViewBox />
      <hr className="border-dashed mb-5" />
      <FileExplorer />
    </div>
  );
}

export default MiddlePanel;
