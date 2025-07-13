import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/16/solid";

import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Navbar = () => {

  const [darkNav, setDarkNav] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setDarkNav(window.scrollY >= 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className={`navbar flex items-center justify-between w-full fixed z-50 left-0 top-0 px-6 py-4 md:px-10 md:py-8 2xl:px-20 2xl:py-16 bg-gradient-to-t ${darkNav ? "from-black/30 backdrop-blur-2xl" : "from-transparent"} to-[#000] transition-colors ease-in-out duration-500`}>
      <div className="navbar-left flex items-center gap-8 2xl:gap-14">
        <img src="/logo.png" className="logo h-6 md:h-8 2xl:h-10 cursor-pointer transition-all ease-in-out hover:scale-101 duration-300" alt="Logo"/>
        <ul className="hidden md:flex gap-4 2xl:gap-8 text-sm 2xl:text-2xl">
          <li className="cursor-pointer hover:scale-105 transition-transform">Home</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">TV Shows</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">Movies</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">New & Popular</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">My List</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right flex items-center gap-4">
        <MagnifyingGlassIcon className="h-6 md:h-8 2xl:h-10 hover:scale-107 ease-in-out transition-all" />
        <p className=" hover:scale-107 2xl:text-2xl ease-in-out transition-all cursor-pointer md:block hidden">KIDS</p>
        <BellIcon className="h-5 md:h-7 2xl:h-9 hover:scale-107 ease-in-out transition-all" />
        <div className="flex items-center gap-0 group">
          <UserCircleIcon className="h-6 md:h-8 2xl:h-12 text-blue-400 group-hover:text-blue-300 transition-all ease-in-out" />
          <ChevronDownIcon className="h-4 md:h-6 2xl:h-10 group-hover:translate-y-1 ease-in-out transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
