import * as DATA_API from "./DATA_API";

const getData = async (APIpath: string) => {
  return fetch(APIpath, {
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

const getList = async (listNumber: string) => {
  const APIpath: string = `${DATA_API.MAIN_PATH}${DATA_API.LIST_PATH}${listNumber}`;
  return await getData(APIpath);
};

const getItem = async (itemId: string) => {
  const APIpath: string = `${DATA_API.MAIN_PATH}${DATA_API.ITEM_PATH}${itemId}`;
  return await getData(APIpath);
};

export { getList, getItem };
