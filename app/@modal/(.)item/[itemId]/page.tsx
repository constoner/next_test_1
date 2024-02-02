import Modal from "../../../../components/Modal/Modal";

const ModalItem = ({ params }: { params: { itemId: string } }) => {
  const { itemId }: { itemId: string } = params;

  return <Modal itemId={itemId} />;
};

export default ModalItem;
