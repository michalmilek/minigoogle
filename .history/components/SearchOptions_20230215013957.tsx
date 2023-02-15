import React, { useState } from "react";
import SearchOption from "./SearchOption";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const SearchOptions = () => {
  const router = useRouter();
  return (
    <div className="flex gap-6 select-none w-full justify-center mt-10">
      <SearchOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={selected}
        setSelected={setSelected}
      />
      <SearchOption
        title="Images"
        Icon={PhotoIcon}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default SearchOptions;
