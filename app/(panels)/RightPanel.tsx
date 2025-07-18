"use client";
import AboutMe from "@/app/(components)/Files/AboutMe";
import Chatty from "@/app/(components)/Files/Chatty";
import ChillSpotify from "@/app/(components)/Files/ChillSpotify";
import Sketchspace from "@/app/(components)/Files/Sketchspace";
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
      case "Sketchspace":
        return <Sketchspace />;
      case "Chatty":
        return <Chatty />;

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
