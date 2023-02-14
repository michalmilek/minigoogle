import React from "react";
import SearchOption from "./SearchOption";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";

const SearchOptions = () => {
  return (
    <div>
      <SearchOption
        title="All"
        Icon={MagnifyingGlassIcon}
      />
      <SearchOption
        title="Images"
        Icon={PhotoIcon}
      />
    </div>
  );
};

export default SearchOptions;
