"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import HeaderContent from "./HeadserContent";
import * as DATA_API from "../../utils/DATA_API";

const Header = () => {
  const pagesArray = Array.from(
    { length: DATA_API.PAGES_NUMBER },
    (_, index) => index + 1
  );
  const [page, setPage] = useState(1);
  const route = useRouter();

  const params = useParams();

  useEffect(() => {
    route.push(`/list/${page}`);
  }, [page]);

  useEffect(() => {
    if (Object.getOwnPropertyNames(params).length !== 0) {
      setPage(Number(params.listNumber));
    }
  }, [params]);

  const onButtonClick = (evt, back = false) => {
    evt.preventDefault();
    if (!back && page < DATA_API.PAGES_NUMBER) {
      setPage((prev) => prev + 1);
    } else if (back && page > DATA_API.START_PAGE) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <HeaderContent pagesArray={pagesArray} onButtonClick={onButtonClick} />
  );
};

export default Header;
