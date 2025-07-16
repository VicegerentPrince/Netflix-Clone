import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function MovieCards({
  className = "",
  title,
  category,
  link,
  type,
}) {

  const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${BEARER_TOKEN}`,
    },
  };

  const scroll = useRef();
  const [apiData, setApiData] = useState([]);

  const scrollVertical = (e) => {
    e.preventDefault();
    scroll.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    scroll.current.addEventListener("wheel", scrollVertical);

    fetch(
      link
        ? link
        : `https://api.themoviedb.org/3/${type ? type : "movie"}/${
            category ? category : "upcoming"
          }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`movie-cards ${className}`}>
      <h2 className="font-bold md:text-xl 2xl:text-4xl my-3 2xl:my-6">
        {title}
      </h2>

      <div className="group flex items-center relative">
        <div className="absolute left-0 top-0 h-full flex items-center z-20">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-14 2xl:w-28 bg-gradient-to-r from-transparent to-transparent group-hover:from-black/70 pointer-events-none transition-colors duration-300" />
          <ChevronLeftIcon className="w-6 h-9 2xl:w-14 2xl:h-20 font-bold ml-2 text-transparent group-hover:text-white cursor-pointer transition-colors duration-300 z-50 delay-200" />
        </div>

        <div
          className="cards flex overflow-x-scroll gap-3 items-center relative"
          ref={scroll}
        >
          {apiData.length !== 0
            ? apiData.map((card, index) => {
                return (
                  <Link
                    to={`/player/${card.media_type || type || "movie"}/${
                      card.id
                    }`}
                    className="card relative flex-none hover:scale-105 ease-in-out transition-all"
                    key={index}
                  >
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500` + card.backdrop_path
                      }
                      alt=""
                      className="w-[200px] md:w-[240px] 2xl:w-[480px] mask-b-from-24"
                    />
                    <p className="absolute bottom-1 right-2 text-xs font-bold">
                      {card.original_title
                        ? card.original_title
                        : card.original_name}
                    </p>
                  </Link>
                );
              })
            : // Skeletons
              [...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="card relative flex-none animate-pulse bg-gray-800 w-[200px] md:w-[240px] 2xl:w-[480px] h-[135px] md:h-[150px] 2xl:h-[270px] rounded"
                />
              ))}
        </div>

        <div className="absolute right-0 top-0 h-full flex items-center z-20">
          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-14 2xl:w-28 bg-gradient-to-l from-transparent to-transparent group-hover:from-black/70 transition-colors duration-300 delay-200" />
          <ChevronRightIcon className="w-6 h-9 2xl:w-14 2xl:h-20 font-bold ml-2 text-transparent group-hover:text-white cursor-pointer transition-colors duration-300 z-50 delay-200" />
        </div>
      </div>
    </div>
  );
}
