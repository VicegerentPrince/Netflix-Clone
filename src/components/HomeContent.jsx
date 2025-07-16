import React from "react";
import banner from "../assets/netflix-hero-banner.jpg";
import hero_title from "../assets/hero_title.png";
import { PlayIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import MovieCards from "../components/MovieCards";
import { useNavigate } from "react-router-dom";

export default function HomeContent() {
  const navigate = useNavigate();
  let heroData = { id: 93405, type: "tv", banner: banner };
//   heroData = false

  return (
    <div className="home-content-wrapper">
      {heroData ? (
        <div className="hero relative">
          <div className="relative">
            <img
              src={banner}
              className="w-full h-full object-cover mask-b-from-80%"
              alt="Hero image"
            />
            <div className="absolute inset-0 mask-r-from-10% opacity-65 bg-black w-[60%]"></div>
          </div>

          <div className="hero-caption flex items-center justify-between md:block absolute top-28 md:top-35 2xl:top-55 px-8 md:px-16 2xl:px-20 2xl:py-10 w-full">
            <img
              src={hero_title}
              alt=""
              className="hero-title h-24 md:h-46 2xl:h-96"
            />
            <p className="font-extrabold hidden md:block mt-4 2xl:mt-16 text-xs md:text-lg 2xl:text-4xl text-shadow-lg cursor-default">
              Watch Final Season Now
            </p>
            <p className="md:block hidden text-sm 2xl:text-3xl font-bold mt-2 2xl:mt-4 w-[31%] text-shadow-lg cursor-default">
              With nothing to lose, Seong Gi-hun accepts a strange invitation to
              compete in thrilling yet deadly children's games for a chance to
              win 45.6 billion won.
            </p>

            <div className="hero-btns md:flex md:items-center md:mt-6 2xl:mt-13 gap-4">
              <button
                onClick={() =>
                  navigate(`/player/${heroData.type}/` + heroData.id)
                }
                className="flex items-center md:mb-0 mb-2 md:gap-2 px-2 py-1 md:px-7 md:py-2.5 2xl:px-14 2xl:py-4 bg-white text-black rounded-md font-bold cursor-pointer text-xs md:text-lg 2xl:text-4xl hover:bg-white/80 ease-in-out transition-colors"
              >
                {" "}
                <PlayIcon className="md:h-5 md:w-5 w-3 2xl:h-10 2xl:w-10" />{" "}
                Play
              </button>
              <button className="flex items-center md:gap-2 px-1.5 py-1 md:px-7 md:py-2.5 2xl:px-14 2xl:py-4 bg-gray-500/70 text-white rounded-md font-bold cursor-pointer text-xs md:text-lg 2xl:text-4xl hover:bg-gray-400/30 ease-in-out transition-colors text-shadow-lg">
                {" "}
                <InformationCircleIcon className="md:h-5 md:w-5 w-3 2xl:h-10 2xl:w-10 shadow-2xl text-shadow-2xs" />{" "}
                More
              </button>
            </div>

            <div className="age-warn hidden md:flex items-center gap-3 bg-gray-900 opacity-80 h-8 w-24 2xl:h-16 2xl:w-48 absolute right-0 bottom-0">
              <div className="h-full w-1 bg-white"></div>
              <p className="cursor-default 2xl:text-2xl">A 18+</p>
            </div>
          </div>
          <MovieCards
            className=" pl-4 pt-3 md:pt-0 md:pl-8 2xl:pl-16 md:-mt-38 2xl:-mt-60 relative"
            title={"Trending"}
            link={
              "https://api.themoviedb.org/3/trending/all/day?language=en-US"
            }
          />
        </div>
      ) : (
        <div className="hero relative">
          <div className="relative">
            <div className="w-full h-[400px] md:h-[500px] 2xl:h-[700px] bg-gray-800 animate-pulse rounded"></div>
            <div className="absolute inset-0 mask-r-from-10% opacity-65 bg-black w-[60%]"></div>
          </div>

          <div className="hero-caption flex items-center justify-between md:block absolute top-28 md:top-35 2xl:top-55 px-8 md:px-16 2xl:px-20 2xl:py-10 w-full">
            <div className="bg-gray-700 animate-pulse h-24 md:h-46 2xl:h-96 w-[300px] md:w-[450px] 2xl:w-[700px] rounded" />
            <div className="mt-4 2xl:mt-16 bg-gray-700 animate-pulse h-4 md:h-6 2xl:h-10 w-[60%] rounded"></div>
            <div className="mt-2 2xl:mt-4 bg-gray-700 animate-pulse h-3 md:h-5 2xl:h-8 w-[40%] rounded"></div>

            <div className="hero-btns md:flex md:items-center md:mt-6 2xl:mt-13 gap-4">
              <div className="bg-gray-600 animate-pulse w-24 md:w-36 2xl:w-60 h-8 md:h-10 2xl:h-14 rounded"></div>
              <div className="bg-gray-600 animate-pulse w-24 md:w-36 2xl:w-60 h-8 md:h-10 2xl:h-14 rounded"></div>
            </div>
          </div>
        </div>
      )}
      <div className="more-cards pl-4 md:pl-8 2xl:pl-16 mt-10 flex flex-col gap-4">
        <MovieCards className="" title="Now Playing" category={"now_playing"} />
        <MovieCards className="" title="Top Rated" category={"top_rated"} />
        <MovieCards className="" title="Popular" category="popular" />
        <MovieCards className="" title="Upcoming" category={"upcoming"} />
        <MovieCards
          className=""
          title="On the Air"
          category={"on_the_air"}
          type="tv"
        />
      </div>
    </div>
  );
}
