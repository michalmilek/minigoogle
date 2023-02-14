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
    <div className="flex flex-col md:flex-row">
      <Icon className="h-5" />
      <p>{title}</p>
    </div>
  );
};

export default SearchOption;
