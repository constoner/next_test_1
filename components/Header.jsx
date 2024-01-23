"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as DATA_API from "../utils/DATA_API";

const Header = () => {
  const pagesArray = Array.from(
    { length: DATA_API.PAGES_NUMBER },
    (item, index) => index + 1
  );
  const [page, setPage] = useState(1);
  const route = useRouter();

  useEffect(() => {
    route.push(`/list/${page}`);
  }, [page]);

  const onButtonClick = (evt, back = false) => {
    evt.preventDefault();
    if (!back && page < DATA_API.PAGES_NUMBER) {
      setPage((prev) => prev + 1);
    } else if (back && page > DATA_API.START_PAGE) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <header>
      <a href={"/"}>Logo</a>
      <nav>
        <a href={"/"} onClick={(evt) => onButtonClick(evt, true)}>
          {"<"}
        </a>
        <ul>
          {pagesArray.map((item, index) => (
            <li key={index}>
              <Link href={`/list/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
        <a href={"/"} onClick={(evt) => onButtonClick(evt, false)}>
          {">"}
        </a>
      </nav>
    </header>
  );
};

export default Header;
