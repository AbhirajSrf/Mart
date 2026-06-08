import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="relative my-6 w-fit pr-6">
      <CiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
      <input
        type="text"
        placeholder="Search menu..."
        className="py-1 pl-10 pr-2 w-52 ml-4 bg-transparent border border-white rounded text-white placeholder-white focus:border-blue-300 focus:outline-none transition-colors duration-200"
      />
    </div>
  );
};

export default Search;
