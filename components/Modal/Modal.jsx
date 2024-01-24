import { getItem } from "../../utils/utils";
import ModalContent from "./ModalContent";

const Item = async ({ params }) => {
  const { itemId } = params;
  const { name, text } = await getItem(itemId);

  return <ModalContent title={name} content={text} />;
};

export default Item;
