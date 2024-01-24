import * as DATA_API from "../../../../utils/DATA_API";
import Modal from "../../../../components/Modal/Modal";

const getData = async (itemId) => {
  return fetch(`${DATA_API.MAIN_PATH}${DATA_API.ITEM_PATH}${itemId}`, {
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

const Item = async ({ params }) => {
  const { itemId } = params;
  const { name, text } = await getData(itemId);

  return (
    <Modal>
      <h2 className="h2 mb-5 fw-bold text-center">{name}</h2>
      <p className="fs-5 text-body">{text}</p>
    </Modal>
  );
};

export default Item;
