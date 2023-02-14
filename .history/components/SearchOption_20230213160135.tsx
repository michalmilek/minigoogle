import React from "react";

const SearchOption = ({title<any>, Icon}) => {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default SearchOption;
