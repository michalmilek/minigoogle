import React from "react";

const SearchResults = ({ results }: any) => {
  return (
    <div>About {results.searchInformation.formattedTotalResults} results</div>
  );
};

export default SearchResults;
