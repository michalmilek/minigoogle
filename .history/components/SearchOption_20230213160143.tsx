import React from "react";

const SearchOption = ({ title, Icon }: any) => {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default SearchOption;
