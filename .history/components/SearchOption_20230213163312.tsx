import { type } from "os";
import React, { ForwardRefExoticComponent, SVGProps } from "react";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";

type props = {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
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
