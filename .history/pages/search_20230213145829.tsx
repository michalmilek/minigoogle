import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const search = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />
      <form>
        <input
          type="text"
          defaultValue={router.query.term}
        />
      </form>
    </div>
  );
};

export default search;
