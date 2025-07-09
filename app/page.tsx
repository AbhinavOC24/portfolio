import Image from "next/image";
import LineBreak from "./(components)/Common/LineBreak";
import LeftPanel from "./(panels)/LeftPanel";
import MiddlePanel from "./(panels)/MiddlePanel";
import RightPanel from "./(panels)/RightPanel";
import FloatingGrapes from "./(components)/Common/FloatingGrapes";
export default function Home() {
  return (
    <>
      <div className=" flex w-screen ">
        <LeftPanel />
        <LineBreak />
        <MiddlePanel />
        <LineBreak />
        <RightPanel />
        <FloatingGrapes />
      </div>
      <hr className=" border-dashed mt-[25px]" />
    </>
  );
}
