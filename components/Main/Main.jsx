import Navigation from "../Navigation/Navigation";

const Main = ({ children }) => {
  return (
    <div className="container flex-grow-1 bg-light p-4 pt-5 shadow-lg">
      <main>
        <div className="mb-4">
          <Navigation />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Main;
