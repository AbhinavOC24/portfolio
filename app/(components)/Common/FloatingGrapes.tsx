import Image from "next/image";
import grapes from "../../public/static/grapges.svg";
const FloatingGrapes = () => {
  return (
    <>
      <Image
        src={grapes}
        alt="grapes"
        width={120}
        className="absolute bottom-[90px] left-[330px] opacity-20  rotate-45 h-auto pointer-events-none"
      />
      <Image
        src={grapes}
        alt="grapes"
        width={120}
        className="absolute bottom-[2%] right-[20%] rotate-45 opacity-20  h-auto pointer-events-none"
      />
      <Image
        src={grapes}
        alt="grapes"
        width={120}
        className="absolute top-[10%] -z-10 right-[5%] -rotate-45   opacity-20  h-auto pointer-events-none"
      />
    </>
  );
};

export default FloatingGrapes;
