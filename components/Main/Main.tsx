import Navigation from "../Navigation/Navigation";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-grow-1">
      <div className="container h-100 bg-light p-4 pt-5 shadow-lg d-flex flex-column">
        <div className="mb-4">
          <p className="fs-6 mb-2">Навигация по страницам</p>
          <Navigation />
        </div>
        {children}
      </div>
    </main>
  );
};

export default Main;
