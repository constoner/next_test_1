"use client";

import DataListContent from "./DataListContent";
import Loader from "../Loader/Loader";

import { useList } from "../../utils/utils";

const DataList = ({ listNumber }: { listNumber: string }) => {
  const { data, isLoading, error } = useList(listNumber);

  return (
    <div className="position-relative w-50 h-100 p-1 flex-grow-1 bg-white border rounded">
      {isLoading ? <Loader /> : <DataListContent data={data?.items} />}
    </div>
  );
};

export default DataList;
