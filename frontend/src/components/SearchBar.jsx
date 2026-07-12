import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <FaSearch className="absolute left-4 top-3 text-gray-400" />

      <input
        type="text"
        placeholder="Search vehicle..."
        value={value}
        onChange={onChange}
        className="w-full bg-[#202020] border border-gray-700 rounded-lg py-2 pl-11 pr-4 outline-none text-white"
      />
    </div>
  );
};

export default SearchBar;