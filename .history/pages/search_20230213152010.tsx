import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { MutableRefObject, useRef } from "react";
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
    inputSearchRef.current!.value = "";
  };
  return (
    <div className="flex flex-col">
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />
    </div>
  );
};

export default search;
