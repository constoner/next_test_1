import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";

const Header = () => {
  return (
    <header>
      <div className="container p-4 d-flex justify-content-between align-items-center bg-dark-subtle">
        <div>
          <a className="d-block text-decoration-none" href={"/"}>
            <Logo />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
