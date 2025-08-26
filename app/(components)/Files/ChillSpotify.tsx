import Image from "next/image";
import Link from "next/link";
import Music from "../../public/static/Music.svg";

const ChillSpotify = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col gap-3 justify-center items-center -translate-y-2">
        {/* Square cover box scales with parent */}
        <div className="w-2/3 max-w-[190px] aspect-square bg-white flex justify-center items-center">
          <Image
            src={Music}
            alt="Music"
            className="w-3/4 h-3/4  object-contain"
          />
        </div>

        <div className="font-family-neue font-bold text-lg sm:text-xl">
          Chill
        </div>

        <div className="max-w-[90%] text-xs sm:text-sm font-family-neue text-center leading-normal">
          A playlist featuring my favorite songs to help me boost my
          productivity levels.
        </div>

        {/* Link */}
        <Link
          href="https://open.spotify.com/playlist/1gmXWhh67F549lGHOKP3ci?si=052656cd8b574d21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B404F9] text-xs sm:text-sm hover:underline"
        >
          Listen On Spotify
        </Link>
      </div>
    </div>
  );
};

export default ChillSpotify;
