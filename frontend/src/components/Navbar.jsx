import React from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          TransitOps
        </h1>
        <p className="text-sm text-gray-500">
          Smart Transport Operations Platform
        </p>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search vehicles, drivers..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative text-gray-600 hover:text-blue-600 transition">
          <FaBell size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle
            size={36}
            className="text-blue-600"
          />

          <div className="hidden md:block">
            <h2 className="text-sm font-semibold">
              Fleet Manager
            </h2>
            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;