import React from "react";
import Parser from "html-react-parser";

const SearchResults = ({ results }: any) => {
  return (
    <div className="w-screen">
      <p className="text-gray-600 text-sm pl-5">
        About {results.searchInformation.formattedTotalResults} results in{" "}
        {results.searchInformation.formattedSearchTime}s
      </p>
      {results.items.map((result): any => (
        <div key={result.link}>
          <a href={result.link}>{result.formattedUrl}</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
