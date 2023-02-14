import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import SearchHeaderOption from "@/components/SearchHeaderOption";

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
      <SearchHeaderOption />
    </div>
  );
};

export default search;
