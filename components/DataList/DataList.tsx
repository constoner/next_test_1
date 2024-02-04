"use client";

import { SWRConfig } from "swr";

import DataListContent from "./DataListContent";
import Loader from "../Loader/Loader";

import { useList, localStorageProvider } from "../../utils/utils";

const DataList = ({ listNumber }: { listNumber: string }) => {
  const { data, isLoading, error } = useList(listNumber);

  return (
    // @ts-ignore
    <SWRConfig value={{ provider: localStorageProvider }}>
      <div className="position-relative w-50 h-100 p-1 flex-grow-1 bg-white border rounded">
        {isLoading ? <Loader /> : <DataListContent data={data?.items} />}
      </div>
    </SWRConfig>
  );
};

export default DataList;
