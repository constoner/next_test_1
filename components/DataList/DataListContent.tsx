import Link from "next/link";

import { itemInterface } from "./types";

const DataListContent = ({ data }: { data: itemInterface[] }) => {
  return (
    <ul className="list-group">
      {data.map((item: itemInterface) => (
        <li className="list-group-item w-100" key={item.id}>
          <Link
            className="mb-2 p-1 fs-6 text-decoration-none link-dark link-opacity-75-hover"
            href={`/item/${item.id}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DataListContent;
