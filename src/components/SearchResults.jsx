import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchResults({ query }) {
  const [searchData, setSearchData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [searchType, setSearchType] = useState("");
  const [loading, setLoading] = useState(true);

  const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.themoviedb.org/3/search/${
        searchType ? searchType : "multi"
      }?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=${page}`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        const results =
          searchType === "multi"
            ? res.results
                .filter(
                  (item) =>
                    item.media_type !== "person" &&
                    (item.backdrop_path || item.poster_path)
                )
                .sort((a, b) => b.popularity - a.popularity)
            : res.results
                .filter((item) => item.backdrop_path || item.poster_path)
                .sort((a, b) => b.popularity - a.popularity);
        setTotalPages(res.total_pages || 1);
        setSearchData(results);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [query, page, searchType]);

  return (
    <div className="px-6 py-4 md:px-10 md:py-8 2xl:px-20 2xl:py-16">
      <div className="mt-20 text-black">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="bg-black text-white border border-white px-4 py-2 mb-3 rounded-md"
        >
          <option value="multi">All</option>
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {searchData.length !== 0
          ? searchData.map((card) => {
              const imagePath = card.backdrop_path || card.poster_path;
              return (
                <Link
                  to={`/player/${card.media_type || searchType || "movie"}/${
                    card.id
                  }`}
                  className="relative hover:scale-102 transition-all ease-in cursor-pointer"
                  key={card.id}
                >
                  {imagePath ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${imagePath}`}
                      alt={card.title || card.name || "Media"}
                      className="mask-b-from-24 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="card relative h-full w-full flex-none animate-pulse bg-gray-800 rounded" />
                  )}

                  <p className="absolute bottom-1 right-2 text-xs font-bold">
                    {card.title ||
                      card.name ||
                      card.original_title ||
                      card.original_name ||
                      "Untitled"}
                  </p>
                </Link>
              );
            })
          : [...Array(10)].map(
              (
                _,
                index // Skeletons
              ) => (
                <div
                  key={index}
                  className="card relative flex-none animate-pulse bg-gray-800 rounded"
                />
              )
            )}
      </div>

      {/* Footer */}
      <div className="footer flex justify-center gap-4 mt-10">
        <button
          className="bg-black p-3 rounded"
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Prev
        </button>
        <input
          type="number"
          className="flex items-center justify-between text-center w-20 bg-black"
          value={page}
          onChange={(e) => {
            const newPage = parseInt(e.target.value);
            if (isNaN(newPage) || newPage < 1) return;
            setPage(newPage);
          }}
        />
        <button
          className="bg-black p-3 rounded"
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
