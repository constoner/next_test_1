"use client";

import { useRef } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ModalContent from "./ModalContent";

import { getItem } from "../../utils/utils";

import { itemInterface } from "./types";

const Item = ({ itemId }: { itemId: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<itemInterface>({
    name: "",
    result: "",
    text: "",
  });

  const route = useRouter();

  const closeModal = () => {
    if (window.history.length > 2) {
      route.back();
    } else {
      route.push("/list/1");
    }
  };

  useEffect(() => {
    getItem(itemId)
      .then((output) => {
        setData(output);
      })
      .then(() => setLoading(false));
  }, []);

  return (
    <ModalContent
      title={data?.name}
      content={data?.text}
      closeModal={closeModal}
      loading={loading}
    />
  );
};

export default Item;
