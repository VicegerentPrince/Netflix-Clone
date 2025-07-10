import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/16/solid";

import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between w-full fixed left-0 top-0 px-10 py-8">
      <div className="navbar-left flex items-center gap-8">
        <img src="/logo.png" alt="" className="h-8" />
        <ul className="flex gap-4 text-sm">
          <li className="cursor-pointer hover:scale-105 transition-transform">Home</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">TV Shows</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">Movies</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">New & Popular</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">My List</li>
          <li className="cursor-pointer hover:scale-105 transition-transform">Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right flex items-center gap-4">
        <MagnifyingGlassIcon className="h-8 hover:scale-107 ease-in-out transition-all" />
        <p className="font-medium hover:scale-107 ease-in-out transition-all cursor-pointer">KIDS</p>
        <BellIcon className="h-8 hover:scale-107 ease-in-out transition-all" />
        <div className="flex items-center gap-0">
          <UserCircleIcon className="h-8 text-blue-400 hover:text-blue-300 transition-all ease-in-out" />
          <ChevronDownIcon className="h-6 hover:translate-y-1 ease-in-out transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
