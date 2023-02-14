import React from "react";

const SearchResults = ({ results }: any) => {
  return (
    <div className="text-gray-600 text-sm w-screen pl-5">
      <p>
        About {results.searchInformation.formattedTotalResults} results in{" "}
        {results.searchInformation.formattedSearchTime}s
      </p>
      {results.map((result) => (
        <div key={result.link}></div>
      ))}
    </div>
  );
};

export default SearchResults;
