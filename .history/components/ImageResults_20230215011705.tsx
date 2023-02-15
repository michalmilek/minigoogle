import React from "react";

const ImageResults = ({ results }: any) => {
  console.log(results);
  return (
    <div>
      <div>
        {results.items?.map((result): any => (
          <div
            key={result.link}
            className="group">
            <a href={result.image.contextLink}>
              <img
                src={result.link}
                alt={result.link}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageResults;
