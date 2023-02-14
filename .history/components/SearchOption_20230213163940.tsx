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
    <div className="flex flex-col md:flex-row md:gap-1 items-center justify-center">
      <Icon className="h-5 md:h-8" />
      <p className="md:text-lg">{title}</p>
    </div>
  );
};

export default SearchOption;
