import Image from "next/image";
import LineBreak from "./(components)/Common/LineBreak";
import LeftPanel from "./(panels)/LeftPanel";
import MiddlePanel from "./(panels)/MiddlePanel";
import RightPanel from "./(panels)/RightPanel";
import FloatingGrapes from "./(components)/Common/FloatingGrapes";
import ScaledLayout from "./(components)/ScaledLayout";
export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className=" flex flex-col md:flex-row w-full max-w-[5000px] max-h-[5000px] mx-auto overflow-visible">
        <LeftPanel />
        <LineBreak />
        <MiddlePanel />
        <LineBreak />
        <RightPanel />
      </div>
      <hr className="border-dashed w-full" />
    </div>
  );
}
