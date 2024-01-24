import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header/Header";

export default function RootLayout({ children, container }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Next.js test 1"></meta>
        <title>Next.js test 1</title>
      </head>
      <body className="vh-100">
        <Header />
        <div className="container bg-light h-75 p-3 pt-5">
          <main>
            <div>{children}</div>
            <div>{container}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
