import Image from "next/image";
import LineBreak from "./(components)/LineBreak";
import LeftPanel from "./(panels)/Left/LeftPanel";
import MiddlePanel from "./(panels)/Middle/MiddlePanel";
import RightPanel from "./(panels)/Right/RightPanel";
import FloatingGrapes from "./(components)/FloatingGrapes";
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
      <hr className=" border-dashed" />
    </>
  );
}
