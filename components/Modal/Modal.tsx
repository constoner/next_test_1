"use client";

import { useRouter } from "next/navigation";

import ModalContent from "./ModalContent";

import { useItem } from "../../utils/utils";

const Item = ({ itemId }: { itemId: string }) => {
  const { data, isLoading, error } = useItem(itemId);

  const route = useRouter();

  const closeModal = () => {
    if (window.history.length > 2) {
      route.back();
    } else {
      route.push("/list/1");
    }
  };

  return (
    <ModalContent
      title={data?.name}
      content={data?.text}
      closeModal={closeModal}
      loading={isLoading}
    />
  );
};

export default Item;
