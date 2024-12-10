import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";

const Navbar = ({toggleSidebar, isSidebarOpen}) => {
  return (
    <div className={`flex  justify-between items-center bg-gray-800 text-white p-4 w-full 
    ${isSidebarOpen ? ' ' : 'md:flex-grow fixed left-0 top-0 z-50 w-full'} `}>
      {/* Left Side: Title */}
      <div className="flex items-center space-x-1">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ?
                     '' : 
                     (<TiThMenu  className="text-2xl cursor-pointer" />)}</button>
        <h1 className="text-xl font-bold">Overview</h1>
      </div>

      {/* Right Side: Search and Profile */}
      <div className="flex items-center space-x-4">
        <CiSearch className="text-2xl cursor-pointer" />
        <img
          className="w-10 h-10 rounded-full cursor-pointer hidden md:block"
          src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
          alt="user-icon"
        />
        <div className=" flex-col hidden md:flex ">
          <span className="font-semibold">Hi Pinki</span>
          <span className="text-xs text-gray-300">Admin</span>
        </div>
        <IoIosArrowDown className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
