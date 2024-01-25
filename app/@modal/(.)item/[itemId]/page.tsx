import Modal from "../../../../components/Modal/Modal";

const ModalItem = ({ params }: { params: { itemId: string } }) => {
  return <Modal params={params} />;
};

export default ModalItem;
