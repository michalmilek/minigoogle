import React from "react";

const SearchResults = ({ results }: any) => {
  return (
    <div>About {results.searchInformation.formattedTotalResults} hits</div>
  );
};

export default SearchResults;
