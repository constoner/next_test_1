"use client";

import { useEffect, useState } from "react";

import DataListContent from "./DataListContent";
import Loader from "../Loader/Loader";

import { getList } from "../../utils/utils";

import { dataInterface } from "./types";

const DataList = ({ listNumber }: { listNumber: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<dataInterface>();

  useEffect(() => {
    getList(listNumber)
      .then((output) => setData(output))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="position-relative w-50 h-100 p-1 flex-grow-1 bg-white border rounded">
      {loading ? <Loader /> : <DataListContent data={data?.items} />}
    </div>
  );
};

export default DataList;
