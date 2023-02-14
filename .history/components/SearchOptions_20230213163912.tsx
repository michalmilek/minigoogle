import React from "react";
import SearchOption from "./SearchOption";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const SearchOptions = () => {
  const router = useRouter();
  return (
    <div className="flex gap-6 select-none w-full justify-center">
      <SearchOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchOption
        title="Images"
        Icon={PhotoIcon}
        selected={router.query.searchType === "images"}
      />
    </div>
  );
};

export default SearchOptions;
