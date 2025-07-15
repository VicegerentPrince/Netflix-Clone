import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/16/solid";

import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { auth, logOut } from "../firebase";

const Navbar = ({
  searchBoxOpen,
  setSearchBoxOpen,
  setIsSearching,
  query,
  setQuery,
}) => {
  const [darkNav, setDarkNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    const handleScroll = () => {
      setDarkNav(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div
      className={`navbar flex items-center justify-between w-full fixed z-50 left-0 top-0 px-6 py-4 md:px-10 md:py-8 2xl:px-20 2xl:py-16 bg-gradient-to-t ${
        darkNav ? "from-black/30 backdrop-blur-2xl" : "from-transparent"
      } to-[#000] transition-colors ease-in-out duration-500`}
    >
      <div className="navbar-left flex items-center gap-8 2xl:gap-14">
        <img
          src="/logo.png"
          className={`md:block ${
            searchBoxOpen ? "hidden" : "block"
          } logo h-6 md:h-8 2xl:h-10 cursor-pointer transition-all ease-in-out hover:scale-101 duration-300 `}
          alt="Logo"
        />
        <ul className="hidden md:flex gap-4 2xl:gap-8 text-sm 2xl:text-2xl">
          <li className="cursor-pointer hover:scale-105 transition-transform">
            Home
          </li>
          <li className="cursor-pointer hover:scale-105 transition-transform">
            TV Shows
          </li>
          <li className="cursor-pointer hover:scale-105 transition-transform">
            Movies
          </li>
          <li className="cursor-pointer hover:scale-105 transition-transform">
            New & Popular
          </li>
          <li className="cursor-pointer hover:scale-105 transition-transform">
            My List
          </li>
          <li className="cursor-pointer hover:scale-105 transition-transform">
            Browse by Language
          </li>
        </ul>
      </div>
      <div className="navbar-right flex items-center gap-4">
        <div>
          {searchBoxOpen ? (
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="py-0.5 px-3 bg-[#333]/40 border-1 border-white/50 rounded-sm"
                onChange={(e) => {
                  const val = e.target.value;
                  setQuery(val);
                  setIsSearching(val.trim().length > 0);
                }}
                value={query}
              />
              <XMarkIcon
                className="h-5 absolute right-1 cursor-pointer hover:scale-107"
                onClick={() => {
                  setSearchBoxOpen(false);
                  setIsSearching(false);
                  setQuery("")
                }}
              />
            </div>
          ) : (
            <MagnifyingGlassIcon
              className="h-6 md:h-8 2xl:h-10 hover:scale-107 ease-in-out transition-all cursor-pointer"
              onClick={() => setSearchBoxOpen(true)}
            />
          )}
        </div>
        <p className=" hover:scale-107 2xl:text-2xl ease-in-out transition-all cursor-pointer md:block hidden">
          KIDS
        </p>
        <BellIcon className="h-5 md:h-7 2xl:h-9 hover:scale-107 ease-in-out transition-all" />

        <div className="relative flex items-center gap-0">
          <div
            className="group flex items-center cursor-pointer"
            onClick={handleShowDropdown}
          >
            <UserCircleIcon className="h-8 text-blue-400 group-hover:text-blue-300 transition-all ease-in-out" />
            <ChevronDownIcon className="h-6 group-hover:translate-y-1 ease-in-out transition-all" />
          </div>

          {showDropdown && (
            <div className="absolute top-[155%] bg-[#000000e6] w-[220px] py-5 px-3 rounded transition-all duration-300 ease-in-out z-50 right-2">
              <p>Welcome {user.displayName}</p>
              <p
                className="underline font-bold cursor-pointer"
                onClick={logOut}
              >
                Sign out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
