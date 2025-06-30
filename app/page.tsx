import Image from "next/image";
import LineBreak from "./(components)/LineBreak";
import LeftPanel from "./(panels)/Left/LeftPanel";
import MiddlePanel from "./(panels)/Middle/MiddlePanel";
import RightPanel from "./(panels)/Right/RightPanel";
export default function Home() {
  return (
    <>
      <div className=" flex w-screen ">
        <LeftPanel />
        <LineBreak />
        <MiddlePanel />
        <LineBreak />
        <RightPanel />
      </div>
      <hr className=" border-dashed" />
    </>
  );
}
