const Loader = () => {
  return (
    <div className="position-absolute w-100 h-100 left-0 top-0 d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-secondary"
        style={{ width: "3rem", height: "3rem", opacity: 0.33 }}
        role="status"
      >
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
};

export default Loader;
