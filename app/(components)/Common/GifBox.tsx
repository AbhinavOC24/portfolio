import React from "react";
import Image from "next/image";
import Girantina from "../../public/static/girantina.gif";
function GifBox() {
  return (
    <div className="border w-full h-full sm:h-[198px] border-dashed rounded-[19px] mt-[20px] overflow-clip">
      <Image src={Girantina} alt="girantina" unoptimized />
    </div>
  );
}

export default GifBox;
