import { getItem } from "../../utils/utils";
import ModalContent from "./ModalContent";

const Item = async ({ params }: { params: { itemId: string } }) => {
  const { itemId }: { itemId: string } = params;
  const { name, text }: { name: string; text: string } = await getItem(itemId);

  return <ModalContent title={name} content={text} />;
};

export default Item;
