import Link from "next/link";
import { useParams } from "next/navigation";

const NavigationContent = ({ pagesArray, onButtonClick }) => {
  const current = useParams();

  return (
    <nav className="d-flex">
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item d-flex align-items-center p-0">
          <a
            className="text-decoration-none d-flex align-items-center p-2 text-dark"
            href={"/"}
            onClick={(evt) => onButtonClick(evt, true)}
            aria-label="Назад"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </a>
        </li>
        {pagesArray.map((item, index) => (
          <li className="list-group-item py-0 px-1 d-flex" key={index}>
            <Link
              className={
                item.toString() === current.listNumber
                  ? "text-decoration-none p-2 text-dark fw-bold"
                  : "text-decoration-none p-2 text-dark"
              }
              href={`/list/${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="list-group-item d-flex align-items-center p-0">
          <a
            className="text-decoration-none d-flex align-items-center p-2 text-dark"
            href={"/"}
            onClick={(evt) => onButtonClick(evt, false)}
            aria-label="Вперёд"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationContent;
