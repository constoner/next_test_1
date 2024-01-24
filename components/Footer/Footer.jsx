import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contancts";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container p-3 pb-5 d-flex justify-content-between align-items-center bg-dark-subtle">
        <a className="d-block text-decoration-none" href={"/"}>
          <Logo />
        </a>
        <Contacts />
      </div>
    </footer>
  );
};

export default Footer;
