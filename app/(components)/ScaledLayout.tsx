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
      const baseWidth = 1440; // 🎯 your design reference width
      const baseHeight = 900; // 🎯 your design reference height
      const scaleW = window.innerWidth / baseWidth;
      const scaleH = window.innerHeight / baseHeight;

      // ✅ Scale down on smaller screens, scale up on big screens
      // You can cap with `1.5` or remove it if you want infinite scaling
      const maxScale = 1.8; // adjust this if you want
      setScale(Math.min(scaleW, scaleH, maxScale));
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center w-full h-screen overflow-hidden bg-[#f9f3fb]">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "1440px", // fixed design canvas
          height: "900px", // fixed design canvas
        }}
      >
        {children}
      </div>
    </div>
  );
}
