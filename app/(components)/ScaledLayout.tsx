"use client";
import { useEffect, useState } from "react";

export default function ScaledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1440;
      const scaleFactor = Math.min(window.innerWidth / baseWidth, 1);
      setScale(scaleFactor);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center w-full min-h-screen overflow-hidden bg-[#f9f3fb]">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: "1440px",
          height: "900px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
