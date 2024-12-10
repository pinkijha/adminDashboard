import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4 w-full">
      {/* Left Side: Title */}
      <div className="flex items-center space-x-1">
        <TiThMenu className="text-2xl cursor-pointer" />
        <h1 className="text-xl font-bold">Overview</h1>
      </div>

      {/* Right Side: Search and Profile */}
      <div className="flex items-center space-x-4">
        <CiSearch className="text-2xl cursor-pointer" />
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user-icon"
        />
        <div className="flex flex-col ">
          <span className="font-semibold">Hi Pinki</span>
          <span className="text-xs text-gray-300">Admin</span>
        </div>
        <IoIosArrowDown className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
