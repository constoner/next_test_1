import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <div className="container p-4 d-flex justify-content-between align-items-center bg-dark-subtle">
        <div>
          <a
            className="d-block link-dark link-opacity-10-hover focus-ring focus-ring-secondary"
            href={"/"}
          >
            <Logo />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
