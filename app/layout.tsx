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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        ></link>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/favicon/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        ></meta>
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
