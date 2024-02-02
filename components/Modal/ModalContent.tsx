import Loader from "../Loader/Loader";

import { modalInterface } from "./types";

const ModalContent = ({
  title,
  content,
  closeModal,
  loading,
}: modalInterface) => {
  return (
    <div>
      <div
        className="backdrop position-absolute top-0 bottom-0 start-0 end-0 bg-black opacity-75"
        onClick={closeModal}
      ></div>
      <div
        className="modal-container position-absolute top-50 start-50 translate-middle bg-light opacity-100 card"
        style={{
          maxWidth: "200%",
          width: "max-content",
          minWidth: "33%",
          minHeight: "280px",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h2 className="card-header h-25 h2 p-5 fw-bold text-center">
              {title}
            </h2>
            <p className="card-body p-5 fs-5 text-body">{content}</p>
          </div>
        )}
        <button
          className="btn btn-secondary d-flex justify-content-center position-absolute top-0 end-0 p-1 m-3"
          type="button"
          aria-label="закрыть окно"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
