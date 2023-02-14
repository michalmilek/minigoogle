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
  selected: any;
};

const SearchOption = ({ title, Icon, selected }: props) => {
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);

  const selectTab = (title: any) => {
    if (title === "All") {
      router.push(`/search?term=${router.query.term}&type`);
      divRef.current?.classList.remove("border-b-transparent");
      divRef.current?.classList.add(
        "text-blue-500 font-bold border-b-blue-500"
      );
    }
    if (title === "Images")
      router.push(`/search?term=${router.query.term}&type=image`);
    divRef.current?.classList.remove("border-b-transparent");
    divRef.current?.classList.add("text-blue-500 font-bold border-b-blue-500");
  };
  return (
    <div
      onClick={() => selectTab(title)}
      ref={divRef}
      className={`flex flex-col md:flex-row transition-all border-b-4 md:gap-1 items-center justify-center`}>
      <Icon className="h-5 md:h-8" />
      <p className="md:text-lg">{title}</p>
    </div>
  );
};

export default SearchOption;
