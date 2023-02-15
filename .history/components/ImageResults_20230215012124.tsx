import React from "react";

const ImageResults = ({ results }: any) => {
  console.log(results);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items?.map((result): any => (
          <div
            key={result.link}
            className="group">
            <a href={result.image.contextLink}>
              <img
                src={result.link}
                alt={result.link}
              />
              <a href={result.image.contextLink}>
                <h1>{result.title}</h1>
              </a>
              <a href={result.image.contextLink}>
                <p>{result.displayLink}</p>
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageResults;
