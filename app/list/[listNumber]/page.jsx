import Link from "next/link";
import { getList } from "../../../utils/utils";

const Page = async ({ params }) => {
  const { listNumber } = params;
  const data = await getList(listNumber);

  return (
    <>
      <h1 className="h3 mb-2 fw-bold">Список элементов</h1>
      <p className="fs-5 mb-4 fw-semibold"> Страница {listNumber}</p>
      <ul className="list-group">
        {data?.items.map((item) => (
          <li className="list-group-item w-50" key={item.id}>
            <Link
              className="mb-2 p-1 fs-6 text-decoration-none text-dark"
              href={`/item/${item.id}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
