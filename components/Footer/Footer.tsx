import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container p-4 d-flex justify-content-between bg-dark-subtle">
        <a className="d-block text-decoration-none" href={"/"}>
          <Logo />
        </a>
        <Contacts />
      </div>
    </footer>
  );
};

export default Footer;
