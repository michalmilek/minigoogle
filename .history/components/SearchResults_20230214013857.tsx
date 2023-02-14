import React from "react";

const SearchResults = ({ results }: any) => {
  return (
    <div className="text-gray-600 text-sm w-screen pl-5">
      <p>
        About {results.searchInformation.formattedTotalResults} results in{" "}
        {results.searchInformation.formattedSearchTime}s
      </p>
      {results.items.map((result): any => (
        <div key={result.link}>
          <p>{result.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
