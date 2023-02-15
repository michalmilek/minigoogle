import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div>
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}>
          <div className="flex mt-5 items-center gap-1 justify-center">
            <p>Previous</p>
            <ChevronLeftIcon className="h-5" />
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}>
          <div className="flex mt-5 items-center gap-1 justify-center">
            <p>Next</p>
            <ChevronRightIcon className="h-5" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
