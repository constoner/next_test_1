import useSWR from "swr";

import * as DATA_API from "./DATA_API";

const getData = (APIpath: string) => {
  return fetch(APIpath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      } else {
        return response;
      }
    })
    .then((response) => response.json());
};

const useList = (listNumber: string) => {
  const APIpath: string = `${DATA_API.MAIN_PATH}${DATA_API.LIST_PATH}${listNumber}`;

  const { data, error, isLoading } = useSWR(APIpath, getData, {
    revalidateIfStale: false,
    revalidateOnReconnect: true,
  });

  return {
    data,
    isLoading,
    error,
  };
};

const useItem = (itemId: string) => {
  const APIpath: string = `${DATA_API.MAIN_PATH}${DATA_API.ITEM_PATH}${itemId}`;

  const { data, error, isLoading } = useSWR(APIpath, getData, {
    revalidateIfStale: false,
    revalidateOnReconnect: true,
  });

  return {
    data,
    isLoading,
    error,
  };
};

const localStorageProvider = () => {
  const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("app-cache", appCache);
  });

  return map;
};

export { useList, useItem, localStorageProvider };
