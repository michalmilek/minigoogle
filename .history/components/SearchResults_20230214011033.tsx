import React from "react";

const SearchResults = ({ results }: any) => {
  return (
    <div>
      About {results.searchInformation.formattedTotalResults} results in{" "}
      {results.searchInformation.formattedSearchTime}s
    </div>
  );
};

export default SearchResults;
