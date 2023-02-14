import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import React from "react";

const search = () => {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />
    </div>
  );
};

export default search;
