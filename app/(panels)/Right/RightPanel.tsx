"use client";
import AboutMe from "@/app/(components)/Files/AboutMe";
import ChillSpotify from "@/app/(components)/Files/ChillSpotify";
import Tools from "@/app/(components)/Files/Tools";
import { useViewSettings } from "@/app/store/ViewStore";
import React from "react";

function RightPanel() {
  const { openedFile } = useViewSettings();
  console.log(openedFile);
  const RenderComponent: React.FC = () => {
    switch (openedFile) {
      case "Chill.spot":
        return <ChillSpotify />;
      case "About_me.pdf":
        return <AboutMe />;
      case "Tools.pdf":
        return <Tools />;
      // case "pencil":
      //   return <PencilSettingsSidebar />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className=" h-[725px] w-[402px] ">
        <RenderComponent />
      </div>
    </>
  );
}

export default RightPanel;
