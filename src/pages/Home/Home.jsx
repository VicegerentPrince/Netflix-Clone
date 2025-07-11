import React from "react";
import Navbar from "../../components/Navbar";
import banner from "../../assets/netflix-hero-banner.jpg";
import hero_title from "../../assets/hero_title.png";
import { PlayIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="hero relative">
        <div>
            <img src={banner} class="w-full h-full object-cover" alt="Hero image" />
            <div class="absolute inset-0 mask-r-from-10% opacity-65 bg-black w-[70%]"></div>
        </div>
        
        <div className="hero-caption absolute top-30 px-16 w-full">
          <img src={hero_title} alt="" className="hero-title h-46" />
          <p className="font-extrabold mt-4 text-lg text-shadow-lg cursor-default">Watch Final Season Now</p>
          <p className="text-sm font-bold mt-2 w-[31%] text-shadow-lg cursor-default">
            With nothing to lose, Seong Gi-hun accepts a strange invitation
            to compete in thrilling yet deadly children's games for a chance to
            win 45.6 billion won.
          </p>
          <div className="hero-btns flex items-center mt-6 gap-4">
            <button className="flex items-center gap-2 px-7 py-2.5 bg-white text-black rounded-md font-bold cursor-pointer text-lg hover:bg-white/80 ease-in-out transition-colors"> <PlayIcon className="h-5 w-5"/> Play</button>
            <button className="flex items-center gap-2 px-7 py-2.5 bg-gray-400/50 text-white rounded-md font-bold cursor-pointer text-lg hover:bg-gray-400/30 ease-in-out transition-colors text-shadow-lg"> <InformationCircleIcon className="h-5 w-5 shadow-2xl text-shadow-2xs"/> More Info</button>
          </div>
        </div>

        <div className="age-warn flex items-center gap-3 bg-gray-900 opacity-90 h-8 w-24 absolute right-0 bottom-50">
            <div className="h-full w-1 bg-white"></div>
            <p className="cursor-default">A 18+</p>
        </div>

        <div className="bottom-viginate"></div>
      </div>
    </div>
  );
};

export default Home;
