import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Next.js test 1"></meta>
        <title>Next.js test 1</title>
      </head>
      <body className="vh-100 position-relative d-flex flex-column">
        <Header />
        <div className="container flex-grow-1 bg-light p-3 pt-5">
          <main>
            <div className="mb-4">
              <Navigation />
            </div>
            {children}
            {modal}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
