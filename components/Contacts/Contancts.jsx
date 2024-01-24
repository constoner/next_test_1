const Contacts = () => {
  return (
    <div className="d-flex align-items-end fw-semibold">
      <a
        className="ms-4 p-1 fs-6 text-decoration-none text-dark"
        href="https://github.com/constoner"
        target="_blank"
      >
        GitHub
      </a>
      <a
        className="ms-4 p-1 fs-6 text-decoration-none text-dark"
        href="mailto:constantin.kalinin@gmail.com"
      >
        constantin.kalinin@gmail.com
      </a>
      <a
        className="ms-4 p-1 fs-6 text-decoration-none text-dark"
        href="tel:+79313482382"
      >
        +7(931)348 23-82
      </a>
    </div>
  );
};

export default Contacts;
