import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

interface layoutInterface {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: layoutInterface) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Next.js test 1"></meta>
        <title>Next.js test 1</title>
      </head>
      <body className="vh-100 position-relative d-flex flex-column">
        <Header />
        <Main>
          {children}
          {modal}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
