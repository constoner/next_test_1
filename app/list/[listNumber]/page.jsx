import Link from "next/link";
import * as DATA_API from "../../../utils/DATA_API";

const getData = async (listNumber) => {
  return fetch(`${DATA_API.MAIN_PATH}${DATA_API.LIST_PATH}${listNumber}`, {
    cache: "no-store",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      } else {
        return response;
      }
    })
    .then((response) => response.json());
};

const Page = async ({ params }) => {
  const { listNumber } = params;
  const data = await getData(listNumber);

  return (
    <>
      <h1 className="h2 mb-5 fw-bold">
        Список элементов. Страница {listNumber}
      </h1>
      <ul className="list-group">
        {data?.items.map((item) => (
          <li className="list-group-item w-50" key={item.id}>
            <Link href={`/item/${item.id}`}>{item.name}</Link>
            {/* <Link href={`/item`}>{item.name}</Link> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
