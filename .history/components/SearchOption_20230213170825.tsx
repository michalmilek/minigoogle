import { type } from "os";
import React, { ForwardRefExoticComponent, SVGProps, useRef } from "react";
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
  selected: string;
  setSelected: () => React.Dispatch<React.SetStateAction<string>>;
};

const SearchOption = ({ title, Icon, selected, setSelected }: props) => {
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);

  const selectTab = (title: any) => {
    if (title === "All") {
      router.push(`/search?term=${router.query.term}&type`);
      setSelected("All");
    }
    if (title === "Images")
      router.push(`/search?term=${router.query.term}&type=image`);
    setSelected("Images");
  };
  return (
    <div
      onClick={() => selectTab(title)}
      ref={divRef}
      className={`flex flex-col md:flex-row ${
        selected === title
          ? "border-b-blue-500 font-bold"
          : "border-b-transparent"
      } transition-all border-b-4 md:gap-1 items-center justify-center`}>
      <Icon className="h-5 md:h-8" />
      <p className="md:text-lg">{title}</p>
    </div>
  );
};

export default SearchOption;
