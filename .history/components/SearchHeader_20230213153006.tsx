import React, { useRef } from "react";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import User from "./User";

const SearchHeader = () => {
  const router = useRouter();
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    inputSearchRef.current!.value = "";
  };
  return (
    <header className="sticky top-0 left-0 bg-white flex flex-row my-auto items-center justify-center gap-6 px-2 md:px-0">
      <h1 className="text-3xl md:text-7xl">MM Searchbar</h1>
      <form className="flex items-center justify-center mt-4">
        <div className="flex flex-grow flex-shrink gap-2 items-center justify-center">
          <button type="submit">
            <MagnifyingGlassIcon className="h-8 cursor-pointer" />
          </button>
          <div className="relative flex justify-center items-center w-[90%] md:w-[350px]">
            <input
              type="text"
              defaultValue={router.query.term}
              ref={inputSearchRef}
              className="border transition-all outline-none ring-0 focus:drop-shadow-2xl  text-base w-[100%] h-[100%] px-4 py-2 border-gray-400 rounded-full"
            />
            <XMarkIcon
              onClick={() => clearInput()}
              className="cursor-pointer h-8 absolute top-[50%] right-2 translate-y-[-50%]"
            />
          </div>
          <MicrophoneIcon className="h-8 cursor-pointer" />
        </div>
      </form>
      <User />
    </header>
  );
};

export default SearchHeader;
