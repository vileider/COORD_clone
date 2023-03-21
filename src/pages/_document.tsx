import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./navbar";

export default function Document() {
  return (
    <Html lang='en'>
      <Head> <Navbar /> </Head>
      <body className="dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
