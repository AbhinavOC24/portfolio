import Image from "next/image";
import Link from "next/link";
import Music from "../../public/static/Music.svg";
const ChillSpotify = () => {
  return (
    <div className="h-[725px] w-auto flex justify-center items-center  ">
      <div className="flex flex-col gap-3 justify-center items-center translate-y-[-10px]">
        <div className="w-[190px] h-[190px] bg-white flex justify-center items-center">
          <Image src={Music} alt="Music" className="w-[150px] h-[150px]" />
        </div>
        <div className="font-family-neue font-bold text-[20px]">Chill</div>
        <div className="flex-wrap w-[310px] text-sm font-family-neue text-center leading-normal">
          A playlist featuring my favorite songs to help me boost my
          productivity levels.
        </div>
        <Link
          href="https://open.spotify.com/playlist/1gmXWhh67F549lGHOKP3ci?si=052656cd8b574d21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B404F9] text-sm"
        >
          Listen On Spotify
        </Link>
      </div>
    </div>
  );
};

export default ChillSpotify;
