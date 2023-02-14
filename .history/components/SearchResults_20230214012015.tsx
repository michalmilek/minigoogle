import React from "react";

const SearchResults = ({ results }: any) => {
  return (
    <div className="text-gray-600 text-sm w-screen pl-5">
      About {results.searchInformation.formattedTotalResults} results in{" "}
      {results.searchInformation.formattedSearchTime}s
    </div>
  );
};

export default SearchResults;
