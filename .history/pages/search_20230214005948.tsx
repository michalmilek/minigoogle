import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import React from "react";
import SearchOptions from "@/components/SearchOptions";
import { GetServerSideProps } from "next";
import Response from "@/Response";

const search = ({ results }: any) => {
  console.log(results);
  return (
    <div className="flex flex-col">
      <Head>
        <title>Search page</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <SearchHeader />
      <SearchOptions />
    </div>
  );
};

export default search;

export async function getServerSideProps(ctx: any) {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.NEXT_PUBLIC_GOOGLE_API_KEY
        }&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${ctx.query.term}${
          ctx.query.searchType === "image" ? "&searchType=image" : ""
        }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
