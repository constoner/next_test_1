const Logo = () => {
  return (
    <div className="d-flex align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="text-dark me-2"
        viewBox="0 0 16 16"
      >
        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z" />
      </svg>
      <span className="h3 text-primary fw-bold m-0 text-dark link-offset-2">
        Лого
      </span>
    </div>
  );
};

export default Logo;
