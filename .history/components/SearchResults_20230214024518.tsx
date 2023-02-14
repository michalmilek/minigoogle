import React from "react";
import Parser from "html-react-parser";

const SearchResults = ({ results }: any) => {
  return (
    <div className="w-screen mt-8">
      <p className="text-gray-600 text-sm pl-5 mb-9">
        About {results.searchInformation.formattedTotalResults} results in{" "}
        {results.searchInformation.formattedSearchTime}s
      </p>
      <div className="flex flex-col gap-7 pl-4">
        {results.items.map((result): any => (
          <div
            key={result.link}
            className="border-b pb-4 truncate border-gray-400 shadow-md">
            <div className="group truncate">
              <a
                className="truncate w-[70%] text-sm italic"
                href={result.link}>
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className="group-hover:underline truncate text-xl font-medium text-amber-900 decoration-amber-900">
                  {result.title}
                </h2>
              </a>
            </div>
            <p>{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
