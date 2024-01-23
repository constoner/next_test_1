import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Contacts from "../Contacts/Contancts";

const HeaderContent = ({ pagesArray, onButtonClick }) => {
  return (
    <header>
      <div className="container p-3 d-flex justify-content-between align-items-start bg-dark-subtle">
        <div>
          <a className="d-block text-decoration-none mb-3" href={"/"}>
            <Logo />
          </a>
          <Navigation pagesArray={pagesArray} onButtonClick={onButtonClick} />
        </div>
        <Contacts />
      </div>
    </header>
  );
};

export default HeaderContent;
