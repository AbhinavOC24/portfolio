import React from "react";

import FileExplorer from "@/app/(components)/FileExplorer";
import IconViewBox from "@/app/(components)/Common/IconViewBox";
function MiddlePanel() {
  return (
    <div className=" h-[725px] w-[549px]">
      <hr className="border-dashed" />
      <IconViewBox />
      <hr className="border-dashed mb-[18px]" />
      <FileExplorer />
    </div>
  );
}

export default MiddlePanel;
