import React, { useEffect, useState } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { Link, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners"; 


const Player = ({ loading }) => {
  const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };

  const [movie, setMovie] = useState({});
  const { type, id } = useParams();

  useEffect(() => {
    // console.log(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`);
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => {
        const trailer = res.results.find(
          (m) => m.type === "Trailer" && m.site === "YouTube"
        );
        setMovie(trailer);
        console.log(trailer);
      })
      .catch((err) => console.error(err));
  }, []);

  return !loading ? (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <Link to={"/"} className="absolute left-4 top-3 flex items-center gap-2">
        <ArrowLeftCircleIcon className="h-10" />
        <p className="font-bold">Go Back</p>
      </Link>
      {movie?.key ? (
        <iframe
          src={`https://www.youtube.com/embed/${movie.key}`}
          width="90%"
          height="85%"
          frameBorder="0"
          title="trailer"
          allowFullScreen
          className="rounded-xl mt-8"
        ></iframe>
      ) : (
        <div className="flex mt-8 items-center justify-center card flex-none animate-pulse bg-gray-800 rounded-xl w-[90%] h-[85%]">
          {movie ? <p className="text-white">Loading trailer...</p> : <p>Not Found</p>}
        </div>
      )}
      <div className="flex w-full justify-between px-18 my-4 font-bold">
        <p>
          {movie?.key ? (
            new Date(movie.published_at).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          ) : ( movie ?
            <p className="text-white">Loading trailer...</p> : <p>Not Found</p>
          )}
        </p>
        {movie ? <p className="hidden md:block">{movie.name}</p> : <p className="hidden md:block">Not Found</p>}
        {movie ? <p>{movie.type}</p> : <p>Not Found</p>}
      </div>
    </div>
  ) : (
    <div className="absolute w-full h-full bg-black flex items-center justify-center flex-col">
      <img src="logo.png" alt="" className="mb-10 h-16 md:h-18 2xl:h-20" />
      <BarLoader color="red" height={8} width={160} />
    </div>
  );
};

export default Player;
