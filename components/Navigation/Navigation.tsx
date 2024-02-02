"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import NavigationContent from "./NavigationContent";
import * as DATA_API from "../../utils/DATA_API";

const Navigation = () => {
  const pagesArray: number[] = Array.from(
    { length: DATA_API.PAGES_NUMBER },
    (_, index) => index + 1
  );
  const [page, setPage] = useState<number>(1);
  const route = useRouter();
  const firstRenderRef = useRef(false);
  const params: { listNumber: string } = useParams();

  useEffect(() => {
    if (firstRenderRef.current) {
      route.push(`/list/${page}`);
    } else {
      firstRenderRef.current = true;
    }
  }, [page]);

  useEffect(() => {
    if (Object.getOwnPropertyNames(params).length !== 0) {
      setPage(Number(params.listNumber));
    }
  }, [params]);

  const onButtonClick = (
    evt: React.FormEvent<HTMLAnchorElement>,
    back: boolean = false
  ) => {
    evt.preventDefault();
    if (!back && page < DATA_API.PAGES_NUMBER) {
      setPage((prev) => prev + 1);
    } else if (back && page > DATA_API.START_PAGE) {
      setPage((prev) => prev - 1);
    }
  };

  const classNames = {
    enabled:
      "text-decoration-none d-flex align-items-center p-2 link-dark link-opacity-50-hover focus-ring focus-ring-secondary",
    disabled:
      "text-decoration-none d-flex align-items-center p-2 text-body-tertiary pe-none",
  };

  const disableButton = (lastButton: boolean = false) => {
    const page = lastButton ? DATA_API.PAGES_NUMBER : DATA_API.START_PAGE;

    return Number(params.listNumber) === page
      ? classNames.disabled
      : classNames.enabled;
  };

  return (
    <NavigationContent
      pagesArray={pagesArray}
      onButtonClick={onButtonClick}
      disableButton={disableButton}
      current={params}
    />
  );
};

export default Navigation;
