import React from "react";

const SearchResults = ({ results }) => {
  return <div>{results.searchInformation.formattedTotalResults}</div>;
};

export default SearchResults;
