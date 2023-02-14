import { type } from "os";
import React, { ForwardRefExoticComponent, SVGProps } from "react";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

type props = {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  selected: any;
};

const SearchOption = ({ title, Icon, selected }: props) => {
  const router = useRouter();

  const selectTab = (title: any) => {
    router.push(
      `/search?term=${router.query.term}&type=${title === "All" ? "" : title}`
    );
  };
  return (
    <div
      onClick={selectTab}
      className={`flex flex-col md:flex-row transition-all border-b-4 md:gap-1 items-center justify-center ${
        selected
          ? "text-blue-500 font-bold border-b-blue-500"
          : "border-b-transparent"
      }`}>
      <Icon className="h-5 md:h-8" />
      <p className="md:text-lg">{title}</p>
    </div>
  );
};

export default SearchOption;
