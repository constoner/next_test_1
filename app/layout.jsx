import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header/Header";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Next.js test 1"></meta>
        <title>Next.js test 1</title>
      </head>
      <body className="vh-100 position-relative">
        <Header />
        <div className="container bg-light h-75 p-3 pt-5">
          <main>
            {children}
            {modal}
          </main>
        </div>
      </body>
    </html>
  );
}
