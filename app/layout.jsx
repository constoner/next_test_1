import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Next.js test 1"></meta>
        <title>Next.js test 1</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
