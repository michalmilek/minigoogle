import { type } from "os";
import React, { SVGProps } from "react";

type props = {
  title: string;
  Icon: any;
};

const SearchOption = ({ title, Icon }: props) => {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default SearchOption;
