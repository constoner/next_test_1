import DataList from "../../../components/DataList/DataList";

const Page = ({ params }: { params: { listNumber: string } }) => {
  const { listNumber }: { listNumber: string } = params;

  return (
    <>
      <h1 className="h3 mb-2 fw-bold">Список элементов</h1>
      <p className="fs-5 mb-4 fw-semibold"> Страница {listNumber}</p>
      <DataList listNumber={listNumber} />
    </>
  );
};

export default Page;
