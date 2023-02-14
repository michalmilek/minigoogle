import React from "react";

const SearchResults = ({ results }: any) => {
  return <div>{results.searchInformation.formattedTotalResults}</div>;
};

export default SearchResults;
