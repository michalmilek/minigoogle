import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { clear } from "console";

const search = () => {
  const router = useRouter();
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    inputSearchRef.current?.value = "";
  };
  return (
    <div className="flex flex-col">
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />
      <form className="flex flex-col items-center justify-center">
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
        <div className="flex flex-col md:flex-row mt-8 gap-4 md:text-lg">
          <button className="bg-black hover:scale-110 transition-all text-white px-3 py-2 rounded-lg">
            Search
          </button>
          <button className="bg-black hover:scale-110 transition-all text-white px-3 py-2 rounded-lg">
            Fluke
          </button>
        </div>
      </form>
    </div>
  );
};

export default search;
