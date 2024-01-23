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
  const data = await getData(params.listNumber);
  return (
    <>
      <h1>Hello, Next.js! {params.listNumber}</h1>
      <ul>
        {data.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Page;
