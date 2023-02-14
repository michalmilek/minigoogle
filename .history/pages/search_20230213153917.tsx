import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";
import SearchHeaderOption from "@/components/SearchHeaderOptions";

const search = () => {
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
